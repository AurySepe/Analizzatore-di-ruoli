
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
 * Model RemotiveScrapedJob
 * 
 */
export type RemotiveScrapedJob = $Result.DefaultSelection<Prisma.$RemotiveScrapedJobPayload>
/**
 * Model RemotiveSyncState
 * 
 */
export type RemotiveSyncState = $Result.DefaultSelection<Prisma.$RemotiveSyncStatePayload>

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
 * // Fetch zero or more RemotiveScrapedJobs
 * const remotiveScrapedJobs = await prisma.remotiveScrapedJob.findMany()
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
   * // Fetch zero or more RemotiveScrapedJobs
   * const remotiveScrapedJobs = await prisma.remotiveScrapedJob.findMany()
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
   * `prisma.remotiveScrapedJob`: Exposes CRUD operations for the **RemotiveScrapedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemotiveScrapedJobs
    * const remotiveScrapedJobs = await prisma.remotiveScrapedJob.findMany()
    * ```
    */
  get remotiveScrapedJob(): Prisma.RemotiveScrapedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remotiveSyncState`: Exposes CRUD operations for the **RemotiveSyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemotiveSyncStates
    * const remotiveSyncStates = await prisma.remotiveSyncState.findMany()
    * ```
    */
  get remotiveSyncState(): Prisma.RemotiveSyncStateDelegate<ExtArgs, ClientOptions>;
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
    RemotiveScrapedJob: 'RemotiveScrapedJob',
    RemotiveSyncState: 'RemotiveSyncState'
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
      modelProps: "remotiveScrapedJob" | "remotiveSyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RemotiveScrapedJob: {
        payload: Prisma.$RemotiveScrapedJobPayload<ExtArgs>
        fields: Prisma.RemotiveScrapedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemotiveScrapedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemotiveScrapedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>
          }
          findFirst: {
            args: Prisma.RemotiveScrapedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemotiveScrapedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>
          }
          findMany: {
            args: Prisma.RemotiveScrapedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>[]
          }
          create: {
            args: Prisma.RemotiveScrapedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>
          }
          createMany: {
            args: Prisma.RemotiveScrapedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemotiveScrapedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>[]
          }
          delete: {
            args: Prisma.RemotiveScrapedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>
          }
          update: {
            args: Prisma.RemotiveScrapedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>
          }
          deleteMany: {
            args: Prisma.RemotiveScrapedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemotiveScrapedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemotiveScrapedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>[]
          }
          upsert: {
            args: Prisma.RemotiveScrapedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveScrapedJobPayload>
          }
          aggregate: {
            args: Prisma.RemotiveScrapedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemotiveScrapedJob>
          }
          groupBy: {
            args: Prisma.RemotiveScrapedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemotiveScrapedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemotiveScrapedJobCountArgs<ExtArgs>
            result: $Utils.Optional<RemotiveScrapedJobCountAggregateOutputType> | number
          }
        }
      }
      RemotiveSyncState: {
        payload: Prisma.$RemotiveSyncStatePayload<ExtArgs>
        fields: Prisma.RemotiveSyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemotiveSyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemotiveSyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>
          }
          findFirst: {
            args: Prisma.RemotiveSyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemotiveSyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>
          }
          findMany: {
            args: Prisma.RemotiveSyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>[]
          }
          create: {
            args: Prisma.RemotiveSyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>
          }
          createMany: {
            args: Prisma.RemotiveSyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemotiveSyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>[]
          }
          delete: {
            args: Prisma.RemotiveSyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>
          }
          update: {
            args: Prisma.RemotiveSyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>
          }
          deleteMany: {
            args: Prisma.RemotiveSyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemotiveSyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemotiveSyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>[]
          }
          upsert: {
            args: Prisma.RemotiveSyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemotiveSyncStatePayload>
          }
          aggregate: {
            args: Prisma.RemotiveSyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemotiveSyncState>
          }
          groupBy: {
            args: Prisma.RemotiveSyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemotiveSyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemotiveSyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<RemotiveSyncStateCountAggregateOutputType> | number
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
    remotiveScrapedJob?: RemotiveScrapedJobOmit
    remotiveSyncState?: RemotiveSyncStateOmit
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
   * Model RemotiveScrapedJob
   */

  export type AggregateRemotiveScrapedJob = {
    _count: RemotiveScrapedJobCountAggregateOutputType | null
    _avg: RemotiveScrapedJobAvgAggregateOutputType | null
    _sum: RemotiveScrapedJobSumAggregateOutputType | null
    _min: RemotiveScrapedJobMinAggregateOutputType | null
    _max: RemotiveScrapedJobMaxAggregateOutputType | null
  }

  export type RemotiveScrapedJobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type RemotiveScrapedJobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type RemotiveScrapedJobMinAggregateOutputType = {
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

  export type RemotiveScrapedJobMaxAggregateOutputType = {
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

  export type RemotiveScrapedJobCountAggregateOutputType = {
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


  export type RemotiveScrapedJobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type RemotiveScrapedJobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type RemotiveScrapedJobMinAggregateInputType = {
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

  export type RemotiveScrapedJobMaxAggregateInputType = {
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

  export type RemotiveScrapedJobCountAggregateInputType = {
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

  export type RemotiveScrapedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemotiveScrapedJob to aggregate.
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveScrapedJobs to fetch.
     */
    orderBy?: RemotiveScrapedJobOrderByWithRelationInput | RemotiveScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemotiveScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemotiveScrapedJobs
    **/
    _count?: true | RemotiveScrapedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemotiveScrapedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemotiveScrapedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemotiveScrapedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemotiveScrapedJobMaxAggregateInputType
  }

  export type GetRemotiveScrapedJobAggregateType<T extends RemotiveScrapedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateRemotiveScrapedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemotiveScrapedJob[P]>
      : GetScalarType<T[P], AggregateRemotiveScrapedJob[P]>
  }




  export type RemotiveScrapedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemotiveScrapedJobWhereInput
    orderBy?: RemotiveScrapedJobOrderByWithAggregationInput | RemotiveScrapedJobOrderByWithAggregationInput[]
    by: RemotiveScrapedJobScalarFieldEnum[] | RemotiveScrapedJobScalarFieldEnum
    having?: RemotiveScrapedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemotiveScrapedJobCountAggregateInputType | true
    _avg?: RemotiveScrapedJobAvgAggregateInputType
    _sum?: RemotiveScrapedJobSumAggregateInputType
    _min?: RemotiveScrapedJobMinAggregateInputType
    _max?: RemotiveScrapedJobMaxAggregateInputType
  }

  export type RemotiveScrapedJobGroupByOutputType = {
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
    _count: RemotiveScrapedJobCountAggregateOutputType | null
    _avg: RemotiveScrapedJobAvgAggregateOutputType | null
    _sum: RemotiveScrapedJobSumAggregateOutputType | null
    _min: RemotiveScrapedJobMinAggregateOutputType | null
    _max: RemotiveScrapedJobMaxAggregateOutputType | null
  }

  type GetRemotiveScrapedJobGroupByPayload<T extends RemotiveScrapedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemotiveScrapedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemotiveScrapedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemotiveScrapedJobGroupByOutputType[P]>
            : GetScalarType<T[P], RemotiveScrapedJobGroupByOutputType[P]>
        }
      >
    >


  export type RemotiveScrapedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["remotiveScrapedJob"]>

  export type RemotiveScrapedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["remotiveScrapedJob"]>

  export type RemotiveScrapedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["remotiveScrapedJob"]>

  export type RemotiveScrapedJobSelectScalar = {
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

  export type RemotiveScrapedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "url" | "title" | "companyName" | "location" | "remoteType" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "tags" | "outboxStatus" | "publishedAt" | "retryCount" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["remotiveScrapedJob"]>

  export type $RemotiveScrapedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemotiveScrapedJob"
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
    }, ExtArgs["result"]["remotiveScrapedJob"]>
    composites: {}
  }

  type RemotiveScrapedJobGetPayload<S extends boolean | null | undefined | RemotiveScrapedJobDefaultArgs> = $Result.GetResult<Prisma.$RemotiveScrapedJobPayload, S>

  type RemotiveScrapedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemotiveScrapedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemotiveScrapedJobCountAggregateInputType | true
    }

  export interface RemotiveScrapedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemotiveScrapedJob'], meta: { name: 'RemotiveScrapedJob' } }
    /**
     * Find zero or one RemotiveScrapedJob that matches the filter.
     * @param {RemotiveScrapedJobFindUniqueArgs} args - Arguments to find a RemotiveScrapedJob
     * @example
     * // Get one RemotiveScrapedJob
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemotiveScrapedJobFindUniqueArgs>(args: SelectSubset<T, RemotiveScrapedJobFindUniqueArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemotiveScrapedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemotiveScrapedJobFindUniqueOrThrowArgs} args - Arguments to find a RemotiveScrapedJob
     * @example
     * // Get one RemotiveScrapedJob
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemotiveScrapedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, RemotiveScrapedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemotiveScrapedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobFindFirstArgs} args - Arguments to find a RemotiveScrapedJob
     * @example
     * // Get one RemotiveScrapedJob
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemotiveScrapedJobFindFirstArgs>(args?: SelectSubset<T, RemotiveScrapedJobFindFirstArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemotiveScrapedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobFindFirstOrThrowArgs} args - Arguments to find a RemotiveScrapedJob
     * @example
     * // Get one RemotiveScrapedJob
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemotiveScrapedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, RemotiveScrapedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemotiveScrapedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemotiveScrapedJobs
     * const remotiveScrapedJobs = await prisma.remotiveScrapedJob.findMany()
     * 
     * // Get first 10 RemotiveScrapedJobs
     * const remotiveScrapedJobs = await prisma.remotiveScrapedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remotiveScrapedJobWithIdOnly = await prisma.remotiveScrapedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemotiveScrapedJobFindManyArgs>(args?: SelectSubset<T, RemotiveScrapedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemotiveScrapedJob.
     * @param {RemotiveScrapedJobCreateArgs} args - Arguments to create a RemotiveScrapedJob.
     * @example
     * // Create one RemotiveScrapedJob
     * const RemotiveScrapedJob = await prisma.remotiveScrapedJob.create({
     *   data: {
     *     // ... data to create a RemotiveScrapedJob
     *   }
     * })
     * 
     */
    create<T extends RemotiveScrapedJobCreateArgs>(args: SelectSubset<T, RemotiveScrapedJobCreateArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemotiveScrapedJobs.
     * @param {RemotiveScrapedJobCreateManyArgs} args - Arguments to create many RemotiveScrapedJobs.
     * @example
     * // Create many RemotiveScrapedJobs
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemotiveScrapedJobCreateManyArgs>(args?: SelectSubset<T, RemotiveScrapedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemotiveScrapedJobs and returns the data saved in the database.
     * @param {RemotiveScrapedJobCreateManyAndReturnArgs} args - Arguments to create many RemotiveScrapedJobs.
     * @example
     * // Create many RemotiveScrapedJobs
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemotiveScrapedJobs and only return the `id`
     * const remotiveScrapedJobWithIdOnly = await prisma.remotiveScrapedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemotiveScrapedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, RemotiveScrapedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemotiveScrapedJob.
     * @param {RemotiveScrapedJobDeleteArgs} args - Arguments to delete one RemotiveScrapedJob.
     * @example
     * // Delete one RemotiveScrapedJob
     * const RemotiveScrapedJob = await prisma.remotiveScrapedJob.delete({
     *   where: {
     *     // ... filter to delete one RemotiveScrapedJob
     *   }
     * })
     * 
     */
    delete<T extends RemotiveScrapedJobDeleteArgs>(args: SelectSubset<T, RemotiveScrapedJobDeleteArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemotiveScrapedJob.
     * @param {RemotiveScrapedJobUpdateArgs} args - Arguments to update one RemotiveScrapedJob.
     * @example
     * // Update one RemotiveScrapedJob
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemotiveScrapedJobUpdateArgs>(args: SelectSubset<T, RemotiveScrapedJobUpdateArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemotiveScrapedJobs.
     * @param {RemotiveScrapedJobDeleteManyArgs} args - Arguments to filter RemotiveScrapedJobs to delete.
     * @example
     * // Delete a few RemotiveScrapedJobs
     * const { count } = await prisma.remotiveScrapedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemotiveScrapedJobDeleteManyArgs>(args?: SelectSubset<T, RemotiveScrapedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemotiveScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemotiveScrapedJobs
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemotiveScrapedJobUpdateManyArgs>(args: SelectSubset<T, RemotiveScrapedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemotiveScrapedJobs and returns the data updated in the database.
     * @param {RemotiveScrapedJobUpdateManyAndReturnArgs} args - Arguments to update many RemotiveScrapedJobs.
     * @example
     * // Update many RemotiveScrapedJobs
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemotiveScrapedJobs and only return the `id`
     * const remotiveScrapedJobWithIdOnly = await prisma.remotiveScrapedJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends RemotiveScrapedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, RemotiveScrapedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemotiveScrapedJob.
     * @param {RemotiveScrapedJobUpsertArgs} args - Arguments to update or create a RemotiveScrapedJob.
     * @example
     * // Update or create a RemotiveScrapedJob
     * const remotiveScrapedJob = await prisma.remotiveScrapedJob.upsert({
     *   create: {
     *     // ... data to create a RemotiveScrapedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemotiveScrapedJob we want to update
     *   }
     * })
     */
    upsert<T extends RemotiveScrapedJobUpsertArgs>(args: SelectSubset<T, RemotiveScrapedJobUpsertArgs<ExtArgs>>): Prisma__RemotiveScrapedJobClient<$Result.GetResult<Prisma.$RemotiveScrapedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemotiveScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobCountArgs} args - Arguments to filter RemotiveScrapedJobs to count.
     * @example
     * // Count the number of RemotiveScrapedJobs
     * const count = await prisma.remotiveScrapedJob.count({
     *   where: {
     *     // ... the filter for the RemotiveScrapedJobs we want to count
     *   }
     * })
    **/
    count<T extends RemotiveScrapedJobCountArgs>(
      args?: Subset<T, RemotiveScrapedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemotiveScrapedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemotiveScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemotiveScrapedJobAggregateArgs>(args: Subset<T, RemotiveScrapedJobAggregateArgs>): Prisma.PrismaPromise<GetRemotiveScrapedJobAggregateType<T>>

    /**
     * Group by RemotiveScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveScrapedJobGroupByArgs} args - Group by arguments.
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
      T extends RemotiveScrapedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemotiveScrapedJobGroupByArgs['orderBy'] }
        : { orderBy?: RemotiveScrapedJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RemotiveScrapedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemotiveScrapedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemotiveScrapedJob model
   */
  readonly fields: RemotiveScrapedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemotiveScrapedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemotiveScrapedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RemotiveScrapedJob model
   */
  interface RemotiveScrapedJobFieldRefs {
    readonly id: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly externalId: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly url: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly title: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly companyName: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly location: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly remoteType: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly salaryMin: FieldRef<"RemotiveScrapedJob", 'Float'>
    readonly salaryMax: FieldRef<"RemotiveScrapedJob", 'Float'>
    readonly currency: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly contractType: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly rawDescription: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly descriptionMarkdown: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly datePosted: FieldRef<"RemotiveScrapedJob", 'DateTime'>
    readonly tags: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly outboxStatus: FieldRef<"RemotiveScrapedJob", 'OutboxStatus'>
    readonly publishedAt: FieldRef<"RemotiveScrapedJob", 'DateTime'>
    readonly retryCount: FieldRef<"RemotiveScrapedJob", 'Int'>
    readonly lastError: FieldRef<"RemotiveScrapedJob", 'String'>
    readonly createdAt: FieldRef<"RemotiveScrapedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"RemotiveScrapedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RemotiveScrapedJob findUnique
   */
  export type RemotiveScrapedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveScrapedJob to fetch.
     */
    where: RemotiveScrapedJobWhereUniqueInput
  }

  /**
   * RemotiveScrapedJob findUniqueOrThrow
   */
  export type RemotiveScrapedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveScrapedJob to fetch.
     */
    where: RemotiveScrapedJobWhereUniqueInput
  }

  /**
   * RemotiveScrapedJob findFirst
   */
  export type RemotiveScrapedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveScrapedJob to fetch.
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveScrapedJobs to fetch.
     */
    orderBy?: RemotiveScrapedJobOrderByWithRelationInput | RemotiveScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemotiveScrapedJobs.
     */
    cursor?: RemotiveScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemotiveScrapedJobs.
     */
    distinct?: RemotiveScrapedJobScalarFieldEnum | RemotiveScrapedJobScalarFieldEnum[]
  }

  /**
   * RemotiveScrapedJob findFirstOrThrow
   */
  export type RemotiveScrapedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveScrapedJob to fetch.
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveScrapedJobs to fetch.
     */
    orderBy?: RemotiveScrapedJobOrderByWithRelationInput | RemotiveScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemotiveScrapedJobs.
     */
    cursor?: RemotiveScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemotiveScrapedJobs.
     */
    distinct?: RemotiveScrapedJobScalarFieldEnum | RemotiveScrapedJobScalarFieldEnum[]
  }

  /**
   * RemotiveScrapedJob findMany
   */
  export type RemotiveScrapedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveScrapedJobs to fetch.
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveScrapedJobs to fetch.
     */
    orderBy?: RemotiveScrapedJobOrderByWithRelationInput | RemotiveScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemotiveScrapedJobs.
     */
    cursor?: RemotiveScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemotiveScrapedJobs.
     */
    distinct?: RemotiveScrapedJobScalarFieldEnum | RemotiveScrapedJobScalarFieldEnum[]
  }

  /**
   * RemotiveScrapedJob create
   */
  export type RemotiveScrapedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to create a RemotiveScrapedJob.
     */
    data: XOR<RemotiveScrapedJobCreateInput, RemotiveScrapedJobUncheckedCreateInput>
  }

  /**
   * RemotiveScrapedJob createMany
   */
  export type RemotiveScrapedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemotiveScrapedJobs.
     */
    data: RemotiveScrapedJobCreateManyInput | RemotiveScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemotiveScrapedJob createManyAndReturn
   */
  export type RemotiveScrapedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to create many RemotiveScrapedJobs.
     */
    data: RemotiveScrapedJobCreateManyInput | RemotiveScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemotiveScrapedJob update
   */
  export type RemotiveScrapedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to update a RemotiveScrapedJob.
     */
    data: XOR<RemotiveScrapedJobUpdateInput, RemotiveScrapedJobUncheckedUpdateInput>
    /**
     * Choose, which RemotiveScrapedJob to update.
     */
    where: RemotiveScrapedJobWhereUniqueInput
  }

  /**
   * RemotiveScrapedJob updateMany
   */
  export type RemotiveScrapedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemotiveScrapedJobs.
     */
    data: XOR<RemotiveScrapedJobUpdateManyMutationInput, RemotiveScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which RemotiveScrapedJobs to update
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * Limit how many RemotiveScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * RemotiveScrapedJob updateManyAndReturn
   */
  export type RemotiveScrapedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to update RemotiveScrapedJobs.
     */
    data: XOR<RemotiveScrapedJobUpdateManyMutationInput, RemotiveScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which RemotiveScrapedJobs to update
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * Limit how many RemotiveScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * RemotiveScrapedJob upsert
   */
  export type RemotiveScrapedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * The filter to search for the RemotiveScrapedJob to update in case it exists.
     */
    where: RemotiveScrapedJobWhereUniqueInput
    /**
     * In case the RemotiveScrapedJob found by the `where` argument doesn't exist, create a new RemotiveScrapedJob with this data.
     */
    create: XOR<RemotiveScrapedJobCreateInput, RemotiveScrapedJobUncheckedCreateInput>
    /**
     * In case the RemotiveScrapedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemotiveScrapedJobUpdateInput, RemotiveScrapedJobUncheckedUpdateInput>
  }

  /**
   * RemotiveScrapedJob delete
   */
  export type RemotiveScrapedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
    /**
     * Filter which RemotiveScrapedJob to delete.
     */
    where: RemotiveScrapedJobWhereUniqueInput
  }

  /**
   * RemotiveScrapedJob deleteMany
   */
  export type RemotiveScrapedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemotiveScrapedJobs to delete
     */
    where?: RemotiveScrapedJobWhereInput
    /**
     * Limit how many RemotiveScrapedJobs to delete.
     */
    limit?: number
  }

  /**
   * RemotiveScrapedJob without action
   */
  export type RemotiveScrapedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveScrapedJob
     */
    select?: RemotiveScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveScrapedJob
     */
    omit?: RemotiveScrapedJobOmit<ExtArgs> | null
  }


  /**
   * Model RemotiveSyncState
   */

  export type AggregateRemotiveSyncState = {
    _count: RemotiveSyncStateCountAggregateOutputType | null
    _avg: RemotiveSyncStateAvgAggregateOutputType | null
    _sum: RemotiveSyncStateSumAggregateOutputType | null
    _min: RemotiveSyncStateMinAggregateOutputType | null
    _max: RemotiveSyncStateMaxAggregateOutputType | null
  }

  export type RemotiveSyncStateAvgAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type RemotiveSyncStateSumAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type RemotiveSyncStateMinAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemotiveSyncStateMaxAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemotiveSyncStateCountAggregateOutputType = {
    id: number
    source: number
    lastSyncAt: number
    lastSuccessfulSyncAt: number
    itemsExtracted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemotiveSyncStateAvgAggregateInputType = {
    itemsExtracted?: true
  }

  export type RemotiveSyncStateSumAggregateInputType = {
    itemsExtracted?: true
  }

  export type RemotiveSyncStateMinAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemotiveSyncStateMaxAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemotiveSyncStateCountAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemotiveSyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemotiveSyncState to aggregate.
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveSyncStates to fetch.
     */
    orderBy?: RemotiveSyncStateOrderByWithRelationInput | RemotiveSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemotiveSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemotiveSyncStates
    **/
    _count?: true | RemotiveSyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemotiveSyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemotiveSyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemotiveSyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemotiveSyncStateMaxAggregateInputType
  }

  export type GetRemotiveSyncStateAggregateType<T extends RemotiveSyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateRemotiveSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemotiveSyncState[P]>
      : GetScalarType<T[P], AggregateRemotiveSyncState[P]>
  }




  export type RemotiveSyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemotiveSyncStateWhereInput
    orderBy?: RemotiveSyncStateOrderByWithAggregationInput | RemotiveSyncStateOrderByWithAggregationInput[]
    by: RemotiveSyncStateScalarFieldEnum[] | RemotiveSyncStateScalarFieldEnum
    having?: RemotiveSyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemotiveSyncStateCountAggregateInputType | true
    _avg?: RemotiveSyncStateAvgAggregateInputType
    _sum?: RemotiveSyncStateSumAggregateInputType
    _min?: RemotiveSyncStateMinAggregateInputType
    _max?: RemotiveSyncStateMaxAggregateInputType
  }

  export type RemotiveSyncStateGroupByOutputType = {
    id: string
    source: string
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number
    createdAt: Date
    updatedAt: Date
    _count: RemotiveSyncStateCountAggregateOutputType | null
    _avg: RemotiveSyncStateAvgAggregateOutputType | null
    _sum: RemotiveSyncStateSumAggregateOutputType | null
    _min: RemotiveSyncStateMinAggregateOutputType | null
    _max: RemotiveSyncStateMaxAggregateOutputType | null
  }

  type GetRemotiveSyncStateGroupByPayload<T extends RemotiveSyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemotiveSyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemotiveSyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemotiveSyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], RemotiveSyncStateGroupByOutputType[P]>
        }
      >
    >


  export type RemotiveSyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remotiveSyncState"]>

  export type RemotiveSyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remotiveSyncState"]>

  export type RemotiveSyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["remotiveSyncState"]>

  export type RemotiveSyncStateSelectScalar = {
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemotiveSyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "lastSyncAt" | "lastSuccessfulSyncAt" | "itemsExtracted" | "createdAt" | "updatedAt", ExtArgs["result"]["remotiveSyncState"]>

  export type $RemotiveSyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemotiveSyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      lastSyncAt: Date | null
      lastSuccessfulSyncAt: Date | null
      itemsExtracted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["remotiveSyncState"]>
    composites: {}
  }

  type RemotiveSyncStateGetPayload<S extends boolean | null | undefined | RemotiveSyncStateDefaultArgs> = $Result.GetResult<Prisma.$RemotiveSyncStatePayload, S>

  type RemotiveSyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemotiveSyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemotiveSyncStateCountAggregateInputType | true
    }

  export interface RemotiveSyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemotiveSyncState'], meta: { name: 'RemotiveSyncState' } }
    /**
     * Find zero or one RemotiveSyncState that matches the filter.
     * @param {RemotiveSyncStateFindUniqueArgs} args - Arguments to find a RemotiveSyncState
     * @example
     * // Get one RemotiveSyncState
     * const remotiveSyncState = await prisma.remotiveSyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemotiveSyncStateFindUniqueArgs>(args: SelectSubset<T, RemotiveSyncStateFindUniqueArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemotiveSyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemotiveSyncStateFindUniqueOrThrowArgs} args - Arguments to find a RemotiveSyncState
     * @example
     * // Get one RemotiveSyncState
     * const remotiveSyncState = await prisma.remotiveSyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemotiveSyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, RemotiveSyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemotiveSyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateFindFirstArgs} args - Arguments to find a RemotiveSyncState
     * @example
     * // Get one RemotiveSyncState
     * const remotiveSyncState = await prisma.remotiveSyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemotiveSyncStateFindFirstArgs>(args?: SelectSubset<T, RemotiveSyncStateFindFirstArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemotiveSyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateFindFirstOrThrowArgs} args - Arguments to find a RemotiveSyncState
     * @example
     * // Get one RemotiveSyncState
     * const remotiveSyncState = await prisma.remotiveSyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemotiveSyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, RemotiveSyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemotiveSyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemotiveSyncStates
     * const remotiveSyncStates = await prisma.remotiveSyncState.findMany()
     * 
     * // Get first 10 RemotiveSyncStates
     * const remotiveSyncStates = await prisma.remotiveSyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remotiveSyncStateWithIdOnly = await prisma.remotiveSyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemotiveSyncStateFindManyArgs>(args?: SelectSubset<T, RemotiveSyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemotiveSyncState.
     * @param {RemotiveSyncStateCreateArgs} args - Arguments to create a RemotiveSyncState.
     * @example
     * // Create one RemotiveSyncState
     * const RemotiveSyncState = await prisma.remotiveSyncState.create({
     *   data: {
     *     // ... data to create a RemotiveSyncState
     *   }
     * })
     * 
     */
    create<T extends RemotiveSyncStateCreateArgs>(args: SelectSubset<T, RemotiveSyncStateCreateArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemotiveSyncStates.
     * @param {RemotiveSyncStateCreateManyArgs} args - Arguments to create many RemotiveSyncStates.
     * @example
     * // Create many RemotiveSyncStates
     * const remotiveSyncState = await prisma.remotiveSyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemotiveSyncStateCreateManyArgs>(args?: SelectSubset<T, RemotiveSyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemotiveSyncStates and returns the data saved in the database.
     * @param {RemotiveSyncStateCreateManyAndReturnArgs} args - Arguments to create many RemotiveSyncStates.
     * @example
     * // Create many RemotiveSyncStates
     * const remotiveSyncState = await prisma.remotiveSyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemotiveSyncStates and only return the `id`
     * const remotiveSyncStateWithIdOnly = await prisma.remotiveSyncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemotiveSyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, RemotiveSyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemotiveSyncState.
     * @param {RemotiveSyncStateDeleteArgs} args - Arguments to delete one RemotiveSyncState.
     * @example
     * // Delete one RemotiveSyncState
     * const RemotiveSyncState = await prisma.remotiveSyncState.delete({
     *   where: {
     *     // ... filter to delete one RemotiveSyncState
     *   }
     * })
     * 
     */
    delete<T extends RemotiveSyncStateDeleteArgs>(args: SelectSubset<T, RemotiveSyncStateDeleteArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemotiveSyncState.
     * @param {RemotiveSyncStateUpdateArgs} args - Arguments to update one RemotiveSyncState.
     * @example
     * // Update one RemotiveSyncState
     * const remotiveSyncState = await prisma.remotiveSyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemotiveSyncStateUpdateArgs>(args: SelectSubset<T, RemotiveSyncStateUpdateArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemotiveSyncStates.
     * @param {RemotiveSyncStateDeleteManyArgs} args - Arguments to filter RemotiveSyncStates to delete.
     * @example
     * // Delete a few RemotiveSyncStates
     * const { count } = await prisma.remotiveSyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemotiveSyncStateDeleteManyArgs>(args?: SelectSubset<T, RemotiveSyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemotiveSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemotiveSyncStates
     * const remotiveSyncState = await prisma.remotiveSyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemotiveSyncStateUpdateManyArgs>(args: SelectSubset<T, RemotiveSyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemotiveSyncStates and returns the data updated in the database.
     * @param {RemotiveSyncStateUpdateManyAndReturnArgs} args - Arguments to update many RemotiveSyncStates.
     * @example
     * // Update many RemotiveSyncStates
     * const remotiveSyncState = await prisma.remotiveSyncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemotiveSyncStates and only return the `id`
     * const remotiveSyncStateWithIdOnly = await prisma.remotiveSyncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends RemotiveSyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, RemotiveSyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemotiveSyncState.
     * @param {RemotiveSyncStateUpsertArgs} args - Arguments to update or create a RemotiveSyncState.
     * @example
     * // Update or create a RemotiveSyncState
     * const remotiveSyncState = await prisma.remotiveSyncState.upsert({
     *   create: {
     *     // ... data to create a RemotiveSyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemotiveSyncState we want to update
     *   }
     * })
     */
    upsert<T extends RemotiveSyncStateUpsertArgs>(args: SelectSubset<T, RemotiveSyncStateUpsertArgs<ExtArgs>>): Prisma__RemotiveSyncStateClient<$Result.GetResult<Prisma.$RemotiveSyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemotiveSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateCountArgs} args - Arguments to filter RemotiveSyncStates to count.
     * @example
     * // Count the number of RemotiveSyncStates
     * const count = await prisma.remotiveSyncState.count({
     *   where: {
     *     // ... the filter for the RemotiveSyncStates we want to count
     *   }
     * })
    **/
    count<T extends RemotiveSyncStateCountArgs>(
      args?: Subset<T, RemotiveSyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemotiveSyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemotiveSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemotiveSyncStateAggregateArgs>(args: Subset<T, RemotiveSyncStateAggregateArgs>): Prisma.PrismaPromise<GetRemotiveSyncStateAggregateType<T>>

    /**
     * Group by RemotiveSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemotiveSyncStateGroupByArgs} args - Group by arguments.
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
      T extends RemotiveSyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemotiveSyncStateGroupByArgs['orderBy'] }
        : { orderBy?: RemotiveSyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RemotiveSyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemotiveSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemotiveSyncState model
   */
  readonly fields: RemotiveSyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemotiveSyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemotiveSyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RemotiveSyncState model
   */
  interface RemotiveSyncStateFieldRefs {
    readonly id: FieldRef<"RemotiveSyncState", 'String'>
    readonly source: FieldRef<"RemotiveSyncState", 'String'>
    readonly lastSyncAt: FieldRef<"RemotiveSyncState", 'DateTime'>
    readonly lastSuccessfulSyncAt: FieldRef<"RemotiveSyncState", 'DateTime'>
    readonly itemsExtracted: FieldRef<"RemotiveSyncState", 'Int'>
    readonly createdAt: FieldRef<"RemotiveSyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"RemotiveSyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RemotiveSyncState findUnique
   */
  export type RemotiveSyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveSyncState to fetch.
     */
    where: RemotiveSyncStateWhereUniqueInput
  }

  /**
   * RemotiveSyncState findUniqueOrThrow
   */
  export type RemotiveSyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveSyncState to fetch.
     */
    where: RemotiveSyncStateWhereUniqueInput
  }

  /**
   * RemotiveSyncState findFirst
   */
  export type RemotiveSyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveSyncState to fetch.
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveSyncStates to fetch.
     */
    orderBy?: RemotiveSyncStateOrderByWithRelationInput | RemotiveSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemotiveSyncStates.
     */
    cursor?: RemotiveSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemotiveSyncStates.
     */
    distinct?: RemotiveSyncStateScalarFieldEnum | RemotiveSyncStateScalarFieldEnum[]
  }

  /**
   * RemotiveSyncState findFirstOrThrow
   */
  export type RemotiveSyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveSyncState to fetch.
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveSyncStates to fetch.
     */
    orderBy?: RemotiveSyncStateOrderByWithRelationInput | RemotiveSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemotiveSyncStates.
     */
    cursor?: RemotiveSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemotiveSyncStates.
     */
    distinct?: RemotiveSyncStateScalarFieldEnum | RemotiveSyncStateScalarFieldEnum[]
  }

  /**
   * RemotiveSyncState findMany
   */
  export type RemotiveSyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which RemotiveSyncStates to fetch.
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemotiveSyncStates to fetch.
     */
    orderBy?: RemotiveSyncStateOrderByWithRelationInput | RemotiveSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemotiveSyncStates.
     */
    cursor?: RemotiveSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemotiveSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemotiveSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemotiveSyncStates.
     */
    distinct?: RemotiveSyncStateScalarFieldEnum | RemotiveSyncStateScalarFieldEnum[]
  }

  /**
   * RemotiveSyncState create
   */
  export type RemotiveSyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a RemotiveSyncState.
     */
    data: XOR<RemotiveSyncStateCreateInput, RemotiveSyncStateUncheckedCreateInput>
  }

  /**
   * RemotiveSyncState createMany
   */
  export type RemotiveSyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemotiveSyncStates.
     */
    data: RemotiveSyncStateCreateManyInput | RemotiveSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemotiveSyncState createManyAndReturn
   */
  export type RemotiveSyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many RemotiveSyncStates.
     */
    data: RemotiveSyncStateCreateManyInput | RemotiveSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemotiveSyncState update
   */
  export type RemotiveSyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a RemotiveSyncState.
     */
    data: XOR<RemotiveSyncStateUpdateInput, RemotiveSyncStateUncheckedUpdateInput>
    /**
     * Choose, which RemotiveSyncState to update.
     */
    where: RemotiveSyncStateWhereUniqueInput
  }

  /**
   * RemotiveSyncState updateMany
   */
  export type RemotiveSyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemotiveSyncStates.
     */
    data: XOR<RemotiveSyncStateUpdateManyMutationInput, RemotiveSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which RemotiveSyncStates to update
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * Limit how many RemotiveSyncStates to update.
     */
    limit?: number
  }

  /**
   * RemotiveSyncState updateManyAndReturn
   */
  export type RemotiveSyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * The data used to update RemotiveSyncStates.
     */
    data: XOR<RemotiveSyncStateUpdateManyMutationInput, RemotiveSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which RemotiveSyncStates to update
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * Limit how many RemotiveSyncStates to update.
     */
    limit?: number
  }

  /**
   * RemotiveSyncState upsert
   */
  export type RemotiveSyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the RemotiveSyncState to update in case it exists.
     */
    where: RemotiveSyncStateWhereUniqueInput
    /**
     * In case the RemotiveSyncState found by the `where` argument doesn't exist, create a new RemotiveSyncState with this data.
     */
    create: XOR<RemotiveSyncStateCreateInput, RemotiveSyncStateUncheckedCreateInput>
    /**
     * In case the RemotiveSyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemotiveSyncStateUpdateInput, RemotiveSyncStateUncheckedUpdateInput>
  }

  /**
   * RemotiveSyncState delete
   */
  export type RemotiveSyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
    /**
     * Filter which RemotiveSyncState to delete.
     */
    where: RemotiveSyncStateWhereUniqueInput
  }

  /**
   * RemotiveSyncState deleteMany
   */
  export type RemotiveSyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemotiveSyncStates to delete
     */
    where?: RemotiveSyncStateWhereInput
    /**
     * Limit how many RemotiveSyncStates to delete.
     */
    limit?: number
  }

  /**
   * RemotiveSyncState without action
   */
  export type RemotiveSyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemotiveSyncState
     */
    select?: RemotiveSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemotiveSyncState
     */
    omit?: RemotiveSyncStateOmit<ExtArgs> | null
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


  export const RemotiveScrapedJobScalarFieldEnum: {
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

  export type RemotiveScrapedJobScalarFieldEnum = (typeof RemotiveScrapedJobScalarFieldEnum)[keyof typeof RemotiveScrapedJobScalarFieldEnum]


  export const RemotiveSyncStateScalarFieldEnum: {
    id: 'id',
    source: 'source',
    lastSyncAt: 'lastSyncAt',
    lastSuccessfulSyncAt: 'lastSuccessfulSyncAt',
    itemsExtracted: 'itemsExtracted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemotiveSyncStateScalarFieldEnum = (typeof RemotiveSyncStateScalarFieldEnum)[keyof typeof RemotiveSyncStateScalarFieldEnum]


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


  export type RemotiveScrapedJobWhereInput = {
    AND?: RemotiveScrapedJobWhereInput | RemotiveScrapedJobWhereInput[]
    OR?: RemotiveScrapedJobWhereInput[]
    NOT?: RemotiveScrapedJobWhereInput | RemotiveScrapedJobWhereInput[]
    id?: StringFilter<"RemotiveScrapedJob"> | string
    externalId?: StringFilter<"RemotiveScrapedJob"> | string
    url?: StringFilter<"RemotiveScrapedJob"> | string
    title?: StringFilter<"RemotiveScrapedJob"> | string
    companyName?: StringFilter<"RemotiveScrapedJob"> | string
    location?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"RemotiveScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"RemotiveScrapedJob"> | number | null
    currency?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    contractType?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    rawDescription?: StringFilter<"RemotiveScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"RemotiveScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"RemotiveScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"RemotiveScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"RemotiveScrapedJob"> | number
    lastError?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"RemotiveScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"RemotiveScrapedJob"> | Date | string
  }

  export type RemotiveScrapedJobOrderByWithRelationInput = {
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

  export type RemotiveScrapedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    url?: string
    AND?: RemotiveScrapedJobWhereInput | RemotiveScrapedJobWhereInput[]
    OR?: RemotiveScrapedJobWhereInput[]
    NOT?: RemotiveScrapedJobWhereInput | RemotiveScrapedJobWhereInput[]
    title?: StringFilter<"RemotiveScrapedJob"> | string
    companyName?: StringFilter<"RemotiveScrapedJob"> | string
    location?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"RemotiveScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"RemotiveScrapedJob"> | number | null
    currency?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    contractType?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    rawDescription?: StringFilter<"RemotiveScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"RemotiveScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"RemotiveScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"RemotiveScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"RemotiveScrapedJob"> | number
    lastError?: StringNullableFilter<"RemotiveScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"RemotiveScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"RemotiveScrapedJob"> | Date | string
  }, "id" | "externalId" | "url">

  export type RemotiveScrapedJobOrderByWithAggregationInput = {
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
    _count?: RemotiveScrapedJobCountOrderByAggregateInput
    _avg?: RemotiveScrapedJobAvgOrderByAggregateInput
    _max?: RemotiveScrapedJobMaxOrderByAggregateInput
    _min?: RemotiveScrapedJobMinOrderByAggregateInput
    _sum?: RemotiveScrapedJobSumOrderByAggregateInput
  }

  export type RemotiveScrapedJobScalarWhereWithAggregatesInput = {
    AND?: RemotiveScrapedJobScalarWhereWithAggregatesInput | RemotiveScrapedJobScalarWhereWithAggregatesInput[]
    OR?: RemotiveScrapedJobScalarWhereWithAggregatesInput[]
    NOT?: RemotiveScrapedJobScalarWhereWithAggregatesInput | RemotiveScrapedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemotiveScrapedJob"> | string
    externalId?: StringWithAggregatesFilter<"RemotiveScrapedJob"> | string
    url?: StringWithAggregatesFilter<"RemotiveScrapedJob"> | string
    title?: StringWithAggregatesFilter<"RemotiveScrapedJob"> | string
    companyName?: StringWithAggregatesFilter<"RemotiveScrapedJob"> | string
    location?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    remoteType?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    salaryMin?: FloatNullableWithAggregatesFilter<"RemotiveScrapedJob"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"RemotiveScrapedJob"> | number | null
    currency?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    rawDescription?: StringWithAggregatesFilter<"RemotiveScrapedJob"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"RemotiveScrapedJob"> | Date | string | null
    tags?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusWithAggregatesFilter<"RemotiveScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"RemotiveScrapedJob"> | Date | string | null
    retryCount?: IntWithAggregatesFilter<"RemotiveScrapedJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"RemotiveScrapedJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RemotiveScrapedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RemotiveScrapedJob"> | Date | string
  }

  export type RemotiveSyncStateWhereInput = {
    AND?: RemotiveSyncStateWhereInput | RemotiveSyncStateWhereInput[]
    OR?: RemotiveSyncStateWhereInput[]
    NOT?: RemotiveSyncStateWhereInput | RemotiveSyncStateWhereInput[]
    id?: StringFilter<"RemotiveSyncState"> | string
    source?: StringFilter<"RemotiveSyncState"> | string
    lastSyncAt?: DateTimeNullableFilter<"RemotiveSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"RemotiveSyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"RemotiveSyncState"> | number
    createdAt?: DateTimeFilter<"RemotiveSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"RemotiveSyncState"> | Date | string
  }

  export type RemotiveSyncStateOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemotiveSyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    source?: string
    AND?: RemotiveSyncStateWhereInput | RemotiveSyncStateWhereInput[]
    OR?: RemotiveSyncStateWhereInput[]
    NOT?: RemotiveSyncStateWhereInput | RemotiveSyncStateWhereInput[]
    lastSyncAt?: DateTimeNullableFilter<"RemotiveSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"RemotiveSyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"RemotiveSyncState"> | number
    createdAt?: DateTimeFilter<"RemotiveSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"RemotiveSyncState"> | Date | string
  }, "id" | "source">

  export type RemotiveSyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemotiveSyncStateCountOrderByAggregateInput
    _avg?: RemotiveSyncStateAvgOrderByAggregateInput
    _max?: RemotiveSyncStateMaxOrderByAggregateInput
    _min?: RemotiveSyncStateMinOrderByAggregateInput
    _sum?: RemotiveSyncStateSumOrderByAggregateInput
  }

  export type RemotiveSyncStateScalarWhereWithAggregatesInput = {
    AND?: RemotiveSyncStateScalarWhereWithAggregatesInput | RemotiveSyncStateScalarWhereWithAggregatesInput[]
    OR?: RemotiveSyncStateScalarWhereWithAggregatesInput[]
    NOT?: RemotiveSyncStateScalarWhereWithAggregatesInput | RemotiveSyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemotiveSyncState"> | string
    source?: StringWithAggregatesFilter<"RemotiveSyncState"> | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"RemotiveSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableWithAggregatesFilter<"RemotiveSyncState"> | Date | string | null
    itemsExtracted?: IntWithAggregatesFilter<"RemotiveSyncState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RemotiveSyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RemotiveSyncState"> | Date | string
  }

  export type RemotiveScrapedJobCreateInput = {
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

  export type RemotiveScrapedJobUncheckedCreateInput = {
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

  export type RemotiveScrapedJobUpdateInput = {
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

  export type RemotiveScrapedJobUncheckedUpdateInput = {
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

  export type RemotiveScrapedJobCreateManyInput = {
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

  export type RemotiveScrapedJobUpdateManyMutationInput = {
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

  export type RemotiveScrapedJobUncheckedUpdateManyInput = {
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

  export type RemotiveSyncStateCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemotiveSyncStateUncheckedCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemotiveSyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemotiveSyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemotiveSyncStateCreateManyInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemotiveSyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemotiveSyncStateUncheckedUpdateManyInput = {
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

  export type RemotiveScrapedJobCountOrderByAggregateInput = {
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

  export type RemotiveScrapedJobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type RemotiveScrapedJobMaxOrderByAggregateInput = {
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

  export type RemotiveScrapedJobMinOrderByAggregateInput = {
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

  export type RemotiveScrapedJobSumOrderByAggregateInput = {
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

  export type RemotiveSyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemotiveSyncStateAvgOrderByAggregateInput = {
    itemsExtracted?: SortOrder
  }

  export type RemotiveSyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemotiveSyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemotiveSyncStateSumOrderByAggregateInput = {
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