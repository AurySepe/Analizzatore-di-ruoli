
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
 * Model WeWorkRemotelyScrapedJob
 * 
 */
export type WeWorkRemotelyScrapedJob = $Result.DefaultSelection<Prisma.$WeWorkRemotelyScrapedJobPayload>
/**
 * Model WeWorkRemotelySyncState
 * 
 */
export type WeWorkRemotelySyncState = $Result.DefaultSelection<Prisma.$WeWorkRemotelySyncStatePayload>

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
 * // Fetch zero or more WeWorkRemotelyScrapedJobs
 * const weWorkRemotelyScrapedJobs = await prisma.weWorkRemotelyScrapedJob.findMany()
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
   * // Fetch zero or more WeWorkRemotelyScrapedJobs
   * const weWorkRemotelyScrapedJobs = await prisma.weWorkRemotelyScrapedJob.findMany()
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
   * `prisma.weWorkRemotelyScrapedJob`: Exposes CRUD operations for the **WeWorkRemotelyScrapedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeWorkRemotelyScrapedJobs
    * const weWorkRemotelyScrapedJobs = await prisma.weWorkRemotelyScrapedJob.findMany()
    * ```
    */
  get weWorkRemotelyScrapedJob(): Prisma.WeWorkRemotelyScrapedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weWorkRemotelySyncState`: Exposes CRUD operations for the **WeWorkRemotelySyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeWorkRemotelySyncStates
    * const weWorkRemotelySyncStates = await prisma.weWorkRemotelySyncState.findMany()
    * ```
    */
  get weWorkRemotelySyncState(): Prisma.WeWorkRemotelySyncStateDelegate<ExtArgs, ClientOptions>;
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
    WeWorkRemotelyScrapedJob: 'WeWorkRemotelyScrapedJob',
    WeWorkRemotelySyncState: 'WeWorkRemotelySyncState'
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
      modelProps: "weWorkRemotelyScrapedJob" | "weWorkRemotelySyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WeWorkRemotelyScrapedJob: {
        payload: Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>
        fields: Prisma.WeWorkRemotelyScrapedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeWorkRemotelyScrapedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeWorkRemotelyScrapedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>
          }
          findFirst: {
            args: Prisma.WeWorkRemotelyScrapedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeWorkRemotelyScrapedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>
          }
          findMany: {
            args: Prisma.WeWorkRemotelyScrapedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>[]
          }
          create: {
            args: Prisma.WeWorkRemotelyScrapedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>
          }
          createMany: {
            args: Prisma.WeWorkRemotelyScrapedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeWorkRemotelyScrapedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>[]
          }
          delete: {
            args: Prisma.WeWorkRemotelyScrapedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>
          }
          update: {
            args: Prisma.WeWorkRemotelyScrapedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>
          }
          deleteMany: {
            args: Prisma.WeWorkRemotelyScrapedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeWorkRemotelyScrapedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeWorkRemotelyScrapedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>[]
          }
          upsert: {
            args: Prisma.WeWorkRemotelyScrapedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelyScrapedJobPayload>
          }
          aggregate: {
            args: Prisma.WeWorkRemotelyScrapedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeWorkRemotelyScrapedJob>
          }
          groupBy: {
            args: Prisma.WeWorkRemotelyScrapedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeWorkRemotelyScrapedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeWorkRemotelyScrapedJobCountArgs<ExtArgs>
            result: $Utils.Optional<WeWorkRemotelyScrapedJobCountAggregateOutputType> | number
          }
        }
      }
      WeWorkRemotelySyncState: {
        payload: Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>
        fields: Prisma.WeWorkRemotelySyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeWorkRemotelySyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeWorkRemotelySyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>
          }
          findFirst: {
            args: Prisma.WeWorkRemotelySyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeWorkRemotelySyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>
          }
          findMany: {
            args: Prisma.WeWorkRemotelySyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>[]
          }
          create: {
            args: Prisma.WeWorkRemotelySyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>
          }
          createMany: {
            args: Prisma.WeWorkRemotelySyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeWorkRemotelySyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>[]
          }
          delete: {
            args: Prisma.WeWorkRemotelySyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>
          }
          update: {
            args: Prisma.WeWorkRemotelySyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>
          }
          deleteMany: {
            args: Prisma.WeWorkRemotelySyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeWorkRemotelySyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeWorkRemotelySyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>[]
          }
          upsert: {
            args: Prisma.WeWorkRemotelySyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeWorkRemotelySyncStatePayload>
          }
          aggregate: {
            args: Prisma.WeWorkRemotelySyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeWorkRemotelySyncState>
          }
          groupBy: {
            args: Prisma.WeWorkRemotelySyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeWorkRemotelySyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeWorkRemotelySyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<WeWorkRemotelySyncStateCountAggregateOutputType> | number
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
    weWorkRemotelyScrapedJob?: WeWorkRemotelyScrapedJobOmit
    weWorkRemotelySyncState?: WeWorkRemotelySyncStateOmit
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
   * Model WeWorkRemotelyScrapedJob
   */

  export type AggregateWeWorkRemotelyScrapedJob = {
    _count: WeWorkRemotelyScrapedJobCountAggregateOutputType | null
    _avg: WeWorkRemotelyScrapedJobAvgAggregateOutputType | null
    _sum: WeWorkRemotelyScrapedJobSumAggregateOutputType | null
    _min: WeWorkRemotelyScrapedJobMinAggregateOutputType | null
    _max: WeWorkRemotelyScrapedJobMaxAggregateOutputType | null
  }

  export type WeWorkRemotelyScrapedJobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type WeWorkRemotelyScrapedJobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type WeWorkRemotelyScrapedJobMinAggregateOutputType = {
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

  export type WeWorkRemotelyScrapedJobMaxAggregateOutputType = {
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

  export type WeWorkRemotelyScrapedJobCountAggregateOutputType = {
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


  export type WeWorkRemotelyScrapedJobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type WeWorkRemotelyScrapedJobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type WeWorkRemotelyScrapedJobMinAggregateInputType = {
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

  export type WeWorkRemotelyScrapedJobMaxAggregateInputType = {
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

  export type WeWorkRemotelyScrapedJobCountAggregateInputType = {
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

  export type WeWorkRemotelyScrapedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeWorkRemotelyScrapedJob to aggregate.
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelyScrapedJobs to fetch.
     */
    orderBy?: WeWorkRemotelyScrapedJobOrderByWithRelationInput | WeWorkRemotelyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeWorkRemotelyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeWorkRemotelyScrapedJobs
    **/
    _count?: true | WeWorkRemotelyScrapedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeWorkRemotelyScrapedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeWorkRemotelyScrapedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeWorkRemotelyScrapedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeWorkRemotelyScrapedJobMaxAggregateInputType
  }

  export type GetWeWorkRemotelyScrapedJobAggregateType<T extends WeWorkRemotelyScrapedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateWeWorkRemotelyScrapedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeWorkRemotelyScrapedJob[P]>
      : GetScalarType<T[P], AggregateWeWorkRemotelyScrapedJob[P]>
  }




  export type WeWorkRemotelyScrapedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeWorkRemotelyScrapedJobWhereInput
    orderBy?: WeWorkRemotelyScrapedJobOrderByWithAggregationInput | WeWorkRemotelyScrapedJobOrderByWithAggregationInput[]
    by: WeWorkRemotelyScrapedJobScalarFieldEnum[] | WeWorkRemotelyScrapedJobScalarFieldEnum
    having?: WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeWorkRemotelyScrapedJobCountAggregateInputType | true
    _avg?: WeWorkRemotelyScrapedJobAvgAggregateInputType
    _sum?: WeWorkRemotelyScrapedJobSumAggregateInputType
    _min?: WeWorkRemotelyScrapedJobMinAggregateInputType
    _max?: WeWorkRemotelyScrapedJobMaxAggregateInputType
  }

  export type WeWorkRemotelyScrapedJobGroupByOutputType = {
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
    _count: WeWorkRemotelyScrapedJobCountAggregateOutputType | null
    _avg: WeWorkRemotelyScrapedJobAvgAggregateOutputType | null
    _sum: WeWorkRemotelyScrapedJobSumAggregateOutputType | null
    _min: WeWorkRemotelyScrapedJobMinAggregateOutputType | null
    _max: WeWorkRemotelyScrapedJobMaxAggregateOutputType | null
  }

  type GetWeWorkRemotelyScrapedJobGroupByPayload<T extends WeWorkRemotelyScrapedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeWorkRemotelyScrapedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeWorkRemotelyScrapedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeWorkRemotelyScrapedJobGroupByOutputType[P]>
            : GetScalarType<T[P], WeWorkRemotelyScrapedJobGroupByOutputType[P]>
        }
      >
    >


  export type WeWorkRemotelyScrapedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["weWorkRemotelyScrapedJob"]>

  export type WeWorkRemotelyScrapedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["weWorkRemotelyScrapedJob"]>

  export type WeWorkRemotelyScrapedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["weWorkRemotelyScrapedJob"]>

  export type WeWorkRemotelyScrapedJobSelectScalar = {
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

  export type WeWorkRemotelyScrapedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "url" | "title" | "companyName" | "location" | "remoteType" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "tags" | "outboxStatus" | "publishedAt" | "retryCount" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["weWorkRemotelyScrapedJob"]>

  export type $WeWorkRemotelyScrapedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeWorkRemotelyScrapedJob"
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
    }, ExtArgs["result"]["weWorkRemotelyScrapedJob"]>
    composites: {}
  }

  type WeWorkRemotelyScrapedJobGetPayload<S extends boolean | null | undefined | WeWorkRemotelyScrapedJobDefaultArgs> = $Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload, S>

  type WeWorkRemotelyScrapedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeWorkRemotelyScrapedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeWorkRemotelyScrapedJobCountAggregateInputType | true
    }

  export interface WeWorkRemotelyScrapedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeWorkRemotelyScrapedJob'], meta: { name: 'WeWorkRemotelyScrapedJob' } }
    /**
     * Find zero or one WeWorkRemotelyScrapedJob that matches the filter.
     * @param {WeWorkRemotelyScrapedJobFindUniqueArgs} args - Arguments to find a WeWorkRemotelyScrapedJob
     * @example
     * // Get one WeWorkRemotelyScrapedJob
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeWorkRemotelyScrapedJobFindUniqueArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobFindUniqueArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeWorkRemotelyScrapedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeWorkRemotelyScrapedJobFindUniqueOrThrowArgs} args - Arguments to find a WeWorkRemotelyScrapedJob
     * @example
     * // Get one WeWorkRemotelyScrapedJob
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeWorkRemotelyScrapedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeWorkRemotelyScrapedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobFindFirstArgs} args - Arguments to find a WeWorkRemotelyScrapedJob
     * @example
     * // Get one WeWorkRemotelyScrapedJob
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeWorkRemotelyScrapedJobFindFirstArgs>(args?: SelectSubset<T, WeWorkRemotelyScrapedJobFindFirstArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeWorkRemotelyScrapedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobFindFirstOrThrowArgs} args - Arguments to find a WeWorkRemotelyScrapedJob
     * @example
     * // Get one WeWorkRemotelyScrapedJob
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeWorkRemotelyScrapedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, WeWorkRemotelyScrapedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeWorkRemotelyScrapedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeWorkRemotelyScrapedJobs
     * const weWorkRemotelyScrapedJobs = await prisma.weWorkRemotelyScrapedJob.findMany()
     * 
     * // Get first 10 WeWorkRemotelyScrapedJobs
     * const weWorkRemotelyScrapedJobs = await prisma.weWorkRemotelyScrapedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weWorkRemotelyScrapedJobWithIdOnly = await prisma.weWorkRemotelyScrapedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeWorkRemotelyScrapedJobFindManyArgs>(args?: SelectSubset<T, WeWorkRemotelyScrapedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeWorkRemotelyScrapedJob.
     * @param {WeWorkRemotelyScrapedJobCreateArgs} args - Arguments to create a WeWorkRemotelyScrapedJob.
     * @example
     * // Create one WeWorkRemotelyScrapedJob
     * const WeWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.create({
     *   data: {
     *     // ... data to create a WeWorkRemotelyScrapedJob
     *   }
     * })
     * 
     */
    create<T extends WeWorkRemotelyScrapedJobCreateArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobCreateArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeWorkRemotelyScrapedJobs.
     * @param {WeWorkRemotelyScrapedJobCreateManyArgs} args - Arguments to create many WeWorkRemotelyScrapedJobs.
     * @example
     * // Create many WeWorkRemotelyScrapedJobs
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeWorkRemotelyScrapedJobCreateManyArgs>(args?: SelectSubset<T, WeWorkRemotelyScrapedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeWorkRemotelyScrapedJobs and returns the data saved in the database.
     * @param {WeWorkRemotelyScrapedJobCreateManyAndReturnArgs} args - Arguments to create many WeWorkRemotelyScrapedJobs.
     * @example
     * // Create many WeWorkRemotelyScrapedJobs
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeWorkRemotelyScrapedJobs and only return the `id`
     * const weWorkRemotelyScrapedJobWithIdOnly = await prisma.weWorkRemotelyScrapedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeWorkRemotelyScrapedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, WeWorkRemotelyScrapedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeWorkRemotelyScrapedJob.
     * @param {WeWorkRemotelyScrapedJobDeleteArgs} args - Arguments to delete one WeWorkRemotelyScrapedJob.
     * @example
     * // Delete one WeWorkRemotelyScrapedJob
     * const WeWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.delete({
     *   where: {
     *     // ... filter to delete one WeWorkRemotelyScrapedJob
     *   }
     * })
     * 
     */
    delete<T extends WeWorkRemotelyScrapedJobDeleteArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobDeleteArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeWorkRemotelyScrapedJob.
     * @param {WeWorkRemotelyScrapedJobUpdateArgs} args - Arguments to update one WeWorkRemotelyScrapedJob.
     * @example
     * // Update one WeWorkRemotelyScrapedJob
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeWorkRemotelyScrapedJobUpdateArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobUpdateArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeWorkRemotelyScrapedJobs.
     * @param {WeWorkRemotelyScrapedJobDeleteManyArgs} args - Arguments to filter WeWorkRemotelyScrapedJobs to delete.
     * @example
     * // Delete a few WeWorkRemotelyScrapedJobs
     * const { count } = await prisma.weWorkRemotelyScrapedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeWorkRemotelyScrapedJobDeleteManyArgs>(args?: SelectSubset<T, WeWorkRemotelyScrapedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeWorkRemotelyScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeWorkRemotelyScrapedJobs
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeWorkRemotelyScrapedJobUpdateManyArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeWorkRemotelyScrapedJobs and returns the data updated in the database.
     * @param {WeWorkRemotelyScrapedJobUpdateManyAndReturnArgs} args - Arguments to update many WeWorkRemotelyScrapedJobs.
     * @example
     * // Update many WeWorkRemotelyScrapedJobs
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeWorkRemotelyScrapedJobs and only return the `id`
     * const weWorkRemotelyScrapedJobWithIdOnly = await prisma.weWorkRemotelyScrapedJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeWorkRemotelyScrapedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeWorkRemotelyScrapedJob.
     * @param {WeWorkRemotelyScrapedJobUpsertArgs} args - Arguments to update or create a WeWorkRemotelyScrapedJob.
     * @example
     * // Update or create a WeWorkRemotelyScrapedJob
     * const weWorkRemotelyScrapedJob = await prisma.weWorkRemotelyScrapedJob.upsert({
     *   create: {
     *     // ... data to create a WeWorkRemotelyScrapedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeWorkRemotelyScrapedJob we want to update
     *   }
     * })
     */
    upsert<T extends WeWorkRemotelyScrapedJobUpsertArgs>(args: SelectSubset<T, WeWorkRemotelyScrapedJobUpsertArgs<ExtArgs>>): Prisma__WeWorkRemotelyScrapedJobClient<$Result.GetResult<Prisma.$WeWorkRemotelyScrapedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeWorkRemotelyScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobCountArgs} args - Arguments to filter WeWorkRemotelyScrapedJobs to count.
     * @example
     * // Count the number of WeWorkRemotelyScrapedJobs
     * const count = await prisma.weWorkRemotelyScrapedJob.count({
     *   where: {
     *     // ... the filter for the WeWorkRemotelyScrapedJobs we want to count
     *   }
     * })
    **/
    count<T extends WeWorkRemotelyScrapedJobCountArgs>(
      args?: Subset<T, WeWorkRemotelyScrapedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeWorkRemotelyScrapedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeWorkRemotelyScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeWorkRemotelyScrapedJobAggregateArgs>(args: Subset<T, WeWorkRemotelyScrapedJobAggregateArgs>): Prisma.PrismaPromise<GetWeWorkRemotelyScrapedJobAggregateType<T>>

    /**
     * Group by WeWorkRemotelyScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelyScrapedJobGroupByArgs} args - Group by arguments.
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
      T extends WeWorkRemotelyScrapedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeWorkRemotelyScrapedJobGroupByArgs['orderBy'] }
        : { orderBy?: WeWorkRemotelyScrapedJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeWorkRemotelyScrapedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeWorkRemotelyScrapedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeWorkRemotelyScrapedJob model
   */
  readonly fields: WeWorkRemotelyScrapedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeWorkRemotelyScrapedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeWorkRemotelyScrapedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WeWorkRemotelyScrapedJob model
   */
  interface WeWorkRemotelyScrapedJobFieldRefs {
    readonly id: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly externalId: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly url: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly title: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly companyName: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly location: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly remoteType: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly salaryMin: FieldRef<"WeWorkRemotelyScrapedJob", 'Float'>
    readonly salaryMax: FieldRef<"WeWorkRemotelyScrapedJob", 'Float'>
    readonly currency: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly contractType: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly rawDescription: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly descriptionMarkdown: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly datePosted: FieldRef<"WeWorkRemotelyScrapedJob", 'DateTime'>
    readonly tags: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly outboxStatus: FieldRef<"WeWorkRemotelyScrapedJob", 'OutboxStatus'>
    readonly publishedAt: FieldRef<"WeWorkRemotelyScrapedJob", 'DateTime'>
    readonly retryCount: FieldRef<"WeWorkRemotelyScrapedJob", 'Int'>
    readonly lastError: FieldRef<"WeWorkRemotelyScrapedJob", 'String'>
    readonly createdAt: FieldRef<"WeWorkRemotelyScrapedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"WeWorkRemotelyScrapedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeWorkRemotelyScrapedJob findUnique
   */
  export type WeWorkRemotelyScrapedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelyScrapedJob to fetch.
     */
    where: WeWorkRemotelyScrapedJobWhereUniqueInput
  }

  /**
   * WeWorkRemotelyScrapedJob findUniqueOrThrow
   */
  export type WeWorkRemotelyScrapedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelyScrapedJob to fetch.
     */
    where: WeWorkRemotelyScrapedJobWhereUniqueInput
  }

  /**
   * WeWorkRemotelyScrapedJob findFirst
   */
  export type WeWorkRemotelyScrapedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelyScrapedJob to fetch.
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelyScrapedJobs to fetch.
     */
    orderBy?: WeWorkRemotelyScrapedJobOrderByWithRelationInput | WeWorkRemotelyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeWorkRemotelyScrapedJobs.
     */
    cursor?: WeWorkRemotelyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeWorkRemotelyScrapedJobs.
     */
    distinct?: WeWorkRemotelyScrapedJobScalarFieldEnum | WeWorkRemotelyScrapedJobScalarFieldEnum[]
  }

  /**
   * WeWorkRemotelyScrapedJob findFirstOrThrow
   */
  export type WeWorkRemotelyScrapedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelyScrapedJob to fetch.
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelyScrapedJobs to fetch.
     */
    orderBy?: WeWorkRemotelyScrapedJobOrderByWithRelationInput | WeWorkRemotelyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeWorkRemotelyScrapedJobs.
     */
    cursor?: WeWorkRemotelyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeWorkRemotelyScrapedJobs.
     */
    distinct?: WeWorkRemotelyScrapedJobScalarFieldEnum | WeWorkRemotelyScrapedJobScalarFieldEnum[]
  }

  /**
   * WeWorkRemotelyScrapedJob findMany
   */
  export type WeWorkRemotelyScrapedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelyScrapedJobs to fetch.
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelyScrapedJobs to fetch.
     */
    orderBy?: WeWorkRemotelyScrapedJobOrderByWithRelationInput | WeWorkRemotelyScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeWorkRemotelyScrapedJobs.
     */
    cursor?: WeWorkRemotelyScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelyScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelyScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeWorkRemotelyScrapedJobs.
     */
    distinct?: WeWorkRemotelyScrapedJobScalarFieldEnum | WeWorkRemotelyScrapedJobScalarFieldEnum[]
  }

  /**
   * WeWorkRemotelyScrapedJob create
   */
  export type WeWorkRemotelyScrapedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to create a WeWorkRemotelyScrapedJob.
     */
    data: XOR<WeWorkRemotelyScrapedJobCreateInput, WeWorkRemotelyScrapedJobUncheckedCreateInput>
  }

  /**
   * WeWorkRemotelyScrapedJob createMany
   */
  export type WeWorkRemotelyScrapedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeWorkRemotelyScrapedJobs.
     */
    data: WeWorkRemotelyScrapedJobCreateManyInput | WeWorkRemotelyScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeWorkRemotelyScrapedJob createManyAndReturn
   */
  export type WeWorkRemotelyScrapedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to create many WeWorkRemotelyScrapedJobs.
     */
    data: WeWorkRemotelyScrapedJobCreateManyInput | WeWorkRemotelyScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeWorkRemotelyScrapedJob update
   */
  export type WeWorkRemotelyScrapedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to update a WeWorkRemotelyScrapedJob.
     */
    data: XOR<WeWorkRemotelyScrapedJobUpdateInput, WeWorkRemotelyScrapedJobUncheckedUpdateInput>
    /**
     * Choose, which WeWorkRemotelyScrapedJob to update.
     */
    where: WeWorkRemotelyScrapedJobWhereUniqueInput
  }

  /**
   * WeWorkRemotelyScrapedJob updateMany
   */
  export type WeWorkRemotelyScrapedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeWorkRemotelyScrapedJobs.
     */
    data: XOR<WeWorkRemotelyScrapedJobUpdateManyMutationInput, WeWorkRemotelyScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which WeWorkRemotelyScrapedJobs to update
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * Limit how many WeWorkRemotelyScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * WeWorkRemotelyScrapedJob updateManyAndReturn
   */
  export type WeWorkRemotelyScrapedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to update WeWorkRemotelyScrapedJobs.
     */
    data: XOR<WeWorkRemotelyScrapedJobUpdateManyMutationInput, WeWorkRemotelyScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which WeWorkRemotelyScrapedJobs to update
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * Limit how many WeWorkRemotelyScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * WeWorkRemotelyScrapedJob upsert
   */
  export type WeWorkRemotelyScrapedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * The filter to search for the WeWorkRemotelyScrapedJob to update in case it exists.
     */
    where: WeWorkRemotelyScrapedJobWhereUniqueInput
    /**
     * In case the WeWorkRemotelyScrapedJob found by the `where` argument doesn't exist, create a new WeWorkRemotelyScrapedJob with this data.
     */
    create: XOR<WeWorkRemotelyScrapedJobCreateInput, WeWorkRemotelyScrapedJobUncheckedCreateInput>
    /**
     * In case the WeWorkRemotelyScrapedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeWorkRemotelyScrapedJobUpdateInput, WeWorkRemotelyScrapedJobUncheckedUpdateInput>
  }

  /**
   * WeWorkRemotelyScrapedJob delete
   */
  export type WeWorkRemotelyScrapedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
    /**
     * Filter which WeWorkRemotelyScrapedJob to delete.
     */
    where: WeWorkRemotelyScrapedJobWhereUniqueInput
  }

  /**
   * WeWorkRemotelyScrapedJob deleteMany
   */
  export type WeWorkRemotelyScrapedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeWorkRemotelyScrapedJobs to delete
     */
    where?: WeWorkRemotelyScrapedJobWhereInput
    /**
     * Limit how many WeWorkRemotelyScrapedJobs to delete.
     */
    limit?: number
  }

  /**
   * WeWorkRemotelyScrapedJob without action
   */
  export type WeWorkRemotelyScrapedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelyScrapedJob
     */
    select?: WeWorkRemotelyScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelyScrapedJob
     */
    omit?: WeWorkRemotelyScrapedJobOmit<ExtArgs> | null
  }


  /**
   * Model WeWorkRemotelySyncState
   */

  export type AggregateWeWorkRemotelySyncState = {
    _count: WeWorkRemotelySyncStateCountAggregateOutputType | null
    _avg: WeWorkRemotelySyncStateAvgAggregateOutputType | null
    _sum: WeWorkRemotelySyncStateSumAggregateOutputType | null
    _min: WeWorkRemotelySyncStateMinAggregateOutputType | null
    _max: WeWorkRemotelySyncStateMaxAggregateOutputType | null
  }

  export type WeWorkRemotelySyncStateAvgAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type WeWorkRemotelySyncStateSumAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type WeWorkRemotelySyncStateMinAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeWorkRemotelySyncStateMaxAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeWorkRemotelySyncStateCountAggregateOutputType = {
    id: number
    source: number
    lastSyncAt: number
    lastSuccessfulSyncAt: number
    itemsExtracted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeWorkRemotelySyncStateAvgAggregateInputType = {
    itemsExtracted?: true
  }

  export type WeWorkRemotelySyncStateSumAggregateInputType = {
    itemsExtracted?: true
  }

  export type WeWorkRemotelySyncStateMinAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeWorkRemotelySyncStateMaxAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeWorkRemotelySyncStateCountAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeWorkRemotelySyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeWorkRemotelySyncState to aggregate.
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelySyncStates to fetch.
     */
    orderBy?: WeWorkRemotelySyncStateOrderByWithRelationInput | WeWorkRemotelySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeWorkRemotelySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeWorkRemotelySyncStates
    **/
    _count?: true | WeWorkRemotelySyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeWorkRemotelySyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeWorkRemotelySyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeWorkRemotelySyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeWorkRemotelySyncStateMaxAggregateInputType
  }

  export type GetWeWorkRemotelySyncStateAggregateType<T extends WeWorkRemotelySyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateWeWorkRemotelySyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeWorkRemotelySyncState[P]>
      : GetScalarType<T[P], AggregateWeWorkRemotelySyncState[P]>
  }




  export type WeWorkRemotelySyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeWorkRemotelySyncStateWhereInput
    orderBy?: WeWorkRemotelySyncStateOrderByWithAggregationInput | WeWorkRemotelySyncStateOrderByWithAggregationInput[]
    by: WeWorkRemotelySyncStateScalarFieldEnum[] | WeWorkRemotelySyncStateScalarFieldEnum
    having?: WeWorkRemotelySyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeWorkRemotelySyncStateCountAggregateInputType | true
    _avg?: WeWorkRemotelySyncStateAvgAggregateInputType
    _sum?: WeWorkRemotelySyncStateSumAggregateInputType
    _min?: WeWorkRemotelySyncStateMinAggregateInputType
    _max?: WeWorkRemotelySyncStateMaxAggregateInputType
  }

  export type WeWorkRemotelySyncStateGroupByOutputType = {
    id: string
    source: string
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number
    createdAt: Date
    updatedAt: Date
    _count: WeWorkRemotelySyncStateCountAggregateOutputType | null
    _avg: WeWorkRemotelySyncStateAvgAggregateOutputType | null
    _sum: WeWorkRemotelySyncStateSumAggregateOutputType | null
    _min: WeWorkRemotelySyncStateMinAggregateOutputType | null
    _max: WeWorkRemotelySyncStateMaxAggregateOutputType | null
  }

  type GetWeWorkRemotelySyncStateGroupByPayload<T extends WeWorkRemotelySyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeWorkRemotelySyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeWorkRemotelySyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeWorkRemotelySyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], WeWorkRemotelySyncStateGroupByOutputType[P]>
        }
      >
    >


  export type WeWorkRemotelySyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weWorkRemotelySyncState"]>

  export type WeWorkRemotelySyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weWorkRemotelySyncState"]>

  export type WeWorkRemotelySyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weWorkRemotelySyncState"]>

  export type WeWorkRemotelySyncStateSelectScalar = {
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeWorkRemotelySyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "lastSyncAt" | "lastSuccessfulSyncAt" | "itemsExtracted" | "createdAt" | "updatedAt", ExtArgs["result"]["weWorkRemotelySyncState"]>

  export type $WeWorkRemotelySyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeWorkRemotelySyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      lastSyncAt: Date | null
      lastSuccessfulSyncAt: Date | null
      itemsExtracted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weWorkRemotelySyncState"]>
    composites: {}
  }

  type WeWorkRemotelySyncStateGetPayload<S extends boolean | null | undefined | WeWorkRemotelySyncStateDefaultArgs> = $Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload, S>

  type WeWorkRemotelySyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeWorkRemotelySyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeWorkRemotelySyncStateCountAggregateInputType | true
    }

  export interface WeWorkRemotelySyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeWorkRemotelySyncState'], meta: { name: 'WeWorkRemotelySyncState' } }
    /**
     * Find zero or one WeWorkRemotelySyncState that matches the filter.
     * @param {WeWorkRemotelySyncStateFindUniqueArgs} args - Arguments to find a WeWorkRemotelySyncState
     * @example
     * // Get one WeWorkRemotelySyncState
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeWorkRemotelySyncStateFindUniqueArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateFindUniqueArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeWorkRemotelySyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeWorkRemotelySyncStateFindUniqueOrThrowArgs} args - Arguments to find a WeWorkRemotelySyncState
     * @example
     * // Get one WeWorkRemotelySyncState
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeWorkRemotelySyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeWorkRemotelySyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateFindFirstArgs} args - Arguments to find a WeWorkRemotelySyncState
     * @example
     * // Get one WeWorkRemotelySyncState
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeWorkRemotelySyncStateFindFirstArgs>(args?: SelectSubset<T, WeWorkRemotelySyncStateFindFirstArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeWorkRemotelySyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateFindFirstOrThrowArgs} args - Arguments to find a WeWorkRemotelySyncState
     * @example
     * // Get one WeWorkRemotelySyncState
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeWorkRemotelySyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, WeWorkRemotelySyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeWorkRemotelySyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeWorkRemotelySyncStates
     * const weWorkRemotelySyncStates = await prisma.weWorkRemotelySyncState.findMany()
     * 
     * // Get first 10 WeWorkRemotelySyncStates
     * const weWorkRemotelySyncStates = await prisma.weWorkRemotelySyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weWorkRemotelySyncStateWithIdOnly = await prisma.weWorkRemotelySyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeWorkRemotelySyncStateFindManyArgs>(args?: SelectSubset<T, WeWorkRemotelySyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeWorkRemotelySyncState.
     * @param {WeWorkRemotelySyncStateCreateArgs} args - Arguments to create a WeWorkRemotelySyncState.
     * @example
     * // Create one WeWorkRemotelySyncState
     * const WeWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.create({
     *   data: {
     *     // ... data to create a WeWorkRemotelySyncState
     *   }
     * })
     * 
     */
    create<T extends WeWorkRemotelySyncStateCreateArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateCreateArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeWorkRemotelySyncStates.
     * @param {WeWorkRemotelySyncStateCreateManyArgs} args - Arguments to create many WeWorkRemotelySyncStates.
     * @example
     * // Create many WeWorkRemotelySyncStates
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeWorkRemotelySyncStateCreateManyArgs>(args?: SelectSubset<T, WeWorkRemotelySyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeWorkRemotelySyncStates and returns the data saved in the database.
     * @param {WeWorkRemotelySyncStateCreateManyAndReturnArgs} args - Arguments to create many WeWorkRemotelySyncStates.
     * @example
     * // Create many WeWorkRemotelySyncStates
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeWorkRemotelySyncStates and only return the `id`
     * const weWorkRemotelySyncStateWithIdOnly = await prisma.weWorkRemotelySyncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeWorkRemotelySyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, WeWorkRemotelySyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeWorkRemotelySyncState.
     * @param {WeWorkRemotelySyncStateDeleteArgs} args - Arguments to delete one WeWorkRemotelySyncState.
     * @example
     * // Delete one WeWorkRemotelySyncState
     * const WeWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.delete({
     *   where: {
     *     // ... filter to delete one WeWorkRemotelySyncState
     *   }
     * })
     * 
     */
    delete<T extends WeWorkRemotelySyncStateDeleteArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateDeleteArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeWorkRemotelySyncState.
     * @param {WeWorkRemotelySyncStateUpdateArgs} args - Arguments to update one WeWorkRemotelySyncState.
     * @example
     * // Update one WeWorkRemotelySyncState
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeWorkRemotelySyncStateUpdateArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateUpdateArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeWorkRemotelySyncStates.
     * @param {WeWorkRemotelySyncStateDeleteManyArgs} args - Arguments to filter WeWorkRemotelySyncStates to delete.
     * @example
     * // Delete a few WeWorkRemotelySyncStates
     * const { count } = await prisma.weWorkRemotelySyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeWorkRemotelySyncStateDeleteManyArgs>(args?: SelectSubset<T, WeWorkRemotelySyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeWorkRemotelySyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeWorkRemotelySyncStates
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeWorkRemotelySyncStateUpdateManyArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeWorkRemotelySyncStates and returns the data updated in the database.
     * @param {WeWorkRemotelySyncStateUpdateManyAndReturnArgs} args - Arguments to update many WeWorkRemotelySyncStates.
     * @example
     * // Update many WeWorkRemotelySyncStates
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeWorkRemotelySyncStates and only return the `id`
     * const weWorkRemotelySyncStateWithIdOnly = await prisma.weWorkRemotelySyncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeWorkRemotelySyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeWorkRemotelySyncState.
     * @param {WeWorkRemotelySyncStateUpsertArgs} args - Arguments to update or create a WeWorkRemotelySyncState.
     * @example
     * // Update or create a WeWorkRemotelySyncState
     * const weWorkRemotelySyncState = await prisma.weWorkRemotelySyncState.upsert({
     *   create: {
     *     // ... data to create a WeWorkRemotelySyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeWorkRemotelySyncState we want to update
     *   }
     * })
     */
    upsert<T extends WeWorkRemotelySyncStateUpsertArgs>(args: SelectSubset<T, WeWorkRemotelySyncStateUpsertArgs<ExtArgs>>): Prisma__WeWorkRemotelySyncStateClient<$Result.GetResult<Prisma.$WeWorkRemotelySyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeWorkRemotelySyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateCountArgs} args - Arguments to filter WeWorkRemotelySyncStates to count.
     * @example
     * // Count the number of WeWorkRemotelySyncStates
     * const count = await prisma.weWorkRemotelySyncState.count({
     *   where: {
     *     // ... the filter for the WeWorkRemotelySyncStates we want to count
     *   }
     * })
    **/
    count<T extends WeWorkRemotelySyncStateCountArgs>(
      args?: Subset<T, WeWorkRemotelySyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeWorkRemotelySyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeWorkRemotelySyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeWorkRemotelySyncStateAggregateArgs>(args: Subset<T, WeWorkRemotelySyncStateAggregateArgs>): Prisma.PrismaPromise<GetWeWorkRemotelySyncStateAggregateType<T>>

    /**
     * Group by WeWorkRemotelySyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeWorkRemotelySyncStateGroupByArgs} args - Group by arguments.
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
      T extends WeWorkRemotelySyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeWorkRemotelySyncStateGroupByArgs['orderBy'] }
        : { orderBy?: WeWorkRemotelySyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeWorkRemotelySyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeWorkRemotelySyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeWorkRemotelySyncState model
   */
  readonly fields: WeWorkRemotelySyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeWorkRemotelySyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeWorkRemotelySyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WeWorkRemotelySyncState model
   */
  interface WeWorkRemotelySyncStateFieldRefs {
    readonly id: FieldRef<"WeWorkRemotelySyncState", 'String'>
    readonly source: FieldRef<"WeWorkRemotelySyncState", 'String'>
    readonly lastSyncAt: FieldRef<"WeWorkRemotelySyncState", 'DateTime'>
    readonly lastSuccessfulSyncAt: FieldRef<"WeWorkRemotelySyncState", 'DateTime'>
    readonly itemsExtracted: FieldRef<"WeWorkRemotelySyncState", 'Int'>
    readonly createdAt: FieldRef<"WeWorkRemotelySyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"WeWorkRemotelySyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeWorkRemotelySyncState findUnique
   */
  export type WeWorkRemotelySyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelySyncState to fetch.
     */
    where: WeWorkRemotelySyncStateWhereUniqueInput
  }

  /**
   * WeWorkRemotelySyncState findUniqueOrThrow
   */
  export type WeWorkRemotelySyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelySyncState to fetch.
     */
    where: WeWorkRemotelySyncStateWhereUniqueInput
  }

  /**
   * WeWorkRemotelySyncState findFirst
   */
  export type WeWorkRemotelySyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelySyncState to fetch.
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelySyncStates to fetch.
     */
    orderBy?: WeWorkRemotelySyncStateOrderByWithRelationInput | WeWorkRemotelySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeWorkRemotelySyncStates.
     */
    cursor?: WeWorkRemotelySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeWorkRemotelySyncStates.
     */
    distinct?: WeWorkRemotelySyncStateScalarFieldEnum | WeWorkRemotelySyncStateScalarFieldEnum[]
  }

  /**
   * WeWorkRemotelySyncState findFirstOrThrow
   */
  export type WeWorkRemotelySyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelySyncState to fetch.
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelySyncStates to fetch.
     */
    orderBy?: WeWorkRemotelySyncStateOrderByWithRelationInput | WeWorkRemotelySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeWorkRemotelySyncStates.
     */
    cursor?: WeWorkRemotelySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeWorkRemotelySyncStates.
     */
    distinct?: WeWorkRemotelySyncStateScalarFieldEnum | WeWorkRemotelySyncStateScalarFieldEnum[]
  }

  /**
   * WeWorkRemotelySyncState findMany
   */
  export type WeWorkRemotelySyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * Filter, which WeWorkRemotelySyncStates to fetch.
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeWorkRemotelySyncStates to fetch.
     */
    orderBy?: WeWorkRemotelySyncStateOrderByWithRelationInput | WeWorkRemotelySyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeWorkRemotelySyncStates.
     */
    cursor?: WeWorkRemotelySyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeWorkRemotelySyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeWorkRemotelySyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeWorkRemotelySyncStates.
     */
    distinct?: WeWorkRemotelySyncStateScalarFieldEnum | WeWorkRemotelySyncStateScalarFieldEnum[]
  }

  /**
   * WeWorkRemotelySyncState create
   */
  export type WeWorkRemotelySyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a WeWorkRemotelySyncState.
     */
    data: XOR<WeWorkRemotelySyncStateCreateInput, WeWorkRemotelySyncStateUncheckedCreateInput>
  }

  /**
   * WeWorkRemotelySyncState createMany
   */
  export type WeWorkRemotelySyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeWorkRemotelySyncStates.
     */
    data: WeWorkRemotelySyncStateCreateManyInput | WeWorkRemotelySyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeWorkRemotelySyncState createManyAndReturn
   */
  export type WeWorkRemotelySyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many WeWorkRemotelySyncStates.
     */
    data: WeWorkRemotelySyncStateCreateManyInput | WeWorkRemotelySyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeWorkRemotelySyncState update
   */
  export type WeWorkRemotelySyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a WeWorkRemotelySyncState.
     */
    data: XOR<WeWorkRemotelySyncStateUpdateInput, WeWorkRemotelySyncStateUncheckedUpdateInput>
    /**
     * Choose, which WeWorkRemotelySyncState to update.
     */
    where: WeWorkRemotelySyncStateWhereUniqueInput
  }

  /**
   * WeWorkRemotelySyncState updateMany
   */
  export type WeWorkRemotelySyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeWorkRemotelySyncStates.
     */
    data: XOR<WeWorkRemotelySyncStateUpdateManyMutationInput, WeWorkRemotelySyncStateUncheckedUpdateManyInput>
    /**
     * Filter which WeWorkRemotelySyncStates to update
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * Limit how many WeWorkRemotelySyncStates to update.
     */
    limit?: number
  }

  /**
   * WeWorkRemotelySyncState updateManyAndReturn
   */
  export type WeWorkRemotelySyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * The data used to update WeWorkRemotelySyncStates.
     */
    data: XOR<WeWorkRemotelySyncStateUpdateManyMutationInput, WeWorkRemotelySyncStateUncheckedUpdateManyInput>
    /**
     * Filter which WeWorkRemotelySyncStates to update
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * Limit how many WeWorkRemotelySyncStates to update.
     */
    limit?: number
  }

  /**
   * WeWorkRemotelySyncState upsert
   */
  export type WeWorkRemotelySyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the WeWorkRemotelySyncState to update in case it exists.
     */
    where: WeWorkRemotelySyncStateWhereUniqueInput
    /**
     * In case the WeWorkRemotelySyncState found by the `where` argument doesn't exist, create a new WeWorkRemotelySyncState with this data.
     */
    create: XOR<WeWorkRemotelySyncStateCreateInput, WeWorkRemotelySyncStateUncheckedCreateInput>
    /**
     * In case the WeWorkRemotelySyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeWorkRemotelySyncStateUpdateInput, WeWorkRemotelySyncStateUncheckedUpdateInput>
  }

  /**
   * WeWorkRemotelySyncState delete
   */
  export type WeWorkRemotelySyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
    /**
     * Filter which WeWorkRemotelySyncState to delete.
     */
    where: WeWorkRemotelySyncStateWhereUniqueInput
  }

  /**
   * WeWorkRemotelySyncState deleteMany
   */
  export type WeWorkRemotelySyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeWorkRemotelySyncStates to delete
     */
    where?: WeWorkRemotelySyncStateWhereInput
    /**
     * Limit how many WeWorkRemotelySyncStates to delete.
     */
    limit?: number
  }

  /**
   * WeWorkRemotelySyncState without action
   */
  export type WeWorkRemotelySyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeWorkRemotelySyncState
     */
    select?: WeWorkRemotelySyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeWorkRemotelySyncState
     */
    omit?: WeWorkRemotelySyncStateOmit<ExtArgs> | null
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


  export const WeWorkRemotelyScrapedJobScalarFieldEnum: {
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

  export type WeWorkRemotelyScrapedJobScalarFieldEnum = (typeof WeWorkRemotelyScrapedJobScalarFieldEnum)[keyof typeof WeWorkRemotelyScrapedJobScalarFieldEnum]


  export const WeWorkRemotelySyncStateScalarFieldEnum: {
    id: 'id',
    source: 'source',
    lastSyncAt: 'lastSyncAt',
    lastSuccessfulSyncAt: 'lastSuccessfulSyncAt',
    itemsExtracted: 'itemsExtracted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeWorkRemotelySyncStateScalarFieldEnum = (typeof WeWorkRemotelySyncStateScalarFieldEnum)[keyof typeof WeWorkRemotelySyncStateScalarFieldEnum]


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


  export type WeWorkRemotelyScrapedJobWhereInput = {
    AND?: WeWorkRemotelyScrapedJobWhereInput | WeWorkRemotelyScrapedJobWhereInput[]
    OR?: WeWorkRemotelyScrapedJobWhereInput[]
    NOT?: WeWorkRemotelyScrapedJobWhereInput | WeWorkRemotelyScrapedJobWhereInput[]
    id?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    externalId?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    url?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    title?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    companyName?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    location?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"WeWorkRemotelyScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"WeWorkRemotelyScrapedJob"> | number | null
    currency?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    contractType?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    rawDescription?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"WeWorkRemotelyScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"WeWorkRemotelyScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"WeWorkRemotelyScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"WeWorkRemotelyScrapedJob"> | number
    lastError?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"WeWorkRemotelyScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"WeWorkRemotelyScrapedJob"> | Date | string
  }

  export type WeWorkRemotelyScrapedJobOrderByWithRelationInput = {
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

  export type WeWorkRemotelyScrapedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    url?: string
    AND?: WeWorkRemotelyScrapedJobWhereInput | WeWorkRemotelyScrapedJobWhereInput[]
    OR?: WeWorkRemotelyScrapedJobWhereInput[]
    NOT?: WeWorkRemotelyScrapedJobWhereInput | WeWorkRemotelyScrapedJobWhereInput[]
    title?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    companyName?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    location?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"WeWorkRemotelyScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"WeWorkRemotelyScrapedJob"> | number | null
    currency?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    contractType?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    rawDescription?: StringFilter<"WeWorkRemotelyScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"WeWorkRemotelyScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"WeWorkRemotelyScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"WeWorkRemotelyScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"WeWorkRemotelyScrapedJob"> | number
    lastError?: StringNullableFilter<"WeWorkRemotelyScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"WeWorkRemotelyScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"WeWorkRemotelyScrapedJob"> | Date | string
  }, "id" | "externalId" | "url">

  export type WeWorkRemotelyScrapedJobOrderByWithAggregationInput = {
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
    _count?: WeWorkRemotelyScrapedJobCountOrderByAggregateInput
    _avg?: WeWorkRemotelyScrapedJobAvgOrderByAggregateInput
    _max?: WeWorkRemotelyScrapedJobMaxOrderByAggregateInput
    _min?: WeWorkRemotelyScrapedJobMinOrderByAggregateInput
    _sum?: WeWorkRemotelyScrapedJobSumOrderByAggregateInput
  }

  export type WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput = {
    AND?: WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput | WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput[]
    OR?: WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput[]
    NOT?: WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput | WeWorkRemotelyScrapedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string
    externalId?: StringWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string
    url?: StringWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string
    title?: StringWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string
    companyName?: StringWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string
    location?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    remoteType?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    salaryMin?: FloatNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | number | null
    currency?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    rawDescription?: StringWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | Date | string | null
    tags?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | Date | string | null
    retryCount?: IntWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeWorkRemotelyScrapedJob"> | Date | string
  }

  export type WeWorkRemotelySyncStateWhereInput = {
    AND?: WeWorkRemotelySyncStateWhereInput | WeWorkRemotelySyncStateWhereInput[]
    OR?: WeWorkRemotelySyncStateWhereInput[]
    NOT?: WeWorkRemotelySyncStateWhereInput | WeWorkRemotelySyncStateWhereInput[]
    id?: StringFilter<"WeWorkRemotelySyncState"> | string
    source?: StringFilter<"WeWorkRemotelySyncState"> | string
    lastSyncAt?: DateTimeNullableFilter<"WeWorkRemotelySyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"WeWorkRemotelySyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"WeWorkRemotelySyncState"> | number
    createdAt?: DateTimeFilter<"WeWorkRemotelySyncState"> | Date | string
    updatedAt?: DateTimeFilter<"WeWorkRemotelySyncState"> | Date | string
  }

  export type WeWorkRemotelySyncStateOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeWorkRemotelySyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    source?: string
    AND?: WeWorkRemotelySyncStateWhereInput | WeWorkRemotelySyncStateWhereInput[]
    OR?: WeWorkRemotelySyncStateWhereInput[]
    NOT?: WeWorkRemotelySyncStateWhereInput | WeWorkRemotelySyncStateWhereInput[]
    lastSyncAt?: DateTimeNullableFilter<"WeWorkRemotelySyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"WeWorkRemotelySyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"WeWorkRemotelySyncState"> | number
    createdAt?: DateTimeFilter<"WeWorkRemotelySyncState"> | Date | string
    updatedAt?: DateTimeFilter<"WeWorkRemotelySyncState"> | Date | string
  }, "id" | "source">

  export type WeWorkRemotelySyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeWorkRemotelySyncStateCountOrderByAggregateInput
    _avg?: WeWorkRemotelySyncStateAvgOrderByAggregateInput
    _max?: WeWorkRemotelySyncStateMaxOrderByAggregateInput
    _min?: WeWorkRemotelySyncStateMinOrderByAggregateInput
    _sum?: WeWorkRemotelySyncStateSumOrderByAggregateInput
  }

  export type WeWorkRemotelySyncStateScalarWhereWithAggregatesInput = {
    AND?: WeWorkRemotelySyncStateScalarWhereWithAggregatesInput | WeWorkRemotelySyncStateScalarWhereWithAggregatesInput[]
    OR?: WeWorkRemotelySyncStateScalarWhereWithAggregatesInput[]
    NOT?: WeWorkRemotelySyncStateScalarWhereWithAggregatesInput | WeWorkRemotelySyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeWorkRemotelySyncState"> | string
    source?: StringWithAggregatesFilter<"WeWorkRemotelySyncState"> | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"WeWorkRemotelySyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableWithAggregatesFilter<"WeWorkRemotelySyncState"> | Date | string | null
    itemsExtracted?: IntWithAggregatesFilter<"WeWorkRemotelySyncState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WeWorkRemotelySyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeWorkRemotelySyncState"> | Date | string
  }

  export type WeWorkRemotelyScrapedJobCreateInput = {
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

  export type WeWorkRemotelyScrapedJobUncheckedCreateInput = {
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

  export type WeWorkRemotelyScrapedJobUpdateInput = {
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

  export type WeWorkRemotelyScrapedJobUncheckedUpdateInput = {
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

  export type WeWorkRemotelyScrapedJobCreateManyInput = {
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

  export type WeWorkRemotelyScrapedJobUpdateManyMutationInput = {
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

  export type WeWorkRemotelyScrapedJobUncheckedUpdateManyInput = {
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

  export type WeWorkRemotelySyncStateCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeWorkRemotelySyncStateUncheckedCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeWorkRemotelySyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeWorkRemotelySyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeWorkRemotelySyncStateCreateManyInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeWorkRemotelySyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeWorkRemotelySyncStateUncheckedUpdateManyInput = {
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

  export type WeWorkRemotelyScrapedJobCountOrderByAggregateInput = {
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

  export type WeWorkRemotelyScrapedJobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type WeWorkRemotelyScrapedJobMaxOrderByAggregateInput = {
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

  export type WeWorkRemotelyScrapedJobMinOrderByAggregateInput = {
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

  export type WeWorkRemotelyScrapedJobSumOrderByAggregateInput = {
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

  export type WeWorkRemotelySyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeWorkRemotelySyncStateAvgOrderByAggregateInput = {
    itemsExtracted?: SortOrder
  }

  export type WeWorkRemotelySyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeWorkRemotelySyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeWorkRemotelySyncStateSumOrderByAggregateInput = {
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