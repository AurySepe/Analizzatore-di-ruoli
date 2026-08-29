
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
 * Model JobicyScrapedJob
 * 
 */
export type JobicyScrapedJob = $Result.DefaultSelection<Prisma.$JobicyScrapedJobPayload>
/**
 * Model JobicySyncState
 * 
 */
export type JobicySyncState = $Result.DefaultSelection<Prisma.$JobicySyncStatePayload>

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
 * // Fetch zero or more JobicyScrapedJobs
 * const jobicyScrapedJobs = await prisma.jobicyScrapedJob.findMany()
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
   * // Fetch zero or more JobicyScrapedJobs
   * const jobicyScrapedJobs = await prisma.jobicyScrapedJob.findMany()
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
   * `prisma.jobicyScrapedJob`: Exposes CRUD operations for the **JobicyScrapedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobicyScrapedJobs
    * const jobicyScrapedJobs = await prisma.jobicyScrapedJob.findMany()
    * ```
    */
  get jobicyScrapedJob(): Prisma.JobicyScrapedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobicySyncState`: Exposes CRUD operations for the **JobicySyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobicySyncStates
    * const jobicySyncStates = await prisma.jobicySyncState.findMany()
    * ```
    */
  get jobicySyncState(): Prisma.JobicySyncStateDelegate<ExtArgs, ClientOptions>;
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
    JobicyScrapedJob: 'JobicyScrapedJob',
    JobicySyncState: 'JobicySyncState'
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
      modelProps: "jobicyScrapedJob" | "jobicySyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JobicyScrapedJob: {
        payload: Prisma.$JobicyScrapedJobPayload<ExtArgs>
        fields: Prisma.JobicyScrapedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobicyScrapedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobicyScrapedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>
          }
          findFirst: {
            args: Prisma.JobicyScrapedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobicyScrapedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>
          }
          findMany: {
            args: Prisma.JobicyScrapedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>[]
          }
          create: {
            args: Prisma.JobicyScrapedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>
          }
          createMany: {
            args: Prisma.JobicyScrapedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobicyScrapedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>[]
          }
          delete: {
            args: Prisma.JobicyScrapedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>
          }
          update: {
            args: Prisma.JobicyScrapedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>
          }
          deleteMany: {
            args: Prisma.JobicyScrapedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobicyScrapedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobicyScrapedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>[]
          }
          upsert: {
            args: Prisma.JobicyScrapedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicyScrapedJobPayload>
          }
          aggregate: {
            args: Prisma.JobicyScrapedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobicyScrapedJob>
          }
          groupBy: {
            args: Prisma.JobicyScrapedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobicyScrapedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobicyScrapedJobCountArgs<ExtArgs>
            result: $Utils.Optional<JobicyScrapedJobCountAggregateOutputType> | number
          }
        }
      }
      JobicySyncState: {
        payload: Prisma.$JobicySyncStatePayload<ExtArgs>
        fields: Prisma.JobicySyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobicySyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobicySyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>
          }
          findFirst: {
            args: Prisma.JobicySyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobicySyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>
          }
          findMany: {
            args: Prisma.JobicySyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>[]
          }
          create: {
            args: Prisma.JobicySyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>
          }
          createMany: {
            args: Prisma.JobicySyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobicySyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>[]
          }
          delete: {
            args: Prisma.JobicySyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>
          }
          update: {
            args: Prisma.JobicySyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>
          }
          deleteMany: {
            args: Prisma.JobicySyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobicySyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobicySyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>[]
          }
          upsert: {
            args: Prisma.JobicySyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobicySyncStatePayload>
          }
          aggregate: {
            args: Prisma.JobicySyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobicySyncState>
          }
          groupBy: {
            args: Prisma.JobicySyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobicySyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobicySyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<JobicySyncStateCountAggregateOutputType> | number
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
    jobicyScrapedJob?: JobicyScrapedJobOmit
    jobicySyncState?: JobicySyncStateOmit
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
   * Model JobicyScrapedJob
   */

  export type AggregateJobicyScrapedJob = {
    _count: JobicyScrapedJobCountAggregateOutputType | null
    _avg: JobicyScrapedJobAvgAggregateOutputType | null
    _sum: JobicyScrapedJobSumAggregateOutputType | null
    _min: JobicyScrapedJobMinAggregateOutputType | null
    _max: JobicyScrapedJobMaxAggregateOutputType | null
  }

  export type JobicyScrapedJobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type JobicyScrapedJobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type JobicyScrapedJobMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    url: string | null
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

  export type JobicyScrapedJobMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    url: string | null
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

  export type JobicyScrapedJobCountAggregateOutputType = {
    id: number
    externalId: number
    url: number
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


  export type JobicyScrapedJobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type JobicyScrapedJobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type JobicyScrapedJobMinAggregateInputType = {
    id?: true
    externalId?: true
    url?: true
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

  export type JobicyScrapedJobMaxAggregateInputType = {
    id?: true
    externalId?: true
    url?: true
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

  export type JobicyScrapedJobCountAggregateInputType = {
    id?: true
    externalId?: true
    url?: true
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

  export type JobicyScrapedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobicyScrapedJob to aggregate.
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicyScrapedJobs to fetch.
     */
    orderBy?: JobicyScrapedJobOrderByWithRelationInput | JobicyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobicyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobicyScrapedJobs
    **/
    _count?: true | JobicyScrapedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobicyScrapedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobicyScrapedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobicyScrapedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobicyScrapedJobMaxAggregateInputType
  }

  export type GetJobicyScrapedJobAggregateType<T extends JobicyScrapedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateJobicyScrapedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobicyScrapedJob[P]>
      : GetScalarType<T[P], AggregateJobicyScrapedJob[P]>
  }




  export type JobicyScrapedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobicyScrapedJobWhereInput
    orderBy?: JobicyScrapedJobOrderByWithAggregationInput | JobicyScrapedJobOrderByWithAggregationInput[]
    by: JobicyScrapedJobScalarFieldEnum[] | JobicyScrapedJobScalarFieldEnum
    having?: JobicyScrapedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobicyScrapedJobCountAggregateInputType | true
    _avg?: JobicyScrapedJobAvgAggregateInputType
    _sum?: JobicyScrapedJobSumAggregateInputType
    _min?: JobicyScrapedJobMinAggregateInputType
    _max?: JobicyScrapedJobMaxAggregateInputType
  }

  export type JobicyScrapedJobGroupByOutputType = {
    id: string
    externalId: string
    url: string
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
    _count: JobicyScrapedJobCountAggregateOutputType | null
    _avg: JobicyScrapedJobAvgAggregateOutputType | null
    _sum: JobicyScrapedJobSumAggregateOutputType | null
    _min: JobicyScrapedJobMinAggregateOutputType | null
    _max: JobicyScrapedJobMaxAggregateOutputType | null
  }

  type GetJobicyScrapedJobGroupByPayload<T extends JobicyScrapedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobicyScrapedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobicyScrapedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobicyScrapedJobGroupByOutputType[P]>
            : GetScalarType<T[P], JobicyScrapedJobGroupByOutputType[P]>
        }
      >
    >


  export type JobicyScrapedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    url?: boolean
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
  }, ExtArgs["result"]["jobicyScrapedJob"]>

  export type JobicyScrapedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    url?: boolean
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
  }, ExtArgs["result"]["jobicyScrapedJob"]>

  export type JobicyScrapedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    url?: boolean
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
  }, ExtArgs["result"]["jobicyScrapedJob"]>

  export type JobicyScrapedJobSelectScalar = {
    id?: boolean
    externalId?: boolean
    url?: boolean
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

  export type JobicyScrapedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "url" | "title" | "companyName" | "location" | "remoteType" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "tags" | "outboxStatus" | "publishedAt" | "retryCount" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["jobicyScrapedJob"]>

  export type $JobicyScrapedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobicyScrapedJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      url: string
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
    }, ExtArgs["result"]["jobicyScrapedJob"]>
    composites: {}
  }

  type JobicyScrapedJobGetPayload<S extends boolean | null | undefined | JobicyScrapedJobDefaultArgs> = $Result.GetResult<Prisma.$JobicyScrapedJobPayload, S>

  type JobicyScrapedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobicyScrapedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobicyScrapedJobCountAggregateInputType | true
    }

  export interface JobicyScrapedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobicyScrapedJob'], meta: { name: 'JobicyScrapedJob' } }
    /**
     * Find zero or one JobicyScrapedJob that matches the filter.
     * @param {JobicyScrapedJobFindUniqueArgs} args - Arguments to find a JobicyScrapedJob
     * @example
     * // Get one JobicyScrapedJob
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobicyScrapedJobFindUniqueArgs>(args: SelectSubset<T, JobicyScrapedJobFindUniqueArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobicyScrapedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobicyScrapedJobFindUniqueOrThrowArgs} args - Arguments to find a JobicyScrapedJob
     * @example
     * // Get one JobicyScrapedJob
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobicyScrapedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobicyScrapedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobicyScrapedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobFindFirstArgs} args - Arguments to find a JobicyScrapedJob
     * @example
     * // Get one JobicyScrapedJob
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobicyScrapedJobFindFirstArgs>(args?: SelectSubset<T, JobicyScrapedJobFindFirstArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobicyScrapedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobFindFirstOrThrowArgs} args - Arguments to find a JobicyScrapedJob
     * @example
     * // Get one JobicyScrapedJob
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobicyScrapedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobicyScrapedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobicyScrapedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobicyScrapedJobs
     * const jobicyScrapedJobs = await prisma.jobicyScrapedJob.findMany()
     * 
     * // Get first 10 JobicyScrapedJobs
     * const jobicyScrapedJobs = await prisma.jobicyScrapedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobicyScrapedJobWithIdOnly = await prisma.jobicyScrapedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobicyScrapedJobFindManyArgs>(args?: SelectSubset<T, JobicyScrapedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobicyScrapedJob.
     * @param {JobicyScrapedJobCreateArgs} args - Arguments to create a JobicyScrapedJob.
     * @example
     * // Create one JobicyScrapedJob
     * const JobicyScrapedJob = await prisma.jobicyScrapedJob.create({
     *   data: {
     *     // ... data to create a JobicyScrapedJob
     *   }
     * })
     * 
     */
    create<T extends JobicyScrapedJobCreateArgs>(args: SelectSubset<T, JobicyScrapedJobCreateArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobicyScrapedJobs.
     * @param {JobicyScrapedJobCreateManyArgs} args - Arguments to create many JobicyScrapedJobs.
     * @example
     * // Create many JobicyScrapedJobs
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobicyScrapedJobCreateManyArgs>(args?: SelectSubset<T, JobicyScrapedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobicyScrapedJobs and returns the data saved in the database.
     * @param {JobicyScrapedJobCreateManyAndReturnArgs} args - Arguments to create many JobicyScrapedJobs.
     * @example
     * // Create many JobicyScrapedJobs
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobicyScrapedJobs and only return the `id`
     * const jobicyScrapedJobWithIdOnly = await prisma.jobicyScrapedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobicyScrapedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobicyScrapedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobicyScrapedJob.
     * @param {JobicyScrapedJobDeleteArgs} args - Arguments to delete one JobicyScrapedJob.
     * @example
     * // Delete one JobicyScrapedJob
     * const JobicyScrapedJob = await prisma.jobicyScrapedJob.delete({
     *   where: {
     *     // ... filter to delete one JobicyScrapedJob
     *   }
     * })
     * 
     */
    delete<T extends JobicyScrapedJobDeleteArgs>(args: SelectSubset<T, JobicyScrapedJobDeleteArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobicyScrapedJob.
     * @param {JobicyScrapedJobUpdateArgs} args - Arguments to update one JobicyScrapedJob.
     * @example
     * // Update one JobicyScrapedJob
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobicyScrapedJobUpdateArgs>(args: SelectSubset<T, JobicyScrapedJobUpdateArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobicyScrapedJobs.
     * @param {JobicyScrapedJobDeleteManyArgs} args - Arguments to filter JobicyScrapedJobs to delete.
     * @example
     * // Delete a few JobicyScrapedJobs
     * const { count } = await prisma.jobicyScrapedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobicyScrapedJobDeleteManyArgs>(args?: SelectSubset<T, JobicyScrapedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobicyScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobicyScrapedJobs
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobicyScrapedJobUpdateManyArgs>(args: SelectSubset<T, JobicyScrapedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobicyScrapedJobs and returns the data updated in the database.
     * @param {JobicyScrapedJobUpdateManyAndReturnArgs} args - Arguments to update many JobicyScrapedJobs.
     * @example
     * // Update many JobicyScrapedJobs
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobicyScrapedJobs and only return the `id`
     * const jobicyScrapedJobWithIdOnly = await prisma.jobicyScrapedJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobicyScrapedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobicyScrapedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobicyScrapedJob.
     * @param {JobicyScrapedJobUpsertArgs} args - Arguments to update or create a JobicyScrapedJob.
     * @example
     * // Update or create a JobicyScrapedJob
     * const jobicyScrapedJob = await prisma.jobicyScrapedJob.upsert({
     *   create: {
     *     // ... data to create a JobicyScrapedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobicyScrapedJob we want to update
     *   }
     * })
     */
    upsert<T extends JobicyScrapedJobUpsertArgs>(args: SelectSubset<T, JobicyScrapedJobUpsertArgs<ExtArgs>>): Prisma__JobicyScrapedJobClient<$Result.GetResult<Prisma.$JobicyScrapedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobicyScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobCountArgs} args - Arguments to filter JobicyScrapedJobs to count.
     * @example
     * // Count the number of JobicyScrapedJobs
     * const count = await prisma.jobicyScrapedJob.count({
     *   where: {
     *     // ... the filter for the JobicyScrapedJobs we want to count
     *   }
     * })
    **/
    count<T extends JobicyScrapedJobCountArgs>(
      args?: Subset<T, JobicyScrapedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobicyScrapedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobicyScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobicyScrapedJobAggregateArgs>(args: Subset<T, JobicyScrapedJobAggregateArgs>): Prisma.PrismaPromise<GetJobicyScrapedJobAggregateType<T>>

    /**
     * Group by JobicyScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicyScrapedJobGroupByArgs} args - Group by arguments.
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
      T extends JobicyScrapedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobicyScrapedJobGroupByArgs['orderBy'] }
        : { orderBy?: JobicyScrapedJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobicyScrapedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobicyScrapedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobicyScrapedJob model
   */
  readonly fields: JobicyScrapedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobicyScrapedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobicyScrapedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the JobicyScrapedJob model
   */
  interface JobicyScrapedJobFieldRefs {
    readonly id: FieldRef<"JobicyScrapedJob", 'String'>
    readonly externalId: FieldRef<"JobicyScrapedJob", 'String'>
    readonly url: FieldRef<"JobicyScrapedJob", 'String'>
    readonly title: FieldRef<"JobicyScrapedJob", 'String'>
    readonly companyName: FieldRef<"JobicyScrapedJob", 'String'>
    readonly location: FieldRef<"JobicyScrapedJob", 'String'>
    readonly remoteType: FieldRef<"JobicyScrapedJob", 'String'>
    readonly salaryMin: FieldRef<"JobicyScrapedJob", 'Float'>
    readonly salaryMax: FieldRef<"JobicyScrapedJob", 'Float'>
    readonly currency: FieldRef<"JobicyScrapedJob", 'String'>
    readonly contractType: FieldRef<"JobicyScrapedJob", 'String'>
    readonly rawDescription: FieldRef<"JobicyScrapedJob", 'String'>
    readonly descriptionMarkdown: FieldRef<"JobicyScrapedJob", 'String'>
    readonly datePosted: FieldRef<"JobicyScrapedJob", 'DateTime'>
    readonly tags: FieldRef<"JobicyScrapedJob", 'String'>
    readonly outboxStatus: FieldRef<"JobicyScrapedJob", 'OutboxStatus'>
    readonly publishedAt: FieldRef<"JobicyScrapedJob", 'DateTime'>
    readonly retryCount: FieldRef<"JobicyScrapedJob", 'Int'>
    readonly lastError: FieldRef<"JobicyScrapedJob", 'String'>
    readonly createdAt: FieldRef<"JobicyScrapedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"JobicyScrapedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobicyScrapedJob findUnique
   */
  export type JobicyScrapedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which JobicyScrapedJob to fetch.
     */
    where: JobicyScrapedJobWhereUniqueInput
  }

  /**
   * JobicyScrapedJob findUniqueOrThrow
   */
  export type JobicyScrapedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which JobicyScrapedJob to fetch.
     */
    where: JobicyScrapedJobWhereUniqueInput
  }

  /**
   * JobicyScrapedJob findFirst
   */
  export type JobicyScrapedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which JobicyScrapedJob to fetch.
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicyScrapedJobs to fetch.
     */
    orderBy?: JobicyScrapedJobOrderByWithRelationInput | JobicyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobicyScrapedJobs.
     */
    cursor?: JobicyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobicyScrapedJobs.
     */
    distinct?: JobicyScrapedJobScalarFieldEnum | JobicyScrapedJobScalarFieldEnum[]
  }

  /**
   * JobicyScrapedJob findFirstOrThrow
   */
  export type JobicyScrapedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which JobicyScrapedJob to fetch.
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicyScrapedJobs to fetch.
     */
    orderBy?: JobicyScrapedJobOrderByWithRelationInput | JobicyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobicyScrapedJobs.
     */
    cursor?: JobicyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobicyScrapedJobs.
     */
    distinct?: JobicyScrapedJobScalarFieldEnum | JobicyScrapedJobScalarFieldEnum[]
  }

  /**
   * JobicyScrapedJob findMany
   */
  export type JobicyScrapedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which JobicyScrapedJobs to fetch.
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicyScrapedJobs to fetch.
     */
    orderBy?: JobicyScrapedJobOrderByWithRelationInput | JobicyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobicyScrapedJobs.
     */
    cursor?: JobicyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobicyScrapedJobs.
     */
    distinct?: JobicyScrapedJobScalarFieldEnum | JobicyScrapedJobScalarFieldEnum[]
  }

  /**
   * JobicyScrapedJob create
   */
  export type JobicyScrapedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to create a JobicyScrapedJob.
     */
    data: XOR<JobicyScrapedJobCreateInput, JobicyScrapedJobUncheckedCreateInput>
  }

  /**
   * JobicyScrapedJob createMany
   */
  export type JobicyScrapedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobicyScrapedJobs.
     */
    data: JobicyScrapedJobCreateManyInput | JobicyScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobicyScrapedJob createManyAndReturn
   */
  export type JobicyScrapedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to create many JobicyScrapedJobs.
     */
    data: JobicyScrapedJobCreateManyInput | JobicyScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobicyScrapedJob update
   */
  export type JobicyScrapedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to update a JobicyScrapedJob.
     */
    data: XOR<JobicyScrapedJobUpdateInput, JobicyScrapedJobUncheckedUpdateInput>
    /**
     * Choose, which JobicyScrapedJob to update.
     */
    where: JobicyScrapedJobWhereUniqueInput
  }

  /**
   * JobicyScrapedJob updateMany
   */
  export type JobicyScrapedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobicyScrapedJobs.
     */
    data: XOR<JobicyScrapedJobUpdateManyMutationInput, JobicyScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which JobicyScrapedJobs to update
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * Limit how many JobicyScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * JobicyScrapedJob updateManyAndReturn
   */
  export type JobicyScrapedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to update JobicyScrapedJobs.
     */
    data: XOR<JobicyScrapedJobUpdateManyMutationInput, JobicyScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which JobicyScrapedJobs to update
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * Limit how many JobicyScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * JobicyScrapedJob upsert
   */
  export type JobicyScrapedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * The filter to search for the JobicyScrapedJob to update in case it exists.
     */
    where: JobicyScrapedJobWhereUniqueInput
    /**
     * In case the JobicyScrapedJob found by the `where` argument doesn't exist, create a new JobicyScrapedJob with this data.
     */
    create: XOR<JobicyScrapedJobCreateInput, JobicyScrapedJobUncheckedCreateInput>
    /**
     * In case the JobicyScrapedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobicyScrapedJobUpdateInput, JobicyScrapedJobUncheckedUpdateInput>
  }

  /**
   * JobicyScrapedJob delete
   */
  export type JobicyScrapedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter which JobicyScrapedJob to delete.
     */
    where: JobicyScrapedJobWhereUniqueInput
  }

  /**
   * JobicyScrapedJob deleteMany
   */
  export type JobicyScrapedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobicyScrapedJobs to delete
     */
    where?: JobicyScrapedJobWhereInput
    /**
     * Limit how many JobicyScrapedJobs to delete.
     */
    limit?: number
  }

  /**
   * JobicyScrapedJob without action
   */
  export type JobicyScrapedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicyScrapedJob
     */
    select?: JobicyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicyScrapedJob
     */
    omit?: JobicyScrapedJobOmit<ExtArgs> | null
  }


  /**
   * Model JobicySyncState
   */

  export type AggregateJobicySyncState = {
    _count: JobicySyncStateCountAggregateOutputType | null
    _avg: JobicySyncStateAvgAggregateOutputType | null
    _sum: JobicySyncStateSumAggregateOutputType | null
    _min: JobicySyncStateMinAggregateOutputType | null
    _max: JobicySyncStateMaxAggregateOutputType | null
  }

  export type JobicySyncStateAvgAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type JobicySyncStateSumAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type JobicySyncStateMinAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobicySyncStateMaxAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobicySyncStateCountAggregateOutputType = {
    id: number
    source: number
    lastSyncAt: number
    lastSuccessfulSyncAt: number
    itemsExtracted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobicySyncStateAvgAggregateInputType = {
    itemsExtracted?: true
  }

  export type JobicySyncStateSumAggregateInputType = {
    itemsExtracted?: true
  }

  export type JobicySyncStateMinAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobicySyncStateMaxAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobicySyncStateCountAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobicySyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobicySyncState to aggregate.
     */
    where?: JobicySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicySyncStates to fetch.
     */
    orderBy?: JobicySyncStateOrderByWithRelationInput | JobicySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobicySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobicySyncStates
    **/
    _count?: true | JobicySyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobicySyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobicySyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobicySyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobicySyncStateMaxAggregateInputType
  }

  export type GetJobicySyncStateAggregateType<T extends JobicySyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateJobicySyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobicySyncState[P]>
      : GetScalarType<T[P], AggregateJobicySyncState[P]>
  }




  export type JobicySyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobicySyncStateWhereInput
    orderBy?: JobicySyncStateOrderByWithAggregationInput | JobicySyncStateOrderByWithAggregationInput[]
    by: JobicySyncStateScalarFieldEnum[] | JobicySyncStateScalarFieldEnum
    having?: JobicySyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobicySyncStateCountAggregateInputType | true
    _avg?: JobicySyncStateAvgAggregateInputType
    _sum?: JobicySyncStateSumAggregateInputType
    _min?: JobicySyncStateMinAggregateInputType
    _max?: JobicySyncStateMaxAggregateInputType
  }

  export type JobicySyncStateGroupByOutputType = {
    id: string
    source: string
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number
    createdAt: Date
    updatedAt: Date
    _count: JobicySyncStateCountAggregateOutputType | null
    _avg: JobicySyncStateAvgAggregateOutputType | null
    _sum: JobicySyncStateSumAggregateOutputType | null
    _min: JobicySyncStateMinAggregateOutputType | null
    _max: JobicySyncStateMaxAggregateOutputType | null
  }

  type GetJobicySyncStateGroupByPayload<T extends JobicySyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobicySyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobicySyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobicySyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], JobicySyncStateGroupByOutputType[P]>
        }
      >
    >


  export type JobicySyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobicySyncState"]>

  export type JobicySyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobicySyncState"]>

  export type JobicySyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobicySyncState"]>

  export type JobicySyncStateSelectScalar = {
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobicySyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "lastSyncAt" | "lastSuccessfulSyncAt" | "itemsExtracted" | "createdAt" | "updatedAt", ExtArgs["result"]["jobicySyncState"]>

  export type $JobicySyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobicySyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      lastSyncAt: Date | null
      lastSuccessfulSyncAt: Date | null
      itemsExtracted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobicySyncState"]>
    composites: {}
  }

  type JobicySyncStateGetPayload<S extends boolean | null | undefined | JobicySyncStateDefaultArgs> = $Result.GetResult<Prisma.$JobicySyncStatePayload, S>

  type JobicySyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobicySyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobicySyncStateCountAggregateInputType | true
    }

  export interface JobicySyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobicySyncState'], meta: { name: 'JobicySyncState' } }
    /**
     * Find zero or one JobicySyncState that matches the filter.
     * @param {JobicySyncStateFindUniqueArgs} args - Arguments to find a JobicySyncState
     * @example
     * // Get one JobicySyncState
     * const jobicySyncState = await prisma.jobicySyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobicySyncStateFindUniqueArgs>(args: SelectSubset<T, JobicySyncStateFindUniqueArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobicySyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobicySyncStateFindUniqueOrThrowArgs} args - Arguments to find a JobicySyncState
     * @example
     * // Get one JobicySyncState
     * const jobicySyncState = await prisma.jobicySyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobicySyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, JobicySyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobicySyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateFindFirstArgs} args - Arguments to find a JobicySyncState
     * @example
     * // Get one JobicySyncState
     * const jobicySyncState = await prisma.jobicySyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobicySyncStateFindFirstArgs>(args?: SelectSubset<T, JobicySyncStateFindFirstArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobicySyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateFindFirstOrThrowArgs} args - Arguments to find a JobicySyncState
     * @example
     * // Get one JobicySyncState
     * const jobicySyncState = await prisma.jobicySyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobicySyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, JobicySyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobicySyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobicySyncStates
     * const jobicySyncStates = await prisma.jobicySyncState.findMany()
     * 
     * // Get first 10 JobicySyncStates
     * const jobicySyncStates = await prisma.jobicySyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobicySyncStateWithIdOnly = await prisma.jobicySyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobicySyncStateFindManyArgs>(args?: SelectSubset<T, JobicySyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobicySyncState.
     * @param {JobicySyncStateCreateArgs} args - Arguments to create a JobicySyncState.
     * @example
     * // Create one JobicySyncState
     * const JobicySyncState = await prisma.jobicySyncState.create({
     *   data: {
     *     // ... data to create a JobicySyncState
     *   }
     * })
     * 
     */
    create<T extends JobicySyncStateCreateArgs>(args: SelectSubset<T, JobicySyncStateCreateArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobicySyncStates.
     * @param {JobicySyncStateCreateManyArgs} args - Arguments to create many JobicySyncStates.
     * @example
     * // Create many JobicySyncStates
     * const jobicySyncState = await prisma.jobicySyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobicySyncStateCreateManyArgs>(args?: SelectSubset<T, JobicySyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobicySyncStates and returns the data saved in the database.
     * @param {JobicySyncStateCreateManyAndReturnArgs} args - Arguments to create many JobicySyncStates.
     * @example
     * // Create many JobicySyncStates
     * const jobicySyncState = await prisma.jobicySyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobicySyncStates and only return the `id`
     * const jobicySyncStateWithIdOnly = await prisma.jobicySyncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobicySyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, JobicySyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobicySyncState.
     * @param {JobicySyncStateDeleteArgs} args - Arguments to delete one JobicySyncState.
     * @example
     * // Delete one JobicySyncState
     * const JobicySyncState = await prisma.jobicySyncState.delete({
     *   where: {
     *     // ... filter to delete one JobicySyncState
     *   }
     * })
     * 
     */
    delete<T extends JobicySyncStateDeleteArgs>(args: SelectSubset<T, JobicySyncStateDeleteArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobicySyncState.
     * @param {JobicySyncStateUpdateArgs} args - Arguments to update one JobicySyncState.
     * @example
     * // Update one JobicySyncState
     * const jobicySyncState = await prisma.jobicySyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobicySyncStateUpdateArgs>(args: SelectSubset<T, JobicySyncStateUpdateArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobicySyncStates.
     * @param {JobicySyncStateDeleteManyArgs} args - Arguments to filter JobicySyncStates to delete.
     * @example
     * // Delete a few JobicySyncStates
     * const { count } = await prisma.jobicySyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobicySyncStateDeleteManyArgs>(args?: SelectSubset<T, JobicySyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobicySyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobicySyncStates
     * const jobicySyncState = await prisma.jobicySyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobicySyncStateUpdateManyArgs>(args: SelectSubset<T, JobicySyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobicySyncStates and returns the data updated in the database.
     * @param {JobicySyncStateUpdateManyAndReturnArgs} args - Arguments to update many JobicySyncStates.
     * @example
     * // Update many JobicySyncStates
     * const jobicySyncState = await prisma.jobicySyncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobicySyncStates and only return the `id`
     * const jobicySyncStateWithIdOnly = await prisma.jobicySyncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobicySyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, JobicySyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobicySyncState.
     * @param {JobicySyncStateUpsertArgs} args - Arguments to update or create a JobicySyncState.
     * @example
     * // Update or create a JobicySyncState
     * const jobicySyncState = await prisma.jobicySyncState.upsert({
     *   create: {
     *     // ... data to create a JobicySyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobicySyncState we want to update
     *   }
     * })
     */
    upsert<T extends JobicySyncStateUpsertArgs>(args: SelectSubset<T, JobicySyncStateUpsertArgs<ExtArgs>>): Prisma__JobicySyncStateClient<$Result.GetResult<Prisma.$JobicySyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobicySyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateCountArgs} args - Arguments to filter JobicySyncStates to count.
     * @example
     * // Count the number of JobicySyncStates
     * const count = await prisma.jobicySyncState.count({
     *   where: {
     *     // ... the filter for the JobicySyncStates we want to count
     *   }
     * })
    **/
    count<T extends JobicySyncStateCountArgs>(
      args?: Subset<T, JobicySyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobicySyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobicySyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobicySyncStateAggregateArgs>(args: Subset<T, JobicySyncStateAggregateArgs>): Prisma.PrismaPromise<GetJobicySyncStateAggregateType<T>>

    /**
     * Group by JobicySyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobicySyncStateGroupByArgs} args - Group by arguments.
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
      T extends JobicySyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobicySyncStateGroupByArgs['orderBy'] }
        : { orderBy?: JobicySyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobicySyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobicySyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobicySyncState model
   */
  readonly fields: JobicySyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobicySyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobicySyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the JobicySyncState model
   */
  interface JobicySyncStateFieldRefs {
    readonly id: FieldRef<"JobicySyncState", 'String'>
    readonly source: FieldRef<"JobicySyncState", 'String'>
    readonly lastSyncAt: FieldRef<"JobicySyncState", 'DateTime'>
    readonly lastSuccessfulSyncAt: FieldRef<"JobicySyncState", 'DateTime'>
    readonly itemsExtracted: FieldRef<"JobicySyncState", 'Int'>
    readonly createdAt: FieldRef<"JobicySyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"JobicySyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobicySyncState findUnique
   */
  export type JobicySyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which JobicySyncState to fetch.
     */
    where: JobicySyncStateWhereUniqueInput
  }

  /**
   * JobicySyncState findUniqueOrThrow
   */
  export type JobicySyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which JobicySyncState to fetch.
     */
    where: JobicySyncStateWhereUniqueInput
  }

  /**
   * JobicySyncState findFirst
   */
  export type JobicySyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which JobicySyncState to fetch.
     */
    where?: JobicySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicySyncStates to fetch.
     */
    orderBy?: JobicySyncStateOrderByWithRelationInput | JobicySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobicySyncStates.
     */
    cursor?: JobicySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobicySyncStates.
     */
    distinct?: JobicySyncStateScalarFieldEnum | JobicySyncStateScalarFieldEnum[]
  }

  /**
   * JobicySyncState findFirstOrThrow
   */
  export type JobicySyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which JobicySyncState to fetch.
     */
    where?: JobicySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicySyncStates to fetch.
     */
    orderBy?: JobicySyncStateOrderByWithRelationInput | JobicySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobicySyncStates.
     */
    cursor?: JobicySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobicySyncStates.
     */
    distinct?: JobicySyncStateScalarFieldEnum | JobicySyncStateScalarFieldEnum[]
  }

  /**
   * JobicySyncState findMany
   */
  export type JobicySyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which JobicySyncStates to fetch.
     */
    where?: JobicySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobicySyncStates to fetch.
     */
    orderBy?: JobicySyncStateOrderByWithRelationInput | JobicySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobicySyncStates.
     */
    cursor?: JobicySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobicySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobicySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobicySyncStates.
     */
    distinct?: JobicySyncStateScalarFieldEnum | JobicySyncStateScalarFieldEnum[]
  }

  /**
   * JobicySyncState create
   */
  export type JobicySyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a JobicySyncState.
     */
    data: XOR<JobicySyncStateCreateInput, JobicySyncStateUncheckedCreateInput>
  }

  /**
   * JobicySyncState createMany
   */
  export type JobicySyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobicySyncStates.
     */
    data: JobicySyncStateCreateManyInput | JobicySyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobicySyncState createManyAndReturn
   */
  export type JobicySyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many JobicySyncStates.
     */
    data: JobicySyncStateCreateManyInput | JobicySyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobicySyncState update
   */
  export type JobicySyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a JobicySyncState.
     */
    data: XOR<JobicySyncStateUpdateInput, JobicySyncStateUncheckedUpdateInput>
    /**
     * Choose, which JobicySyncState to update.
     */
    where: JobicySyncStateWhereUniqueInput
  }

  /**
   * JobicySyncState updateMany
   */
  export type JobicySyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobicySyncStates.
     */
    data: XOR<JobicySyncStateUpdateManyMutationInput, JobicySyncStateUncheckedUpdateManyInput>
    /**
     * Filter which JobicySyncStates to update
     */
    where?: JobicySyncStateWhereInput
    /**
     * Limit how many JobicySyncStates to update.
     */
    limit?: number
  }

  /**
   * JobicySyncState updateManyAndReturn
   */
  export type JobicySyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * The data used to update JobicySyncStates.
     */
    data: XOR<JobicySyncStateUpdateManyMutationInput, JobicySyncStateUncheckedUpdateManyInput>
    /**
     * Filter which JobicySyncStates to update
     */
    where?: JobicySyncStateWhereInput
    /**
     * Limit how many JobicySyncStates to update.
     */
    limit?: number
  }

  /**
   * JobicySyncState upsert
   */
  export type JobicySyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the JobicySyncState to update in case it exists.
     */
    where: JobicySyncStateWhereUniqueInput
    /**
     * In case the JobicySyncState found by the `where` argument doesn't exist, create a new JobicySyncState with this data.
     */
    create: XOR<JobicySyncStateCreateInput, JobicySyncStateUncheckedCreateInput>
    /**
     * In case the JobicySyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobicySyncStateUpdateInput, JobicySyncStateUncheckedUpdateInput>
  }

  /**
   * JobicySyncState delete
   */
  export type JobicySyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
    /**
     * Filter which JobicySyncState to delete.
     */
    where: JobicySyncStateWhereUniqueInput
  }

  /**
   * JobicySyncState deleteMany
   */
  export type JobicySyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobicySyncStates to delete
     */
    where?: JobicySyncStateWhereInput
    /**
     * Limit how many JobicySyncStates to delete.
     */
    limit?: number
  }

  /**
   * JobicySyncState without action
   */
  export type JobicySyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobicySyncState
     */
    select?: JobicySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobicySyncState
     */
    omit?: JobicySyncStateOmit<ExtArgs> | null
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


  export const JobicyScrapedJobScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    url: 'url',
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

  export type JobicyScrapedJobScalarFieldEnum = (typeof JobicyScrapedJobScalarFieldEnum)[keyof typeof JobicyScrapedJobScalarFieldEnum]


  export const JobicySyncStateScalarFieldEnum: {
    id: 'id',
    source: 'source',
    lastSyncAt: 'lastSyncAt',
    lastSuccessfulSyncAt: 'lastSuccessfulSyncAt',
    itemsExtracted: 'itemsExtracted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobicySyncStateScalarFieldEnum = (typeof JobicySyncStateScalarFieldEnum)[keyof typeof JobicySyncStateScalarFieldEnum]


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


  export type JobicyScrapedJobWhereInput = {
    AND?: JobicyScrapedJobWhereInput | JobicyScrapedJobWhereInput[]
    OR?: JobicyScrapedJobWhereInput[]
    NOT?: JobicyScrapedJobWhereInput | JobicyScrapedJobWhereInput[]
    id?: StringFilter<"JobicyScrapedJob"> | string
    externalId?: StringFilter<"JobicyScrapedJob"> | string
    url?: StringFilter<"JobicyScrapedJob"> | string
    title?: StringFilter<"JobicyScrapedJob"> | string
    companyName?: StringFilter<"JobicyScrapedJob"> | string
    location?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"JobicyScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"JobicyScrapedJob"> | number | null
    currency?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    contractType?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    rawDescription?: StringFilter<"JobicyScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"JobicyScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"JobicyScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"JobicyScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"JobicyScrapedJob"> | number
    lastError?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"JobicyScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"JobicyScrapedJob"> | Date | string
  }

  export type JobicyScrapedJobOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
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

  export type JobicyScrapedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    url?: string
    AND?: JobicyScrapedJobWhereInput | JobicyScrapedJobWhereInput[]
    OR?: JobicyScrapedJobWhereInput[]
    NOT?: JobicyScrapedJobWhereInput | JobicyScrapedJobWhereInput[]
    title?: StringFilter<"JobicyScrapedJob"> | string
    companyName?: StringFilter<"JobicyScrapedJob"> | string
    location?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"JobicyScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"JobicyScrapedJob"> | number | null
    currency?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    contractType?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    rawDescription?: StringFilter<"JobicyScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"JobicyScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"JobicyScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"JobicyScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"JobicyScrapedJob"> | number
    lastError?: StringNullableFilter<"JobicyScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"JobicyScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"JobicyScrapedJob"> | Date | string
  }, "id" | "externalId" | "url">

  export type JobicyScrapedJobOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
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
    _count?: JobicyScrapedJobCountOrderByAggregateInput
    _avg?: JobicyScrapedJobAvgOrderByAggregateInput
    _max?: JobicyScrapedJobMaxOrderByAggregateInput
    _min?: JobicyScrapedJobMinOrderByAggregateInput
    _sum?: JobicyScrapedJobSumOrderByAggregateInput
  }

  export type JobicyScrapedJobScalarWhereWithAggregatesInput = {
    AND?: JobicyScrapedJobScalarWhereWithAggregatesInput | JobicyScrapedJobScalarWhereWithAggregatesInput[]
    OR?: JobicyScrapedJobScalarWhereWithAggregatesInput[]
    NOT?: JobicyScrapedJobScalarWhereWithAggregatesInput | JobicyScrapedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobicyScrapedJob"> | string
    externalId?: StringWithAggregatesFilter<"JobicyScrapedJob"> | string
    url?: StringWithAggregatesFilter<"JobicyScrapedJob"> | string
    title?: StringWithAggregatesFilter<"JobicyScrapedJob"> | string
    companyName?: StringWithAggregatesFilter<"JobicyScrapedJob"> | string
    location?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    remoteType?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    salaryMin?: FloatNullableWithAggregatesFilter<"JobicyScrapedJob"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"JobicyScrapedJob"> | number | null
    currency?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    rawDescription?: StringWithAggregatesFilter<"JobicyScrapedJob"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"JobicyScrapedJob"> | Date | string | null
    tags?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusWithAggregatesFilter<"JobicyScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"JobicyScrapedJob"> | Date | string | null
    retryCount?: IntWithAggregatesFilter<"JobicyScrapedJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"JobicyScrapedJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobicyScrapedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobicyScrapedJob"> | Date | string
  }

  export type JobicySyncStateWhereInput = {
    AND?: JobicySyncStateWhereInput | JobicySyncStateWhereInput[]
    OR?: JobicySyncStateWhereInput[]
    NOT?: JobicySyncStateWhereInput | JobicySyncStateWhereInput[]
    id?: StringFilter<"JobicySyncState"> | string
    source?: StringFilter<"JobicySyncState"> | string
    lastSyncAt?: DateTimeNullableFilter<"JobicySyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"JobicySyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"JobicySyncState"> | number
    createdAt?: DateTimeFilter<"JobicySyncState"> | Date | string
    updatedAt?: DateTimeFilter<"JobicySyncState"> | Date | string
  }

  export type JobicySyncStateOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobicySyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    source?: string
    AND?: JobicySyncStateWhereInput | JobicySyncStateWhereInput[]
    OR?: JobicySyncStateWhereInput[]
    NOT?: JobicySyncStateWhereInput | JobicySyncStateWhereInput[]
    lastSyncAt?: DateTimeNullableFilter<"JobicySyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"JobicySyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"JobicySyncState"> | number
    createdAt?: DateTimeFilter<"JobicySyncState"> | Date | string
    updatedAt?: DateTimeFilter<"JobicySyncState"> | Date | string
  }, "id" | "source">

  export type JobicySyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobicySyncStateCountOrderByAggregateInput
    _avg?: JobicySyncStateAvgOrderByAggregateInput
    _max?: JobicySyncStateMaxOrderByAggregateInput
    _min?: JobicySyncStateMinOrderByAggregateInput
    _sum?: JobicySyncStateSumOrderByAggregateInput
  }

  export type JobicySyncStateScalarWhereWithAggregatesInput = {
    AND?: JobicySyncStateScalarWhereWithAggregatesInput | JobicySyncStateScalarWhereWithAggregatesInput[]
    OR?: JobicySyncStateScalarWhereWithAggregatesInput[]
    NOT?: JobicySyncStateScalarWhereWithAggregatesInput | JobicySyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobicySyncState"> | string
    source?: StringWithAggregatesFilter<"JobicySyncState"> | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"JobicySyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableWithAggregatesFilter<"JobicySyncState"> | Date | string | null
    itemsExtracted?: IntWithAggregatesFilter<"JobicySyncState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"JobicySyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobicySyncState"> | Date | string
  }

  export type JobicyScrapedJobCreateInput = {
    id?: string
    externalId: string
    url: string
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

  export type JobicyScrapedJobUncheckedCreateInput = {
    id?: string
    externalId: string
    url: string
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

  export type JobicyScrapedJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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

  export type JobicyScrapedJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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

  export type JobicyScrapedJobCreateManyInput = {
    id?: string
    externalId: string
    url: string
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

  export type JobicyScrapedJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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

  export type JobicyScrapedJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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

  export type JobicySyncStateCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobicySyncStateUncheckedCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobicySyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobicySyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobicySyncStateCreateManyInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobicySyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobicySyncStateUncheckedUpdateManyInput = {
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

  export type JobicyScrapedJobCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
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

  export type JobicyScrapedJobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type JobicyScrapedJobMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
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

  export type JobicyScrapedJobMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    url?: SortOrder
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

  export type JobicyScrapedJobSumOrderByAggregateInput = {
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

  export type JobicySyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobicySyncStateAvgOrderByAggregateInput = {
    itemsExtracted?: SortOrder
  }

  export type JobicySyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobicySyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobicySyncStateSumOrderByAggregateInput = {
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