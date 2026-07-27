# Linee Guida di Sviluppo TypeScript: DTO, Service e Data Management

Questo documento raccoglie in modo strutturato le linee guida e i pattern su come progettare DTO (Data Transfer Objects), Tipi/Interfacce e Service in applicazioni Node.js e TypeScript. Si basa sui principi di **validazione forte**, **type-safety a tempo di compilazione e di esecuzione**, e **architettura modulare**.

---

## 1. DTO e Contratti Dati (Data Transfer Object)

Il DTO definisce il contratto per i dati in entrata e in uscita da un modulo, script o servizio. Garantisce che i dati scambiati rispetton la struttura prevista e superino i controlli di validazione a runtime.

### Principio dei Contratti Tipizzati
Definisci classi o interfacce chiare per i modelli dati e le opzioni di creazione/aggiornamento. Quando si utilizzano validatori a runtime (es. `class-validator` e `class-transformer`), decorare le proprietà in modo esplicito per garantire la type-safety.

- **Tipi Numerici Specifici**: In TypeScript, interi e float ricadono entrambi sotto il tipo `number`. Assicurati che le regole di validazione specifichino se un numero deve essere intero (es. `@IsInt()`) o generico numerico (es. `@IsNumber()`).
- **Campi Opzionali vs Nullable**:
  - **Campo facoltativo** (il campo può mancare): usa `@IsOptional()` e il modificatore `?:`.
  - **Campo Nullable esplicito** (il campo è presente ma il suo valore può essere `null`): per la validazione runtime con `class-validator`, usa `@ValidateIf((obj, value) => value !== null)`.

```typescript
import { IsNumber, IsInt, IsString, IsOptional, ValidateIf } from 'class-validator';

export class ClienteDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  // Pattern A: Campo facoltativo (può essere undefined, ma se presente deve essere stringa)
  @IsString()
  @IsOptional()
  notes?: string;

  // Pattern B: Campo Nullable esplicito (accetta null oppure stringa)
  @IsString()
  @ValidateIf((object, value) => value !== null)
  description: string | null;
}

// DTO per la creazione di una nuova entità (es. senza l'id autogenerato)
export type CreateClienteInput = Omit<ClienteDto, 'id'>;
```

### Costruttore Standard per la Type-Safety
Ogni DTO basato su classi dovrebbe avere un costruttore che accetta i dati per l'inizializzazione. Questo garantisce che TypeScript possa validare la presenza dei campi obbligatori a tempo di compilazione.

```typescript
import { plainToInstance } from 'class-transformer';

export class ClienteDto {
  id: number;
  name: string;
  notes?: string;
  description: string | null;

  constructor(data: ClienteDto) {
    Object.assign(this, plainToInstance(ClienteDto, data));
  }
}
```

> [!IMPORTANT]
> L'uso di costruttori o factory function evita la presenza di oggetti parziali o malformati nel codice applicativo.

---

## 2. Gestione e Mappatura dei Dati nel Flusso Applicativo

Le funzioni e le componenti applicative ricevono input, invocano il Service/Database ed effettuano la rimappatura del risultato prima di restituirlo o utilizzarlo ulteriormente.

### Rimappatura Esplicita dei Dati (No Data Leak)
I moduli applicativi non devono **MAI** esporre o far circolare direttamente le entità grezze del database (es. gli oggetti restituiti da Prisma) verso altri componenti o moduli esterni. 

Il compito del layer applicativo/orchestratore è di **effettuare manualmente il mapping dei campi** verso il DTO o l'interfaccia concordata in uscita (es. `return { id: result.id, name: result.name }`).

### Validazione Type-Safe e Divieto Assoluto di `any`
Evita assolutamente l'uso del tipo `any` e del casting insicuro (es. `as any` o `as unknown as MyDto`). Ogni variabile, parametro e valore di ritorno deve avere un tipo esplicito e forte.

Se si necessita di mappare e validare una struttura JSON non tipizzata o dinamica (es. proveniente da un DB o da un'API esterna), usa il costruttore del DTO e la funzione `validate` di `class-validator`:

```typescript
import { validate } from 'class-validator';

// 1. Converti il dato JSON grezzo nell'istanza della classe DTO
const myJsonDto = new MyStructuredJsonDto(rawJsonData as MyStructuredJsonDto);

// 2. Valida la struttura in base ai decoratori a runtime
const errors = await validate(myJsonDto);
if (errors.length > 0) {
  throw new Error("Il formato JSON dei dati è corrotto o invalido");
}

// 3. Da questo momento myJsonDto è utilizzabile in modo 100% type-safe
```

### Gestione degli Stati di Valore Mancante (Non-Error State)
Quando una risorsa cercata non viene trovata ma la sua assenza costituisce uno stato **valido e atteso** nel dominio applicativo:
- **Non lanciare eccezioni di errore** se la risorsa semplicemente non è presente.
- Restituisci `null` oppure `undefined` dal Service.
- Incapsula la proprietà nel DTO o nell'interfaccia contrassegnandola come opzionale (`?:`) o `null`.

### Gestione dei Risultati Paginati
Per operazioni su liste di grandi dimensioni, utilizza un'interfaccia generica di paginazione per restituire i dati insieme ai metadati di conteggio e paginazione.

```typescript
export interface PaginatedMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginatedMeta;
}
```

---

## 3. Service e Layer di Persistenza

Il **Service** è il modulo dedicato all'incapsulamento della logica di business e alle interazioni con il database (es. Prisma ORM) o sorgenti dati esterne.

### Regole per i Service:
1. **Isolamento delle Query**: Tutte le operazioni di lettura, scrittura, ricerca e aggiornamento sul database devono risiedere all'interno dei Service.
2. **Paginazione Efficiente**: Quando si calcola una paginazione, esegui sempre la query di recupero dati e la query di conteggio totale in parallelo mediante `Promise.all()`.

### Esempio di Service TypeScript

```typescript
import { PrismaClient } from '@prisma/client';
import { CreateClienteInput, ClienteDto } from './dto/cliente.dto';
import { PaginatedResult } from '../commons/pagination.interface';

export class ClientiService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(coachId: number, dto: CreateClienteInput): Promise<ClienteDto> {
    const rawResult = await this.prisma.cliente.create({
      data: {
        ...dto,
        coach: {
          connect: { id: coachId }
        }
      }
    });

    // Mapping esplicito verso la struttura DTO di uscita
    return new ClienteDto({
      id: rawResult.id,
      name: rawResult.name,
      notes: rawResult.notes ?? undefined,
      description: rawResult.description,
    });
  }

  async findAllPaginated(
    coachId: number, 
    page: number = 1, 
    limit: number = 10
  ): Promise<PaginatedResult<ClienteDto>> {
    const skip = (page - 1) * limit;

    // Esegui la query dei dati e il conteggio totale in parallelo
    const [rawClienti, total] = await Promise.all([
      this.prisma.cliente.findMany({
        where: { coachId },
        skip,
        take: limit,
        orderBy: { id: 'desc' },
      }),
      this.prisma.cliente.count({
        where: { coachId }
      })
    ]);

    const data = rawClienti.map(c => new ClienteDto({
      id: c.id,
      name: c.name,
      notes: c.notes ?? undefined,
      description: c.description,
    }));

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      }
    };
  }
}
```
