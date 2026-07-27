# Linee Guida per Sviluppo di API: DTO, Controller e Service

Questo documento raccoglie in modo strutturato le linee guida e i pattern concordati su come creare i DTO, i Controller e i Service per l'applicazione NestJS. L'appoggio su validazione forte, type-safety ed ereditarietà di Swagger garantisce un'architettura manutenibile.

## 1. DTO (Data Transfer Object)
Il DTO funge sia da schema per validare i dati JSON in entrata, sia da contratto per Swagger e TypeScript in uscita. Dobbiamo basarci sui moduli `class-validator`, `class-transformer` e `@nestjs/swagger`.

### Principio di Ereditarietà di Swagger
Definisci un'unica classe base per l'entità di lettura (es. `ClienteDto` che modella il db per i controlli lato GET) e deriva da essa le classi di scrittura utilizzando le funzioni di utilità di Swagger.

- **`@ApiProperty()`**: È **fondamentale** decorare ogni singolo campo di tutte le classi che vengono restituite da un Controller o usate come parametro di body. Anche classi d'utilità o payload interni come `JwtPayload`, se finiscono per essere l'esplicito tipo di ritorno di una rotta REST (es: `/profile`), devono avere `@ApiProperty()` nei loro campi altrimenti Swagger non saprà definire il loro schema e i loro valori verranno omessi dalla documentazione autogenerata.
- **Tipi Specifici Nascosti**: In TypeScript, interi e float ricadono entrambi sotto il tipo `number`. Per garantire che l'SDK OpenAPI client generato sia corretto e tipizzi ad esempio Id, Anni, indici come `Integer` (e non `Double/Number`), specificalo sempre all'interno del decoratore: `@ApiProperty({ type: 'integer' })`.
- **`OmitType`**: Utile per i CreateDTO quando il DB creerà autonomamente dei campi, come per l'id.

```typescript
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNumber, IsString, IsEnum, IsOptional, ValidateIf } from 'class-validator';

export class ClienteDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  // Pattern A: Campo facoltativo o indefinito (potrebbe mancare nella rotta ma non può essere null):
  // Si usa @IsOptional() e la notazione "?:" in TypeScript.
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  notes?: string;

  // Pattern B: Campo Nullable esplicito (se gli passano null è consentito, altrimenti stringa)
  // Per NestJS e Prisma, IsNullable non è supportato. Usiamo @ValidateIf al suo posto.
  @ApiProperty({ nullable: true })
  @IsString()
  @ValidateIf((object, value) => value !== null)
  description: string | null;
}

// Nel caso della creazione un cliente, estendiamo ma rimuoviamo l'id
export class CreateClienteDto extends OmitType(ClienteDto, ['id'] as const) {}

### Costruttore Standard per la Type-Safety
Ogni DTO **deve** avere un costruttore che accetta un oggetto dello stesso tipo. Questo garantisce che TypeScript possa validare la presenza di tutti i campi obbligatori durante la creazione dell'oggetto (cosa che `plainToInstance` da solo non garantisce a livello di compilazione).

```typescript
import { plainToInstance } from 'class-transformer';

export class ClienteDto {
  // ... campi definiti sopra ...

  constructor(data: ClienteDto) {
    Object.assign(this, plainToInstance(ClienteDto, data));
  }
}
```

> [!IMPORTANT]
> L'uso del costruttore è obbligatorio per evitare l'uso di oggetti parziali o non validati nel codice applicativo.
```


## 2. Controller
I controller gestiscono l'ingresso HTTP, estraggono le informazioni, chiamano il Service, e rimappano programmaticamente il risultato per evitare fughe di informazioni e rispettare alla lettera i DTO.

### Estrazione Tipizzata dell'Utente e Guard
Tutte le estrazioni JWT e controlli autorizzativi non si affidano ad un generico `@Req() req` per avere una reale type-safety.

- Usa la `@UseGuards(AuthGuard)` all'inizio dei Controller protetti.
- Estrai il token di sessione usando il decoratore custom `@CurrentUser() user: JwtPayload` o passa la chiave (es. `@CurrentUser('sub') userId: number`).

### Tipizzazione Obbligatoria del Ritorno
Ogni endpoint REST deve avere **obbligatoriamente un DTO di ENTRATA (se previsto) e un DTO di USCITA**. Per le operazioni di lettura la firma dev'essere `Promise<ModelDto>`, che fungerà da contratto sia per TypeScript sia per Swagger UI.

**REGOLA FONDAMENTALE**: l'endpoint non deve MAI restituire direttamente il valore grezzo uscito da un `Service` (es: le entità Prisma). Il compito del **Controller** è esclusivamente quello di ricevere la richiesta passandola al service, attendere il risultato grezzo dal service, ed **effettuare manualmente il mapping dei campi** verso l'interfaccia DTO concordata in uscita (es. `return { id: result.id, name: result.name }`).

### Validazione Type-Safe e Divieto Assoluto di `any`
Evita assolutamente l'uso del tipo `any` e del casting insicuro come `as any` o `as unknown as MyDto` per coprire le lacune di TypeScript. Non devi *mai* approvare o scrivere codice che usa `any` per saltare la validazione o i controlli del compilatore. Ogni variabile, parametro e ritorno di funzione deve avere un tipo esplicito e forte.

Se hai bisogno di mappare e tipizzare un campo JSON strutturato proveniente da Prisma, usa il costruttore del DTO (che internamente usa `plainToInstance`) seguito dal metodo `validate` (asincrono) di `class-validator`:

