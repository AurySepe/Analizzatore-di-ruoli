# Linee Guida per Autenticazione e Gestione Ruoli (AuthGuard)

In questo progetto NestJS, l'autenticazione tramite JWT e la gestione dei ruoli (Role-Based Access Control) sono gestite contemporaneamente da un'unica guardia (Guard) dinamica, denominata `AuthGuard`.

Di seguito viene spiegato il suo funzionamento e come applicarla ai Controller o alle singole rotte HTTP.

## 1. Come è strutturata la AuthGuard

L'`AuthGuard` non è una semplice classe statica, ma una **Factory Function** che restituisce una classe Mixin. Questo pattern permette di passare un parametro (il `Role`) alla Guardia direttamente al momento dell'utilizzo nel decoratore `@UseGuards()`.

La guardia esegue i seguenti controlli in cascata:
1. Estrae il token JWT dall'header della richiesta (`Authorization: Bearer <token>`).
2. Verifica la firma del token usando `JwtService` e `ConfigService`.
3. Valida il payload del token tramite `class-validator` (assicurandosi che la struttura e i tipi siano corretti rispetto a `JwtPayload`).
4. Inietta l'oggetto del payload validato in `request['user']` in modo che possa essere recuperato nei controller tramite il decoratore `@CurrentUser()`.
5. **Se è stato specificato un ruolo**, verifica che il ruolo dell'utente (`user.role`) corrisponda al ruolo richiesto. In caso contrario, lancia un `UnauthorizedException`.

## 2. Utilizzo Pratico nei Controller

### A. Protezione Semplice (Solo Autenticazione)
Se vuoi semplicemente assicurarti che un utente sia loggato (indipendentemente dal ruolo che possiede), puoi richiamare la memoria senza passarle parametri.

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/commons/auth/auth.guard';
import { CurrentUser } from 'src/commons/auth/current-user.decorator';
import { JwtPayload } from 'src/commons/auth/jwt-payload.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard()) // Invoca AuthGuard come funzione senza parametri
@Controller('profile')
export class ProfileController {

  @Get()
  getProfile(@CurrentUser() user: JwtPayload) {
    // A questo punto siamo sicuri che il token sia valido
    return user;
  }
}
```

### B. Protezione con Verifica del Ruolo (Autorizzazione)
Per limitare l'accesso a un endpoint o a intero Controller solo ad uno specifico ruolo, puoi passare la stringa del ruolo ad `AuthGuard()`.
*(Assicurati che il ruolo esista nell'enum `Role` tipizzato nel progetto)*.

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/commons/auth/auth.guard';
import { CurrentUser } from 'src/commons/auth/current-user.decorator';
import { JwtPayload } from 'src/commons/auth/jwt-payload.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
// Protegge l'intero controller solo per gli utenti con ruolo 'coach'
@UseGuards(AuthGuard('admin')) 
@Controller('clients')
export class ClientsController {

  @Get()
  getAllClients(@CurrentUser() user: JwtPayload) {
    // Solo un Coach autenticato può arrivare qui.
    return "Dati riservati ai coach";
  }
}
```

### C. Protezione Ibrida (Controller parzialmente libero)
Se alcune rotte di un Controller devono essere pubbliche o avere ruoli diversi, applica `@UseGuards()` ai singoli handler di rotta anziché sull'intera classe.

```typescript
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/commons/auth/auth.guard';

@Controller('mixed')
export class MixedController {

  // Questo endpoint è pubblico
  @Get('public')
  getPublic() {
    return "Informazioni pubbliche";
  }

  // Questo endpoint richiede solo l'autenticazione (nessun ruolo specifico)
  @Get('auth-only')
  @UseGuards(AuthGuard())
  getAuthOnly() {
    return "Devi essere loggato";
  }

  // Questo endpoint è riservato ai Clienti
  @Post('client-data')
  @UseGuards(AuthGuard('user'))
  postClientData() {
    return "Azione eseguita dal cliente";
  }
}
```

## 3. Best Practices
1. **ApiBearerAuth**: Apponi sempre il decoratore `@ApiBearerAuth()` assieme a `@UseGuards(...)` per notificare Swagger che quell'endpoint ha bisogno del token JWT per essere testato dall'interfaccia UI.
2. **Current User Extraction**: Affidati sempre e solo a `@CurrentUser()` per prelevare il sub (ID utente) o altri metadati di sessione. Questo garantisce precisione nei tipi ed evita la manipolazione diretta dell'oggetto di Express o Fastify.
3. **Guard Dinamico**: Siccome `AuthGuard` restituisce una classe Type<CanActivate> istanziata on-the-fly, assicurati di scrivere **`@UseGuards(AuthGuard('ruolo'))`** oppure **`@UseGuards(AuthGuard())`** (con le parentesi tonde invocatrici). Non scrivere MAI `@UseGuards(AuthGuard)`.
