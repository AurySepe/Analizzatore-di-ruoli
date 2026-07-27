# Linee Guida per l'Implementazione della Paginazione

Queste linee guida descrivono il pattern standard da seguire nel progetto FitRats per creare API paginate che siano correttamente documentate in Swagger/OpenAPI.

## 1. Definizione del DTO di Risposta
Crea un DTO per rappresentare il singolo elemento della lista. Usa i decoratori di `@nestjs/swagger` per definire i tipi.

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class MyEntityDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
```

## 2. Implementazione nel Service
Il servizio deve ricevere il `QueryPaginationDto` e restituire i dati "grezzi" dal database insieme ai metadati calcolati.

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';
import { QueryPaginationDto } from 'src/commons/pagination/query-pagination.dto';
import { paginate, PaginationOption } from 'src/commons/pagination/pagination';

@Injectable()
export class MyService {
  constructor(private prisma: PrismaService) {}

  async findAll(queryPagination: QueryPaginationDto) {
    const { skip, take } = paginate(queryPagination);

    const [items, total] = await Promise.all([
      this.prisma.myEntity.findMany({ skip, take }),
      this.prisma.myEntity.count(),
    ]);

    // Restituisce un oggetto Pagination<T>
    return PaginationOption(items, total, queryPagination);
  }
}
```

## 3. Implementazione nel Controller
Il controller è responsabile del mapping finale verso il DTO e della documentazione Swagger.

### Punti Chiave:
- Usa `@ApiPaginatedResponse(MyEntityDto)` per informare Swagger che la risposta è una lista paginata di quel tipo.
- Specifica il tipo di ritorno come `Promise<PaginatedDto<MyEntityDto>>`.
- Mappa i dati all'interno del blocco `data`.

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { ApiPaginatedResponse, PaginatedDto } from 'src/commons/pagination/paginated.dto';
import { QueryPaginationDto } from 'src/commons/pagination/query-pagination.dto';
import { MyEntityDto } from './dto/my-entity.dto';

@Controller('my-entity')
export class MyController {
  constructor(private readonly myService: MyService) {}

  @Get()
  @ApiPaginatedResponse(MyEntityDto) // <--- Fondamentale per Swagger
  async findAll(
    @Query() queryPagination: QueryPaginationDto,
  ): Promise<PaginatedDto<MyEntityDto>> {
    const paginatedResult = await this.myService.findAll(queryPagination);

    return {
      data: paginatedResult.data.map((item) => ({
        id: item.id,
        name: item.name,
      })),
      meta: paginatedResult.meta,
    };
  }
}
```

## 4. Perché seguire questo pattern?
1.  **Tipizzazione Forte**: `PaginatedDto<T>` assicura che il client sappia esattamente cosa aspettarsi.
2.  **Swagger Corretto**: Grazie a `@ApiPaginatedResponse`, lo schema visualizzato nel browser non sarà un generico "Object", ma una struttura dettagliata con i campi di `meta` e l'array `data` tipizzato con il tuo DTO.
3.  **Manutenibilità**: Separando il mapping nel controller, il service rimane focalizzato sulla logica di business e sulle query al database.
