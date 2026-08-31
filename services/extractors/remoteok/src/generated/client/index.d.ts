
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RemoteokScrapedJob
 * 
 */
export type RemoteokScrapedJob = $Result.DefaultSelection<Prisma.$RemoteokScrapedJobPayload>
/**
 * Model RemoteokSyncState
 * 
 */
export type RemoteokSyncState = $Result.DefaultSelection<Prisma.$RemoteokSyncStatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OutboxStatus: {
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

export type OutboxStatus = (typeof OutboxStatus)[keyof typeof OutboxStatus]

}

export type OutboxStatus = $Enums.OutboxStatus

export const OutboxStatus: typeof $Enums.OutboxStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more RemoteokScrapedJobs
 * const remoteokScrapedJobs = await prisma.remoteokScrapedJob.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more RemoteokScrapedJobs
   * const remoteokScrapedJobs = await prisma.remoteokScrapedJob.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.remoteokScrapedJob`: Exposes CRUD operations for the **RemoteokScrapedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemoteokScrapedJobs
    * const remoteokScrapedJobs = await prisma.remoteokScrapedJob.findMany()
    * ```
    */
  get remoteokScrapedJob(): Prisma.RemoteokScrapedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remoteokSyncState`: Exposes CRUD operations for the **RemoteokSyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemoteokSyncStates
    * const remoteokSyncStates = await prisma.remoteokSyncState.findMany()
    * ```
    */
  get remoteokSyncState(): Prisma.RemoteokSyncStateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RemoteokScrapedJob: 'RemoteokScrapedJob',
    RemoteokSyncState: 'RemoteokSyncState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "remoteokScrapedJob" | "remoteokSyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RemoteokScrapedJob: {
        payload: Prisma.$RemoteokScrapedJobPayload<ExtArgs>
        fields: Prisma.RemoteokScrapedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemoteokScrapedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemoteokScrapedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>
          }
          findFirst: {
            args: Prisma.RemoteokScrapedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemoteokScrapedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>
          }
          findMany: {
            args: Prisma.RemoteokScrapedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>[]
          }
          create: {
            args: Prisma.RemoteokScrapedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>
          }
          createMany: {
            args: Prisma.RemoteokScrapedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemoteokScrapedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>[]
          }
          delete: {
            args: Prisma.RemoteokScrapedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>
          }
          update: {
            args: Prisma.RemoteokScrapedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>
          }
          deleteMany: {
            args: Prisma.RemoteokScrapedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemoteokScrapedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemoteokScrapedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>[]
          }
          upsert: {
            args: Prisma.RemoteokScrapedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokScrapedJobPayload>
          }
          aggregate: {
            args: Prisma.RemoteokScrapedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemoteokScrapedJob>
          }
          groupBy: {
            args: Prisma.RemoteokScrapedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemoteokScrapedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemoteokScrapedJobCountArgs<ExtArgs>
            result: $Utils.Optional<RemoteokScrapedJobCountAggregateOutputType> | number
          }
        }
      }
      RemoteokSyncState: {
        payload: Prisma.$RemoteokSyncStatePayload<ExtArgs>
        fields: Prisma.RemoteokSyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemoteokSyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemoteokSyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>
          }
          findFirst: {
            args: Prisma.RemoteokSyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemoteokSyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>
          }
          findMany: {
            args: Prisma.RemoteokSyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>[]
          }
          create: {
            args: Prisma.RemoteokSyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>
          }
          createMany: {
            args: Prisma.RemoteokSyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemoteokSyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>[]
          }
          delete: {
            args: Prisma.RemoteokSyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>
          }
          update: {
            args: Prisma.RemoteokSyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>
          }
          deleteMany: {
            args: Prisma.RemoteokSyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemoteokSyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemoteokSyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>[]
          }
          upsert: {
            args: Prisma.RemoteokSyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemoteokSyncStatePayload>
          }
          aggregate: {
            args: Prisma.RemoteokSyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemoteokSyncState>
          }
          groupBy: {
            args: Prisma.RemoteokSyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemoteokSyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemoteokSyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<RemoteokSyncStateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    remoteokScrapedJob?: RemoteokScrapedJobOmit
    remoteokSyncState?: RemoteokSyncStateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model RemoteokScrapedJob
   */

  export type AggregateRemoteokScrapedJob = {
    _count: RemoteokScrapedJobCountAggregateOutputType | null
    _avg: RemoteokScrapedJobAvgAggregateOutputType | null
    _sum: RemoteokScrapedJobSumAggregateOutputType | null
    _min: RemoteokScrapedJobMinAggregateOutputType | null
    _max: RemoteokScrapedJobMaxAggregateOutputType | null
  }

  export type RemoteokScrapedJobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type RemoteokScrapedJobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type RemoteokScrapedJobMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    url: string | null
    slug: string | null
    title: string | null
    companyName: string | null
    location: string | null
    remoteType: string | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    contractType: string | null
    rawDescription: string | null
    descriptionMarkdown: string | null
    datePosted: Date | null
    tags: string | null
    outboxStatus: $Enums.OutboxStatus | null
    publishedAt: Date | null
    retryCount: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemoteokScrapedJobMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    url: string | null
    slug: string | null
    title: string | null
    companyName: string | null
    location: string | null
    remoteType: string | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    contractType: string | null
    rawDescription: string | null
    descriptionMarkdown: string | null
    datePosted: Date | null
    tags: string | null
    outboxStatus: $Enums.OutboxStatus | null
    publishedAt: Date | null
    retryCount: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemoteokScrapedJobCountAggregateOutputType = {
    id: number
    externalId: number
    url: number
    slug: number
    title: number
    companyName: number
    location: number
    remoteType: number
    salaryMin: number
    salaryMax: number
    currency: number
    contractType: number
    rawDescription: number
    descriptionMarkdown: number
    datePosted: number
    tags: number
    outboxStatus: number
    publishedAt: number
    retryCount: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemoteokScrapedJobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type RemoteokScrapedJobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type RemoteokScrapedJobMinAggregateInputType = {
    id?: true
    externalId?: true
    url?: true
    slug?: true
    title?: true
    companyName?: true
    location?: true
    remoteType?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    contractType?: true
    rawDescription?: true
    descriptionMarkdown?: true
    datePosted?: true
    tags?: true
    outboxStatus?: true
    publishedAt?: true
    retryCount?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemoteokScrapedJobMaxAggregateInputType = {
    id?: true
    externalId?: true
    url?: true
    slug?: true
    title?: true
    companyName?: true
    location?: true
    remoteType?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    contractType?: true
    rawDescription?: true
    descriptionMarkdown?: true
    datePosted?: true
    tags?: true
    outboxStatus?: true
    publishedAt?: true
    retryCount?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemoteokScrapedJobCountAggregateInputType = {
    id?: true
    externalId?: true
    url?: true
    slug?: true
    title?: true
    companyName?: true
    location?: true
    remoteType?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    contractType?: true
    rawDescription?: true
    descriptionMarkdown?: true
    datePosted?: true
    tags?: true
    outboxStatus?: true
    publishedAt?: true
    retryCount?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemoteokScrapedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemoteokScrapedJob to aggregate.
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokScrapedJobs to fetch.
     */
    orderBy?: RemoteokScrapedJobOrderByWithRelationInput | RemoteokScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemoteokScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemoteokScrapedJobs
    **/
    _count?: true | RemoteokScrapedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemoteokScrapedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemoteokScrapedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemoteokScrapedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemoteokScrapedJobMaxAggregateInputType
  }

  export type GetRemoteokScrapedJobAggregateType<T extends RemoteokScrapedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateRemoteokScrapedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemoteokScrapedJob[P]>
      : GetScalarType<T[P], AggregateRemoteokScrapedJob[P]>
  }




  export type RemoteokScrapedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemoteokScrapedJobWhereInput
    orderBy?: RemoteokScrapedJobOrderByWithAggregationInput | RemoteokScrapedJobOrderByWithAggregationInput[]
    by: RemoteokScrapedJobScalarFieldEnum[] | RemoteokScrapedJobScalarFieldEnum
    having?: RemoteokScrapedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemoteokScrapedJobCountAggregateInputType | true
    _avg?: RemoteokScrapedJobAvgAggregateInputType
    _sum?: RemoteokScrapedJobSumAggregateInputType
    _min?: RemoteokScrapedJobMinAggregateInputType
    _max?: RemoteokScrapedJobMaxAggregateInputType
  }

  export type RemoteokScrapedJobGroupByOutputType = {
    id: string
    externalId: string
    url: string
    slug: string | null
    title: string
    companyName: string
    location: string | null
    remoteType: string | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    contractType: string | null
    rawDescription: string
    descriptionMarkdown: string | null
    datePosted: Date | null
    tags: string | null
    outboxStatus: $Enums.OutboxStatus
    publishedAt: Date | null
    retryCount: number
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: RemoteokScrapedJobCountAggregateOutputType | null
    _avg: RemoteokScrapedJobAvgAggregateOutputType | null
    _sum: RemoteokScrapedJobSumAggregateOutputType | null
    _min: RemoteokScrapedJobMinAggregateOutputType | null
    _max: RemoteokScrapedJobMaxAggregateOutputType | null
  }

  type GetRemoteokScrapedJobGroupByPayload<T extends RemoteokScrapedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemoteokScrapedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemoteokScrapedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemoteokScrapedJobGroupByOutputType[P]>
            : GetScalarType<T[P], RemoteokScrapedJobGroupByOutputType[P]>
        }
      >
    >


  export type RemoteokScrapedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    url?: boolean
    slug?: boolean
    title?: boolean
    companyName?: boolean
    location?: boolean
    remoteType?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    tags?: boolean
    outboxStatus?: boolean
    publishedAt?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remoteokScrapedJob"]>

  export type RemoteokScrapedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    url?: boolean
    slug?: boolean
    title?: boolean
    companyName?: boolean
    location?: boolean
    remoteType?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    tags?: boolean
    outboxStatus?: boolean
    publishedAt?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remoteokScrapedJob"]>

  export type RemoteokScrapedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    url?: boolean
    slug?: boolean
    title?: boolean
    companyName?: boolean
    location?: boolean
    remoteType?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    tags?: boolean
    outboxStatus?: boolean
    publishedAt?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remoteokScrapedJob"]>

  export type RemoteokScrapedJobSelectScalar = {
    id?: boolean
    externalId?: boolean
    url?: boolean
    slug?: boolean
    title?: boolean
    companyName?: boolean
    location?: boolean
    remoteType?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    tags?: boolean
    outboxStatus?: boolean
    publishedAt?: boolean
    retryCount?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemoteokScrapedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "url" | "slug" | "title" | "companyName" | "location" | "remoteType" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "tags" | "outboxStatus" | "publishedAt" | "retryCount" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["remoteokScrapedJob"]>

  export type $RemoteokScrapedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemoteokScrapedJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      url: string
      slug: string | null
      title: string
      companyName: string
      location: string | null
      remoteType: string | null
      salaryMin: number | null
      salaryMax: number | null
      currency: string | null
      contractType: string | null
      rawDescription: string
      descriptionMarkdown: string | null
      datePosted: Date | null
      tags: string | null
      outboxStatus: $Enums.OutboxStatus
      publishedAt: Date | null
      retryCount: number
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["remoteokScrapedJob"]>
    composites: {}
  }

  type RemoteokScrapedJobGetPayload<S extends boolean | null | undefined | RemoteokScrapedJobDefaultArgs> = $Result.GetResult<Prisma.$RemoteokScrapedJobPayload, S>

  type RemoteokScrapedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemoteokScrapedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemoteokScrapedJobCountAggregateInputType | true
    }

  export interface RemoteokScrapedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemoteokScrapedJob'], meta: { name: 'RemoteokScrapedJob' } }
    /**
     * Find zero or one RemoteokScrapedJob that matches the filter.
     * @param {RemoteokScrapedJobFindUniqueArgs} args - Arguments to find a RemoteokScrapedJob
     * @example
     * // Get one RemoteokScrapedJob
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemoteokScrapedJobFindUniqueArgs>(args: SelectSubset<T, RemoteokScrapedJobFindUniqueArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemoteokScrapedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemoteokScrapedJobFindUniqueOrThrowArgs} args - Arguments to find a RemoteokScrapedJob
     * @example
     * // Get one RemoteokScrapedJob
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemoteokScrapedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, RemoteokScrapedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemoteokScrapedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobFindFirstArgs} args - Arguments to find a RemoteokScrapedJob
     * @example
     * // Get one RemoteokScrapedJob
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemoteokScrapedJobFindFirstArgs>(args?: SelectSubset<T, RemoteokScrapedJobFindFirstArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemoteokScrapedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobFindFirstOrThrowArgs} args - Arguments to find a RemoteokScrapedJob
     * @example
     * // Get one RemoteokScrapedJob
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemoteokScrapedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, RemoteokScrapedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemoteokScrapedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemoteokScrapedJobs
     * const remoteokScrapedJobs = await prisma.remoteokScrapedJob.findMany()
     * 
     * // Get first 10 RemoteokScrapedJobs
     * const remoteokScrapedJobs = await prisma.remoteokScrapedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remoteokScrapedJobWithIdOnly = await prisma.remoteokScrapedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemoteokScrapedJobFindManyArgs>(args?: SelectSubset<T, RemoteokScrapedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemoteokScrapedJob.
     * @param {RemoteokScrapedJobCreateArgs} args - Arguments to create a RemoteokScrapedJob.
     * @example
     * // Create one RemoteokScrapedJob
     * const RemoteokScrapedJob = await prisma.remoteokScrapedJob.create({
     *   data: {
     *     // ... data to create a RemoteokScrapedJob
     *   }
     * })
     * 
     */
    create<T extends RemoteokScrapedJobCreateArgs>(args: SelectSubset<T, RemoteokScrapedJobCreateArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemoteokScrapedJobs.
     * @param {RemoteokScrapedJobCreateManyArgs} args - Arguments to create many RemoteokScrapedJobs.
     * @example
     * // Create many RemoteokScrapedJobs
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemoteokScrapedJobCreateManyArgs>(args?: SelectSubset<T, RemoteokScrapedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemoteokScrapedJobs and returns the data saved in the database.
     * @param {RemoteokScrapedJobCreateManyAndReturnArgs} args - Arguments to create many RemoteokScrapedJobs.
     * @example
     * // Create many RemoteokScrapedJobs
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemoteokScrapedJobs and only return the `id`
     * const remoteokScrapedJobWithIdOnly = await prisma.remoteokScrapedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemoteokScrapedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, RemoteokScrapedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemoteokScrapedJob.
     * @param {RemoteokScrapedJobDeleteArgs} args - Arguments to delete one RemoteokScrapedJob.
     * @example
     * // Delete one RemoteokScrapedJob
     * const RemoteokScrapedJob = await prisma.remoteokScrapedJob.delete({
     *   where: {
     *     // ... filter to delete one RemoteokScrapedJob
     *   }
     * })
     * 
     */
    delete<T extends RemoteokScrapedJobDeleteArgs>(args: SelectSubset<T, RemoteokScrapedJobDeleteArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemoteokScrapedJob.
     * @param {RemoteokScrapedJobUpdateArgs} args - Arguments to update one RemoteokScrapedJob.
     * @example
     * // Update one RemoteokScrapedJob
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemoteokScrapedJobUpdateArgs>(args: SelectSubset<T, RemoteokScrapedJobUpdateArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemoteokScrapedJobs.
     * @param {RemoteokScrapedJobDeleteManyArgs} args - Arguments to filter RemoteokScrapedJobs to delete.
     * @example
     * // Delete a few RemoteokScrapedJobs
     * const { count } = await prisma.remoteokScrapedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemoteokScrapedJobDeleteManyArgs>(args?: SelectSubset<T, RemoteokScrapedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemoteokScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemoteokScrapedJobs
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemoteokScrapedJobUpdateManyArgs>(args: SelectSubset<T, RemoteokScrapedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemoteokScrapedJobs and returns the data updated in the database.
     * @param {RemoteokScrapedJobUpdateManyAndReturnArgs} args - Arguments to update many RemoteokScrapedJobs.
     * @example
     * // Update many RemoteokScrapedJobs
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemoteokScrapedJobs and only return the `id`
     * const remoteokScrapedJobWithIdOnly = await prisma.remoteokScrapedJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemoteokScrapedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, RemoteokScrapedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemoteokScrapedJob.
     * @param {RemoteokScrapedJobUpsertArgs} args - Arguments to update or create a RemoteokScrapedJob.
     * @example
     * // Update or create a RemoteokScrapedJob
     * const remoteokScrapedJob = await prisma.remoteokScrapedJob.upsert({
     *   create: {
     *     // ... data to create a RemoteokScrapedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemoteokScrapedJob we want to update
     *   }
     * })
     */
    upsert<T extends RemoteokScrapedJobUpsertArgs>(args: SelectSubset<T, RemoteokScrapedJobUpsertArgs<ExtArgs>>): Prisma__RemoteokScrapedJobClient<$Result.GetResult<Prisma.$RemoteokScrapedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemoteokScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobCountArgs} args - Arguments to filter RemoteokScrapedJobs to count.
     * @example
     * // Count the number of RemoteokScrapedJobs
     * const count = await prisma.remoteokScrapedJob.count({
     *   where: {
     *     // ... the filter for the RemoteokScrapedJobs we want to count
     *   }
     * })
    **/
    count<T extends RemoteokScrapedJobCountArgs>(
      args?: Subset<T, RemoteokScrapedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemoteokScrapedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemoteokScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RemoteokScrapedJobAggregateArgs>(args: Subset<T, RemoteokScrapedJobAggregateArgs>): Prisma.PrismaPromise<GetRemoteokScrapedJobAggregateType<T>>

    /**
     * Group by RemoteokScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokScrapedJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RemoteokScrapedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemoteokScrapedJobGroupByArgs['orderBy'] }
        : { orderBy?: RemoteokScrapedJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RemoteokScrapedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemoteokScrapedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemoteokScrapedJob model
   */
  readonly fields: RemoteokScrapedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemoteokScrapedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemoteokScrapedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RemoteokScrapedJob model
   */
  interface RemoteokScrapedJobFieldRefs {
    readonly id: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly externalId: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly url: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly slug: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly title: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly companyName: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly location: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly remoteType: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly salaryMin: FieldRef<"RemoteokScrapedJob", 'Float'>
    readonly salaryMax: FieldRef<"RemoteokScrapedJob", 'Float'>
    readonly currency: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly contractType: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly rawDescription: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly descriptionMarkdown: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly datePosted: FieldRef<"RemoteokScrapedJob", 'DateTime'>
    readonly tags: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly outboxStatus: FieldRef<"RemoteokScrapedJob", 'OutboxStatus'>
    readonly publishedAt: FieldRef<"RemoteokScrapedJob", 'DateTime'>
    readonly retryCount: FieldRef<"RemoteokScrapedJob", 'Int'>
    readonly lastError: FieldRef<"RemoteokScrapedJob", 'String'>
    readonly createdAt: FieldRef<"RemoteokScrapedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"RemoteokScrapedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RemoteokScrapedJob findUnique
   */
  export type RemoteokScrapedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokScrapedJob to fetch.
     */
    where: RemoteokScrapedJobWhereUniqueInput
  }

  /**
   * RemoteokScrapedJob findUniqueOrThrow
   */
  export type RemoteokScrapedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokScrapedJob to fetch.
     */
    where: RemoteokScrapedJobWhereUniqueInput
  }

  /**
   * RemoteokScrapedJob findFirst
   */
  export type RemoteokScrapedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokScrapedJob to fetch.
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokScrapedJobs to fetch.
     */
    orderBy?: RemoteokScrapedJobOrderByWithRelationInput | RemoteokScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemoteokScrapedJobs.
     */
    cursor?: RemoteokScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemoteokScrapedJobs.
     */
    distinct?: RemoteokScrapedJobScalarFieldEnum | RemoteokScrapedJobScalarFieldEnum[]
  }

  /**
   * RemoteokScrapedJob findFirstOrThrow
   */
  export type RemoteokScrapedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokScrapedJob to fetch.
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokScrapedJobs to fetch.
     */
    orderBy?: RemoteokScrapedJobOrderByWithRelationInput | RemoteokScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemoteokScrapedJobs.
     */
    cursor?: RemoteokScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemoteokScrapedJobs.
     */
    distinct?: RemoteokScrapedJobScalarFieldEnum | RemoteokScrapedJobScalarFieldEnum[]
  }

  /**
   * RemoteokScrapedJob findMany
   */
  export type RemoteokScrapedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokScrapedJobs to fetch.
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokScrapedJobs to fetch.
     */
    orderBy?: RemoteokScrapedJobOrderByWithRelationInput | RemoteokScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemoteokScrapedJobs.
     */
    cursor?: RemoteokScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemoteokScrapedJobs.
     */
    distinct?: RemoteokScrapedJobScalarFieldEnum | RemoteokScrapedJobScalarFieldEnum[]
  }

  /**
   * RemoteokScrapedJob create
   */
  export type RemoteokScrapedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to create a RemoteokScrapedJob.
     */
    data: XOR<RemoteokScrapedJobCreateInput, RemoteokScrapedJobUncheckedCreateInput>
  }

  /**
   * RemoteokScrapedJob createMany
   */
  export type RemoteokScrapedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemoteokScrapedJobs.
     */
    data: RemoteokScrapedJobCreateManyInput | RemoteokScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemoteokScrapedJob createManyAndReturn
   */
  export type RemoteokScrapedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to create many RemoteokScrapedJobs.
     */
    data: RemoteokScrapedJobCreateManyInput | RemoteokScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemoteokScrapedJob update
   */
  export type RemoteokScrapedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to update a RemoteokScrapedJob.
     */
    data: XOR<RemoteokScrapedJobUpdateInput, RemoteokScrapedJobUncheckedUpdateInput>
    /**
     * Choose, which RemoteokScrapedJob to update.
     */
    where: RemoteokScrapedJobWhereUniqueInput
  }

  /**
   * RemoteokScrapedJob updateMany
   */
  export type RemoteokScrapedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemoteokScrapedJobs.
     */
    data: XOR<RemoteokScrapedJobUpdateManyMutationInput, RemoteokScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which RemoteokScrapedJobs to update
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * Limit how many RemoteokScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * RemoteokScrapedJob updateManyAndReturn
   */
  export type RemoteokScrapedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to update RemoteokScrapedJobs.
     */
    data: XOR<RemoteokScrapedJobUpdateManyMutationInput, RemoteokScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which RemoteokScrapedJobs to update
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * Limit how many RemoteokScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * RemoteokScrapedJob upsert
   */
  export type RemoteokScrapedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * The filter to search for the RemoteokScrapedJob to update in case it exists.
     */
    where: RemoteokScrapedJobWhereUniqueInput
    /**
     * In case the RemoteokScrapedJob found by the `where` argument doesn't exist, create a new RemoteokScrapedJob with this data.
     */
    create: XOR<RemoteokScrapedJobCreateInput, RemoteokScrapedJobUncheckedCreateInput>
    /**
     * In case the RemoteokScrapedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemoteokScrapedJobUpdateInput, RemoteokScrapedJobUncheckedUpdateInput>
  }

  /**
   * RemoteokScrapedJob delete
   */
  export type RemoteokScrapedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
    /**
     * Filter which RemoteokScrapedJob to delete.
     */
    where: RemoteokScrapedJobWhereUniqueInput
  }

  /**
   * RemoteokScrapedJob deleteMany
   */
  export type RemoteokScrapedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemoteokScrapedJobs to delete
     */
    where?: RemoteokScrapedJobWhereInput
    /**
     * Limit how many RemoteokScrapedJobs to delete.
     */
    limit?: number
  }

  /**
   * RemoteokScrapedJob without action
   */
  export type RemoteokScrapedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokScrapedJob
     */
    select?: RemoteokScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokScrapedJob
     */
    omit?: RemoteokScrapedJobOmit<ExtArgs> | null
  }


  /**
   * Model RemoteokSyncState
   */

  export type AggregateRemoteokSyncState = {
    _count: RemoteokSyncStateCountAggregateOutputType | null
    _avg: RemoteokSyncStateAvgAggregateOutputType | null
    _sum: RemoteokSyncStateSumAggregateOutputType | null
    _min: RemoteokSyncStateMinAggregateOutputType | null
    _max: RemoteokSyncStateMaxAggregateOutputType | null
  }

  export type RemoteokSyncStateAvgAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type RemoteokSyncStateSumAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type RemoteokSyncStateMinAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemoteokSyncStateMaxAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemoteokSyncStateCountAggregateOutputType = {
    id: number
    source: number
    lastSyncAt: number
    lastSuccessfulSyncAt: number
    itemsExtracted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemoteokSyncStateAvgAggregateInputType = {
    itemsExtracted?: true
  }

  export type RemoteokSyncStateSumAggregateInputType = {
    itemsExtracted?: true
  }

  export type RemoteokSyncStateMinAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemoteokSyncStateMaxAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemoteokSyncStateCountAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemoteokSyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemoteokSyncState to aggregate.
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokSyncStates to fetch.
     */
    orderBy?: RemoteokSyncStateOrderByWithRelationInput | RemoteokSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemoteokSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemoteokSyncStates
    **/
    _count?: true | RemoteokSyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemoteokSyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemoteokSyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemoteokSyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemoteokSyncStateMaxAggregateInputType
  }

  export type GetRemoteokSyncStateAggregateType<T extends RemoteokSyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateRemoteokSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemoteokSyncState[P]>
      : GetScalarType<T[P], AggregateRemoteokSyncState[P]>
  }




  export type RemoteokSyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemoteokSyncStateWhereInput
    orderBy?: RemoteokSyncStateOrderByWithAggregationInput | RemoteokSyncStateOrderByWithAggregationInput[]
    by: RemoteokSyncStateScalarFieldEnum[] | RemoteokSyncStateScalarFieldEnum
    having?: RemoteokSyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemoteokSyncStateCountAggregateInputType | true
    _avg?: RemoteokSyncStateAvgAggregateInputType
    _sum?: RemoteokSyncStateSumAggregateInputType
    _min?: RemoteokSyncStateMinAggregateInputType
    _max?: RemoteokSyncStateMaxAggregateInputType
  }

  export type RemoteokSyncStateGroupByOutputType = {
    id: string
    source: string
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number
    createdAt: Date
    updatedAt: Date
    _count: RemoteokSyncStateCountAggregateOutputType | null
    _avg: RemoteokSyncStateAvgAggregateOutputType | null
    _sum: RemoteokSyncStateSumAggregateOutputType | null
    _min: RemoteokSyncStateMinAggregateOutputType | null
    _max: RemoteokSyncStateMaxAggregateOutputType | null
  }

  type GetRemoteokSyncStateGroupByPayload<T extends RemoteokSyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemoteokSyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemoteokSyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemoteokSyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], RemoteokSyncStateGroupByOutputType[P]>
        }
      >
    >


  export type RemoteokSyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remoteokSyncState"]>

  export type RemoteokSyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remoteokSyncState"]>

  export type RemoteokSyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remoteokSyncState"]>

  export type RemoteokSyncStateSelectScalar = {
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemoteokSyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "lastSyncAt" | "lastSuccessfulSyncAt" | "itemsExtracted" | "createdAt" | "updatedAt", ExtArgs["result"]["remoteokSyncState"]>

  export type $RemoteokSyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemoteokSyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      lastSyncAt: Date | null
      lastSuccessfulSyncAt: Date | null
      itemsExtracted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["remoteokSyncState"]>
    composites: {}
  }

  type RemoteokSyncStateGetPayload<S extends boolean | null | undefined | RemoteokSyncStateDefaultArgs> = $Result.GetResult<Prisma.$RemoteokSyncStatePayload, S>

  type RemoteokSyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemoteokSyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemoteokSyncStateCountAggregateInputType | true
    }

  export interface RemoteokSyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemoteokSyncState'], meta: { name: 'RemoteokSyncState' } }
    /**
     * Find zero or one RemoteokSyncState that matches the filter.
     * @param {RemoteokSyncStateFindUniqueArgs} args - Arguments to find a RemoteokSyncState
     * @example
     * // Get one RemoteokSyncState
     * const remoteokSyncState = await prisma.remoteokSyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemoteokSyncStateFindUniqueArgs>(args: SelectSubset<T, RemoteokSyncStateFindUniqueArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemoteokSyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemoteokSyncStateFindUniqueOrThrowArgs} args - Arguments to find a RemoteokSyncState
     * @example
     * // Get one RemoteokSyncState
     * const remoteokSyncState = await prisma.remoteokSyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemoteokSyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, RemoteokSyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemoteokSyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateFindFirstArgs} args - Arguments to find a RemoteokSyncState
     * @example
     * // Get one RemoteokSyncState
     * const remoteokSyncState = await prisma.remoteokSyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemoteokSyncStateFindFirstArgs>(args?: SelectSubset<T, RemoteokSyncStateFindFirstArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemoteokSyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateFindFirstOrThrowArgs} args - Arguments to find a RemoteokSyncState
     * @example
     * // Get one RemoteokSyncState
     * const remoteokSyncState = await prisma.remoteokSyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemoteokSyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, RemoteokSyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemoteokSyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemoteokSyncStates
     * const remoteokSyncStates = await prisma.remoteokSyncState.findMany()
     * 
     * // Get first 10 RemoteokSyncStates
     * const remoteokSyncStates = await prisma.remoteokSyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remoteokSyncStateWithIdOnly = await prisma.remoteokSyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemoteokSyncStateFindManyArgs>(args?: SelectSubset<T, RemoteokSyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemoteokSyncState.
     * @param {RemoteokSyncStateCreateArgs} args - Arguments to create a RemoteokSyncState.
     * @example
     * // Create one RemoteokSyncState
     * const RemoteokSyncState = await prisma.remoteokSyncState.create({
     *   data: {
     *     // ... data to create a RemoteokSyncState
     *   }
     * })
     * 
     */
    create<T extends RemoteokSyncStateCreateArgs>(args: SelectSubset<T, RemoteokSyncStateCreateArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemoteokSyncStates.
     * @param {RemoteokSyncStateCreateManyArgs} args - Arguments to create many RemoteokSyncStates.
     * @example
     * // Create many RemoteokSyncStates
     * const remoteokSyncState = await prisma.remoteokSyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemoteokSyncStateCreateManyArgs>(args?: SelectSubset<T, RemoteokSyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemoteokSyncStates and returns the data saved in the database.
     * @param {RemoteokSyncStateCreateManyAndReturnArgs} args - Arguments to create many RemoteokSyncStates.
     * @example
     * // Create many RemoteokSyncStates
     * const remoteokSyncState = await prisma.remoteokSyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemoteokSyncStates and only return the `id`
     * const remoteokSyncStateWithIdOnly = await prisma.remoteokSyncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemoteokSyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, RemoteokSyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemoteokSyncState.
     * @param {RemoteokSyncStateDeleteArgs} args - Arguments to delete one RemoteokSyncState.
     * @example
     * // Delete one RemoteokSyncState
     * const RemoteokSyncState = await prisma.remoteokSyncState.delete({
     *   where: {
     *     // ... filter to delete one RemoteokSyncState
     *   }
     * })
     * 
     */
    delete<T extends RemoteokSyncStateDeleteArgs>(args: SelectSubset<T, RemoteokSyncStateDeleteArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemoteokSyncState.
     * @param {RemoteokSyncStateUpdateArgs} args - Arguments to update one RemoteokSyncState.
     * @example
     * // Update one RemoteokSyncState
     * const remoteokSyncState = await prisma.remoteokSyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemoteokSyncStateUpdateArgs>(args: SelectSubset<T, RemoteokSyncStateUpdateArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemoteokSyncStates.
     * @param {RemoteokSyncStateDeleteManyArgs} args - Arguments to filter RemoteokSyncStates to delete.
     * @example
     * // Delete a few RemoteokSyncStates
     * const { count } = await prisma.remoteokSyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemoteokSyncStateDeleteManyArgs>(args?: SelectSubset<T, RemoteokSyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemoteokSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemoteokSyncStates
     * const remoteokSyncState = await prisma.remoteokSyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemoteokSyncStateUpdateManyArgs>(args: SelectSubset<T, RemoteokSyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemoteokSyncStates and returns the data updated in the database.
     * @param {RemoteokSyncStateUpdateManyAndReturnArgs} args - Arguments to update many RemoteokSyncStates.
     * @example
     * // Update many RemoteokSyncStates
     * const remoteokSyncState = await prisma.remoteokSyncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemoteokSyncStates and only return the `id`
     * const remoteokSyncStateWithIdOnly = await prisma.remoteokSyncState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemoteokSyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, RemoteokSyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemoteokSyncState.
     * @param {RemoteokSyncStateUpsertArgs} args - Arguments to update or create a RemoteokSyncState.
     * @example
     * // Update or create a RemoteokSyncState
     * const remoteokSyncState = await prisma.remoteokSyncState.upsert({
     *   create: {
     *     // ... data to create a RemoteokSyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemoteokSyncState we want to update
     *   }
     * })
     */
    upsert<T extends RemoteokSyncStateUpsertArgs>(args: SelectSubset<T, RemoteokSyncStateUpsertArgs<ExtArgs>>): Prisma__RemoteokSyncStateClient<$Result.GetResult<Prisma.$RemoteokSyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemoteokSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateCountArgs} args - Arguments to filter RemoteokSyncStates to count.
     * @example
     * // Count the number of RemoteokSyncStates
     * const count = await prisma.remoteokSyncState.count({
     *   where: {
     *     // ... the filter for the RemoteokSyncStates we want to count
     *   }
     * })
    **/
    count<T extends RemoteokSyncStateCountArgs>(
      args?: Subset<T, RemoteokSyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemoteokSyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemoteokSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RemoteokSyncStateAggregateArgs>(args: Subset<T, RemoteokSyncStateAggregateArgs>): Prisma.PrismaPromise<GetRemoteokSyncStateAggregateType<T>>

    /**
     * Group by RemoteokSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemoteokSyncStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RemoteokSyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemoteokSyncStateGroupByArgs['orderBy'] }
        : { orderBy?: RemoteokSyncStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RemoteokSyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemoteokSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemoteokSyncState model
   */
  readonly fields: RemoteokSyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemoteokSyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemoteokSyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RemoteokSyncState model
   */
  interface RemoteokSyncStateFieldRefs {
    readonly id: FieldRef<"RemoteokSyncState", 'String'>
    readonly source: FieldRef<"RemoteokSyncState", 'String'>
    readonly lastSyncAt: FieldRef<"RemoteokSyncState", 'DateTime'>
    readonly lastSuccessfulSyncAt: FieldRef<"RemoteokSyncState", 'DateTime'>
    readonly itemsExtracted: FieldRef<"RemoteokSyncState", 'Int'>
    readonly createdAt: FieldRef<"RemoteokSyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"RemoteokSyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RemoteokSyncState findUnique
   */
  export type RemoteokSyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokSyncState to fetch.
     */
    where: RemoteokSyncStateWhereUniqueInput
  }

  /**
   * RemoteokSyncState findUniqueOrThrow
   */
  export type RemoteokSyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokSyncState to fetch.
     */
    where: RemoteokSyncStateWhereUniqueInput
  }

  /**
   * RemoteokSyncState findFirst
   */
  export type RemoteokSyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokSyncState to fetch.
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokSyncStates to fetch.
     */
    orderBy?: RemoteokSyncStateOrderByWithRelationInput | RemoteokSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemoteokSyncStates.
     */
    cursor?: RemoteokSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemoteokSyncStates.
     */
    distinct?: RemoteokSyncStateScalarFieldEnum | RemoteokSyncStateScalarFieldEnum[]
  }

  /**
   * RemoteokSyncState findFirstOrThrow
   */
  export type RemoteokSyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokSyncState to fetch.
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokSyncStates to fetch.
     */
    orderBy?: RemoteokSyncStateOrderByWithRelationInput | RemoteokSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemoteokSyncStates.
     */
    cursor?: RemoteokSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemoteokSyncStates.
     */
    distinct?: RemoteokSyncStateScalarFieldEnum | RemoteokSyncStateScalarFieldEnum[]
  }

  /**
   * RemoteokSyncState findMany
   */
  export type RemoteokSyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemoteokSyncStates to fetch.
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemoteokSyncStates to fetch.
     */
    orderBy?: RemoteokSyncStateOrderByWithRelationInput | RemoteokSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemoteokSyncStates.
     */
    cursor?: RemoteokSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemoteokSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemoteokSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemoteokSyncStates.
     */
    distinct?: RemoteokSyncStateScalarFieldEnum | RemoteokSyncStateScalarFieldEnum[]
  }

  /**
   * RemoteokSyncState create
   */
  export type RemoteokSyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a RemoteokSyncState.
     */
    data: XOR<RemoteokSyncStateCreateInput, RemoteokSyncStateUncheckedCreateInput>
  }

  /**
   * RemoteokSyncState createMany
   */
  export type RemoteokSyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemoteokSyncStates.
     */
    data: RemoteokSyncStateCreateManyInput | RemoteokSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemoteokSyncState createManyAndReturn
   */
  export type RemoteokSyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many RemoteokSyncStates.
     */
    data: RemoteokSyncStateCreateManyInput | RemoteokSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemoteokSyncState update
   */
  export type RemoteokSyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a RemoteokSyncState.
     */
    data: XOR<RemoteokSyncStateUpdateInput, RemoteokSyncStateUncheckedUpdateInput>
    /**
     * Choose, which RemoteokSyncState to update.
     */
    where: RemoteokSyncStateWhereUniqueInput
  }

  /**
   * RemoteokSyncState updateMany
   */
  export type RemoteokSyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemoteokSyncStates.
     */
    data: XOR<RemoteokSyncStateUpdateManyMutationInput, RemoteokSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which RemoteokSyncStates to update
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * Limit how many RemoteokSyncStates to update.
     */
    limit?: number
  }

  /**
   * RemoteokSyncState updateManyAndReturn
   */
  export type RemoteokSyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * The data used to update RemoteokSyncStates.
     */
    data: XOR<RemoteokSyncStateUpdateManyMutationInput, RemoteokSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which RemoteokSyncStates to update
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * Limit how many RemoteokSyncStates to update.
     */
    limit?: number
  }

  /**
   * RemoteokSyncState upsert
   */
  export type RemoteokSyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the RemoteokSyncState to update in case it exists.
     */
    where: RemoteokSyncStateWhereUniqueInput
    /**
     * In case the RemoteokSyncState found by the `where` argument doesn't exist, create a new RemoteokSyncState with this data.
     */
    create: XOR<RemoteokSyncStateCreateInput, RemoteokSyncStateUncheckedCreateInput>
    /**
     * In case the RemoteokSyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemoteokSyncStateUpdateInput, RemoteokSyncStateUncheckedUpdateInput>
  }

  /**
   * RemoteokSyncState delete
   */
  export type RemoteokSyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
    /**
     * Filter which RemoteokSyncState to delete.
     */
    where: RemoteokSyncStateWhereUniqueInput
  }

  /**
   * RemoteokSyncState deleteMany
   */
  export type RemoteokSyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemoteokSyncStates to delete
     */
    where?: RemoteokSyncStateWhereInput
    /**
     * Limit how many RemoteokSyncStates to delete.
     */
    limit?: number
  }

  /**
   * RemoteokSyncState without action
   */
  export type RemoteokSyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemoteokSyncState
     */
    select?: RemoteokSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemoteokSyncState
     */
    omit?: RemoteokSyncStateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RemoteokScrapedJobScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    url: 'url',
    slug: 'slug',
    title: 'title',
    companyName: 'companyName',
    location: 'location',
    remoteType: 'remoteType',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    currency: 'currency',
    contractType: 'contractType',
    rawDescription: 'rawDescription',
    descriptionMarkdown: 'descriptionMarkdown',
    datePosted: 'datePosted',
    tags: 'tags',
    outboxStatus: 'outboxStatus',
    publishedAt: 'publishedAt',
    retryCount: 'retryCount',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemoteokScrapedJobScalarFieldEnum = (typeof RemoteokScrapedJobScalarFieldEnum)[keyof typeof RemoteokScrapedJobScalarFieldEnum]


  export const RemoteokSyncStateScalarFieldEnum: {
    id: 'id',
    source: 'source',
    lastSyncAt: 'lastSyncAt',
    lastSuccessfulSyncAt: 'lastSuccessfulSyncAt',
    itemsExtracted: 'itemsExtracted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemoteokSyncStateScalarFieldEnum = (typeof RemoteokSyncStateScalarFieldEnum)[keyof typeof RemoteokSyncStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OutboxStatus'
   */
  export type EnumOutboxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutboxStatus'>
    


  /**
   * Reference to a field of type 'OutboxStatus[]'
   */
  export type ListEnumOutboxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutboxStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RemoteokScrapedJobWhereInput = {
    AND?: RemoteokScrapedJobWhereInput | RemoteokScrapedJobWhereInput[]
    OR?: RemoteokScrapedJobWhereInput[]
    NOT?: RemoteokScrapedJobWhereInput | RemoteokScrapedJobWhereInput[]
    id?: StringFilter<"RemoteokScrapedJob"> | string
    externalId?: StringFilter<"RemoteokScrapedJob"> | string
    url?: StringFilter<"RemoteokScrapedJob"> | string
    slug?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    title?: StringFilter<"RemoteokScrapedJob"> | string
    companyName?: StringFilter<"RemoteokScrapedJob"> | string
    location?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"RemoteokScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"RemoteokScrapedJob"> | number | null
    currency?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    contractType?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    rawDescription?: StringFilter<"RemoteokScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"RemoteokScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"RemoteokScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"RemoteokScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"RemoteokScrapedJob"> | number
    lastError?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"RemoteokScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"RemoteokScrapedJob"> | Date | string
  }

  export type RemoteokScrapedJobOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
    slug?: SortOrderInput | SortOrder
    title?: SortOrder
    companyName?: SortOrder
    location?: SortOrderInput | SortOrder
    remoteType?: SortOrderInput | SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    contractType?: SortOrderInput | SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrderInput | SortOrder
    datePosted?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    outboxStatus?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokScrapedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    url?: string
    AND?: RemoteokScrapedJobWhereInput | RemoteokScrapedJobWhereInput[]
    OR?: RemoteokScrapedJobWhereInput[]
    NOT?: RemoteokScrapedJobWhereInput | RemoteokScrapedJobWhereInput[]
    slug?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    title?: StringFilter<"RemoteokScrapedJob"> | string
    companyName?: StringFilter<"RemoteokScrapedJob"> | string
    location?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"RemoteokScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"RemoteokScrapedJob"> | number | null
    currency?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    contractType?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    rawDescription?: StringFilter<"RemoteokScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"RemoteokScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"RemoteokScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"RemoteokScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"RemoteokScrapedJob"> | number
    lastError?: StringNullableFilter<"RemoteokScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"RemoteokScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"RemoteokScrapedJob"> | Date | string
  }, "id" | "externalId" | "url">

  export type RemoteokScrapedJobOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
    slug?: SortOrderInput | SortOrder
    title?: SortOrder
    companyName?: SortOrder
    location?: SortOrderInput | SortOrder
    remoteType?: SortOrderInput | SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    contractType?: SortOrderInput | SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrderInput | SortOrder
    datePosted?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    outboxStatus?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemoteokScrapedJobCountOrderByAggregateInput
    _avg?: RemoteokScrapedJobAvgOrderByAggregateInput
    _max?: RemoteokScrapedJobMaxOrderByAggregateInput
    _min?: RemoteokScrapedJobMinOrderByAggregateInput
    _sum?: RemoteokScrapedJobSumOrderByAggregateInput
  }

  export type RemoteokScrapedJobScalarWhereWithAggregatesInput = {
    AND?: RemoteokScrapedJobScalarWhereWithAggregatesInput | RemoteokScrapedJobScalarWhereWithAggregatesInput[]
    OR?: RemoteokScrapedJobScalarWhereWithAggregatesInput[]
    NOT?: RemoteokScrapedJobScalarWhereWithAggregatesInput | RemoteokScrapedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemoteokScrapedJob"> | string
    externalId?: StringWithAggregatesFilter<"RemoteokScrapedJob"> | string
    url?: StringWithAggregatesFilter<"RemoteokScrapedJob"> | string
    slug?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    title?: StringWithAggregatesFilter<"RemoteokScrapedJob"> | string
    companyName?: StringWithAggregatesFilter<"RemoteokScrapedJob"> | string
    location?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    remoteType?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    salaryMin?: FloatNullableWithAggregatesFilter<"RemoteokScrapedJob"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"RemoteokScrapedJob"> | number | null
    currency?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    rawDescription?: StringWithAggregatesFilter<"RemoteokScrapedJob"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"RemoteokScrapedJob"> | Date | string | null
    tags?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusWithAggregatesFilter<"RemoteokScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"RemoteokScrapedJob"> | Date | string | null
    retryCount?: IntWithAggregatesFilter<"RemoteokScrapedJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"RemoteokScrapedJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RemoteokScrapedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RemoteokScrapedJob"> | Date | string
  }

  export type RemoteokSyncStateWhereInput = {
    AND?: RemoteokSyncStateWhereInput | RemoteokSyncStateWhereInput[]
    OR?: RemoteokSyncStateWhereInput[]
    NOT?: RemoteokSyncStateWhereInput | RemoteokSyncStateWhereInput[]
    id?: StringFilter<"RemoteokSyncState"> | string
    source?: StringFilter<"RemoteokSyncState"> | string
    lastSyncAt?: DateTimeNullableFilter<"RemoteokSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"RemoteokSyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"RemoteokSyncState"> | number
    createdAt?: DateTimeFilter<"RemoteokSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"RemoteokSyncState"> | Date | string
  }

  export type RemoteokSyncStateOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokSyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    source?: string
    AND?: RemoteokSyncStateWhereInput | RemoteokSyncStateWhereInput[]
    OR?: RemoteokSyncStateWhereInput[]
    NOT?: RemoteokSyncStateWhereInput | RemoteokSyncStateWhereInput[]
    lastSyncAt?: DateTimeNullableFilter<"RemoteokSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"RemoteokSyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"RemoteokSyncState"> | number
    createdAt?: DateTimeFilter<"RemoteokSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"RemoteokSyncState"> | Date | string
  }, "id" | "source">

  export type RemoteokSyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemoteokSyncStateCountOrderByAggregateInput
    _avg?: RemoteokSyncStateAvgOrderByAggregateInput
    _max?: RemoteokSyncStateMaxOrderByAggregateInput
    _min?: RemoteokSyncStateMinOrderByAggregateInput
    _sum?: RemoteokSyncStateSumOrderByAggregateInput
  }

  export type RemoteokSyncStateScalarWhereWithAggregatesInput = {
    AND?: RemoteokSyncStateScalarWhereWithAggregatesInput | RemoteokSyncStateScalarWhereWithAggregatesInput[]
    OR?: RemoteokSyncStateScalarWhereWithAggregatesInput[]
    NOT?: RemoteokSyncStateScalarWhereWithAggregatesInput | RemoteokSyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemoteokSyncState"> | string
    source?: StringWithAggregatesFilter<"RemoteokSyncState"> | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"RemoteokSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableWithAggregatesFilter<"RemoteokSyncState"> | Date | string | null
    itemsExtracted?: IntWithAggregatesFilter<"RemoteokSyncState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RemoteokSyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RemoteokSyncState"> | Date | string
  }

  export type RemoteokScrapedJobCreateInput = {
    id?: string
    externalId: string
    url: string
    slug?: string | null
    title: string
    companyName: string
    location?: string | null
    remoteType?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    tags?: string | null
    outboxStatus?: $Enums.OutboxStatus
    publishedAt?: Date | string | null
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemoteokScrapedJobUncheckedCreateInput = {
    id?: string
    externalId: string
    url: string
    slug?: string | null
    title: string
    companyName: string
    location?: string | null
    remoteType?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    tags?: string | null
    outboxStatus?: $Enums.OutboxStatus
    publishedAt?: Date | string | null
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemoteokScrapedJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    outboxStatus?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokScrapedJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    outboxStatus?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokScrapedJobCreateManyInput = {
    id?: string
    externalId: string
    url: string
    slug?: string | null
    title: string
    companyName: string
    location?: string | null
    remoteType?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    tags?: string | null
    outboxStatus?: $Enums.OutboxStatus
    publishedAt?: Date | string | null
    retryCount?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemoteokScrapedJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    outboxStatus?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokScrapedJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    outboxStatus?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokSyncStateCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemoteokSyncStateUncheckedCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemoteokSyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokSyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokSyncStateCreateManyInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemoteokSyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemoteokSyncStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumOutboxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusFilter<$PrismaModel> | $Enums.OutboxStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RemoteokScrapedJobCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    remoteType?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    contractType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrder
    datePosted?: SortOrder
    tags?: SortOrder
    outboxStatus?: SortOrder
    publishedAt?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokScrapedJobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type RemoteokScrapedJobMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    remoteType?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    contractType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrder
    datePosted?: SortOrder
    tags?: SortOrder
    outboxStatus?: SortOrder
    publishedAt?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokScrapedJobMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    remoteType?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    contractType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrder
    datePosted?: SortOrder
    tags?: SortOrder
    outboxStatus?: SortOrder
    publishedAt?: SortOrder
    retryCount?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokScrapedJobSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOutboxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutboxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutboxStatusFilter<$PrismaModel>
    _max?: NestedEnumOutboxStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RemoteokSyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokSyncStateAvgOrderByAggregateInput = {
    itemsExtracted?: SortOrder
  }

  export type RemoteokSyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokSyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemoteokSyncStateSumOrderByAggregateInput = {
    itemsExtracted?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumOutboxStatusFieldUpdateOperationsInput = {
    set?: $Enums.OutboxStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOutboxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusFilter<$PrismaModel> | $Enums.OutboxStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOutboxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutboxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutboxStatusFilter<$PrismaModel>
    _max?: NestedEnumOutboxStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}