```typescript
import { validate } from 'class-validator';

// 1. Converti il raw DB JSON in istanza della classe DTO tramite il costruttore
// Il costruttore garantisce la type-safety durante la creazione
const myJsonDto = new MyStructuredJsonDto(result.jsonField as MyStructuredJsonDto);

// 2. Valida la struttura in base ai decoratori (usa sempre la versione async `validate`)
const errors = await validate(myJsonDto);
if (errors.length > 0) {
    throw new InternalServerErrorException("Il JSON del database è corrotto o invalido");
}

// 3. Ora puoi usare myJsonDto in modo 100% type-safe
```

L'eccezione a questa regola si applica alle azioni (come ad esempio PATCH, POST che innescano assegnazioni o processi) in cui non vengono creati né ottenuti nuovi dati interessanti per il client: in tali casi, l'endpoint **non deve restituire nulla**, esplicitando il tipo di ritorno come `Promise<void>` ed omettendo la rimappatura del dato.

### Gestione degli Stati di Valore Mancante (Non-Error State)
Fai molta attenzione quando una risorsa non viene elaborata o trovata ma la sua assenza è considerata uno stato **valido e atteso** nel dominio dell'applicazione (es. un cliente che non ha ancora un "piano di allenamento attivo"). In questi casi specifici:
- **Non lanciare eccezioni** generiche di errore (come `NotFoundException`) dal Service o dal Controller se la risorsa semplicemente non c'è.
- Restituisci `null` o un valore vuoto dal Service.
- Nel Controller, crea un DTO di risultato che permetta di **esprimere il valore mancante** (es. incapsulando la proprietà con un decoratore `@IsOptional()` o permettendole di essere `undefined`). 
In questo modo il client riceverà un comodo 200 OK e un DTO chiaro, ed eviterà di dover gestire un flusso d'errore HTTP (404) per uno scenario di normale utilizzo.

### Endpoint Paginati (Generic Schema con Swagger)
Quando la rotta fornisce una paginazione, bisogna utilizzare il Custom Decorator `@ApiPaginatedResponse(IlTuoDtoBase)`.

```typescript
import { Controller, Get, Post, Body, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ClienteDto, CreateClienteDto } from './dto/cliente.dto';
import { AuthGuard } from 'src/commons/auth/auth.guard';
import { CurrentUser } from 'src/commons/auth/current-user.decorator';
import { JwtPayload } from 'src/commons/auth/jwt-payload.interface';

import { QueryPaginationDto } from 'src/commons/pagination/query-pagination.dto';
import { PaginatedDto, ApiPaginatedResponse } from 'src/commons/pagination/paginated.dto';

@ApiTags('clienti')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('clienti')
export class ClientiController {
  constructor(private readonly clientiService: ClientiService) {}

  @Post()
  async create(
    @CurrentUser() user: JwtPayload,
    @Body() dto: CreateClienteDto
  ): Promise<ClienteDto> {
    const result = await this.clientiService.create(user.sub, dto);
    
    // Rimappatura esplicita per evitare Data-Leak o discrepanze di tipi Prisma-Controller
    return {
      id: result.id,
      name: result.name,
      notes: result.notes ?? undefined,
      description: result.description,
    };
  }

  // Risposta Paginata Standard
  @Get('paginated')
  @ApiPaginatedResponse(ClienteDto)
  async findAllPaginated(
    @CurrentUser() user: JwtPayload,
    @Query() queryPagination: QueryPaginationDto
  ): Promise<PaginatedDto<ClienteDto>> {
    const paginated = await this.clientiService.findAllPaginated(user.sub, queryPagination);

    return {
      data: paginated.data.map((c) => ({
        id: c.id,
        name: c.name,
        notes: c.notes ?? undefined,
        description: c.description,
      })),
      meta: paginated.meta,
    };
  }
}
```


## 3. Service
Il layer che si occupa di gestire logica e Prisma.

- Inietta `PrismaService` per usare l'ORM, o eventualmente altri moduli come `JwtService`.
- Nella paginazione, invoca utility create in `commons` (come `paginate` e `PaginationOption`). Svolgi i calcoli della query in parallelo ai calcoli del counter totale via `Promise.all()`.

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';

import { CreateClienteDto } from './dto/cliente.dto';
import { QueryPaginationDto } from 'src/commons/pagination/query-pagination.dto';
import { paginate, PaginationOption } from 'src/commons/pagination/pagination';

@Injectable()
export class ClientiService {
  constructor(private readonly prisma: PrismaService) {}

  async create(coachId: number, dto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: {
        ...dto,
        coach: {
          connect: { id: coachId }
        }
      }
    });
  }

  async findAllPaginated(coachId: number, queryPagination: QueryPaginationDto) {
    const { skip, take } = paginate(queryPagination);

    // Usa sempre Promise.all su findAll + count per tempi di risposta ottimizzati
    const [clienti, total] = await Promise.all([
      this.prisma.cliente.findMany({
        where: { coachId },
        skip,
        take,
        orderBy: { id: 'desc' },
      }),
      this.prisma.cliente.count({
        where: { coachId }
      })
    ]);

    // Resituisce la struttura { data: [...], meta: { ... } } richiesta dall'interfaccia Pagination
    return PaginationOption(clienti, total, queryPagination);
  }
}
```
