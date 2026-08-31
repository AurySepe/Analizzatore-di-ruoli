
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
 * Model HimalayasScrapedJob
 * 
 */
export type HimalayasScrapedJob = $Result.DefaultSelection<Prisma.$HimalayasScrapedJobPayload>
/**
 * Model HimalayasSyncState
 * 
 */
export type HimalayasSyncState = $Result.DefaultSelection<Prisma.$HimalayasSyncStatePayload>

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
 * // Fetch zero or more HimalayasScrapedJobs
 * const himalayasScrapedJobs = await prisma.himalayasScrapedJob.findMany()
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
   * // Fetch zero or more HimalayasScrapedJobs
   * const himalayasScrapedJobs = await prisma.himalayasScrapedJob.findMany()
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
   * `prisma.himalayasScrapedJob`: Exposes CRUD operations for the **HimalayasScrapedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HimalayasScrapedJobs
    * const himalayasScrapedJobs = await prisma.himalayasScrapedJob.findMany()
    * ```
    */
  get himalayasScrapedJob(): Prisma.HimalayasScrapedJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.himalayasSyncState`: Exposes CRUD operations for the **HimalayasSyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HimalayasSyncStates
    * const himalayasSyncStates = await prisma.himalayasSyncState.findMany()
    * ```
    */
  get himalayasSyncState(): Prisma.HimalayasSyncStateDelegate<ExtArgs, ClientOptions>;
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
    HimalayasScrapedJob: 'HimalayasScrapedJob',
    HimalayasSyncState: 'HimalayasSyncState'
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
      modelProps: "himalayasScrapedJob" | "himalayasSyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      HimalayasScrapedJob: {
        payload: Prisma.$HimalayasScrapedJobPayload<ExtArgs>
        fields: Prisma.HimalayasScrapedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HimalayasScrapedJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HimalayasScrapedJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>
          }
          findFirst: {
            args: Prisma.HimalayasScrapedJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HimalayasScrapedJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>
          }
          findMany: {
            args: Prisma.HimalayasScrapedJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>[]
          }
          create: {
            args: Prisma.HimalayasScrapedJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>
          }
          createMany: {
            args: Prisma.HimalayasScrapedJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HimalayasScrapedJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>[]
          }
          delete: {
            args: Prisma.HimalayasScrapedJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>
          }
          update: {
            args: Prisma.HimalayasScrapedJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>
          }
          deleteMany: {
            args: Prisma.HimalayasScrapedJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HimalayasScrapedJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HimalayasScrapedJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>[]
          }
          upsert: {
            args: Prisma.HimalayasScrapedJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasScrapedJobPayload>
          }
          aggregate: {
            args: Prisma.HimalayasScrapedJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHimalayasScrapedJob>
          }
          groupBy: {
            args: Prisma.HimalayasScrapedJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<HimalayasScrapedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.HimalayasScrapedJobCountArgs<ExtArgs>
            result: $Utils.Optional<HimalayasScrapedJobCountAggregateOutputType> | number
          }
        }
      }
      HimalayasSyncState: {
        payload: Prisma.$HimalayasSyncStatePayload<ExtArgs>
        fields: Prisma.HimalayasSyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HimalayasSyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HimalayasSyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>
          }
          findFirst: {
            args: Prisma.HimalayasSyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HimalayasSyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>
          }
          findMany: {
            args: Prisma.HimalayasSyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>[]
          }
          create: {
            args: Prisma.HimalayasSyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>
          }
          createMany: {
            args: Prisma.HimalayasSyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HimalayasSyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>[]
          }
          delete: {
            args: Prisma.HimalayasSyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>
          }
          update: {
            args: Prisma.HimalayasSyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>
          }
          deleteMany: {
            args: Prisma.HimalayasSyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HimalayasSyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HimalayasSyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>[]
          }
          upsert: {
            args: Prisma.HimalayasSyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HimalayasSyncStatePayload>
          }
          aggregate: {
            args: Prisma.HimalayasSyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHimalayasSyncState>
          }
          groupBy: {
            args: Prisma.HimalayasSyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<HimalayasSyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.HimalayasSyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<HimalayasSyncStateCountAggregateOutputType> | number
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
    himalayasScrapedJob?: HimalayasScrapedJobOmit
    himalayasSyncState?: HimalayasSyncStateOmit
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
   * Model HimalayasScrapedJob
   */

  export type AggregateHimalayasScrapedJob = {
    _count: HimalayasScrapedJobCountAggregateOutputType | null
    _avg: HimalayasScrapedJobAvgAggregateOutputType | null
    _sum: HimalayasScrapedJobSumAggregateOutputType | null
    _min: HimalayasScrapedJobMinAggregateOutputType | null
    _max: HimalayasScrapedJobMaxAggregateOutputType | null
  }

  export type HimalayasScrapedJobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type HimalayasScrapedJobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
    retryCount: number | null
  }

  export type HimalayasScrapedJobMinAggregateOutputType = {
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

  export type HimalayasScrapedJobMaxAggregateOutputType = {
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

  export type HimalayasScrapedJobCountAggregateOutputType = {
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


  export type HimalayasScrapedJobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type HimalayasScrapedJobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
    retryCount?: true
  }

  export type HimalayasScrapedJobMinAggregateInputType = {
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

  export type HimalayasScrapedJobMaxAggregateInputType = {
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

  export type HimalayasScrapedJobCountAggregateInputType = {
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

  export type HimalayasScrapedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HimalayasScrapedJob to aggregate.
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasScrapedJobs to fetch.
     */
    orderBy?: HimalayasScrapedJobOrderByWithRelationInput | HimalayasScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HimalayasScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HimalayasScrapedJobs
    **/
    _count?: true | HimalayasScrapedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HimalayasScrapedJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HimalayasScrapedJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HimalayasScrapedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HimalayasScrapedJobMaxAggregateInputType
  }

  export type GetHimalayasScrapedJobAggregateType<T extends HimalayasScrapedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateHimalayasScrapedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHimalayasScrapedJob[P]>
      : GetScalarType<T[P], AggregateHimalayasScrapedJob[P]>
  }




  export type HimalayasScrapedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HimalayasScrapedJobWhereInput
    orderBy?: HimalayasScrapedJobOrderByWithAggregationInput | HimalayasScrapedJobOrderByWithAggregationInput[]
    by: HimalayasScrapedJobScalarFieldEnum[] | HimalayasScrapedJobScalarFieldEnum
    having?: HimalayasScrapedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HimalayasScrapedJobCountAggregateInputType | true
    _avg?: HimalayasScrapedJobAvgAggregateInputType
    _sum?: HimalayasScrapedJobSumAggregateInputType
    _min?: HimalayasScrapedJobMinAggregateInputType
    _max?: HimalayasScrapedJobMaxAggregateInputType
  }

  export type HimalayasScrapedJobGroupByOutputType = {
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
    _count: HimalayasScrapedJobCountAggregateOutputType | null
    _avg: HimalayasScrapedJobAvgAggregateOutputType | null
    _sum: HimalayasScrapedJobSumAggregateOutputType | null
    _min: HimalayasScrapedJobMinAggregateOutputType | null
    _max: HimalayasScrapedJobMaxAggregateOutputType | null
  }

  type GetHimalayasScrapedJobGroupByPayload<T extends HimalayasScrapedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HimalayasScrapedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HimalayasScrapedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HimalayasScrapedJobGroupByOutputType[P]>
            : GetScalarType<T[P], HimalayasScrapedJobGroupByOutputType[P]>
        }
      >
    >


  export type HimalayasScrapedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["himalayasScrapedJob"]>

  export type HimalayasScrapedJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["himalayasScrapedJob"]>

  export type HimalayasScrapedJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["himalayasScrapedJob"]>

  export type HimalayasScrapedJobSelectScalar = {
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

  export type HimalayasScrapedJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "url" | "title" | "companyName" | "location" | "remoteType" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "tags" | "outboxStatus" | "publishedAt" | "retryCount" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["himalayasScrapedJob"]>

  export type $HimalayasScrapedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HimalayasScrapedJob"
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
    }, ExtArgs["result"]["himalayasScrapedJob"]>
    composites: {}
  }

  type HimalayasScrapedJobGetPayload<S extends boolean | null | undefined | HimalayasScrapedJobDefaultArgs> = $Result.GetResult<Prisma.$HimalayasScrapedJobPayload, S>

  type HimalayasScrapedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HimalayasScrapedJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HimalayasScrapedJobCountAggregateInputType | true
    }

  export interface HimalayasScrapedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HimalayasScrapedJob'], meta: { name: 'HimalayasScrapedJob' } }
    /**
     * Find zero or one HimalayasScrapedJob that matches the filter.
     * @param {HimalayasScrapedJobFindUniqueArgs} args - Arguments to find a HimalayasScrapedJob
     * @example
     * // Get one HimalayasScrapedJob
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HimalayasScrapedJobFindUniqueArgs>(args: SelectSubset<T, HimalayasScrapedJobFindUniqueArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HimalayasScrapedJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HimalayasScrapedJobFindUniqueOrThrowArgs} args - Arguments to find a HimalayasScrapedJob
     * @example
     * // Get one HimalayasScrapedJob
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HimalayasScrapedJobFindUniqueOrThrowArgs>(args: SelectSubset<T, HimalayasScrapedJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HimalayasScrapedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobFindFirstArgs} args - Arguments to find a HimalayasScrapedJob
     * @example
     * // Get one HimalayasScrapedJob
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HimalayasScrapedJobFindFirstArgs>(args?: SelectSubset<T, HimalayasScrapedJobFindFirstArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HimalayasScrapedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobFindFirstOrThrowArgs} args - Arguments to find a HimalayasScrapedJob
     * @example
     * // Get one HimalayasScrapedJob
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HimalayasScrapedJobFindFirstOrThrowArgs>(args?: SelectSubset<T, HimalayasScrapedJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HimalayasScrapedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HimalayasScrapedJobs
     * const himalayasScrapedJobs = await prisma.himalayasScrapedJob.findMany()
     * 
     * // Get first 10 HimalayasScrapedJobs
     * const himalayasScrapedJobs = await prisma.himalayasScrapedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const himalayasScrapedJobWithIdOnly = await prisma.himalayasScrapedJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HimalayasScrapedJobFindManyArgs>(args?: SelectSubset<T, HimalayasScrapedJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HimalayasScrapedJob.
     * @param {HimalayasScrapedJobCreateArgs} args - Arguments to create a HimalayasScrapedJob.
     * @example
     * // Create one HimalayasScrapedJob
     * const HimalayasScrapedJob = await prisma.himalayasScrapedJob.create({
     *   data: {
     *     // ... data to create a HimalayasScrapedJob
     *   }
     * })
     * 
     */
    create<T extends HimalayasScrapedJobCreateArgs>(args: SelectSubset<T, HimalayasScrapedJobCreateArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HimalayasScrapedJobs.
     * @param {HimalayasScrapedJobCreateManyArgs} args - Arguments to create many HimalayasScrapedJobs.
     * @example
     * // Create many HimalayasScrapedJobs
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HimalayasScrapedJobCreateManyArgs>(args?: SelectSubset<T, HimalayasScrapedJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HimalayasScrapedJobs and returns the data saved in the database.
     * @param {HimalayasScrapedJobCreateManyAndReturnArgs} args - Arguments to create many HimalayasScrapedJobs.
     * @example
     * // Create many HimalayasScrapedJobs
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HimalayasScrapedJobs and only return the `id`
     * const himalayasScrapedJobWithIdOnly = await prisma.himalayasScrapedJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HimalayasScrapedJobCreateManyAndReturnArgs>(args?: SelectSubset<T, HimalayasScrapedJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HimalayasScrapedJob.
     * @param {HimalayasScrapedJobDeleteArgs} args - Arguments to delete one HimalayasScrapedJob.
     * @example
     * // Delete one HimalayasScrapedJob
     * const HimalayasScrapedJob = await prisma.himalayasScrapedJob.delete({
     *   where: {
     *     // ... filter to delete one HimalayasScrapedJob
     *   }
     * })
     * 
     */
    delete<T extends HimalayasScrapedJobDeleteArgs>(args: SelectSubset<T, HimalayasScrapedJobDeleteArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HimalayasScrapedJob.
     * @param {HimalayasScrapedJobUpdateArgs} args - Arguments to update one HimalayasScrapedJob.
     * @example
     * // Update one HimalayasScrapedJob
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HimalayasScrapedJobUpdateArgs>(args: SelectSubset<T, HimalayasScrapedJobUpdateArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HimalayasScrapedJobs.
     * @param {HimalayasScrapedJobDeleteManyArgs} args - Arguments to filter HimalayasScrapedJobs to delete.
     * @example
     * // Delete a few HimalayasScrapedJobs
     * const { count } = await prisma.himalayasScrapedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HimalayasScrapedJobDeleteManyArgs>(args?: SelectSubset<T, HimalayasScrapedJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HimalayasScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HimalayasScrapedJobs
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HimalayasScrapedJobUpdateManyArgs>(args: SelectSubset<T, HimalayasScrapedJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HimalayasScrapedJobs and returns the data updated in the database.
     * @param {HimalayasScrapedJobUpdateManyAndReturnArgs} args - Arguments to update many HimalayasScrapedJobs.
     * @example
     * // Update many HimalayasScrapedJobs
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HimalayasScrapedJobs and only return the `id`
     * const himalayasScrapedJobWithIdOnly = await prisma.himalayasScrapedJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends HimalayasScrapedJobUpdateManyAndReturnArgs>(args: SelectSubset<T, HimalayasScrapedJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HimalayasScrapedJob.
     * @param {HimalayasScrapedJobUpsertArgs} args - Arguments to update or create a HimalayasScrapedJob.
     * @example
     * // Update or create a HimalayasScrapedJob
     * const himalayasScrapedJob = await prisma.himalayasScrapedJob.upsert({
     *   create: {
     *     // ... data to create a HimalayasScrapedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HimalayasScrapedJob we want to update
     *   }
     * })
     */
    upsert<T extends HimalayasScrapedJobUpsertArgs>(args: SelectSubset<T, HimalayasScrapedJobUpsertArgs<ExtArgs>>): Prisma__HimalayasScrapedJobClient<$Result.GetResult<Prisma.$HimalayasScrapedJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HimalayasScrapedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobCountArgs} args - Arguments to filter HimalayasScrapedJobs to count.
     * @example
     * // Count the number of HimalayasScrapedJobs
     * const count = await prisma.himalayasScrapedJob.count({
     *   where: {
     *     // ... the filter for the HimalayasScrapedJobs we want to count
     *   }
     * })
    **/
    count<T extends HimalayasScrapedJobCountArgs>(
      args?: Subset<T, HimalayasScrapedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HimalayasScrapedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HimalayasScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HimalayasScrapedJobAggregateArgs>(args: Subset<T, HimalayasScrapedJobAggregateArgs>): Prisma.PrismaPromise<GetHimalayasScrapedJobAggregateType<T>>

    /**
     * Group by HimalayasScrapedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasScrapedJobGroupByArgs} args - Group by arguments.
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
      T extends HimalayasScrapedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HimalayasScrapedJobGroupByArgs['orderBy'] }
        : { orderBy?: HimalayasScrapedJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HimalayasScrapedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHimalayasScrapedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HimalayasScrapedJob model
   */
  readonly fields: HimalayasScrapedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HimalayasScrapedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HimalayasScrapedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HimalayasScrapedJob model
   */
  interface HimalayasScrapedJobFieldRefs {
    readonly id: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly externalId: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly url: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly title: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly companyName: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly location: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly remoteType: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly salaryMin: FieldRef<"HimalayasScrapedJob", 'Float'>
    readonly salaryMax: FieldRef<"HimalayasScrapedJob", 'Float'>
    readonly currency: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly contractType: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly rawDescription: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly descriptionMarkdown: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly datePosted: FieldRef<"HimalayasScrapedJob", 'DateTime'>
    readonly tags: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly outboxStatus: FieldRef<"HimalayasScrapedJob", 'OutboxStatus'>
    readonly publishedAt: FieldRef<"HimalayasScrapedJob", 'DateTime'>
    readonly retryCount: FieldRef<"HimalayasScrapedJob", 'Int'>
    readonly lastError: FieldRef<"HimalayasScrapedJob", 'String'>
    readonly createdAt: FieldRef<"HimalayasScrapedJob", 'DateTime'>
    readonly updatedAt: FieldRef<"HimalayasScrapedJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HimalayasScrapedJob findUnique
   */
  export type HimalayasScrapedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasScrapedJob to fetch.
     */
    where: HimalayasScrapedJobWhereUniqueInput
  }

  /**
   * HimalayasScrapedJob findUniqueOrThrow
   */
  export type HimalayasScrapedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasScrapedJob to fetch.
     */
    where: HimalayasScrapedJobWhereUniqueInput
  }

  /**
   * HimalayasScrapedJob findFirst
   */
  export type HimalayasScrapedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasScrapedJob to fetch.
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasScrapedJobs to fetch.
     */
    orderBy?: HimalayasScrapedJobOrderByWithRelationInput | HimalayasScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HimalayasScrapedJobs.
     */
    cursor?: HimalayasScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HimalayasScrapedJobs.
     */
    distinct?: HimalayasScrapedJobScalarFieldEnum | HimalayasScrapedJobScalarFieldEnum[]
  }

  /**
   * HimalayasScrapedJob findFirstOrThrow
   */
  export type HimalayasScrapedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasScrapedJob to fetch.
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasScrapedJobs to fetch.
     */
    orderBy?: HimalayasScrapedJobOrderByWithRelationInput | HimalayasScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HimalayasScrapedJobs.
     */
    cursor?: HimalayasScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HimalayasScrapedJobs.
     */
    distinct?: HimalayasScrapedJobScalarFieldEnum | HimalayasScrapedJobScalarFieldEnum[]
  }

  /**
   * HimalayasScrapedJob findMany
   */
  export type HimalayasScrapedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasScrapedJobs to fetch.
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasScrapedJobs to fetch.
     */
    orderBy?: HimalayasScrapedJobOrderByWithRelationInput | HimalayasScrapedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HimalayasScrapedJobs.
     */
    cursor?: HimalayasScrapedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasScrapedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasScrapedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HimalayasScrapedJobs.
     */
    distinct?: HimalayasScrapedJobScalarFieldEnum | HimalayasScrapedJobScalarFieldEnum[]
  }

  /**
   * HimalayasScrapedJob create
   */
  export type HimalayasScrapedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to create a HimalayasScrapedJob.
     */
    data: XOR<HimalayasScrapedJobCreateInput, HimalayasScrapedJobUncheckedCreateInput>
  }

  /**
   * HimalayasScrapedJob createMany
   */
  export type HimalayasScrapedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HimalayasScrapedJobs.
     */
    data: HimalayasScrapedJobCreateManyInput | HimalayasScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HimalayasScrapedJob createManyAndReturn
   */
  export type HimalayasScrapedJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to create many HimalayasScrapedJobs.
     */
    data: HimalayasScrapedJobCreateManyInput | HimalayasScrapedJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HimalayasScrapedJob update
   */
  export type HimalayasScrapedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * The data needed to update a HimalayasScrapedJob.
     */
    data: XOR<HimalayasScrapedJobUpdateInput, HimalayasScrapedJobUncheckedUpdateInput>
    /**
     * Choose, which HimalayasScrapedJob to update.
     */
    where: HimalayasScrapedJobWhereUniqueInput
  }

  /**
   * HimalayasScrapedJob updateMany
   */
  export type HimalayasScrapedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HimalayasScrapedJobs.
     */
    data: XOR<HimalayasScrapedJobUpdateManyMutationInput, HimalayasScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which HimalayasScrapedJobs to update
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * Limit how many HimalayasScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * HimalayasScrapedJob updateManyAndReturn
   */
  export type HimalayasScrapedJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * The data used to update HimalayasScrapedJobs.
     */
    data: XOR<HimalayasScrapedJobUpdateManyMutationInput, HimalayasScrapedJobUncheckedUpdateManyInput>
    /**
     * Filter which HimalayasScrapedJobs to update
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * Limit how many HimalayasScrapedJobs to update.
     */
    limit?: number
  }

  /**
   * HimalayasScrapedJob upsert
   */
  export type HimalayasScrapedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * The filter to search for the HimalayasScrapedJob to update in case it exists.
     */
    where: HimalayasScrapedJobWhereUniqueInput
    /**
     * In case the HimalayasScrapedJob found by the `where` argument doesn't exist, create a new HimalayasScrapedJob with this data.
     */
    create: XOR<HimalayasScrapedJobCreateInput, HimalayasScrapedJobUncheckedCreateInput>
    /**
     * In case the HimalayasScrapedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HimalayasScrapedJobUpdateInput, HimalayasScrapedJobUncheckedUpdateInput>
  }

  /**
   * HimalayasScrapedJob delete
   */
  export type HimalayasScrapedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
    /**
     * Filter which HimalayasScrapedJob to delete.
     */
    where: HimalayasScrapedJobWhereUniqueInput
  }

  /**
   * HimalayasScrapedJob deleteMany
   */
  export type HimalayasScrapedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HimalayasScrapedJobs to delete
     */
    where?: HimalayasScrapedJobWhereInput
    /**
     * Limit how many HimalayasScrapedJobs to delete.
     */
    limit?: number
  }

  /**
   * HimalayasScrapedJob without action
   */
  export type HimalayasScrapedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasScrapedJob
     */
    select?: HimalayasScrapedJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasScrapedJob
     */
    omit?: HimalayasScrapedJobOmit<ExtArgs> | null
  }


  /**
   * Model HimalayasSyncState
   */

  export type AggregateHimalayasSyncState = {
    _count: HimalayasSyncStateCountAggregateOutputType | null
    _avg: HimalayasSyncStateAvgAggregateOutputType | null
    _sum: HimalayasSyncStateSumAggregateOutputType | null
    _min: HimalayasSyncStateMinAggregateOutputType | null
    _max: HimalayasSyncStateMaxAggregateOutputType | null
  }

  export type HimalayasSyncStateAvgAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type HimalayasSyncStateSumAggregateOutputType = {
    itemsExtracted: number | null
  }

  export type HimalayasSyncStateMinAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HimalayasSyncStateMaxAggregateOutputType = {
    id: string | null
    source: string | null
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HimalayasSyncStateCountAggregateOutputType = {
    id: number
    source: number
    lastSyncAt: number
    lastSuccessfulSyncAt: number
    itemsExtracted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HimalayasSyncStateAvgAggregateInputType = {
    itemsExtracted?: true
  }

  export type HimalayasSyncStateSumAggregateInputType = {
    itemsExtracted?: true
  }

  export type HimalayasSyncStateMinAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HimalayasSyncStateMaxAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HimalayasSyncStateCountAggregateInputType = {
    id?: true
    source?: true
    lastSyncAt?: true
    lastSuccessfulSyncAt?: true
    itemsExtracted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HimalayasSyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HimalayasSyncState to aggregate.
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasSyncStates to fetch.
     */
    orderBy?: HimalayasSyncStateOrderByWithRelationInput | HimalayasSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HimalayasSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HimalayasSyncStates
    **/
    _count?: true | HimalayasSyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HimalayasSyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HimalayasSyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HimalayasSyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HimalayasSyncStateMaxAggregateInputType
  }

  export type GetHimalayasSyncStateAggregateType<T extends HimalayasSyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateHimalayasSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHimalayasSyncState[P]>
      : GetScalarType<T[P], AggregateHimalayasSyncState[P]>
  }




  export type HimalayasSyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HimalayasSyncStateWhereInput
    orderBy?: HimalayasSyncStateOrderByWithAggregationInput | HimalayasSyncStateOrderByWithAggregationInput[]
    by: HimalayasSyncStateScalarFieldEnum[] | HimalayasSyncStateScalarFieldEnum
    having?: HimalayasSyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HimalayasSyncStateCountAggregateInputType | true
    _avg?: HimalayasSyncStateAvgAggregateInputType
    _sum?: HimalayasSyncStateSumAggregateInputType
    _min?: HimalayasSyncStateMinAggregateInputType
    _max?: HimalayasSyncStateMaxAggregateInputType
  }

  export type HimalayasSyncStateGroupByOutputType = {
    id: string
    source: string
    lastSyncAt: Date | null
    lastSuccessfulSyncAt: Date | null
    itemsExtracted: number
    createdAt: Date
    updatedAt: Date
    _count: HimalayasSyncStateCountAggregateOutputType | null
    _avg: HimalayasSyncStateAvgAggregateOutputType | null
    _sum: HimalayasSyncStateSumAggregateOutputType | null
    _min: HimalayasSyncStateMinAggregateOutputType | null
    _max: HimalayasSyncStateMaxAggregateOutputType | null
  }

  type GetHimalayasSyncStateGroupByPayload<T extends HimalayasSyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HimalayasSyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HimalayasSyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HimalayasSyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], HimalayasSyncStateGroupByOutputType[P]>
        }
      >
    >


  export type HimalayasSyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["himalayasSyncState"]>

  export type HimalayasSyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["himalayasSyncState"]>

  export type HimalayasSyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["himalayasSyncState"]>

  export type HimalayasSyncStateSelectScalar = {
    id?: boolean
    source?: boolean
    lastSyncAt?: boolean
    lastSuccessfulSyncAt?: boolean
    itemsExtracted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HimalayasSyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "lastSyncAt" | "lastSuccessfulSyncAt" | "itemsExtracted" | "createdAt" | "updatedAt", ExtArgs["result"]["himalayasSyncState"]>

  export type $HimalayasSyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HimalayasSyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      lastSyncAt: Date | null
      lastSuccessfulSyncAt: Date | null
      itemsExtracted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["himalayasSyncState"]>
    composites: {}
  }

  type HimalayasSyncStateGetPayload<S extends boolean | null | undefined | HimalayasSyncStateDefaultArgs> = $Result.GetResult<Prisma.$HimalayasSyncStatePayload, S>

  type HimalayasSyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HimalayasSyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HimalayasSyncStateCountAggregateInputType | true
    }

  export interface HimalayasSyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HimalayasSyncState'], meta: { name: 'HimalayasSyncState' } }
    /**
     * Find zero or one HimalayasSyncState that matches the filter.
     * @param {HimalayasSyncStateFindUniqueArgs} args - Arguments to find a HimalayasSyncState
     * @example
     * // Get one HimalayasSyncState
     * const himalayasSyncState = await prisma.himalayasSyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HimalayasSyncStateFindUniqueArgs>(args: SelectSubset<T, HimalayasSyncStateFindUniqueArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HimalayasSyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HimalayasSyncStateFindUniqueOrThrowArgs} args - Arguments to find a HimalayasSyncState
     * @example
     * // Get one HimalayasSyncState
     * const himalayasSyncState = await prisma.himalayasSyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HimalayasSyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, HimalayasSyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HimalayasSyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateFindFirstArgs} args - Arguments to find a HimalayasSyncState
     * @example
     * // Get one HimalayasSyncState
     * const himalayasSyncState = await prisma.himalayasSyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HimalayasSyncStateFindFirstArgs>(args?: SelectSubset<T, HimalayasSyncStateFindFirstArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HimalayasSyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateFindFirstOrThrowArgs} args - Arguments to find a HimalayasSyncState
     * @example
     * // Get one HimalayasSyncState
     * const himalayasSyncState = await prisma.himalayasSyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HimalayasSyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, HimalayasSyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HimalayasSyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HimalayasSyncStates
     * const himalayasSyncStates = await prisma.himalayasSyncState.findMany()
     * 
     * // Get first 10 HimalayasSyncStates
     * const himalayasSyncStates = await prisma.himalayasSyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const himalayasSyncStateWithIdOnly = await prisma.himalayasSyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HimalayasSyncStateFindManyArgs>(args?: SelectSubset<T, HimalayasSyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HimalayasSyncState.
     * @param {HimalayasSyncStateCreateArgs} args - Arguments to create a HimalayasSyncState.
     * @example
     * // Create one HimalayasSyncState
     * const HimalayasSyncState = await prisma.himalayasSyncState.create({
     *   data: {
     *     // ... data to create a HimalayasSyncState
     *   }
     * })
     * 
     */
    create<T extends HimalayasSyncStateCreateArgs>(args: SelectSubset<T, HimalayasSyncStateCreateArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HimalayasSyncStates.
     * @param {HimalayasSyncStateCreateManyArgs} args - Arguments to create many HimalayasSyncStates.
     * @example
     * // Create many HimalayasSyncStates
     * const himalayasSyncState = await prisma.himalayasSyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HimalayasSyncStateCreateManyArgs>(args?: SelectSubset<T, HimalayasSyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HimalayasSyncStates and returns the data saved in the database.
     * @param {HimalayasSyncStateCreateManyAndReturnArgs} args - Arguments to create many HimalayasSyncStates.
     * @example
     * // Create many HimalayasSyncStates
     * const himalayasSyncState = await prisma.himalayasSyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HimalayasSyncStates and only return the `id`
     * const himalayasSyncStateWithIdOnly = await prisma.himalayasSyncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HimalayasSyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, HimalayasSyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HimalayasSyncState.
     * @param {HimalayasSyncStateDeleteArgs} args - Arguments to delete one HimalayasSyncState.
     * @example
     * // Delete one HimalayasSyncState
     * const HimalayasSyncState = await prisma.himalayasSyncState.delete({
     *   where: {
     *     // ... filter to delete one HimalayasSyncState
     *   }
     * })
     * 
     */
    delete<T extends HimalayasSyncStateDeleteArgs>(args: SelectSubset<T, HimalayasSyncStateDeleteArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HimalayasSyncState.
     * @param {HimalayasSyncStateUpdateArgs} args - Arguments to update one HimalayasSyncState.
     * @example
     * // Update one HimalayasSyncState
     * const himalayasSyncState = await prisma.himalayasSyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HimalayasSyncStateUpdateArgs>(args: SelectSubset<T, HimalayasSyncStateUpdateArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HimalayasSyncStates.
     * @param {HimalayasSyncStateDeleteManyArgs} args - Arguments to filter HimalayasSyncStates to delete.
     * @example
     * // Delete a few HimalayasSyncStates
     * const { count } = await prisma.himalayasSyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HimalayasSyncStateDeleteManyArgs>(args?: SelectSubset<T, HimalayasSyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HimalayasSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HimalayasSyncStates
     * const himalayasSyncState = await prisma.himalayasSyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HimalayasSyncStateUpdateManyArgs>(args: SelectSubset<T, HimalayasSyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HimalayasSyncStates and returns the data updated in the database.
     * @param {HimalayasSyncStateUpdateManyAndReturnArgs} args - Arguments to update many HimalayasSyncStates.
     * @example
     * // Update many HimalayasSyncStates
     * const himalayasSyncState = await prisma.himalayasSyncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HimalayasSyncStates and only return the `id`
     * const himalayasSyncStateWithIdOnly = await prisma.himalayasSyncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends HimalayasSyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, HimalayasSyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HimalayasSyncState.
     * @param {HimalayasSyncStateUpsertArgs} args - Arguments to update or create a HimalayasSyncState.
     * @example
     * // Update or create a HimalayasSyncState
     * const himalayasSyncState = await prisma.himalayasSyncState.upsert({
     *   create: {
     *     // ... data to create a HimalayasSyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HimalayasSyncState we want to update
     *   }
     * })
     */
    upsert<T extends HimalayasSyncStateUpsertArgs>(args: SelectSubset<T, HimalayasSyncStateUpsertArgs<ExtArgs>>): Prisma__HimalayasSyncStateClient<$Result.GetResult<Prisma.$HimalayasSyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HimalayasSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateCountArgs} args - Arguments to filter HimalayasSyncStates to count.
     * @example
     * // Count the number of HimalayasSyncStates
     * const count = await prisma.himalayasSyncState.count({
     *   where: {
     *     // ... the filter for the HimalayasSyncStates we want to count
     *   }
     * })
    **/
    count<T extends HimalayasSyncStateCountArgs>(
      args?: Subset<T, HimalayasSyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HimalayasSyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HimalayasSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HimalayasSyncStateAggregateArgs>(args: Subset<T, HimalayasSyncStateAggregateArgs>): Prisma.PrismaPromise<GetHimalayasSyncStateAggregateType<T>>

    /**
     * Group by HimalayasSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HimalayasSyncStateGroupByArgs} args - Group by arguments.
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
      T extends HimalayasSyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HimalayasSyncStateGroupByArgs['orderBy'] }
        : { orderBy?: HimalayasSyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HimalayasSyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHimalayasSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HimalayasSyncState model
   */
  readonly fields: HimalayasSyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HimalayasSyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HimalayasSyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HimalayasSyncState model
   */
  interface HimalayasSyncStateFieldRefs {
    readonly id: FieldRef<"HimalayasSyncState", 'String'>
    readonly source: FieldRef<"HimalayasSyncState", 'String'>
    readonly lastSyncAt: FieldRef<"HimalayasSyncState", 'DateTime'>
    readonly lastSuccessfulSyncAt: FieldRef<"HimalayasSyncState", 'DateTime'>
    readonly itemsExtracted: FieldRef<"HimalayasSyncState", 'Int'>
    readonly createdAt: FieldRef<"HimalayasSyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"HimalayasSyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HimalayasSyncState findUnique
   */
  export type HimalayasSyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasSyncState to fetch.
     */
    where: HimalayasSyncStateWhereUniqueInput
  }

  /**
   * HimalayasSyncState findUniqueOrThrow
   */
  export type HimalayasSyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasSyncState to fetch.
     */
    where: HimalayasSyncStateWhereUniqueInput
  }

  /**
   * HimalayasSyncState findFirst
   */
  export type HimalayasSyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasSyncState to fetch.
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasSyncStates to fetch.
     */
    orderBy?: HimalayasSyncStateOrderByWithRelationInput | HimalayasSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HimalayasSyncStates.
     */
    cursor?: HimalayasSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HimalayasSyncStates.
     */
    distinct?: HimalayasSyncStateScalarFieldEnum | HimalayasSyncStateScalarFieldEnum[]
  }

  /**
   * HimalayasSyncState findFirstOrThrow
   */
  export type HimalayasSyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasSyncState to fetch.
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasSyncStates to fetch.
     */
    orderBy?: HimalayasSyncStateOrderByWithRelationInput | HimalayasSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HimalayasSyncStates.
     */
    cursor?: HimalayasSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HimalayasSyncStates.
     */
    distinct?: HimalayasSyncStateScalarFieldEnum | HimalayasSyncStateScalarFieldEnum[]
  }

  /**
   * HimalayasSyncState findMany
   */
  export type HimalayasSyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * Filter, which HimalayasSyncStates to fetch.
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HimalayasSyncStates to fetch.
     */
    orderBy?: HimalayasSyncStateOrderByWithRelationInput | HimalayasSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HimalayasSyncStates.
     */
    cursor?: HimalayasSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HimalayasSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HimalayasSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HimalayasSyncStates.
     */
    distinct?: HimalayasSyncStateScalarFieldEnum | HimalayasSyncStateScalarFieldEnum[]
  }

  /**
   * HimalayasSyncState create
   */
  export type HimalayasSyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a HimalayasSyncState.
     */
    data: XOR<HimalayasSyncStateCreateInput, HimalayasSyncStateUncheckedCreateInput>
  }

  /**
   * HimalayasSyncState createMany
   */
  export type HimalayasSyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HimalayasSyncStates.
     */
    data: HimalayasSyncStateCreateManyInput | HimalayasSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HimalayasSyncState createManyAndReturn
   */
  export type HimalayasSyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many HimalayasSyncStates.
     */
    data: HimalayasSyncStateCreateManyInput | HimalayasSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HimalayasSyncState update
   */
  export type HimalayasSyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a HimalayasSyncState.
     */
    data: XOR<HimalayasSyncStateUpdateInput, HimalayasSyncStateUncheckedUpdateInput>
    /**
     * Choose, which HimalayasSyncState to update.
     */
    where: HimalayasSyncStateWhereUniqueInput
  }

  /**
   * HimalayasSyncState updateMany
   */
  export type HimalayasSyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HimalayasSyncStates.
     */
    data: XOR<HimalayasSyncStateUpdateManyMutationInput, HimalayasSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which HimalayasSyncStates to update
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * Limit how many HimalayasSyncStates to update.
     */
    limit?: number
  }

  /**
   * HimalayasSyncState updateManyAndReturn
   */
  export type HimalayasSyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * The data used to update HimalayasSyncStates.
     */
    data: XOR<HimalayasSyncStateUpdateManyMutationInput, HimalayasSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which HimalayasSyncStates to update
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * Limit how many HimalayasSyncStates to update.
     */
    limit?: number
  }

  /**
   * HimalayasSyncState upsert
   */
  export type HimalayasSyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the HimalayasSyncState to update in case it exists.
     */
    where: HimalayasSyncStateWhereUniqueInput
    /**
     * In case the HimalayasSyncState found by the `where` argument doesn't exist, create a new HimalayasSyncState with this data.
     */
    create: XOR<HimalayasSyncStateCreateInput, HimalayasSyncStateUncheckedCreateInput>
    /**
     * In case the HimalayasSyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HimalayasSyncStateUpdateInput, HimalayasSyncStateUncheckedUpdateInput>
  }

  /**
   * HimalayasSyncState delete
   */
  export type HimalayasSyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
    /**
     * Filter which HimalayasSyncState to delete.
     */
    where: HimalayasSyncStateWhereUniqueInput
  }

  /**
   * HimalayasSyncState deleteMany
   */
  export type HimalayasSyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HimalayasSyncStates to delete
     */
    where?: HimalayasSyncStateWhereInput
    /**
     * Limit how many HimalayasSyncStates to delete.
     */
    limit?: number
  }

  /**
   * HimalayasSyncState without action
   */
  export type HimalayasSyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HimalayasSyncState
     */
    select?: HimalayasSyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HimalayasSyncState
     */
    omit?: HimalayasSyncStateOmit<ExtArgs> | null
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


  export const HimalayasScrapedJobScalarFieldEnum: {
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

  export type HimalayasScrapedJobScalarFieldEnum = (typeof HimalayasScrapedJobScalarFieldEnum)[keyof typeof HimalayasScrapedJobScalarFieldEnum]


  export const HimalayasSyncStateScalarFieldEnum: {
    id: 'id',
    source: 'source',
    lastSyncAt: 'lastSyncAt',
    lastSuccessfulSyncAt: 'lastSuccessfulSyncAt',
    itemsExtracted: 'itemsExtracted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HimalayasSyncStateScalarFieldEnum = (typeof HimalayasSyncStateScalarFieldEnum)[keyof typeof HimalayasSyncStateScalarFieldEnum]


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


  export type HimalayasScrapedJobWhereInput = {
    AND?: HimalayasScrapedJobWhereInput | HimalayasScrapedJobWhereInput[]
    OR?: HimalayasScrapedJobWhereInput[]
    NOT?: HimalayasScrapedJobWhereInput | HimalayasScrapedJobWhereInput[]
    id?: StringFilter<"HimalayasScrapedJob"> | string
    externalId?: StringFilter<"HimalayasScrapedJob"> | string
    url?: StringFilter<"HimalayasScrapedJob"> | string
    title?: StringFilter<"HimalayasScrapedJob"> | string
    companyName?: StringFilter<"HimalayasScrapedJob"> | string
    location?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"HimalayasScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"HimalayasScrapedJob"> | number | null
    currency?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    contractType?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    rawDescription?: StringFilter<"HimalayasScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"HimalayasScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"HimalayasScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"HimalayasScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"HimalayasScrapedJob"> | number
    lastError?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"HimalayasScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"HimalayasScrapedJob"> | Date | string
  }

  export type HimalayasScrapedJobOrderByWithRelationInput = {
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

  export type HimalayasScrapedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    url?: string
    AND?: HimalayasScrapedJobWhereInput | HimalayasScrapedJobWhereInput[]
    OR?: HimalayasScrapedJobWhereInput[]
    NOT?: HimalayasScrapedJobWhereInput | HimalayasScrapedJobWhereInput[]
    title?: StringFilter<"HimalayasScrapedJob"> | string
    companyName?: StringFilter<"HimalayasScrapedJob"> | string
    location?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    remoteType?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    salaryMin?: FloatNullableFilter<"HimalayasScrapedJob"> | number | null
    salaryMax?: FloatNullableFilter<"HimalayasScrapedJob"> | number | null
    currency?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    contractType?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    rawDescription?: StringFilter<"HimalayasScrapedJob"> | string
    descriptionMarkdown?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    datePosted?: DateTimeNullableFilter<"HimalayasScrapedJob"> | Date | string | null
    tags?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusFilter<"HimalayasScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableFilter<"HimalayasScrapedJob"> | Date | string | null
    retryCount?: IntFilter<"HimalayasScrapedJob"> | number
    lastError?: StringNullableFilter<"HimalayasScrapedJob"> | string | null
    createdAt?: DateTimeFilter<"HimalayasScrapedJob"> | Date | string
    updatedAt?: DateTimeFilter<"HimalayasScrapedJob"> | Date | string
  }, "id" | "externalId" | "url">

  export type HimalayasScrapedJobOrderByWithAggregationInput = {
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
    _count?: HimalayasScrapedJobCountOrderByAggregateInput
    _avg?: HimalayasScrapedJobAvgOrderByAggregateInput
    _max?: HimalayasScrapedJobMaxOrderByAggregateInput
    _min?: HimalayasScrapedJobMinOrderByAggregateInput
    _sum?: HimalayasScrapedJobSumOrderByAggregateInput
  }

  export type HimalayasScrapedJobScalarWhereWithAggregatesInput = {
    AND?: HimalayasScrapedJobScalarWhereWithAggregatesInput | HimalayasScrapedJobScalarWhereWithAggregatesInput[]
    OR?: HimalayasScrapedJobScalarWhereWithAggregatesInput[]
    NOT?: HimalayasScrapedJobScalarWhereWithAggregatesInput | HimalayasScrapedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HimalayasScrapedJob"> | string
    externalId?: StringWithAggregatesFilter<"HimalayasScrapedJob"> | string
    url?: StringWithAggregatesFilter<"HimalayasScrapedJob"> | string
    title?: StringWithAggregatesFilter<"HimalayasScrapedJob"> | string
    companyName?: StringWithAggregatesFilter<"HimalayasScrapedJob"> | string
    location?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    remoteType?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    salaryMin?: FloatNullableWithAggregatesFilter<"HimalayasScrapedJob"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"HimalayasScrapedJob"> | number | null
    currency?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    rawDescription?: StringWithAggregatesFilter<"HimalayasScrapedJob"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"HimalayasScrapedJob"> | Date | string | null
    tags?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    outboxStatus?: EnumOutboxStatusWithAggregatesFilter<"HimalayasScrapedJob"> | $Enums.OutboxStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"HimalayasScrapedJob"> | Date | string | null
    retryCount?: IntWithAggregatesFilter<"HimalayasScrapedJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"HimalayasScrapedJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HimalayasScrapedJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HimalayasScrapedJob"> | Date | string
  }

  export type HimalayasSyncStateWhereInput = {
    AND?: HimalayasSyncStateWhereInput | HimalayasSyncStateWhereInput[]
    OR?: HimalayasSyncStateWhereInput[]
    NOT?: HimalayasSyncStateWhereInput | HimalayasSyncStateWhereInput[]
    id?: StringFilter<"HimalayasSyncState"> | string
    source?: StringFilter<"HimalayasSyncState"> | string
    lastSyncAt?: DateTimeNullableFilter<"HimalayasSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"HimalayasSyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"HimalayasSyncState"> | number
    createdAt?: DateTimeFilter<"HimalayasSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"HimalayasSyncState"> | Date | string
  }

  export type HimalayasSyncStateOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HimalayasSyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    source?: string
    AND?: HimalayasSyncStateWhereInput | HimalayasSyncStateWhereInput[]
    OR?: HimalayasSyncStateWhereInput[]
    NOT?: HimalayasSyncStateWhereInput | HimalayasSyncStateWhereInput[]
    lastSyncAt?: DateTimeNullableFilter<"HimalayasSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableFilter<"HimalayasSyncState"> | Date | string | null
    itemsExtracted?: IntFilter<"HimalayasSyncState"> | number
    createdAt?: DateTimeFilter<"HimalayasSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"HimalayasSyncState"> | Date | string
  }, "id" | "source">

  export type HimalayasSyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    lastSuccessfulSyncAt?: SortOrderInput | SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HimalayasSyncStateCountOrderByAggregateInput
    _avg?: HimalayasSyncStateAvgOrderByAggregateInput
    _max?: HimalayasSyncStateMaxOrderByAggregateInput
    _min?: HimalayasSyncStateMinOrderByAggregateInput
    _sum?: HimalayasSyncStateSumOrderByAggregateInput
  }

  export type HimalayasSyncStateScalarWhereWithAggregatesInput = {
    AND?: HimalayasSyncStateScalarWhereWithAggregatesInput | HimalayasSyncStateScalarWhereWithAggregatesInput[]
    OR?: HimalayasSyncStateScalarWhereWithAggregatesInput[]
    NOT?: HimalayasSyncStateScalarWhereWithAggregatesInput | HimalayasSyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HimalayasSyncState"> | string
    source?: StringWithAggregatesFilter<"HimalayasSyncState"> | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"HimalayasSyncState"> | Date | string | null
    lastSuccessfulSyncAt?: DateTimeNullableWithAggregatesFilter<"HimalayasSyncState"> | Date | string | null
    itemsExtracted?: IntWithAggregatesFilter<"HimalayasSyncState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"HimalayasSyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HimalayasSyncState"> | Date | string
  }

  export type HimalayasScrapedJobCreateInput = {
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

  export type HimalayasScrapedJobUncheckedCreateInput = {
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

  export type HimalayasScrapedJobUpdateInput = {
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

  export type HimalayasScrapedJobUncheckedUpdateInput = {
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

  export type HimalayasScrapedJobCreateManyInput = {
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

  export type HimalayasScrapedJobUpdateManyMutationInput = {
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

  export type HimalayasScrapedJobUncheckedUpdateManyInput = {
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

  export type HimalayasSyncStateCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HimalayasSyncStateUncheckedCreateInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HimalayasSyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HimalayasSyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HimalayasSyncStateCreateManyInput = {
    id?: string
    source?: string
    lastSyncAt?: Date | string | null
    lastSuccessfulSyncAt?: Date | string | null
    itemsExtracted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HimalayasSyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuccessfulSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemsExtracted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HimalayasSyncStateUncheckedUpdateManyInput = {
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

  export type HimalayasScrapedJobCountOrderByAggregateInput = {
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

  export type HimalayasScrapedJobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    retryCount?: SortOrder
  }

  export type HimalayasScrapedJobMaxOrderByAggregateInput = {
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

  export type HimalayasScrapedJobMinOrderByAggregateInput = {
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

  export type HimalayasScrapedJobSumOrderByAggregateInput = {
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

  export type HimalayasSyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HimalayasSyncStateAvgOrderByAggregateInput = {
    itemsExtracted?: SortOrder
  }

  export type HimalayasSyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HimalayasSyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    lastSyncAt?: SortOrder
    lastSuccessfulSyncAt?: SortOrder
    itemsExtracted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HimalayasSyncStateSumOrderByAggregateInput = {
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