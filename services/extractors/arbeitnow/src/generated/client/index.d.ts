
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
 * Model ArbeitnowScrapedJob
 * 
 */
export type ArbeitnowScrapedJob = $Result.DefaultSelection<Prisma.$ArbeitnowScrapedJobPayload>
/**
 * Model ArbeitnowSyncState
 * 
 */
export type ArbeitnowSyncState = $Result.DefaultSelection<Prisma.$ArbeitnowSyncStatePayload>

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


export const ExtractionStatus: {
  IDLE: 'IDLE',
  RUNNING: 'RUNNING',
  ERROR: 'ERROR'
};

export type ExtractionStatus = (typeof ExtractionStatus)[keyof typeof ExtractionStatus]

}

export type OutboxStatus = $Enums.OutboxStatus

export const OutboxStatus: typeof $Enums.OutboxStatus

export type ExtractionStatus = $Enums.ExtractionStatus

export const ExtractionStatus: typeof $Enums.ExtractionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ArbeitnowScrapedJobs
 * const arbeitnowScrapedJobs = await prisma.arbeitnowScrapedJob.findMany()
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
   * // Fetch zero or more ArbeitnowScrapedJobs
   * const arbeitnowScrapedJobs = await prisma.arbeitnowScrapedJob.findMany()
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
   * `prisma.arbeitnowScrapedJob`: Exposes CRUD operations for the **ArbeitnowScrapedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArbeitnowScrapedJobs
    * const arbeitnowScrapedJobs = await prisma.arbeitnowScrapedJob.findMany()
    * ```
    */
  get arbeitnowScrapedJob(): Prisma.ArbeitnowScrapedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arbeitnowSyncState`: Exposes CRUD operations for the **ArbeitnowSyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArbeitnowSyncStates
    * const arbeitnowSyncStates = await prisma.arbeitnowSyncState.findMany()
    * ```
    */
  get arbeitnowSyncState(): Prisma.ArbeitnowSyncStateDelegate<ExtArgs, ClientOptions>;
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
    ArbeitnowScrapedJob: 'ArbeitnowScrapedJob',
    ArbeitnowSyncState: 'ArbeitnowSyncState'
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
      modelProps: "arbeitnowScrapedJob" | "arbeitnowSyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ArbeitnowScrapedJob: {
        payload: Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>
        fields: Prisma.ArbeitnowScrapedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArbeitnowScrapedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArbeitnowScrapedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>
          }
          findFirst: {
            args: Prisma.ArbeitnowScrapedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArbeitnowScrapedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>
          }
          findMany: {
            args: Prisma.ArbeitnowScrapedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>[]
          }
          create: {
            args: Prisma.ArbeitnowScrapedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>
          }
          createMany: {
            args: Prisma.ArbeitnowScrapedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArbeitnowScrapedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>[]
          }
          delete: {
            args: Prisma.ArbeitnowScrapedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>
          }
          update: {
            args: Prisma.ArbeitnowScrapedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>
          }
          deleteMany: {
            args: Prisma.ArbeitnowScrapedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArbeitnowScrapedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArbeitnowScrapedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>[]
          }
          upsert: {
            args: Prisma.ArbeitnowScrapedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowScrapedJobPayload>
          }
          aggregate: {
            args: Prisma.ArbeitnowScrapedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArbeitnowScrapedJob>
          }
          groupBy: {
            args: Prisma.ArbeitnowScrapedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArbeitnowScrapedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArbeitnowScrapedJobCountArgs<ExtArgs>
            result: $Utils.Optional<ArbeitnowScrapedJobCountAggregateOutputType> | number
          }
        }
      }
      ArbeitnowSyncState: {
        payload: Prisma.$ArbeitnowSyncStatePayload<ExtArgs>
        fields: Prisma.ArbeitnowSyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArbeitnowSyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArbeitnowSyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>
          }
          findFirst: {
            args: Prisma.ArbeitnowSyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArbeitnowSyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>
          }
          findMany: {
            args: Prisma.ArbeitnowSyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>[]
          }
          create: {
            args: Prisma.ArbeitnowSyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>
          }
          createMany: {
            args: Prisma.ArbeitnowSyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArbeitnowSyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>[]
          }
          delete: {
            args: Prisma.ArbeitnowSyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>
          }
          update: {
            args: Prisma.ArbeitnowSyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>
          }
          deleteMany: {
            args: Prisma.ArbeitnowSyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArbeitnowSyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArbeitnowSyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>[]
          }
          upsert: {
            args: Prisma.ArbeitnowSyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbeitnowSyncStatePayload>
          }
          aggregate: {
            args: Prisma.ArbeitnowSyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArbeitnowSyncState>
          }
          groupBy: {
            args: Prisma.ArbeitnowSyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArbeitnowSyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArbeitnowSyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<ArbeitnowSyncStateCountAggregateOutputType> | number
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
    arbeitnowScrapedJob?: ArbeitnowScrapedJobOmit
    arbeitnowSyncState?: ArbeitnowSyncStateOmit
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
   * Model ArbeitnowScrapedJob
   */

  export type AggregateArbeitnowScrapedJob = {
    _count: ArbeitnowScrapedJobCountAggregateOutputType | null
    _avg: ArbeitnowScrapedJobAvgAggregateOutputType | null
    _sum: ArbeitnowScrapedJobSumAggregateOutputType | null
    _min: ArbeitnowScrapedJobMinAggregateOutputType | null
    _max: ArbeitnowScrapedJobMaxAggregateOutputType | null
  }

  export type ArbeitnowScrapedJobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type ArbeitnowScrapedJobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type ArbeitnowScrapedJobMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    title: string | null
    companyName: string | null
    url: string | null
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

  export type ArbeitnowScrapedJobMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    title: string | null
    companyName: string | null
    url: string | null
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

  export type ArbeitnowScrapedJobCountAggregateOutputType = {
    id: number
    externalId: number
    title: number
    companyName: number
    url: number
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


  export type ArbeitnowScrapedJobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type ArbeitnowScrapedJobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type ArbeitnowScrapedJobMinAggregateInputType = {
    id?: true
    externalId?: true
    title?: true
    companyName?: true
    url?: true
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

  export type ArbeitnowScrapedJobMaxAggregateInputType = {
    id?: true
    externalId?: true
    title?: true
    companyName?: true
    url?: true
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

  export type ArbeitnowScrapedJobCountAggregateInputType = {
    id?: true
    externalId?: true
    title?: true
    companyName?: true
    url?: true
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

  export type ArbeitnowScrapedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArbeitnowScrapedJob to aggregate.
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowScrapedJobs to fetch.
     */
    orderBy?: ArbeitnowScrapedJobOrderByWithRelationInput | ArbeitnowScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArbeitnowScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArbeitnowScrapedJobs
    **/
    _count?: true | ArbeitnowScrapedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArbeitnowScrapedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArbeitnowScrapedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArbeitnowScrapedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArbeitnowScrapedJobMaxAggregateInputType
  }

  export type GetArbeitnowScrapedJobAggregateType<T extends ArbeitnowScrapedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateArbeitnowScrapedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArbeitnowScrapedJob[P]>
      : GetScalarType<T[P], AggregateArbeitnowScrapedJob[P]>
  }




  export type ArbeitnowScrapedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbeitnowScrapedJobWhereInput
    orderBy?: ArbeitnowScrapedJobOrderByWithAggregationInput | ArbeitnowScrapedJobOrderByWithAggregationInput[]
    by: ArbeitnowScrapedJobScalarFieldEnum[] | ArbeitnowScrapedJobScalarFieldEnum
    having?: ArbeitnowScrapedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArbeitnowScrapedJobCountAggregateInputType | true
    _avg?: ArbeitnowScrapedJobAvgAggregateInputType
    _sum?: ArbeitnowScrapedJobSumAggregateInputType
    _min?: ArbeitnowScrapedJobMinAggregateInputType
    _max?: ArbeitnowScrapedJobMaxAggregateInputType
  }

  export type ArbeitnowScrapedJobGroupByOutputType = {
    id: string
    externalId: string
    title: string
    companyName: string
    url: string
    location: string | null
    remoteType: string
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
    _count: ArbeitnowScrapedJobCountAggregateOutputType | null
    _avg: ArbeitnowScrapedJobAvgAggregateOutputType | null
    _sum: ArbeitnowScrapedJobSumAggregateOutputType | null
    _min: ArbeitnowScrapedJobMinAggregateOutputType | null
    _max: ArbeitnowScrapedJobMaxAggregateOutputType | null
  }

  type GetArbeitnowScrapedJobGroupByPayload<T extends ArbeitnowScrapedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArbeitnowScrapedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArbeitnowScrapedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArbeitnowScrapedJobGroupByOutputType[P]>
            : GetScalarType<T[P], ArbeitnowScrapedJobGroupByOutputType[P]>
        }
      >
    >


  export type ArbeitnowScrapedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    title?: boolean
    companyName?: boolean
    url?: boolean
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
  }, ExtArgs["result"]["arbeitnowScrapedJob"]>

  export type ArbeitnowScrapedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    title?: boolean
    companyName?: boolean
    url?: boolean
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
  }, ExtArgs["result"]["arbeitnowScrapedJob"]>

  export type ArbeitnowScrapedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    title?: boolean
    companyName?: boolean
    url?: boolean
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
  }, ExtArgs["result"]["arbeitnowScrapedJob"]>

  export type ArbeitnowScrapedJobSelectScalar = {
    id?: boolean
    externalId?: boolean
    title?: boolean
    companyName?: boolean
    url?: boolean
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

  export type ArbeitnowScrapedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "title" | "companyName" | "url" | "location" | "remoteType" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "tags" | "outboxStatus" | "publishedAt" | "retryCount" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["arbeitnowScrapedJob"]>

  export type $ArbeitnowScrapedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArbeitnowScrapedJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      title: string
      companyName: string
      url: string
      location: string | null
      remoteType: string
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
    }, ExtArgs["result"]["arbeitnowScrapedJob"]>
    composites: {}
  }

  type ArbeitnowScrapedJobGetPayload<S extends boolean | null | undefined | ArbeitnowScrapedJobDefaultArgs> = $Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload, S>

  type ArbeitnowScrapedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArbeitnowScrapedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArbeitnowScrapedJobCountAggregateInputType | true
    }

  export interface ArbeitnowScrapedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArbeitnowScrapedJob'], meta: { name: 'ArbeitnowScrapedJob' } }
    /**
     * Find zero or one ArbeitnowScrapedJob that matches the filter.
     * @param {ArbeitnowScrapedJobFindUniqueArgs} args - Arguments to find a ArbeitnowScrapedJob
     * @example
     * // Get one ArbeitnowScrapedJob
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArbeitnowScrapedJobFindUniqueArgs>(args: SelectSubset<T, ArbeitnowScrapedJobFindUniqueArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArbeitnowScrapedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArbeitnowScrapedJobFindUniqueOrThrowArgs} args - Arguments to find a ArbeitnowScrapedJob
     * @example
     * // Get one ArbeitnowScrapedJob
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArbeitnowScrapedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ArbeitnowScrapedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArbeitnowScrapedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobFindFirstArgs} args - Arguments to find a ArbeitnowScrapedJob
     * @example
     * // Get one ArbeitnowScrapedJob
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArbeitnowScrapedJobFindFirstArgs>(args?: SelectSubset<T, ArbeitnowScrapedJobFindFirstArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArbeitnowScrapedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobFindFirstOrThrowArgs} args - Arguments to find a ArbeitnowScrapedJob
     * @example
     * // Get one ArbeitnowScrapedJob
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArbeitnowScrapedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ArbeitnowScrapedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArbeitnowScrapedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArbeitnowScrapedJobs
     * const arbeitnowScrapedJobs = await prisma.arbeitnowScrapedJob.findMany()
     * 
     * // Get first 10 ArbeitnowScrapedJobs
     * const arbeitnowScrapedJobs = await prisma.arbeitnowScrapedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arbeitnowScrapedJobWithIdOnly = await prisma.arbeitnowScrapedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArbeitnowScrapedJobFindManyArgs>(args?: SelectSubset<T, ArbeitnowScrapedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArbeitnowScrapedJob.
     * @param {ArbeitnowScrapedJobCreateArgs} args - Arguments to create a ArbeitnowScrapedJob.
     * @example
     * // Create one ArbeitnowScrapedJob
     * const ArbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.create({
     *   data: {
     *     // ... data to create a ArbeitnowScrapedJob
     *   }
     * })
     * 
     */
    create<T extends ArbeitnowScrapedJobCreateArgs>(args: SelectSubset<T, ArbeitnowScrapedJobCreateArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArbeitnowScrapedJobs.
     * @param {ArbeitnowScrapedJobCreateManyArgs} args - Arguments to create many ArbeitnowScrapedJobs.
     * @example
     * // Create many ArbeitnowScrapedJobs
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArbeitnowScrapedJobCreateManyArgs>(args?: SelectSubset<T, ArbeitnowScrapedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArbeitnowScrapedJobs and returns the data saved in the database.
     * @param {ArbeitnowScrapedJobCreateManyAndReturnArgs} args - Arguments to create many ArbeitnowScrapedJobs.
     * @example
     * // Create many ArbeitnowScrapedJobs
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArbeitnowScrapedJobs and only return the `id`
     * const arbeitnowScrapedJobWithIdOnly = await prisma.arbeitnowScrapedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArbeitnowScrapedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ArbeitnowScrapedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArbeitnowScrapedJob.
     * @param {ArbeitnowScrapedJobDeleteArgs} args - Arguments to delete one ArbeitnowScrapedJob.
     * @example
     * // Delete one ArbeitnowScrapedJob
     * const ArbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.delete({
     *   where: {
     *     // ... filter to delete one ArbeitnowScrapedJob
     *   }
     * })
     * 
     */
    delete<T extends ArbeitnowScrapedJobDeleteArgs>(args: SelectSubset<T, ArbeitnowScrapedJobDeleteArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArbeitnowScrapedJob.
     * @param {ArbeitnowScrapedJobUpdateArgs} args - Arguments to update one ArbeitnowScrapedJob.
     * @example
     * // Update one ArbeitnowScrapedJob
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArbeitnowScrapedJobUpdateArgs>(args: SelectSubset<T, ArbeitnowScrapedJobUpdateArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArbeitnowScrapedJobs.
     * @param {ArbeitnowScrapedJobDeleteManyArgs} args - Arguments to filter ArbeitnowScrapedJobs to delete.
     * @example
     * // Delete a few ArbeitnowScrapedJobs
     * const { count } = await prisma.arbeitnowScrapedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArbeitnowScrapedJobDeleteManyArgs>(args?: SelectSubset<T, ArbeitnowScrapedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArbeitnowScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArbeitnowScrapedJobs
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArbeitnowScrapedJobUpdateManyArgs>(args: SelectSubset<T, ArbeitnowScrapedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArbeitnowScrapedJobs and returns the data updated in the database.
     * @param {ArbeitnowScrapedJobUpdateManyAndReturnArgs} args - Arguments to update many ArbeitnowScrapedJobs.
     * @example
     * // Update many ArbeitnowScrapedJobs
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArbeitnowScrapedJobs and only return the `id`
     * const arbeitnowScrapedJobWithIdOnly = await prisma.arbeitnowScrapedJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArbeitnowScrapedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ArbeitnowScrapedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArbeitnowScrapedJob.
     * @param {ArbeitnowScrapedJobUpsertArgs} args - Arguments to update or create a ArbeitnowScrapedJob.
     * @example
     * // Update or create a ArbeitnowScrapedJob
     * const arbeitnowScrapedJob = await prisma.arbeitnowScrapedJob.upsert({
     *   create: {
     *     // ... data to create a ArbeitnowScrapedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArbeitnowScrapedJob we want to update
     *   }
     * })
     */
    upsert<T extends ArbeitnowScrapedJobUpsertArgs>(args: SelectSubset<T, ArbeitnowScrapedJobUpsertArgs<ExtArgs>>): Prisma__ArbeitnowScrapedJobClient<$Result.GetResult<Prisma.$ArbeitnowScrapedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArbeitnowScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobCountArgs} args - Arguments to filter ArbeitnowScrapedJobs to count.
     * @example
     * // Count the number of ArbeitnowScrapedJobs
     * const count = await prisma.arbeitnowScrapedJob.count({
     *   where: {
     *     // ... the filter for the ArbeitnowScrapedJobs we want to count
     *   }
     * })
    **/
    count<T extends ArbeitnowScrapedJobCountArgs>(
      args?: Subset<T, ArbeitnowScrapedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArbeitnowScrapedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArbeitnowScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArbeitnowScrapedJobAggregateArgs>(args: Subset<T, ArbeitnowScrapedJobAggregateArgs>): Prisma.PrismaPromise<GetArbeitnowScrapedJobAggregateType<T>>

    /**
     * Group by ArbeitnowScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowScrapedJobGroupByArgs} args - Group by arguments.
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
      T extends ArbeitnowScrapedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArbeitnowScrapedJobGroupByArgs['orderBy'] }
        : { orderBy?: ArbeitnowScrapedJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArbeitnowScrapedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArbeitnowScrapedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArbeitnowScrapedJob model
   */
  readonly fields: ArbeitnowScrapedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArbeitnowScrapedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArbeitnowScrapedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ArbeitnowScrapedJob model
   */
  interface ArbeitnowScrapedJobFieldRefs {
    readonly id: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly externalId: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly title: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly companyName: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly url: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly location: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly remoteType: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly salaryMin: FieldRef<"ArbeitnowScrapedJob", 'Float'>
    readonly salaryMax: FieldRef<"ArbeitnowScrapedJob", 'Float'>
    readonly currency: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly contractType: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly rawDescription: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly descriptionMarkdown: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly datePosted: FieldRef<"ArbeitnowScrapedJob", 'DateTime'>
    readonly tags: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly outboxStatus: FieldRef<"ArbeitnowScrapedJob", 'OutboxStatus'>
    readonly publishedAt: FieldRef<"ArbeitnowScrapedJob", 'DateTime'>
    readonly retryCount: FieldRef<"ArbeitnowScrapedJob", 'Int'>
    readonly lastError: FieldRef<"ArbeitnowScrapedJob", 'String'>
    readonly createdAt: FieldRef<"ArbeitnowScrapedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"ArbeitnowScrapedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArbeitnowScrapedJob findUnique
   */
  export type ArbeitnowScrapedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowScrapedJob to fetch.
     */
    where: ArbeitnowScrapedJobWhereUniqueInput
  }

  /**
   * ArbeitnowScrapedJob findUniqueOrThrow
   */
  export type ArbeitnowScrapedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowScrapedJob to fetch.
     */
    where: ArbeitnowScrapedJobWhereUniqueInput
  }

  /**
   * ArbeitnowScrapedJob findFirst
   */
  export type ArbeitnowScrapedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowScrapedJob to fetch.
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowScrapedJobs to fetch.
     */
    orderBy?: ArbeitnowScrapedJobOrderByWithRelationInput | ArbeitnowScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArbeitnowScrapedJobs.
     */
    cursor?: ArbeitnowScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbeitnowScrapedJobs.
     */
    distinct?: ArbeitnowScrapedJobScalarFieldEnum | ArbeitnowScrapedJobScalarFieldEnum[]
  }

  /**
   * ArbeitnowScrapedJob findFirstOrThrow
   */
  export type ArbeitnowScrapedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowScrapedJob to fetch.
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowScrapedJobs to fetch.
     */
    orderBy?: ArbeitnowScrapedJobOrderByWithRelationInput | ArbeitnowScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArbeitnowScrapedJobs.
     */
    cursor?: ArbeitnowScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbeitnowScrapedJobs.
     */
    distinct?: ArbeitnowScrapedJobScalarFieldEnum | ArbeitnowScrapedJobScalarFieldEnum[]
  }

  /**
   * ArbeitnowScrapedJob findMany
   */
  export type ArbeitnowScrapedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowScrapedJobs to fetch.
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowScrapedJobs to fetch.
     */
    orderBy?: ArbeitnowScrapedJobOrderByWithRelationInput | ArbeitnowScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArbeitnowScrapedJobs.
     */
    cursor?: ArbeitnowScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbeitnowScrapedJobs.
     */
    distinct?: ArbeitnowScrapedJobScalarFieldEnum | ArbeitnowScrapedJobScalarFieldEnum[]
  }

  /**
   * ArbeitnowScrapedJob create
   */
  export type ArbeitnowScrapedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to create a ArbeitnowScrapedJob.
     */
    data: XOR<ArbeitnowScrapedJobCreateInput, ArbeitnowScrapedJobUncheckedCreateInput>
  }

  /**
   * ArbeitnowScrapedJob createMany
   */
  export type ArbeitnowScrapedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArbeitnowScrapedJobs.
     */
    data: ArbeitnowScrapedJobCreateManyInput | ArbeitnowScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArbeitnowScrapedJob createManyAndReturn
   */
  export type ArbeitnowScrapedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to create many ArbeitnowScrapedJobs.
     */
    data: ArbeitnowScrapedJobCreateManyInput | ArbeitnowScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArbeitnowScrapedJob update
   */
  export type ArbeitnowScrapedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to update a ArbeitnowScrapedJob.
     */
    data: XOR<ArbeitnowScrapedJobUpdateInput, ArbeitnowScrapedJobUncheckedUpdateInput>
    /**
     * Choose, which ArbeitnowScrapedJob to update.
     */
    where: ArbeitnowScrapedJobWhereUniqueInput
  }

  /**
   * ArbeitnowScrapedJob updateMany
   */
  export type ArbeitnowScrapedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArbeitnowScrapedJobs.
     */
    data: XOR<ArbeitnowScrapedJobUpdateManyMutationInput, ArbeitnowScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which ArbeitnowScrapedJobs to update
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * Limit how many ArbeitnowScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * ArbeitnowScrapedJob updateManyAndReturn
   */
  export type ArbeitnowScrapedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to update ArbeitnowScrapedJobs.
     */
    data: XOR<ArbeitnowScrapedJobUpdateManyMutationInput, ArbeitnowScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which ArbeitnowScrapedJobs to update
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * Limit how many ArbeitnowScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * ArbeitnowScrapedJob upsert
   */
  export type ArbeitnowScrapedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * The filter to search for the ArbeitnowScrapedJob to update in case it exists.
     */
    where: ArbeitnowScrapedJobWhereUniqueInput
    /**
     * In case the ArbeitnowScrapedJob found by the `where` argument doesn't exist, create a new ArbeitnowScrapedJob with this data.
     */
    create: XOR<ArbeitnowScrapedJobCreateInput, ArbeitnowScrapedJobUncheckedCreateInput>
    /**
     * In case the ArbeitnowScrapedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArbeitnowScrapedJobUpdateInput, ArbeitnowScrapedJobUncheckedUpdateInput>
  }

  /**
   * ArbeitnowScrapedJob delete
   */
  export type ArbeitnowScrapedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
    /**
     * Filter which ArbeitnowScrapedJob to delete.
     */
    where: ArbeitnowScrapedJobWhereUniqueInput
  }

  /**
   * ArbeitnowScrapedJob deleteMany
   */
  export type ArbeitnowScrapedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArbeitnowScrapedJobs to delete
     */
    where?: ArbeitnowScrapedJobWhereInput
    /**
     * Limit how many ArbeitnowScrapedJobs to delete.
     */
    limit?: number
  }

  /**
   * ArbeitnowScrapedJob without action
   */
  export type ArbeitnowScrapedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowScrapedJob
     */
    select?: ArbeitnowScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowScrapedJob
     */
    omit?: ArbeitnowScrapedJobOmit<ExtArgs> | null
  }


  /**
   * Model ArbeitnowSyncState
   */

  export type AggregateArbeitnowSyncState = {
    _count: ArbeitnowSyncStateCountAggregateOutputType | null
    _avg: ArbeitnowSyncStateAvgAggregateOutputType | null
    _sum: ArbeitnowSyncStateSumAggregateOutputType | null
    _min: ArbeitnowSyncStateMinAggregateOutputType | null
    _max: ArbeitnowSyncStateMaxAggregateOutputType | null
  }

  export type ArbeitnowSyncStateAvgAggregateOutputType = {
    lastPage: number | null
  }

  export type ArbeitnowSyncStateSumAggregateOutputType = {
    lastPage: number | null
  }

  export type ArbeitnowSyncStateMinAggregateOutputType = {
    id: string | null
    lastSyncTimestamp: Date | null
    lastPage: number | null
    status: $Enums.ExtractionStatus | null
    lastRunAt: Date | null
    lastError: string | null
    updatedAt: Date | null
  }

  export type ArbeitnowSyncStateMaxAggregateOutputType = {
    id: string | null
    lastSyncTimestamp: Date | null
    lastPage: number | null
    status: $Enums.ExtractionStatus | null
    lastRunAt: Date | null
    lastError: string | null
    updatedAt: Date | null
  }

  export type ArbeitnowSyncStateCountAggregateOutputType = {
    id: number
    lastSyncTimestamp: number
    lastPage: number
    status: number
    lastRunAt: number
    lastError: number
    updatedAt: number
    _all: number
  }


  export type ArbeitnowSyncStateAvgAggregateInputType = {
    lastPage?: true
  }

  export type ArbeitnowSyncStateSumAggregateInputType = {
    lastPage?: true
  }

  export type ArbeitnowSyncStateMinAggregateInputType = {
    id?: true
    lastSyncTimestamp?: true
    lastPage?: true
    status?: true
    lastRunAt?: true
    lastError?: true
    updatedAt?: true
  }

  export type ArbeitnowSyncStateMaxAggregateInputType = {
    id?: true
    lastSyncTimestamp?: true
    lastPage?: true
    status?: true
    lastRunAt?: true
    lastError?: true
    updatedAt?: true
  }

  export type ArbeitnowSyncStateCountAggregateInputType = {
    id?: true
    lastSyncTimestamp?: true
    lastPage?: true
    status?: true
    lastRunAt?: true
    lastError?: true
    updatedAt?: true
    _all?: true
  }

  export type ArbeitnowSyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArbeitnowSyncState to aggregate.
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowSyncStates to fetch.
     */
    orderBy?: ArbeitnowSyncStateOrderByWithRelationInput | ArbeitnowSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArbeitnowSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArbeitnowSyncStates
    **/
    _count?: true | ArbeitnowSyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArbeitnowSyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArbeitnowSyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArbeitnowSyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArbeitnowSyncStateMaxAggregateInputType
  }

  export type GetArbeitnowSyncStateAggregateType<T extends ArbeitnowSyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateArbeitnowSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArbeitnowSyncState[P]>
      : GetScalarType<T[P], AggregateArbeitnowSyncState[P]>
  }




  export type ArbeitnowSyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbeitnowSyncStateWhereInput
    orderBy?: ArbeitnowSyncStateOrderByWithAggregationInput | ArbeitnowSyncStateOrderByWithAggregationInput[]
    by: ArbeitnowSyncStateScalarFieldEnum[] | ArbeitnowSyncStateScalarFieldEnum
    having?: ArbeitnowSyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArbeitnowSyncStateCountAggregateInputType | true
    _avg?: ArbeitnowSyncStateAvgAggregateInputType
    _sum?: ArbeitnowSyncStateSumAggregateInputType
    _min?: ArbeitnowSyncStateMinAggregateInputType
    _max?: ArbeitnowSyncStateMaxAggregateInputType
  }

  export type ArbeitnowSyncStateGroupByOutputType = {
    id: string
    lastSyncTimestamp: Date | null
    lastPage: number
    status: $Enums.ExtractionStatus
    lastRunAt: Date | null
    lastError: string | null
    updatedAt: Date
    _count: ArbeitnowSyncStateCountAggregateOutputType | null
    _avg: ArbeitnowSyncStateAvgAggregateOutputType | null
    _sum: ArbeitnowSyncStateSumAggregateOutputType | null
    _min: ArbeitnowSyncStateMinAggregateOutputType | null
    _max: ArbeitnowSyncStateMaxAggregateOutputType | null
  }

  type GetArbeitnowSyncStateGroupByPayload<T extends ArbeitnowSyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArbeitnowSyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArbeitnowSyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArbeitnowSyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], ArbeitnowSyncStateGroupByOutputType[P]>
        }
      >
    >


  export type ArbeitnowSyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastSyncTimestamp?: boolean
    lastPage?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastError?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arbeitnowSyncState"]>

  export type ArbeitnowSyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastSyncTimestamp?: boolean
    lastPage?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastError?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arbeitnowSyncState"]>

  export type ArbeitnowSyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastSyncTimestamp?: boolean
    lastPage?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastError?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arbeitnowSyncState"]>

  export type ArbeitnowSyncStateSelectScalar = {
    id?: boolean
    lastSyncTimestamp?: boolean
    lastPage?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastError?: boolean
    updatedAt?: boolean
  }

  export type ArbeitnowSyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastSyncTimestamp" | "lastPage" | "status" | "lastRunAt" | "lastError" | "updatedAt", ExtArgs["result"]["arbeitnowSyncState"]>

  export type $ArbeitnowSyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArbeitnowSyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastSyncTimestamp: Date | null
      lastPage: number
      status: $Enums.ExtractionStatus
      lastRunAt: Date | null
      lastError: string | null
      updatedAt: Date
    }, ExtArgs["result"]["arbeitnowSyncState"]>
    composites: {}
  }

  type ArbeitnowSyncStateGetPayload<S extends boolean | null | undefined | ArbeitnowSyncStateDefaultArgs> = $Result.GetResult<Prisma.$ArbeitnowSyncStatePayload, S>

  type ArbeitnowSyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArbeitnowSyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArbeitnowSyncStateCountAggregateInputType | true
    }

  export interface ArbeitnowSyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArbeitnowSyncState'], meta: { name: 'ArbeitnowSyncState' } }
    /**
     * Find zero or one ArbeitnowSyncState that matches the filter.
     * @param {ArbeitnowSyncStateFindUniqueArgs} args - Arguments to find a ArbeitnowSyncState
     * @example
     * // Get one ArbeitnowSyncState
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArbeitnowSyncStateFindUniqueArgs>(args: SelectSubset<T, ArbeitnowSyncStateFindUniqueArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArbeitnowSyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArbeitnowSyncStateFindUniqueOrThrowArgs} args - Arguments to find a ArbeitnowSyncState
     * @example
     * // Get one ArbeitnowSyncState
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArbeitnowSyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, ArbeitnowSyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArbeitnowSyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateFindFirstArgs} args - Arguments to find a ArbeitnowSyncState
     * @example
     * // Get one ArbeitnowSyncState
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArbeitnowSyncStateFindFirstArgs>(args?: SelectSubset<T, ArbeitnowSyncStateFindFirstArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArbeitnowSyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateFindFirstOrThrowArgs} args - Arguments to find a ArbeitnowSyncState
     * @example
     * // Get one ArbeitnowSyncState
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArbeitnowSyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, ArbeitnowSyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArbeitnowSyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArbeitnowSyncStates
     * const arbeitnowSyncStates = await prisma.arbeitnowSyncState.findMany()
     * 
     * // Get first 10 ArbeitnowSyncStates
     * const arbeitnowSyncStates = await prisma.arbeitnowSyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arbeitnowSyncStateWithIdOnly = await prisma.arbeitnowSyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArbeitnowSyncStateFindManyArgs>(args?: SelectSubset<T, ArbeitnowSyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArbeitnowSyncState.
     * @param {ArbeitnowSyncStateCreateArgs} args - Arguments to create a ArbeitnowSyncState.
     * @example
     * // Create one ArbeitnowSyncState
     * const ArbeitnowSyncState = await prisma.arbeitnowSyncState.create({
     *   data: {
     *     // ... data to create a ArbeitnowSyncState
     *   }
     * })
     * 
     */
    create<T extends ArbeitnowSyncStateCreateArgs>(args: SelectSubset<T, ArbeitnowSyncStateCreateArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArbeitnowSyncStates.
     * @param {ArbeitnowSyncStateCreateManyArgs} args - Arguments to create many ArbeitnowSyncStates.
     * @example
     * // Create many ArbeitnowSyncStates
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArbeitnowSyncStateCreateManyArgs>(args?: SelectSubset<T, ArbeitnowSyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArbeitnowSyncStates and returns the data saved in the database.
     * @param {ArbeitnowSyncStateCreateManyAndReturnArgs} args - Arguments to create many ArbeitnowSyncStates.
     * @example
     * // Create many ArbeitnowSyncStates
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArbeitnowSyncStates and only return the `id`
     * const arbeitnowSyncStateWithIdOnly = await prisma.arbeitnowSyncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArbeitnowSyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, ArbeitnowSyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArbeitnowSyncState.
     * @param {ArbeitnowSyncStateDeleteArgs} args - Arguments to delete one ArbeitnowSyncState.
     * @example
     * // Delete one ArbeitnowSyncState
     * const ArbeitnowSyncState = await prisma.arbeitnowSyncState.delete({
     *   where: {
     *     // ... filter to delete one ArbeitnowSyncState
     *   }
     * })
     * 
     */
    delete<T extends ArbeitnowSyncStateDeleteArgs>(args: SelectSubset<T, ArbeitnowSyncStateDeleteArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArbeitnowSyncState.
     * @param {ArbeitnowSyncStateUpdateArgs} args - Arguments to update one ArbeitnowSyncState.
     * @example
     * // Update one ArbeitnowSyncState
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArbeitnowSyncStateUpdateArgs>(args: SelectSubset<T, ArbeitnowSyncStateUpdateArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArbeitnowSyncStates.
     * @param {ArbeitnowSyncStateDeleteManyArgs} args - Arguments to filter ArbeitnowSyncStates to delete.
     * @example
     * // Delete a few ArbeitnowSyncStates
     * const { count } = await prisma.arbeitnowSyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArbeitnowSyncStateDeleteManyArgs>(args?: SelectSubset<T, ArbeitnowSyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArbeitnowSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArbeitnowSyncStates
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArbeitnowSyncStateUpdateManyArgs>(args: SelectSubset<T, ArbeitnowSyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArbeitnowSyncStates and returns the data updated in the database.
     * @param {ArbeitnowSyncStateUpdateManyAndReturnArgs} args - Arguments to update many ArbeitnowSyncStates.
     * @example
     * // Update many ArbeitnowSyncStates
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArbeitnowSyncStates and only return the `id`
     * const arbeitnowSyncStateWithIdOnly = await prisma.arbeitnowSyncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArbeitnowSyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, ArbeitnowSyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArbeitnowSyncState.
     * @param {ArbeitnowSyncStateUpsertArgs} args - Arguments to update or create a ArbeitnowSyncState.
     * @example
     * // Update or create a ArbeitnowSyncState
     * const arbeitnowSyncState = await prisma.arbeitnowSyncState.upsert({
     *   create: {
     *     // ... data to create a ArbeitnowSyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArbeitnowSyncState we want to update
     *   }
     * })
     */
    upsert<T extends ArbeitnowSyncStateUpsertArgs>(args: SelectSubset<T, ArbeitnowSyncStateUpsertArgs<ExtArgs>>): Prisma__ArbeitnowSyncStateClient<$Result.GetResult<Prisma.$ArbeitnowSyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArbeitnowSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateCountArgs} args - Arguments to filter ArbeitnowSyncStates to count.
     * @example
     * // Count the number of ArbeitnowSyncStates
     * const count = await prisma.arbeitnowSyncState.count({
     *   where: {
     *     // ... the filter for the ArbeitnowSyncStates we want to count
     *   }
     * })
    **/
    count<T extends ArbeitnowSyncStateCountArgs>(
      args?: Subset<T, ArbeitnowSyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArbeitnowSyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArbeitnowSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArbeitnowSyncStateAggregateArgs>(args: Subset<T, ArbeitnowSyncStateAggregateArgs>): Prisma.PrismaPromise<GetArbeitnowSyncStateAggregateType<T>>

    /**
     * Group by ArbeitnowSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbeitnowSyncStateGroupByArgs} args - Group by arguments.
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
      T extends ArbeitnowSyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArbeitnowSyncStateGroupByArgs['orderBy'] }
        : { orderBy?: ArbeitnowSyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArbeitnowSyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArbeitnowSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArbeitnowSyncState model
   */
  readonly fields: ArbeitnowSyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArbeitnowSyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArbeitnowSyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ArbeitnowSyncState model
   */
  interface ArbeitnowSyncStateFieldRefs {
    readonly id: FieldRef<"ArbeitnowSyncState", 'String'>
    readonly lastSyncTimestamp: FieldRef<"ArbeitnowSyncState", 'DateTime'>
    readonly lastPage: FieldRef<"ArbeitnowSyncState", 'Int'>
    readonly status: FieldRef<"ArbeitnowSyncState", 'ExtractionStatus'>
    readonly lastRunAt: FieldRef<"ArbeitnowSyncState", 'DateTime'>
    readonly lastError: FieldRef<"ArbeitnowSyncState", 'String'>
    readonly updatedAt: FieldRef<"ArbeitnowSyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArbeitnowSyncState findUnique
   */
  export type ArbeitnowSyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowSyncState to fetch.
     */
    where: ArbeitnowSyncStateWhereUniqueInput
  }

  /**
   * ArbeitnowSyncState findUniqueOrThrow
   */
  export type ArbeitnowSyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowSyncState to fetch.
     */
    where: ArbeitnowSyncStateWhereUniqueInput
  }

  /**
   * ArbeitnowSyncState findFirst
   */
  export type ArbeitnowSyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowSyncState to fetch.
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowSyncStates to fetch.
     */
    orderBy?: ArbeitnowSyncStateOrderByWithRelationInput | ArbeitnowSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArbeitnowSyncStates.
     */
    cursor?: ArbeitnowSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbeitnowSyncStates.
     */
    distinct?: ArbeitnowSyncStateScalarFieldEnum | ArbeitnowSyncStateScalarFieldEnum[]
  }

  /**
   * ArbeitnowSyncState findFirstOrThrow
   */
  export type ArbeitnowSyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowSyncState to fetch.
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowSyncStates to fetch.
     */
    orderBy?: ArbeitnowSyncStateOrderByWithRelationInput | ArbeitnowSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArbeitnowSyncStates.
     */
    cursor?: ArbeitnowSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbeitnowSyncStates.
     */
    distinct?: ArbeitnowSyncStateScalarFieldEnum | ArbeitnowSyncStateScalarFieldEnum[]
  }

  /**
   * ArbeitnowSyncState findMany
   */
  export type ArbeitnowSyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which ArbeitnowSyncStates to fetch.
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArbeitnowSyncStates to fetch.
     */
    orderBy?: ArbeitnowSyncStateOrderByWithRelationInput | ArbeitnowSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArbeitnowSyncStates.
     */
    cursor?: ArbeitnowSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArbeitnowSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArbeitnowSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArbeitnowSyncStates.
     */
    distinct?: ArbeitnowSyncStateScalarFieldEnum | ArbeitnowSyncStateScalarFieldEnum[]
  }

  /**
   * ArbeitnowSyncState create
   */
  export type ArbeitnowSyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a ArbeitnowSyncState.
     */
    data: XOR<ArbeitnowSyncStateCreateInput, ArbeitnowSyncStateUncheckedCreateInput>
  }

  /**
   * ArbeitnowSyncState createMany
   */
  export type ArbeitnowSyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArbeitnowSyncStates.
     */
    data: ArbeitnowSyncStateCreateManyInput | ArbeitnowSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArbeitnowSyncState createManyAndReturn
   */
  export type ArbeitnowSyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many ArbeitnowSyncStates.
     */
    data: ArbeitnowSyncStateCreateManyInput | ArbeitnowSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArbeitnowSyncState update
   */
  export type ArbeitnowSyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a ArbeitnowSyncState.
     */
    data: XOR<ArbeitnowSyncStateUpdateInput, ArbeitnowSyncStateUncheckedUpdateInput>
    /**
     * Choose, which ArbeitnowSyncState to update.
     */
    where: ArbeitnowSyncStateWhereUniqueInput
  }

  /**
   * ArbeitnowSyncState updateMany
   */
  export type ArbeitnowSyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArbeitnowSyncStates.
     */
    data: XOR<ArbeitnowSyncStateUpdateManyMutationInput, ArbeitnowSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which ArbeitnowSyncStates to update
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * Limit how many ArbeitnowSyncStates to update.
     */
    limit?: number
  }

  /**
   * ArbeitnowSyncState updateManyAndReturn
   */
  export type ArbeitnowSyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * The data used to update ArbeitnowSyncStates.
     */
    data: XOR<ArbeitnowSyncStateUpdateManyMutationInput, ArbeitnowSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which ArbeitnowSyncStates to update
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * Limit how many ArbeitnowSyncStates to update.
     */
    limit?: number
  }

  /**
   * ArbeitnowSyncState upsert
   */
  export type ArbeitnowSyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the ArbeitnowSyncState to update in case it exists.
     */
    where: ArbeitnowSyncStateWhereUniqueInput
    /**
     * In case the ArbeitnowSyncState found by the `where` argument doesn't exist, create a new ArbeitnowSyncState with this data.
     */
    create: XOR<ArbeitnowSyncStateCreateInput, ArbeitnowSyncStateUncheckedCreateInput>
    /**
     * In case the ArbeitnowSyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArbeitnowSyncStateUpdateInput, ArbeitnowSyncStateUncheckedUpdateInput>
  }

  /**
   * ArbeitnowSyncState delete
   */
  export type ArbeitnowSyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
    /**
     * Filter which ArbeitnowSyncState to delete.
     */
    where: ArbeitnowSyncStateWhereUniqueInput
  }

  /**
   * ArbeitnowSyncState deleteMany
   */
  export type ArbeitnowSyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArbeitnowSyncStates to delete
     */
    where?: ArbeitnowSyncStateWhereInput
    /**
     * Limit how many ArbeitnowSyncStates to delete.
     */
    limit?: number
  }

  /**
   * ArbeitnowSyncState without action
   */
  export type ArbeitnowSyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbeitnowSyncState
     */
    select?: ArbeitnowSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArbeitnowSyncState
     */
    omit?: ArbeitnowSyncStateOmit<ExtArgs> | null
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


  export const ArbeitnowScrapedJobScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    title: 'title',
    companyName: 'companyName',
    url: 'url',
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

  export type ArbeitnowScrapedJobScalarFieldEnum = (typeof ArbeitnowScrapedJobScalarFieldEnum)[keyof typeof ArbeitnowScrapedJobScalarFieldEnum]


  export const ArbeitnowSyncStateScalarFieldEnum: {
    id: 'id',
    lastSyncTimestamp: 'lastSyncTimestamp',
    lastPage: 'lastPage',
    status: 'status',
    lastRunAt: 'lastRunAt',
    lastError: 'lastError',
    updatedAt: 'updatedAt'
  };

  export type ArbeitnowSyncStateScalarFieldEnum = (typeof ArbeitnowSyncStateScalarFieldEnum)[keyof typeof ArbeitnowSyncStateScalarFieldEnum]


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
   * Reference to a field of type 'ExtractionStatus'
   */
  export type EnumExtractionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractionStatus'>
    


  /**
   * Reference to a field of type 'ExtractionStatus[]'
   */
  export type ListEnumExtractionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ArbeitnowScrapedJobWhereInput = {
    AND?: ArbeitnowScrapedJobWhereInput | ArbeitnowScrapedJobWhereInput[]
    OR?: ArbeitnowScrapedJobWhereInput[]
    NOT?: ArbeitnowScrapedJobWhereInput | ArbeitnowScrapedJobWhereInput[]
    id?: StringFilter<"ArbeitnowScrapedJob"> | string
    externalId?: StringFilter<"ArbeitnowScrapedJob"> | string
    title?: StringFilter<"ArbeitnowScrapedJob"> | string
    companyName?: StringFilter<"ArbeitnowScrapedJob"> | string
    url?: StringFilter<"ArbeitnowScrapedJob"> | string
    location?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    remoteType?: StringFilter<"ArbeitnowScrapedJob"> | string
    salaryMin?: FloatNullableFilter<"ArbeitnowScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"ArbeitnowScrapedJob"> | number | null
    currency?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    contractType?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    rawDescription?: StringFilter<"ArbeitnowScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"ArbeitnowScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"ArbeitnowScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"ArbeitnowScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"ArbeitnowScrapedJob"> | number
    lastError?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"ArbeitnowScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"ArbeitnowScrapedJob"> | Date | string
  }

  export type ArbeitnowScrapedJobOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    url?: SortOrder
    location?: SortOrderInput | SortOrder
    remoteType?: SortOrder
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

  export type ArbeitnowScrapedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    url?: string
    AND?: ArbeitnowScrapedJobWhereInput | ArbeitnowScrapedJobWhereInput[]
    OR?: ArbeitnowScrapedJobWhereInput[]
    NOT?: ArbeitnowScrapedJobWhereInput | ArbeitnowScrapedJobWhereInput[]
    title?: StringFilter<"ArbeitnowScrapedJob"> | string
    companyName?: StringFilter<"ArbeitnowScrapedJob"> | string
    location?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    remoteType?: StringFilter<"ArbeitnowScrapedJob"> | string
    salaryMin?: FloatNullableFilter<"ArbeitnowScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"ArbeitnowScrapedJob"> | number | null
    currency?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    contractType?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    rawDescription?: StringFilter<"ArbeitnowScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"ArbeitnowScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"ArbeitnowScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"ArbeitnowScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"ArbeitnowScrapedJob"> | number
    lastError?: StringNullableFilter<"ArbeitnowScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"ArbeitnowScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"ArbeitnowScrapedJob"> | Date | string
  }, "id" | "externalId" | "url">

  export type ArbeitnowScrapedJobOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    url?: SortOrder
    location?: SortOrderInput | SortOrder
    remoteType?: SortOrder
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
    _count?: ArbeitnowScrapedJobCountOrderByAggregateInput
    _avg?: ArbeitnowScrapedJobAvgOrderByAggregateInput
    _max?: ArbeitnowScrapedJobMaxOrderByAggregateInput
    _min?: ArbeitnowScrapedJobMinOrderByAggregateInput
    _sum?: ArbeitnowScrapedJobSumOrderByAggregateInput
  }

  export type ArbeitnowScrapedJobScalarWhereWithAggregatesInput = {
    AND?: ArbeitnowScrapedJobScalarWhereWithAggregatesInput | ArbeitnowScrapedJobScalarWhereWithAggregatesInput[]
    OR?: ArbeitnowScrapedJobScalarWhereWithAggregatesInput[]
    NOT?: ArbeitnowScrapedJobScalarWhereWithAggregatesInput | ArbeitnowScrapedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    externalId?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    title?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    companyName?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    url?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    location?: StringNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | string | null
    remoteType?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    salaryMin?: FloatNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | number | null
    currency?: StringNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | string | null
    rawDescription?: StringWithAggregatesFilter<"ArbeitnowScrapedJob"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | Date | string | null
    tags?: StringNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusWithAggregatesFilter<"ArbeitnowScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | Date | string | null
    retryCount?: IntWithAggregatesFilter<"ArbeitnowScrapedJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"ArbeitnowScrapedJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ArbeitnowScrapedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArbeitnowScrapedJob"> | Date | string
  }

  export type ArbeitnowSyncStateWhereInput = {
    AND?: ArbeitnowSyncStateWhereInput | ArbeitnowSyncStateWhereInput[]
    OR?: ArbeitnowSyncStateWhereInput[]
    NOT?: ArbeitnowSyncStateWhereInput | ArbeitnowSyncStateWhereInput[]
    id?: StringFilter<"ArbeitnowSyncState"> | string
    lastSyncTimestamp?: DateTimeNullableFilter<"ArbeitnowSyncState"> | Date | string | null
    lastPage?: IntFilter<"ArbeitnowSyncState"> | number
    status?: EnumExtractionStatusFilter<"ArbeitnowSyncState"> | $Enums.ExtractionStatus
    lastRunAt?: DateTimeNullableFilter<"ArbeitnowSyncState"> | Date | string | null
    lastError?: StringNullableFilter<"ArbeitnowSyncState"> | string | null
    updatedAt?: DateTimeFilter<"ArbeitnowSyncState"> | Date | string
  }

  export type ArbeitnowSyncStateOrderByWithRelationInput = {
    id?: SortOrder
    lastSyncTimestamp?: SortOrderInput | SortOrder
    lastPage?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type ArbeitnowSyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArbeitnowSyncStateWhereInput | ArbeitnowSyncStateWhereInput[]
    OR?: ArbeitnowSyncStateWhereInput[]
    NOT?: ArbeitnowSyncStateWhereInput | ArbeitnowSyncStateWhereInput[]
    lastSyncTimestamp?: DateTimeNullableFilter<"ArbeitnowSyncState"> | Date | string | null
    lastPage?: IntFilter<"ArbeitnowSyncState"> | number
    status?: EnumExtractionStatusFilter<"ArbeitnowSyncState"> | $Enums.ExtractionStatus
    lastRunAt?: DateTimeNullableFilter<"ArbeitnowSyncState"> | Date | string | null
    lastError?: StringNullableFilter<"ArbeitnowSyncState"> | string | null
    updatedAt?: DateTimeFilter<"ArbeitnowSyncState"> | Date | string
  }, "id">

  export type ArbeitnowSyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    lastSyncTimestamp?: SortOrderInput | SortOrder
    lastPage?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ArbeitnowSyncStateCountOrderByAggregateInput
    _avg?: ArbeitnowSyncStateAvgOrderByAggregateInput
    _max?: ArbeitnowSyncStateMaxOrderByAggregateInput
    _min?: ArbeitnowSyncStateMinOrderByAggregateInput
    _sum?: ArbeitnowSyncStateSumOrderByAggregateInput
  }

  export type ArbeitnowSyncStateScalarWhereWithAggregatesInput = {
    AND?: ArbeitnowSyncStateScalarWhereWithAggregatesInput | ArbeitnowSyncStateScalarWhereWithAggregatesInput[]
    OR?: ArbeitnowSyncStateScalarWhereWithAggregatesInput[]
    NOT?: ArbeitnowSyncStateScalarWhereWithAggregatesInput | ArbeitnowSyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArbeitnowSyncState"> | string
    lastSyncTimestamp?: DateTimeNullableWithAggregatesFilter<"ArbeitnowSyncState"> | Date | string | null
    lastPage?: IntWithAggregatesFilter<"ArbeitnowSyncState"> | number
    status?: EnumExtractionStatusWithAggregatesFilter<"ArbeitnowSyncState"> | $Enums.ExtractionStatus
    lastRunAt?: DateTimeNullableWithAggregatesFilter<"ArbeitnowSyncState"> | Date | string | null
    lastError?: StringNullableWithAggregatesFilter<"ArbeitnowSyncState"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ArbeitnowSyncState"> | Date | string
  }

  export type ArbeitnowScrapedJobCreateInput = {
    id?: string
    externalId: string
    title: string
    companyName: string
    url: string
    location?: string | null
    remoteType?: string
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

  export type ArbeitnowScrapedJobUncheckedCreateInput = {
    id?: string
    externalId: string
    title: string
    companyName: string
    url: string
    location?: string | null
    remoteType?: string
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

  export type ArbeitnowScrapedJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: StringFieldUpdateOperationsInput | string
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

  export type ArbeitnowScrapedJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: StringFieldUpdateOperationsInput | string
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

  export type ArbeitnowScrapedJobCreateManyInput = {
    id?: string
    externalId: string
    title: string
    companyName: string
    url: string
    location?: string | null
    remoteType?: string
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

  export type ArbeitnowScrapedJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: StringFieldUpdateOperationsInput | string
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

  export type ArbeitnowScrapedJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: StringFieldUpdateOperationsInput | string
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

  export type ArbeitnowSyncStateCreateInput = {
    id?: string
    lastSyncTimestamp?: Date | string | null
    lastPage?: number
    status?: $Enums.ExtractionStatus
    lastRunAt?: Date | string | null
    lastError?: string | null
    updatedAt?: Date | string
  }

  export type ArbeitnowSyncStateUncheckedCreateInput = {
    id?: string
    lastSyncTimestamp?: Date | string | null
    lastPage?: number
    status?: $Enums.ExtractionStatus
    lastRunAt?: Date | string | null
    lastError?: string | null
    updatedAt?: Date | string
  }

  export type ArbeitnowSyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSyncTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPage?: IntFieldUpdateOperationsInput | number
    status?: EnumExtractionStatusFieldUpdateOperationsInput | $Enums.ExtractionStatus
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArbeitnowSyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSyncTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPage?: IntFieldUpdateOperationsInput | number
    status?: EnumExtractionStatusFieldUpdateOperationsInput | $Enums.ExtractionStatus
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArbeitnowSyncStateCreateManyInput = {
    id?: string
    lastSyncTimestamp?: Date | string | null
    lastPage?: number
    status?: $Enums.ExtractionStatus
    lastRunAt?: Date | string | null
    lastError?: string | null
    updatedAt?: Date | string
  }

  export type ArbeitnowSyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSyncTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPage?: IntFieldUpdateOperationsInput | number
    status?: EnumExtractionStatusFieldUpdateOperationsInput | $Enums.ExtractionStatus
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArbeitnowSyncStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSyncTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPage?: IntFieldUpdateOperationsInput | number
    status?: EnumExtractionStatusFieldUpdateOperationsInput | $Enums.ExtractionStatus
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ArbeitnowScrapedJobCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    url?: SortOrder
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

  export type ArbeitnowScrapedJobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type ArbeitnowScrapedJobMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    url?: SortOrder
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

  export type ArbeitnowScrapedJobMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    url?: SortOrder
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

  export type ArbeitnowScrapedJobSumOrderByAggregateInput = {
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

  export type EnumExtractionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionStatus | EnumExtractionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractionStatusFilter<$PrismaModel> | $Enums.ExtractionStatus
  }

  export type ArbeitnowSyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    lastSyncTimestamp?: SortOrder
    lastPage?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastError?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArbeitnowSyncStateAvgOrderByAggregateInput = {
    lastPage?: SortOrder
  }

  export type ArbeitnowSyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    lastSyncTimestamp?: SortOrder
    lastPage?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastError?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArbeitnowSyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    lastSyncTimestamp?: SortOrder
    lastPage?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastError?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArbeitnowSyncStateSumOrderByAggregateInput = {
    lastPage?: SortOrder
  }

  export type EnumExtractionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionStatus | EnumExtractionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExtractionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtractionStatusFilter<$PrismaModel>
    _max?: NestedEnumExtractionStatusFilter<$PrismaModel>
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

  export type EnumExtractionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExtractionStatus
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

  export type NestedEnumExtractionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionStatus | EnumExtractionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractionStatusFilter<$PrismaModel> | $Enums.ExtractionStatus
  }

  export type NestedEnumExtractionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionStatus | EnumExtractionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractionStatus[] | ListEnumExtractionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExtractionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtractionStatusFilter<$PrismaModel>
    _max?: NestedEnumExtractionStatusFilter<$PrismaModel>
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