
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model JobCurriculum
 * 
 */
export type JobCurriculum = $Result.DefaultSelection<Prisma.$JobCurriculumPayload>
/**
 * Model JobCurriculumWork
 * 
 */
export type JobCurriculumWork = $Result.DefaultSelection<Prisma.$JobCurriculumWorkPayload>
/**
 * Model JobCurriculumProject
 * 
 */
export type JobCurriculumProject = $Result.DefaultSelection<Prisma.$JobCurriculumProjectPayload>
/**
 * Model JobCurriculumPublication
 * 
 */
export type JobCurriculumPublication = $Result.DefaultSelection<Prisma.$JobCurriculumPublicationPayload>
/**
 * Model JobCurriculumOutbox
 * 
 */
export type JobCurriculumOutbox = $Result.DefaultSelection<Prisma.$JobCurriculumOutboxPayload>
/**
 * Model JobCurriculumPdfOutbox
 * 
 */
export type JobCurriculumPdfOutbox = $Result.DefaultSelection<Prisma.$JobCurriculumPdfOutboxPayload>
/**
 * Model JobEvaluation
 * 
 */
export type JobEvaluation = $Result.DefaultSelection<Prisma.$JobEvaluationPayload>
/**
 * Model JobEvaluationOutbox
 * 
 */
export type JobEvaluationOutbox = $Result.DefaultSelection<Prisma.$JobEvaluationOutboxPayload>
/**
 * Model JobOffer
 * 
 */
export type JobOffer = $Result.DefaultSelection<Prisma.$JobOfferPayload>
/**
 * Model JobStatusHistory
 * 
 */
export type JobStatusHistory = $Result.DefaultSelection<Prisma.$JobStatusHistoryPayload>
/**
 * Model SyncState
 * 
 */
export type SyncState = $Result.DefaultSelection<Prisma.$SyncStatePayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RemoteType: {
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID',
  ON_SITE: 'ON_SITE',
  UNSPECIFIED: 'UNSPECIFIED'
};

export type RemoteType = (typeof RemoteType)[keyof typeof RemoteType]


export const ExperienceLevel: {
  ENTRY_LEVEL: 'ENTRY_LEVEL',
  JUNIOR: 'JUNIOR',
  MID: 'MID',
  SENIOR: 'SENIOR',
  LEAD: 'LEAD',
  EXECUTIVE: 'EXECUTIVE',
  UNSPECIFIED: 'UNSPECIFIED'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const ApplicationStatus: {
  NEW: 'NEW',
  SAVED: 'SAVED',
  APPLIED: 'APPLIED',
  SCREENING: 'SCREENING',
  INTERVIEWING: 'INTERVIEWING',
  OFFER: 'OFFER',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const EvaluationStatus: {
  SUCCESS: 'SUCCESS',
  UNANALYZABLE: 'UNANALYZABLE'
};

export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus]


export const EvaluatorModel: {
  GEMINI_3_1_FLASH_LITE: 'GEMINI_3_1_FLASH_LITE',
  GEMINI_3_5_FLASH_LITE: 'GEMINI_3_5_FLASH_LITE',
  GEMMA_4_12B: 'GEMMA_4_12B',
  GEMMA_4_31B: 'GEMMA_4_31B',
  UNKNOWN: 'UNKNOWN'
};

export type EvaluatorModel = (typeof EvaluatorModel)[keyof typeof EvaluatorModel]


export const EvaluationPriority: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  DISQUALIFIED: 'DISQUALIFIED'
};

export type EvaluationPriority = (typeof EvaluationPriority)[keyof typeof EvaluationPriority]


export const JobSource: {
  ARBEITNOW: 'ARBEITNOW',
  REMOTIVE: 'REMOTIVE',
  JOBICY: 'JOBICY',
  WE_WORK_REMOTELY: 'WE_WORK_REMOTELY',
  HIMALAYAS: 'HIMALAYAS',
  REMOTEOK: 'REMOTEOK',
  MANUAL: 'MANUAL'
};

export type JobSource = (typeof JobSource)[keyof typeof JobSource]


export const OutboxStatus: {
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

export type OutboxStatus = (typeof OutboxStatus)[keyof typeof OutboxStatus]


export const JobEvaluationProcessStatus: {
  NOT_EVALUATED: 'NOT_EVALUATED',
  PENDING: 'PENDING',
  EVALUATING: 'EVALUATING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type JobEvaluationProcessStatus = (typeof JobEvaluationProcessStatus)[keyof typeof JobEvaluationProcessStatus]


export const JobCurriculumPdfStatus: {
  PENDING: 'PENDING',
  GENERATING: 'GENERATING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type JobCurriculumPdfStatus = (typeof JobCurriculumPdfStatus)[keyof typeof JobCurriculumPdfStatus]

}

export type RemoteType = $Enums.RemoteType

export const RemoteType: typeof $Enums.RemoteType

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type EvaluationStatus = $Enums.EvaluationStatus

export const EvaluationStatus: typeof $Enums.EvaluationStatus

export type EvaluatorModel = $Enums.EvaluatorModel

export const EvaluatorModel: typeof $Enums.EvaluatorModel

export type EvaluationPriority = $Enums.EvaluationPriority

export const EvaluationPriority: typeof $Enums.EvaluationPriority

export type JobSource = $Enums.JobSource

export const JobSource: typeof $Enums.JobSource

export type OutboxStatus = $Enums.OutboxStatus

export const OutboxStatus: typeof $Enums.OutboxStatus

export type JobEvaluationProcessStatus = $Enums.JobEvaluationProcessStatus

export const JobEvaluationProcessStatus: typeof $Enums.JobEvaluationProcessStatus

export type JobCurriculumPdfStatus = $Enums.JobCurriculumPdfStatus

export const JobCurriculumPdfStatus: typeof $Enums.JobCurriculumPdfStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobCurriculum`: Exposes CRUD operations for the **JobCurriculum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCurricula
    * const jobCurricula = await prisma.jobCurriculum.findMany()
    * ```
    */
  get jobCurriculum(): Prisma.JobCurriculumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobCurriculumWork`: Exposes CRUD operations for the **JobCurriculumWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCurriculumWorks
    * const jobCurriculumWorks = await prisma.jobCurriculumWork.findMany()
    * ```
    */
  get jobCurriculumWork(): Prisma.JobCurriculumWorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobCurriculumProject`: Exposes CRUD operations for the **JobCurriculumProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCurriculumProjects
    * const jobCurriculumProjects = await prisma.jobCurriculumProject.findMany()
    * ```
    */
  get jobCurriculumProject(): Prisma.JobCurriculumProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobCurriculumPublication`: Exposes CRUD operations for the **JobCurriculumPublication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCurriculumPublications
    * const jobCurriculumPublications = await prisma.jobCurriculumPublication.findMany()
    * ```
    */
  get jobCurriculumPublication(): Prisma.JobCurriculumPublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobCurriculumOutbox`: Exposes CRUD operations for the **JobCurriculumOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCurriculumOutboxes
    * const jobCurriculumOutboxes = await prisma.jobCurriculumOutbox.findMany()
    * ```
    */
  get jobCurriculumOutbox(): Prisma.JobCurriculumOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobCurriculumPdfOutbox`: Exposes CRUD operations for the **JobCurriculumPdfOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCurriculumPdfOutboxes
    * const jobCurriculumPdfOutboxes = await prisma.jobCurriculumPdfOutbox.findMany()
    * ```
    */
  get jobCurriculumPdfOutbox(): Prisma.JobCurriculumPdfOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobEvaluation`: Exposes CRUD operations for the **JobEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobEvaluations
    * const jobEvaluations = await prisma.jobEvaluation.findMany()
    * ```
    */
  get jobEvaluation(): Prisma.JobEvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobEvaluationOutbox`: Exposes CRUD operations for the **JobEvaluationOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobEvaluationOutboxes
    * const jobEvaluationOutboxes = await prisma.jobEvaluationOutbox.findMany()
    * ```
    */
  get jobEvaluationOutbox(): Prisma.JobEvaluationOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobOffer`: Exposes CRUD operations for the **JobOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOffers
    * const jobOffers = await prisma.jobOffer.findMany()
    * ```
    */
  get jobOffer(): Prisma.JobOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobStatusHistory`: Exposes CRUD operations for the **JobStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobStatusHistories
    * const jobStatusHistories = await prisma.jobStatusHistory.findMany()
    * ```
    */
  get jobStatusHistory(): Prisma.JobStatusHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncState`: Exposes CRUD operations for the **SyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncStates
    * const syncStates = await prisma.syncState.findMany()
    * ```
    */
  get syncState(): Prisma.SyncStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;
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
    Company: 'Company',
    JobCurriculum: 'JobCurriculum',
    JobCurriculumWork: 'JobCurriculumWork',
    JobCurriculumProject: 'JobCurriculumProject',
    JobCurriculumPublication: 'JobCurriculumPublication',
    JobCurriculumOutbox: 'JobCurriculumOutbox',
    JobCurriculumPdfOutbox: 'JobCurriculumPdfOutbox',
    JobEvaluation: 'JobEvaluation',
    JobEvaluationOutbox: 'JobEvaluationOutbox',
    JobOffer: 'JobOffer',
    JobStatusHistory: 'JobStatusHistory',
    SyncState: 'SyncState',
    UserProfile: 'UserProfile'
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
      modelProps: "company" | "jobCurriculum" | "jobCurriculumWork" | "jobCurriculumProject" | "jobCurriculumPublication" | "jobCurriculumOutbox" | "jobCurriculumPdfOutbox" | "jobEvaluation" | "jobEvaluationOutbox" | "jobOffer" | "jobStatusHistory" | "syncState" | "userProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      JobCurriculum: {
        payload: Prisma.$JobCurriculumPayload<ExtArgs>
        fields: Prisma.JobCurriculumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCurriculumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCurriculumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>
          }
          findFirst: {
            args: Prisma.JobCurriculumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCurriculumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>
          }
          findMany: {
            args: Prisma.JobCurriculumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>[]
          }
          create: {
            args: Prisma.JobCurriculumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>
          }
          createMany: {
            args: Prisma.JobCurriculumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCurriculumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>[]
          }
          delete: {
            args: Prisma.JobCurriculumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>
          }
          update: {
            args: Prisma.JobCurriculumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>
          }
          deleteMany: {
            args: Prisma.JobCurriculumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCurriculumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobCurriculumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>[]
          }
          upsert: {
            args: Prisma.JobCurriculumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPayload>
          }
          aggregate: {
            args: Prisma.JobCurriculumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCurriculum>
          }
          groupBy: {
            args: Prisma.JobCurriculumGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCurriculumCountArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumCountAggregateOutputType> | number
          }
        }
      }
      JobCurriculumWork: {
        payload: Prisma.$JobCurriculumWorkPayload<ExtArgs>
        fields: Prisma.JobCurriculumWorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCurriculumWorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCurriculumWorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>
          }
          findFirst: {
            args: Prisma.JobCurriculumWorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCurriculumWorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>
          }
          findMany: {
            args: Prisma.JobCurriculumWorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>[]
          }
          create: {
            args: Prisma.JobCurriculumWorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>
          }
          createMany: {
            args: Prisma.JobCurriculumWorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCurriculumWorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>[]
          }
          delete: {
            args: Prisma.JobCurriculumWorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>
          }
          update: {
            args: Prisma.JobCurriculumWorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>
          }
          deleteMany: {
            args: Prisma.JobCurriculumWorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCurriculumWorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobCurriculumWorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>[]
          }
          upsert: {
            args: Prisma.JobCurriculumWorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumWorkPayload>
          }
          aggregate: {
            args: Prisma.JobCurriculumWorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCurriculumWork>
          }
          groupBy: {
            args: Prisma.JobCurriculumWorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumWorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCurriculumWorkCountArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumWorkCountAggregateOutputType> | number
          }
        }
      }
      JobCurriculumProject: {
        payload: Prisma.$JobCurriculumProjectPayload<ExtArgs>
        fields: Prisma.JobCurriculumProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCurriculumProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCurriculumProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>
          }
          findFirst: {
            args: Prisma.JobCurriculumProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCurriculumProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>
          }
          findMany: {
            args: Prisma.JobCurriculumProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>[]
          }
          create: {
            args: Prisma.JobCurriculumProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>
          }
          createMany: {
            args: Prisma.JobCurriculumProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCurriculumProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>[]
          }
          delete: {
            args: Prisma.JobCurriculumProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>
          }
          update: {
            args: Prisma.JobCurriculumProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>
          }
          deleteMany: {
            args: Prisma.JobCurriculumProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCurriculumProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobCurriculumProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>[]
          }
          upsert: {
            args: Prisma.JobCurriculumProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumProjectPayload>
          }
          aggregate: {
            args: Prisma.JobCurriculumProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCurriculumProject>
          }
          groupBy: {
            args: Prisma.JobCurriculumProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCurriculumProjectCountArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumProjectCountAggregateOutputType> | number
          }
        }
      }
      JobCurriculumPublication: {
        payload: Prisma.$JobCurriculumPublicationPayload<ExtArgs>
        fields: Prisma.JobCurriculumPublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCurriculumPublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCurriculumPublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>
          }
          findFirst: {
            args: Prisma.JobCurriculumPublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCurriculumPublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>
          }
          findMany: {
            args: Prisma.JobCurriculumPublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>[]
          }
          create: {
            args: Prisma.JobCurriculumPublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>
          }
          createMany: {
            args: Prisma.JobCurriculumPublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCurriculumPublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>[]
          }
          delete: {
            args: Prisma.JobCurriculumPublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>
          }
          update: {
            args: Prisma.JobCurriculumPublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>
          }
          deleteMany: {
            args: Prisma.JobCurriculumPublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCurriculumPublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobCurriculumPublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>[]
          }
          upsert: {
            args: Prisma.JobCurriculumPublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPublicationPayload>
          }
          aggregate: {
            args: Prisma.JobCurriculumPublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCurriculumPublication>
          }
          groupBy: {
            args: Prisma.JobCurriculumPublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumPublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCurriculumPublicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumPublicationCountAggregateOutputType> | number
          }
        }
      }
      JobCurriculumOutbox: {
        payload: Prisma.$JobCurriculumOutboxPayload<ExtArgs>
        fields: Prisma.JobCurriculumOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCurriculumOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCurriculumOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>
          }
          findFirst: {
            args: Prisma.JobCurriculumOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCurriculumOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>
          }
          findMany: {
            args: Prisma.JobCurriculumOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>[]
          }
          create: {
            args: Prisma.JobCurriculumOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>
          }
          createMany: {
            args: Prisma.JobCurriculumOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCurriculumOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>[]
          }
          delete: {
            args: Prisma.JobCurriculumOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>
          }
          update: {
            args: Prisma.JobCurriculumOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>
          }
          deleteMany: {
            args: Prisma.JobCurriculumOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCurriculumOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobCurriculumOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>[]
          }
          upsert: {
            args: Prisma.JobCurriculumOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumOutboxPayload>
          }
          aggregate: {
            args: Prisma.JobCurriculumOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCurriculumOutbox>
          }
          groupBy: {
            args: Prisma.JobCurriculumOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCurriculumOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumOutboxCountAggregateOutputType> | number
          }
        }
      }
      JobCurriculumPdfOutbox: {
        payload: Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>
        fields: Prisma.JobCurriculumPdfOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCurriculumPdfOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCurriculumPdfOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>
          }
          findFirst: {
            args: Prisma.JobCurriculumPdfOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCurriculumPdfOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>
          }
          findMany: {
            args: Prisma.JobCurriculumPdfOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>[]
          }
          create: {
            args: Prisma.JobCurriculumPdfOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>
          }
          createMany: {
            args: Prisma.JobCurriculumPdfOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCurriculumPdfOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>[]
          }
          delete: {
            args: Prisma.JobCurriculumPdfOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>
          }
          update: {
            args: Prisma.JobCurriculumPdfOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>
          }
          deleteMany: {
            args: Prisma.JobCurriculumPdfOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCurriculumPdfOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobCurriculumPdfOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>[]
          }
          upsert: {
            args: Prisma.JobCurriculumPdfOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCurriculumPdfOutboxPayload>
          }
          aggregate: {
            args: Prisma.JobCurriculumPdfOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCurriculumPdfOutbox>
          }
          groupBy: {
            args: Prisma.JobCurriculumPdfOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumPdfOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCurriculumPdfOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<JobCurriculumPdfOutboxCountAggregateOutputType> | number
          }
        }
      }
      JobEvaluation: {
        payload: Prisma.$JobEvaluationPayload<ExtArgs>
        fields: Prisma.JobEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>
          }
          findFirst: {
            args: Prisma.JobEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>
          }
          findMany: {
            args: Prisma.JobEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>[]
          }
          create: {
            args: Prisma.JobEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>
          }
          createMany: {
            args: Prisma.JobEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>[]
          }
          delete: {
            args: Prisma.JobEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>
          }
          update: {
            args: Prisma.JobEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.JobEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobEvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>[]
          }
          upsert: {
            args: Prisma.JobEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationPayload>
          }
          aggregate: {
            args: Prisma.JobEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobEvaluation>
          }
          groupBy: {
            args: Prisma.JobEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<JobEvaluationCountAggregateOutputType> | number
          }
        }
      }
      JobEvaluationOutbox: {
        payload: Prisma.$JobEvaluationOutboxPayload<ExtArgs>
        fields: Prisma.JobEvaluationOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobEvaluationOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobEvaluationOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>
          }
          findFirst: {
            args: Prisma.JobEvaluationOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobEvaluationOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>
          }
          findMany: {
            args: Prisma.JobEvaluationOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>[]
          }
          create: {
            args: Prisma.JobEvaluationOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>
          }
          createMany: {
            args: Prisma.JobEvaluationOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobEvaluationOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>[]
          }
          delete: {
            args: Prisma.JobEvaluationOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>
          }
          update: {
            args: Prisma.JobEvaluationOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>
          }
          deleteMany: {
            args: Prisma.JobEvaluationOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobEvaluationOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobEvaluationOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>[]
          }
          upsert: {
            args: Prisma.JobEvaluationOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobEvaluationOutboxPayload>
          }
          aggregate: {
            args: Prisma.JobEvaluationOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobEvaluationOutbox>
          }
          groupBy: {
            args: Prisma.JobEvaluationOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobEvaluationOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobEvaluationOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<JobEvaluationOutboxCountAggregateOutputType> | number
          }
        }
      }
      JobOffer: {
        payload: Prisma.$JobOfferPayload<ExtArgs>
        fields: Prisma.JobOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          findFirst: {
            args: Prisma.JobOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          findMany: {
            args: Prisma.JobOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          create: {
            args: Prisma.JobOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          createMany: {
            args: Prisma.JobOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          delete: {
            args: Prisma.JobOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          update: {
            args: Prisma.JobOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          deleteMany: {
            args: Prisma.JobOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>[]
          }
          upsert: {
            args: Prisma.JobOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOfferPayload>
          }
          aggregate: {
            args: Prisma.JobOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOffer>
          }
          groupBy: {
            args: Prisma.JobOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOfferCountArgs<ExtArgs>
            result: $Utils.Optional<JobOfferCountAggregateOutputType> | number
          }
        }
      }
      JobStatusHistory: {
        payload: Prisma.$JobStatusHistoryPayload<ExtArgs>
        fields: Prisma.JobStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.JobStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.JobStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.JobStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.JobStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.JobStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>
          }
          update: {
            args: Prisma.JobStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.JobStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobStatusHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>[]
          }
          upsert: {
            args: Prisma.JobStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.JobStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobStatusHistory>
          }
          groupBy: {
            args: Prisma.JobStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<JobStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      SyncState: {
        payload: Prisma.$SyncStatePayload<ExtArgs>
        fields: Prisma.SyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findFirst: {
            args: Prisma.SyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findMany: {
            args: Prisma.SyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          create: {
            args: Prisma.SyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          createMany: {
            args: Prisma.SyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          delete: {
            args: Prisma.SyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          update: {
            args: Prisma.SyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          deleteMany: {
            args: Prisma.SyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          upsert: {
            args: Prisma.SyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          aggregate: {
            args: Prisma.SyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncState>
          }
          groupBy: {
            args: Prisma.SyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<SyncStateCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
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
    company?: CompanyOmit
    jobCurriculum?: JobCurriculumOmit
    jobCurriculumWork?: JobCurriculumWorkOmit
    jobCurriculumProject?: JobCurriculumProjectOmit
    jobCurriculumPublication?: JobCurriculumPublicationOmit
    jobCurriculumOutbox?: JobCurriculumOutboxOmit
    jobCurriculumPdfOutbox?: JobCurriculumPdfOutboxOmit
    jobEvaluation?: JobEvaluationOmit
    jobEvaluationOutbox?: JobEvaluationOutboxOmit
    jobOffer?: JobOfferOmit
    jobStatusHistory?: JobStatusHistoryOmit
    syncState?: SyncStateOmit
    userProfile?: UserProfileOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    jobOffers: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffers?: boolean | CompanyCountOutputTypeCountJobOffersArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOfferWhereInput
  }


  /**
   * Count Type JobCurriculumCountOutputType
   */

  export type JobCurriculumCountOutputType = {
    work: number
    projects: number
    publications: number
  }

  export type JobCurriculumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | JobCurriculumCountOutputTypeCountWorkArgs
    projects?: boolean | JobCurriculumCountOutputTypeCountProjectsArgs
    publications?: boolean | JobCurriculumCountOutputTypeCountPublicationsArgs
  }

  // Custom InputTypes
  /**
   * JobCurriculumCountOutputType without action
   */
  export type JobCurriculumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumCountOutputType
     */
    select?: JobCurriculumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCurriculumCountOutputType without action
   */
  export type JobCurriculumCountOutputTypeCountWorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumWorkWhereInput
  }

  /**
   * JobCurriculumCountOutputType without action
   */
  export type JobCurriculumCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumProjectWhereInput
  }

  /**
   * JobCurriculumCountOutputType without action
   */
  export type JobCurriculumCountOutputTypeCountPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumPublicationWhereInput
  }


  /**
   * Count Type JobOfferCountOutputType
   */

  export type JobOfferCountOutputType = {
    statusHistory: number
  }

  export type JobOfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistory?: boolean | JobOfferCountOutputTypeCountStatusHistoryArgs
  }

  // Custom InputTypes
  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOfferCountOutputType
     */
    select?: JobOfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobOfferCountOutputType without action
   */
  export type JobOfferCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobStatusHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    employeeCount: number | null
  }

  export type CompanySumAggregateOutputType = {
    employeeCount: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    websiteUrl: string | null
    linkedinUrl: string | null
    industry: string | null
    fundingStage: string | null
    companySizeRange: string | null
    employeeCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    websiteUrl: string | null
    linkedinUrl: string | null
    industry: string | null
    fundingStage: string | null
    companySizeRange: string | null
    employeeCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    websiteUrl: number
    linkedinUrl: number
    industry: number
    fundingStage: number
    companySizeRange: number
    employeeCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    employeeCount?: true
  }

  export type CompanySumAggregateInputType = {
    employeeCount?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    websiteUrl?: true
    linkedinUrl?: true
    industry?: true
    fundingStage?: true
    companySizeRange?: true
    employeeCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    websiteUrl?: true
    linkedinUrl?: true
    industry?: true
    fundingStage?: true
    companySizeRange?: true
    employeeCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    websiteUrl?: true
    linkedinUrl?: true
    industry?: true
    fundingStage?: true
    companySizeRange?: true
    employeeCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    websiteUrl: string | null
    linkedinUrl: string | null
    industry: string | null
    fundingStage: string | null
    companySizeRange: string | null
    employeeCount: number | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    industry?: boolean
    fundingStage?: boolean
    companySizeRange?: boolean
    employeeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffers?: boolean | Company$jobOffersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    industry?: boolean
    fundingStage?: boolean
    companySizeRange?: boolean
    employeeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    industry?: boolean
    fundingStage?: boolean
    companySizeRange?: boolean
    employeeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    industry?: boolean
    fundingStage?: boolean
    companySizeRange?: boolean
    employeeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "websiteUrl" | "linkedinUrl" | "industry" | "fundingStage" | "companySizeRange" | "employeeCount" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffers?: boolean | Company$jobOffersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      jobOffers: Prisma.$JobOfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      websiteUrl: string | null
      linkedinUrl: string | null
      industry: string | null
      fundingStage: string | null
      companySizeRange: string | null
      employeeCount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffers<T extends Company$jobOffersArgs<ExtArgs> = {}>(args?: Subset<T, Company$jobOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly websiteUrl: FieldRef<"Company", 'String'>
    readonly linkedinUrl: FieldRef<"Company", 'String'>
    readonly industry: FieldRef<"Company", 'String'>
    readonly fundingStage: FieldRef<"Company", 'String'>
    readonly companySizeRange: FieldRef<"Company", 'String'>
    readonly employeeCount: FieldRef<"Company", 'Int'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.jobOffers
   */
  export type Company$jobOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    where?: JobOfferWhereInput
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    cursor?: JobOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model JobCurriculum
   */

  export type AggregateJobCurriculum = {
    _count: JobCurriculumCountAggregateOutputType | null
    _min: JobCurriculumMinAggregateOutputType | null
    _max: JobCurriculumMaxAggregateOutputType | null
  }

  export type JobCurriculumMinAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    storageKey: string | null
    pdfStatus: $Enums.JobCurriculumPdfStatus | null
    explanation: string | null
    customLabel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumMaxAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    storageKey: string | null
    pdfStatus: $Enums.JobCurriculumPdfStatus | null
    explanation: string | null
    customLabel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumCountAggregateOutputType = {
    id: number
    jobOfferId: number
    storageKey: number
    pdfStatus: number
    explanation: number
    customLabel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobCurriculumMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    storageKey?: true
    pdfStatus?: true
    explanation?: true
    customLabel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    storageKey?: true
    pdfStatus?: true
    explanation?: true
    customLabel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    storageKey?: true
    pdfStatus?: true
    explanation?: true
    customLabel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobCurriculumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculum to aggregate.
     */
    where?: JobCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurricula to fetch.
     */
    orderBy?: JobCurriculumOrderByWithRelationInput | JobCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCurricula
    **/
    _count?: true | JobCurriculumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCurriculumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCurriculumMaxAggregateInputType
  }

  export type GetJobCurriculumAggregateType<T extends JobCurriculumAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCurriculum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCurriculum[P]>
      : GetScalarType<T[P], AggregateJobCurriculum[P]>
  }




  export type JobCurriculumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumWhereInput
    orderBy?: JobCurriculumOrderByWithAggregationInput | JobCurriculumOrderByWithAggregationInput[]
    by: JobCurriculumScalarFieldEnum[] | JobCurriculumScalarFieldEnum
    having?: JobCurriculumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCurriculumCountAggregateInputType | true
    _min?: JobCurriculumMinAggregateInputType
    _max?: JobCurriculumMaxAggregateInputType
  }

  export type JobCurriculumGroupByOutputType = {
    id: string
    jobOfferId: string
    storageKey: string | null
    pdfStatus: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobCurriculumCountAggregateOutputType | null
    _min: JobCurriculumMinAggregateOutputType | null
    _max: JobCurriculumMaxAggregateOutputType | null
  }

  type GetJobCurriculumGroupByPayload<T extends JobCurriculumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCurriculumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCurriculumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCurriculumGroupByOutputType[P]>
            : GetScalarType<T[P], JobCurriculumGroupByOutputType[P]>
        }
      >
    >


  export type JobCurriculumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    storageKey?: boolean
    pdfStatus?: boolean
    explanation?: boolean
    customLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    work?: boolean | JobCurriculum$workArgs<ExtArgs>
    projects?: boolean | JobCurriculum$projectsArgs<ExtArgs>
    publications?: boolean | JobCurriculum$publicationsArgs<ExtArgs>
    _count?: boolean | JobCurriculumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculum"]>

  export type JobCurriculumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    storageKey?: boolean
    pdfStatus?: boolean
    explanation?: boolean
    customLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculum"]>

  export type JobCurriculumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    storageKey?: boolean
    pdfStatus?: boolean
    explanation?: boolean
    customLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculum"]>

  export type JobCurriculumSelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    storageKey?: boolean
    pdfStatus?: boolean
    explanation?: boolean
    customLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobCurriculumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "storageKey" | "pdfStatus" | "explanation" | "customLabel" | "createdAt" | "updatedAt", ExtArgs["result"]["jobCurriculum"]>
  export type JobCurriculumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
    work?: boolean | JobCurriculum$workArgs<ExtArgs>
    projects?: boolean | JobCurriculum$projectsArgs<ExtArgs>
    publications?: boolean | JobCurriculum$publicationsArgs<ExtArgs>
    _count?: boolean | JobCurriculumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobCurriculumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobCurriculumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }

  export type $JobCurriculumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCurriculum"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
      work: Prisma.$JobCurriculumWorkPayload<ExtArgs>[]
      projects: Prisma.$JobCurriculumProjectPayload<ExtArgs>[]
      publications: Prisma.$JobCurriculumPublicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOfferId: string
      storageKey: string | null
      pdfStatus: $Enums.JobCurriculumPdfStatus
      explanation: string
      customLabel: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobCurriculum"]>
    composites: {}
  }

  type JobCurriculumGetPayload<S extends boolean | null | undefined | JobCurriculumDefaultArgs> = $Result.GetResult<Prisma.$JobCurriculumPayload, S>

  type JobCurriculumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCurriculumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCurriculumCountAggregateInputType | true
    }

  export interface JobCurriculumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCurriculum'], meta: { name: 'JobCurriculum' } }
    /**
     * Find zero or one JobCurriculum that matches the filter.
     * @param {JobCurriculumFindUniqueArgs} args - Arguments to find a JobCurriculum
     * @example
     * // Get one JobCurriculum
     * const jobCurriculum = await prisma.jobCurriculum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCurriculumFindUniqueArgs>(args: SelectSubset<T, JobCurriculumFindUniqueArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCurriculum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCurriculumFindUniqueOrThrowArgs} args - Arguments to find a JobCurriculum
     * @example
     * // Get one JobCurriculum
     * const jobCurriculum = await prisma.jobCurriculum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCurriculumFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCurriculumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumFindFirstArgs} args - Arguments to find a JobCurriculum
     * @example
     * // Get one JobCurriculum
     * const jobCurriculum = await prisma.jobCurriculum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCurriculumFindFirstArgs>(args?: SelectSubset<T, JobCurriculumFindFirstArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumFindFirstOrThrowArgs} args - Arguments to find a JobCurriculum
     * @example
     * // Get one JobCurriculum
     * const jobCurriculum = await prisma.jobCurriculum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCurriculumFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCurriculumFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCurricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCurricula
     * const jobCurricula = await prisma.jobCurriculum.findMany()
     * 
     * // Get first 10 JobCurricula
     * const jobCurricula = await prisma.jobCurriculum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCurriculumWithIdOnly = await prisma.jobCurriculum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCurriculumFindManyArgs>(args?: SelectSubset<T, JobCurriculumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCurriculum.
     * @param {JobCurriculumCreateArgs} args - Arguments to create a JobCurriculum.
     * @example
     * // Create one JobCurriculum
     * const JobCurriculum = await prisma.jobCurriculum.create({
     *   data: {
     *     // ... data to create a JobCurriculum
     *   }
     * })
     * 
     */
    create<T extends JobCurriculumCreateArgs>(args: SelectSubset<T, JobCurriculumCreateArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCurricula.
     * @param {JobCurriculumCreateManyArgs} args - Arguments to create many JobCurricula.
     * @example
     * // Create many JobCurricula
     * const jobCurriculum = await prisma.jobCurriculum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCurriculumCreateManyArgs>(args?: SelectSubset<T, JobCurriculumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobCurricula and returns the data saved in the database.
     * @param {JobCurriculumCreateManyAndReturnArgs} args - Arguments to create many JobCurricula.
     * @example
     * // Create many JobCurricula
     * const jobCurriculum = await prisma.jobCurriculum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobCurricula and only return the `id`
     * const jobCurriculumWithIdOnly = await prisma.jobCurriculum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCurriculumCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCurriculumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobCurriculum.
     * @param {JobCurriculumDeleteArgs} args - Arguments to delete one JobCurriculum.
     * @example
     * // Delete one JobCurriculum
     * const JobCurriculum = await prisma.jobCurriculum.delete({
     *   where: {
     *     // ... filter to delete one JobCurriculum
     *   }
     * })
     * 
     */
    delete<T extends JobCurriculumDeleteArgs>(args: SelectSubset<T, JobCurriculumDeleteArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCurriculum.
     * @param {JobCurriculumUpdateArgs} args - Arguments to update one JobCurriculum.
     * @example
     * // Update one JobCurriculum
     * const jobCurriculum = await prisma.jobCurriculum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCurriculumUpdateArgs>(args: SelectSubset<T, JobCurriculumUpdateArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCurricula.
     * @param {JobCurriculumDeleteManyArgs} args - Arguments to filter JobCurricula to delete.
     * @example
     * // Delete a few JobCurricula
     * const { count } = await prisma.jobCurriculum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCurriculumDeleteManyArgs>(args?: SelectSubset<T, JobCurriculumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCurricula
     * const jobCurriculum = await prisma.jobCurriculum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCurriculumUpdateManyArgs>(args: SelectSubset<T, JobCurriculumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurricula and returns the data updated in the database.
     * @param {JobCurriculumUpdateManyAndReturnArgs} args - Arguments to update many JobCurricula.
     * @example
     * // Update many JobCurricula
     * const jobCurriculum = await prisma.jobCurriculum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobCurricula and only return the `id`
     * const jobCurriculumWithIdOnly = await prisma.jobCurriculum.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCurriculumUpdateManyAndReturnArgs>(args: SelectSubset<T, JobCurriculumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobCurriculum.
     * @param {JobCurriculumUpsertArgs} args - Arguments to update or create a JobCurriculum.
     * @example
     * // Update or create a JobCurriculum
     * const jobCurriculum = await prisma.jobCurriculum.upsert({
     *   create: {
     *     // ... data to create a JobCurriculum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCurriculum we want to update
     *   }
     * })
     */
    upsert<T extends JobCurriculumUpsertArgs>(args: SelectSubset<T, JobCurriculumUpsertArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCurricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumCountArgs} args - Arguments to filter JobCurricula to count.
     * @example
     * // Count the number of JobCurricula
     * const count = await prisma.jobCurriculum.count({
     *   where: {
     *     // ... the filter for the JobCurricula we want to count
     *   }
     * })
    **/
    count<T extends JobCurriculumCountArgs>(
      args?: Subset<T, JobCurriculumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCurriculumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCurriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCurriculumAggregateArgs>(args: Subset<T, JobCurriculumAggregateArgs>): Prisma.PrismaPromise<GetJobCurriculumAggregateType<T>>

    /**
     * Group by JobCurriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumGroupByArgs} args - Group by arguments.
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
      T extends JobCurriculumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCurriculumGroupByArgs['orderBy'] }
        : { orderBy?: JobCurriculumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobCurriculumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCurriculumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCurriculum model
   */
  readonly fields: JobCurriculumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCurriculum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCurriculumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    work<T extends JobCurriculum$workArgs<ExtArgs> = {}>(args?: Subset<T, JobCurriculum$workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends JobCurriculum$projectsArgs<ExtArgs> = {}>(args?: Subset<T, JobCurriculum$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publications<T extends JobCurriculum$publicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobCurriculum$publicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobCurriculum model
   */
  interface JobCurriculumFieldRefs {
    readonly id: FieldRef<"JobCurriculum", 'String'>
    readonly jobOfferId: FieldRef<"JobCurriculum", 'String'>
    readonly storageKey: FieldRef<"JobCurriculum", 'String'>
    readonly pdfStatus: FieldRef<"JobCurriculum", 'JobCurriculumPdfStatus'>
    readonly explanation: FieldRef<"JobCurriculum", 'String'>
    readonly customLabel: FieldRef<"JobCurriculum", 'String'>
    readonly createdAt: FieldRef<"JobCurriculum", 'DateTime'>
    readonly updatedAt: FieldRef<"JobCurriculum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobCurriculum findUnique
   */
  export type JobCurriculumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculum to fetch.
     */
    where: JobCurriculumWhereUniqueInput
  }

  /**
   * JobCurriculum findUniqueOrThrow
   */
  export type JobCurriculumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculum to fetch.
     */
    where: JobCurriculumWhereUniqueInput
  }

  /**
   * JobCurriculum findFirst
   */
  export type JobCurriculumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculum to fetch.
     */
    where?: JobCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurricula to fetch.
     */
    orderBy?: JobCurriculumOrderByWithRelationInput | JobCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurricula.
     */
    cursor?: JobCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurricula.
     */
    distinct?: JobCurriculumScalarFieldEnum | JobCurriculumScalarFieldEnum[]
  }

  /**
   * JobCurriculum findFirstOrThrow
   */
  export type JobCurriculumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculum to fetch.
     */
    where?: JobCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurricula to fetch.
     */
    orderBy?: JobCurriculumOrderByWithRelationInput | JobCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurricula.
     */
    cursor?: JobCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurricula.
     */
    distinct?: JobCurriculumScalarFieldEnum | JobCurriculumScalarFieldEnum[]
  }

  /**
   * JobCurriculum findMany
   */
  export type JobCurriculumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * Filter, which JobCurricula to fetch.
     */
    where?: JobCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurricula to fetch.
     */
    orderBy?: JobCurriculumOrderByWithRelationInput | JobCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCurricula.
     */
    cursor?: JobCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurricula.
     */
    distinct?: JobCurriculumScalarFieldEnum | JobCurriculumScalarFieldEnum[]
  }

  /**
   * JobCurriculum create
   */
  export type JobCurriculumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCurriculum.
     */
    data: XOR<JobCurriculumCreateInput, JobCurriculumUncheckedCreateInput>
  }

  /**
   * JobCurriculum createMany
   */
  export type JobCurriculumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCurricula.
     */
    data: JobCurriculumCreateManyInput | JobCurriculumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCurriculum createManyAndReturn
   */
  export type JobCurriculumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * The data used to create many JobCurricula.
     */
    data: JobCurriculumCreateManyInput | JobCurriculumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculum update
   */
  export type JobCurriculumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCurriculum.
     */
    data: XOR<JobCurriculumUpdateInput, JobCurriculumUncheckedUpdateInput>
    /**
     * Choose, which JobCurriculum to update.
     */
    where: JobCurriculumWhereUniqueInput
  }

  /**
   * JobCurriculum updateMany
   */
  export type JobCurriculumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCurricula.
     */
    data: XOR<JobCurriculumUpdateManyMutationInput, JobCurriculumUncheckedUpdateManyInput>
    /**
     * Filter which JobCurricula to update
     */
    where?: JobCurriculumWhereInput
    /**
     * Limit how many JobCurricula to update.
     */
    limit?: number
  }

  /**
   * JobCurriculum updateManyAndReturn
   */
  export type JobCurriculumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * The data used to update JobCurricula.
     */
    data: XOR<JobCurriculumUpdateManyMutationInput, JobCurriculumUncheckedUpdateManyInput>
    /**
     * Filter which JobCurricula to update
     */
    where?: JobCurriculumWhereInput
    /**
     * Limit how many JobCurricula to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculum upsert
   */
  export type JobCurriculumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCurriculum to update in case it exists.
     */
    where: JobCurriculumWhereUniqueInput
    /**
     * In case the JobCurriculum found by the `where` argument doesn't exist, create a new JobCurriculum with this data.
     */
    create: XOR<JobCurriculumCreateInput, JobCurriculumUncheckedCreateInput>
    /**
     * In case the JobCurriculum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCurriculumUpdateInput, JobCurriculumUncheckedUpdateInput>
  }

  /**
   * JobCurriculum delete
   */
  export type JobCurriculumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    /**
     * Filter which JobCurriculum to delete.
     */
    where: JobCurriculumWhereUniqueInput
  }

  /**
   * JobCurriculum deleteMany
   */
  export type JobCurriculumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurricula to delete
     */
    where?: JobCurriculumWhereInput
    /**
     * Limit how many JobCurricula to delete.
     */
    limit?: number
  }

  /**
   * JobCurriculum.work
   */
  export type JobCurriculum$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    where?: JobCurriculumWorkWhereInput
    orderBy?: JobCurriculumWorkOrderByWithRelationInput | JobCurriculumWorkOrderByWithRelationInput[]
    cursor?: JobCurriculumWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobCurriculumWorkScalarFieldEnum | JobCurriculumWorkScalarFieldEnum[]
  }

  /**
   * JobCurriculum.projects
   */
  export type JobCurriculum$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    where?: JobCurriculumProjectWhereInput
    orderBy?: JobCurriculumProjectOrderByWithRelationInput | JobCurriculumProjectOrderByWithRelationInput[]
    cursor?: JobCurriculumProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobCurriculumProjectScalarFieldEnum | JobCurriculumProjectScalarFieldEnum[]
  }

  /**
   * JobCurriculum.publications
   */
  export type JobCurriculum$publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    where?: JobCurriculumPublicationWhereInput
    orderBy?: JobCurriculumPublicationOrderByWithRelationInput | JobCurriculumPublicationOrderByWithRelationInput[]
    cursor?: JobCurriculumPublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobCurriculumPublicationScalarFieldEnum | JobCurriculumPublicationScalarFieldEnum[]
  }

  /**
   * JobCurriculum without action
   */
  export type JobCurriculumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
  }


  /**
   * Model JobCurriculumWork
   */

  export type AggregateJobCurriculumWork = {
    _count: JobCurriculumWorkCountAggregateOutputType | null
    _avg: JobCurriculumWorkAvgAggregateOutputType | null
    _sum: JobCurriculumWorkSumAggregateOutputType | null
    _min: JobCurriculumWorkMinAggregateOutputType | null
    _max: JobCurriculumWorkMaxAggregateOutputType | null
  }

  export type JobCurriculumWorkAvgAggregateOutputType = {
    order: number | null
  }

  export type JobCurriculumWorkSumAggregateOutputType = {
    order: number | null
  }

  export type JobCurriculumWorkMinAggregateOutputType = {
    id: string | null
    curriculumId: string | null
    name: string | null
    position: string | null
    summary: string | null
    include: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumWorkMaxAggregateOutputType = {
    id: string | null
    curriculumId: string | null
    name: string | null
    position: string | null
    summary: string | null
    include: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumWorkCountAggregateOutputType = {
    id: number
    curriculumId: number
    name: number
    position: number
    summary: number
    include: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobCurriculumWorkAvgAggregateInputType = {
    order?: true
  }

  export type JobCurriculumWorkSumAggregateInputType = {
    order?: true
  }

  export type JobCurriculumWorkMinAggregateInputType = {
    id?: true
    curriculumId?: true
    name?: true
    position?: true
    summary?: true
    include?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumWorkMaxAggregateInputType = {
    id?: true
    curriculumId?: true
    name?: true
    position?: true
    summary?: true
    include?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumWorkCountAggregateInputType = {
    id?: true
    curriculumId?: true
    name?: true
    position?: true
    summary?: true
    include?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobCurriculumWorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumWork to aggregate.
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumWorks to fetch.
     */
    orderBy?: JobCurriculumWorkOrderByWithRelationInput | JobCurriculumWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCurriculumWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCurriculumWorks
    **/
    _count?: true | JobCurriculumWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobCurriculumWorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobCurriculumWorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCurriculumWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCurriculumWorkMaxAggregateInputType
  }

  export type GetJobCurriculumWorkAggregateType<T extends JobCurriculumWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCurriculumWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCurriculumWork[P]>
      : GetScalarType<T[P], AggregateJobCurriculumWork[P]>
  }




  export type JobCurriculumWorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumWorkWhereInput
    orderBy?: JobCurriculumWorkOrderByWithAggregationInput | JobCurriculumWorkOrderByWithAggregationInput[]
    by: JobCurriculumWorkScalarFieldEnum[] | JobCurriculumWorkScalarFieldEnum
    having?: JobCurriculumWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCurriculumWorkCountAggregateInputType | true
    _avg?: JobCurriculumWorkAvgAggregateInputType
    _sum?: JobCurriculumWorkSumAggregateInputType
    _min?: JobCurriculumWorkMinAggregateInputType
    _max?: JobCurriculumWorkMaxAggregateInputType
  }

  export type JobCurriculumWorkGroupByOutputType = {
    id: string
    curriculumId: string
    name: string
    position: string
    summary: string
    include: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: JobCurriculumWorkCountAggregateOutputType | null
    _avg: JobCurriculumWorkAvgAggregateOutputType | null
    _sum: JobCurriculumWorkSumAggregateOutputType | null
    _min: JobCurriculumWorkMinAggregateOutputType | null
    _max: JobCurriculumWorkMaxAggregateOutputType | null
  }

  type GetJobCurriculumWorkGroupByPayload<T extends JobCurriculumWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCurriculumWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCurriculumWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCurriculumWorkGroupByOutputType[P]>
            : GetScalarType<T[P], JobCurriculumWorkGroupByOutputType[P]>
        }
      >
    >


  export type JobCurriculumWorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    position?: boolean
    summary?: boolean
    include?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumWork"]>

  export type JobCurriculumWorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    position?: boolean
    summary?: boolean
    include?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumWork"]>

  export type JobCurriculumWorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    position?: boolean
    summary?: boolean
    include?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumWork"]>

  export type JobCurriculumWorkSelectScalar = {
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    position?: boolean
    summary?: boolean
    include?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobCurriculumWorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "curriculumId" | "name" | "position" | "summary" | "include" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["jobCurriculumWork"]>
  export type JobCurriculumWorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }
  export type JobCurriculumWorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }
  export type JobCurriculumWorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }

  export type $JobCurriculumWorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCurriculumWork"
    objects: {
      curriculum: Prisma.$JobCurriculumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      curriculumId: string
      name: string
      position: string
      summary: string
      include: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobCurriculumWork"]>
    composites: {}
  }

  type JobCurriculumWorkGetPayload<S extends boolean | null | undefined | JobCurriculumWorkDefaultArgs> = $Result.GetResult<Prisma.$JobCurriculumWorkPayload, S>

  type JobCurriculumWorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCurriculumWorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCurriculumWorkCountAggregateInputType | true
    }

  export interface JobCurriculumWorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCurriculumWork'], meta: { name: 'JobCurriculumWork' } }
    /**
     * Find zero or one JobCurriculumWork that matches the filter.
     * @param {JobCurriculumWorkFindUniqueArgs} args - Arguments to find a JobCurriculumWork
     * @example
     * // Get one JobCurriculumWork
     * const jobCurriculumWork = await prisma.jobCurriculumWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCurriculumWorkFindUniqueArgs>(args: SelectSubset<T, JobCurriculumWorkFindUniqueArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCurriculumWork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCurriculumWorkFindUniqueOrThrowArgs} args - Arguments to find a JobCurriculumWork
     * @example
     * // Get one JobCurriculumWork
     * const jobCurriculumWork = await prisma.jobCurriculumWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCurriculumWorkFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCurriculumWorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkFindFirstArgs} args - Arguments to find a JobCurriculumWork
     * @example
     * // Get one JobCurriculumWork
     * const jobCurriculumWork = await prisma.jobCurriculumWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCurriculumWorkFindFirstArgs>(args?: SelectSubset<T, JobCurriculumWorkFindFirstArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumWork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkFindFirstOrThrowArgs} args - Arguments to find a JobCurriculumWork
     * @example
     * // Get one JobCurriculumWork
     * const jobCurriculumWork = await prisma.jobCurriculumWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCurriculumWorkFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCurriculumWorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCurriculumWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCurriculumWorks
     * const jobCurriculumWorks = await prisma.jobCurriculumWork.findMany()
     * 
     * // Get first 10 JobCurriculumWorks
     * const jobCurriculumWorks = await prisma.jobCurriculumWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCurriculumWorkWithIdOnly = await prisma.jobCurriculumWork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCurriculumWorkFindManyArgs>(args?: SelectSubset<T, JobCurriculumWorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCurriculumWork.
     * @param {JobCurriculumWorkCreateArgs} args - Arguments to create a JobCurriculumWork.
     * @example
     * // Create one JobCurriculumWork
     * const JobCurriculumWork = await prisma.jobCurriculumWork.create({
     *   data: {
     *     // ... data to create a JobCurriculumWork
     *   }
     * })
     * 
     */
    create<T extends JobCurriculumWorkCreateArgs>(args: SelectSubset<T, JobCurriculumWorkCreateArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCurriculumWorks.
     * @param {JobCurriculumWorkCreateManyArgs} args - Arguments to create many JobCurriculumWorks.
     * @example
     * // Create many JobCurriculumWorks
     * const jobCurriculumWork = await prisma.jobCurriculumWork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCurriculumWorkCreateManyArgs>(args?: SelectSubset<T, JobCurriculumWorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobCurriculumWorks and returns the data saved in the database.
     * @param {JobCurriculumWorkCreateManyAndReturnArgs} args - Arguments to create many JobCurriculumWorks.
     * @example
     * // Create many JobCurriculumWorks
     * const jobCurriculumWork = await prisma.jobCurriculumWork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobCurriculumWorks and only return the `id`
     * const jobCurriculumWorkWithIdOnly = await prisma.jobCurriculumWork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCurriculumWorkCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCurriculumWorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobCurriculumWork.
     * @param {JobCurriculumWorkDeleteArgs} args - Arguments to delete one JobCurriculumWork.
     * @example
     * // Delete one JobCurriculumWork
     * const JobCurriculumWork = await prisma.jobCurriculumWork.delete({
     *   where: {
     *     // ... filter to delete one JobCurriculumWork
     *   }
     * })
     * 
     */
    delete<T extends JobCurriculumWorkDeleteArgs>(args: SelectSubset<T, JobCurriculumWorkDeleteArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCurriculumWork.
     * @param {JobCurriculumWorkUpdateArgs} args - Arguments to update one JobCurriculumWork.
     * @example
     * // Update one JobCurriculumWork
     * const jobCurriculumWork = await prisma.jobCurriculumWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCurriculumWorkUpdateArgs>(args: SelectSubset<T, JobCurriculumWorkUpdateArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCurriculumWorks.
     * @param {JobCurriculumWorkDeleteManyArgs} args - Arguments to filter JobCurriculumWorks to delete.
     * @example
     * // Delete a few JobCurriculumWorks
     * const { count } = await prisma.jobCurriculumWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCurriculumWorkDeleteManyArgs>(args?: SelectSubset<T, JobCurriculumWorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCurriculumWorks
     * const jobCurriculumWork = await prisma.jobCurriculumWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCurriculumWorkUpdateManyArgs>(args: SelectSubset<T, JobCurriculumWorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumWorks and returns the data updated in the database.
     * @param {JobCurriculumWorkUpdateManyAndReturnArgs} args - Arguments to update many JobCurriculumWorks.
     * @example
     * // Update many JobCurriculumWorks
     * const jobCurriculumWork = await prisma.jobCurriculumWork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobCurriculumWorks and only return the `id`
     * const jobCurriculumWorkWithIdOnly = await prisma.jobCurriculumWork.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCurriculumWorkUpdateManyAndReturnArgs>(args: SelectSubset<T, JobCurriculumWorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobCurriculumWork.
     * @param {JobCurriculumWorkUpsertArgs} args - Arguments to update or create a JobCurriculumWork.
     * @example
     * // Update or create a JobCurriculumWork
     * const jobCurriculumWork = await prisma.jobCurriculumWork.upsert({
     *   create: {
     *     // ... data to create a JobCurriculumWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCurriculumWork we want to update
     *   }
     * })
     */
    upsert<T extends JobCurriculumWorkUpsertArgs>(args: SelectSubset<T, JobCurriculumWorkUpsertArgs<ExtArgs>>): Prisma__JobCurriculumWorkClient<$Result.GetResult<Prisma.$JobCurriculumWorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCurriculumWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkCountArgs} args - Arguments to filter JobCurriculumWorks to count.
     * @example
     * // Count the number of JobCurriculumWorks
     * const count = await prisma.jobCurriculumWork.count({
     *   where: {
     *     // ... the filter for the JobCurriculumWorks we want to count
     *   }
     * })
    **/
    count<T extends JobCurriculumWorkCountArgs>(
      args?: Subset<T, JobCurriculumWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCurriculumWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCurriculumWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCurriculumWorkAggregateArgs>(args: Subset<T, JobCurriculumWorkAggregateArgs>): Prisma.PrismaPromise<GetJobCurriculumWorkAggregateType<T>>

    /**
     * Group by JobCurriculumWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumWorkGroupByArgs} args - Group by arguments.
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
      T extends JobCurriculumWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCurriculumWorkGroupByArgs['orderBy'] }
        : { orderBy?: JobCurriculumWorkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobCurriculumWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCurriculumWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCurriculumWork model
   */
  readonly fields: JobCurriculumWorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCurriculumWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCurriculumWorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculum<T extends JobCurriculumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobCurriculumDefaultArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobCurriculumWork model
   */
  interface JobCurriculumWorkFieldRefs {
    readonly id: FieldRef<"JobCurriculumWork", 'String'>
    readonly curriculumId: FieldRef<"JobCurriculumWork", 'String'>
    readonly name: FieldRef<"JobCurriculumWork", 'String'>
    readonly position: FieldRef<"JobCurriculumWork", 'String'>
    readonly summary: FieldRef<"JobCurriculumWork", 'String'>
    readonly include: FieldRef<"JobCurriculumWork", 'Boolean'>
    readonly order: FieldRef<"JobCurriculumWork", 'Int'>
    readonly createdAt: FieldRef<"JobCurriculumWork", 'DateTime'>
    readonly updatedAt: FieldRef<"JobCurriculumWork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobCurriculumWork findUnique
   */
  export type JobCurriculumWorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumWork to fetch.
     */
    where: JobCurriculumWorkWhereUniqueInput
  }

  /**
   * JobCurriculumWork findUniqueOrThrow
   */
  export type JobCurriculumWorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumWork to fetch.
     */
    where: JobCurriculumWorkWhereUniqueInput
  }

  /**
   * JobCurriculumWork findFirst
   */
  export type JobCurriculumWorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumWork to fetch.
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumWorks to fetch.
     */
    orderBy?: JobCurriculumWorkOrderByWithRelationInput | JobCurriculumWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumWorks.
     */
    cursor?: JobCurriculumWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumWorks.
     */
    distinct?: JobCurriculumWorkScalarFieldEnum | JobCurriculumWorkScalarFieldEnum[]
  }

  /**
   * JobCurriculumWork findFirstOrThrow
   */
  export type JobCurriculumWorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumWork to fetch.
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumWorks to fetch.
     */
    orderBy?: JobCurriculumWorkOrderByWithRelationInput | JobCurriculumWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumWorks.
     */
    cursor?: JobCurriculumWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumWorks.
     */
    distinct?: JobCurriculumWorkScalarFieldEnum | JobCurriculumWorkScalarFieldEnum[]
  }

  /**
   * JobCurriculumWork findMany
   */
  export type JobCurriculumWorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumWorks to fetch.
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumWorks to fetch.
     */
    orderBy?: JobCurriculumWorkOrderByWithRelationInput | JobCurriculumWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCurriculumWorks.
     */
    cursor?: JobCurriculumWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumWorks.
     */
    distinct?: JobCurriculumWorkScalarFieldEnum | JobCurriculumWorkScalarFieldEnum[]
  }

  /**
   * JobCurriculumWork create
   */
  export type JobCurriculumWorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCurriculumWork.
     */
    data: XOR<JobCurriculumWorkCreateInput, JobCurriculumWorkUncheckedCreateInput>
  }

  /**
   * JobCurriculumWork createMany
   */
  export type JobCurriculumWorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCurriculumWorks.
     */
    data: JobCurriculumWorkCreateManyInput | JobCurriculumWorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCurriculumWork createManyAndReturn
   */
  export type JobCurriculumWorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * The data used to create many JobCurriculumWorks.
     */
    data: JobCurriculumWorkCreateManyInput | JobCurriculumWorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumWork update
   */
  export type JobCurriculumWorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCurriculumWork.
     */
    data: XOR<JobCurriculumWorkUpdateInput, JobCurriculumWorkUncheckedUpdateInput>
    /**
     * Choose, which JobCurriculumWork to update.
     */
    where: JobCurriculumWorkWhereUniqueInput
  }

  /**
   * JobCurriculumWork updateMany
   */
  export type JobCurriculumWorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCurriculumWorks.
     */
    data: XOR<JobCurriculumWorkUpdateManyMutationInput, JobCurriculumWorkUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumWorks to update
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * Limit how many JobCurriculumWorks to update.
     */
    limit?: number
  }

  /**
   * JobCurriculumWork updateManyAndReturn
   */
  export type JobCurriculumWorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * The data used to update JobCurriculumWorks.
     */
    data: XOR<JobCurriculumWorkUpdateManyMutationInput, JobCurriculumWorkUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumWorks to update
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * Limit how many JobCurriculumWorks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumWork upsert
   */
  export type JobCurriculumWorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCurriculumWork to update in case it exists.
     */
    where: JobCurriculumWorkWhereUniqueInput
    /**
     * In case the JobCurriculumWork found by the `where` argument doesn't exist, create a new JobCurriculumWork with this data.
     */
    create: XOR<JobCurriculumWorkCreateInput, JobCurriculumWorkUncheckedCreateInput>
    /**
     * In case the JobCurriculumWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCurriculumWorkUpdateInput, JobCurriculumWorkUncheckedUpdateInput>
  }

  /**
   * JobCurriculumWork delete
   */
  export type JobCurriculumWorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
    /**
     * Filter which JobCurriculumWork to delete.
     */
    where: JobCurriculumWorkWhereUniqueInput
  }

  /**
   * JobCurriculumWork deleteMany
   */
  export type JobCurriculumWorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumWorks to delete
     */
    where?: JobCurriculumWorkWhereInput
    /**
     * Limit how many JobCurriculumWorks to delete.
     */
    limit?: number
  }

  /**
   * JobCurriculumWork without action
   */
  export type JobCurriculumWorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumWork
     */
    select?: JobCurriculumWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumWork
     */
    omit?: JobCurriculumWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumWorkInclude<ExtArgs> | null
  }


  /**
   * Model JobCurriculumProject
   */

  export type AggregateJobCurriculumProject = {
    _count: JobCurriculumProjectCountAggregateOutputType | null
    _avg: JobCurriculumProjectAvgAggregateOutputType | null
    _sum: JobCurriculumProjectSumAggregateOutputType | null
    _min: JobCurriculumProjectMinAggregateOutputType | null
    _max: JobCurriculumProjectMaxAggregateOutputType | null
  }

  export type JobCurriculumProjectAvgAggregateOutputType = {
    order: number | null
  }

  export type JobCurriculumProjectSumAggregateOutputType = {
    order: number | null
  }

  export type JobCurriculumProjectMinAggregateOutputType = {
    id: string | null
    curriculumId: string | null
    name: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumProjectMaxAggregateOutputType = {
    id: string | null
    curriculumId: string | null
    name: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumProjectCountAggregateOutputType = {
    id: number
    curriculumId: number
    name: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobCurriculumProjectAvgAggregateInputType = {
    order?: true
  }

  export type JobCurriculumProjectSumAggregateInputType = {
    order?: true
  }

  export type JobCurriculumProjectMinAggregateInputType = {
    id?: true
    curriculumId?: true
    name?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumProjectMaxAggregateInputType = {
    id?: true
    curriculumId?: true
    name?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumProjectCountAggregateInputType = {
    id?: true
    curriculumId?: true
    name?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobCurriculumProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumProject to aggregate.
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumProjects to fetch.
     */
    orderBy?: JobCurriculumProjectOrderByWithRelationInput | JobCurriculumProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCurriculumProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCurriculumProjects
    **/
    _count?: true | JobCurriculumProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobCurriculumProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobCurriculumProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCurriculumProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCurriculumProjectMaxAggregateInputType
  }

  export type GetJobCurriculumProjectAggregateType<T extends JobCurriculumProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCurriculumProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCurriculumProject[P]>
      : GetScalarType<T[P], AggregateJobCurriculumProject[P]>
  }




  export type JobCurriculumProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumProjectWhereInput
    orderBy?: JobCurriculumProjectOrderByWithAggregationInput | JobCurriculumProjectOrderByWithAggregationInput[]
    by: JobCurriculumProjectScalarFieldEnum[] | JobCurriculumProjectScalarFieldEnum
    having?: JobCurriculumProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCurriculumProjectCountAggregateInputType | true
    _avg?: JobCurriculumProjectAvgAggregateInputType
    _sum?: JobCurriculumProjectSumAggregateInputType
    _min?: JobCurriculumProjectMinAggregateInputType
    _max?: JobCurriculumProjectMaxAggregateInputType
  }

  export type JobCurriculumProjectGroupByOutputType = {
    id: string
    curriculumId: string
    name: string
    description: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: JobCurriculumProjectCountAggregateOutputType | null
    _avg: JobCurriculumProjectAvgAggregateOutputType | null
    _sum: JobCurriculumProjectSumAggregateOutputType | null
    _min: JobCurriculumProjectMinAggregateOutputType | null
    _max: JobCurriculumProjectMaxAggregateOutputType | null
  }

  type GetJobCurriculumProjectGroupByPayload<T extends JobCurriculumProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCurriculumProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCurriculumProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCurriculumProjectGroupByOutputType[P]>
            : GetScalarType<T[P], JobCurriculumProjectGroupByOutputType[P]>
        }
      >
    >


  export type JobCurriculumProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumProject"]>

  export type JobCurriculumProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumProject"]>

  export type JobCurriculumProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumProject"]>

  export type JobCurriculumProjectSelectScalar = {
    id?: boolean
    curriculumId?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobCurriculumProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "curriculumId" | "name" | "description" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["jobCurriculumProject"]>
  export type JobCurriculumProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }
  export type JobCurriculumProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }
  export type JobCurriculumProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }

  export type $JobCurriculumProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCurriculumProject"
    objects: {
      curriculum: Prisma.$JobCurriculumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      curriculumId: string
      name: string
      description: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobCurriculumProject"]>
    composites: {}
  }

  type JobCurriculumProjectGetPayload<S extends boolean | null | undefined | JobCurriculumProjectDefaultArgs> = $Result.GetResult<Prisma.$JobCurriculumProjectPayload, S>

  type JobCurriculumProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCurriculumProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCurriculumProjectCountAggregateInputType | true
    }

  export interface JobCurriculumProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCurriculumProject'], meta: { name: 'JobCurriculumProject' } }
    /**
     * Find zero or one JobCurriculumProject that matches the filter.
     * @param {JobCurriculumProjectFindUniqueArgs} args - Arguments to find a JobCurriculumProject
     * @example
     * // Get one JobCurriculumProject
     * const jobCurriculumProject = await prisma.jobCurriculumProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCurriculumProjectFindUniqueArgs>(args: SelectSubset<T, JobCurriculumProjectFindUniqueArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCurriculumProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCurriculumProjectFindUniqueOrThrowArgs} args - Arguments to find a JobCurriculumProject
     * @example
     * // Get one JobCurriculumProject
     * const jobCurriculumProject = await prisma.jobCurriculumProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCurriculumProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCurriculumProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectFindFirstArgs} args - Arguments to find a JobCurriculumProject
     * @example
     * // Get one JobCurriculumProject
     * const jobCurriculumProject = await prisma.jobCurriculumProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCurriculumProjectFindFirstArgs>(args?: SelectSubset<T, JobCurriculumProjectFindFirstArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectFindFirstOrThrowArgs} args - Arguments to find a JobCurriculumProject
     * @example
     * // Get one JobCurriculumProject
     * const jobCurriculumProject = await prisma.jobCurriculumProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCurriculumProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCurriculumProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCurriculumProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCurriculumProjects
     * const jobCurriculumProjects = await prisma.jobCurriculumProject.findMany()
     * 
     * // Get first 10 JobCurriculumProjects
     * const jobCurriculumProjects = await prisma.jobCurriculumProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCurriculumProjectWithIdOnly = await prisma.jobCurriculumProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCurriculumProjectFindManyArgs>(args?: SelectSubset<T, JobCurriculumProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCurriculumProject.
     * @param {JobCurriculumProjectCreateArgs} args - Arguments to create a JobCurriculumProject.
     * @example
     * // Create one JobCurriculumProject
     * const JobCurriculumProject = await prisma.jobCurriculumProject.create({
     *   data: {
     *     // ... data to create a JobCurriculumProject
     *   }
     * })
     * 
     */
    create<T extends JobCurriculumProjectCreateArgs>(args: SelectSubset<T, JobCurriculumProjectCreateArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCurriculumProjects.
     * @param {JobCurriculumProjectCreateManyArgs} args - Arguments to create many JobCurriculumProjects.
     * @example
     * // Create many JobCurriculumProjects
     * const jobCurriculumProject = await prisma.jobCurriculumProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCurriculumProjectCreateManyArgs>(args?: SelectSubset<T, JobCurriculumProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobCurriculumProjects and returns the data saved in the database.
     * @param {JobCurriculumProjectCreateManyAndReturnArgs} args - Arguments to create many JobCurriculumProjects.
     * @example
     * // Create many JobCurriculumProjects
     * const jobCurriculumProject = await prisma.jobCurriculumProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobCurriculumProjects and only return the `id`
     * const jobCurriculumProjectWithIdOnly = await prisma.jobCurriculumProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCurriculumProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCurriculumProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobCurriculumProject.
     * @param {JobCurriculumProjectDeleteArgs} args - Arguments to delete one JobCurriculumProject.
     * @example
     * // Delete one JobCurriculumProject
     * const JobCurriculumProject = await prisma.jobCurriculumProject.delete({
     *   where: {
     *     // ... filter to delete one JobCurriculumProject
     *   }
     * })
     * 
     */
    delete<T extends JobCurriculumProjectDeleteArgs>(args: SelectSubset<T, JobCurriculumProjectDeleteArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCurriculumProject.
     * @param {JobCurriculumProjectUpdateArgs} args - Arguments to update one JobCurriculumProject.
     * @example
     * // Update one JobCurriculumProject
     * const jobCurriculumProject = await prisma.jobCurriculumProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCurriculumProjectUpdateArgs>(args: SelectSubset<T, JobCurriculumProjectUpdateArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCurriculumProjects.
     * @param {JobCurriculumProjectDeleteManyArgs} args - Arguments to filter JobCurriculumProjects to delete.
     * @example
     * // Delete a few JobCurriculumProjects
     * const { count } = await prisma.jobCurriculumProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCurriculumProjectDeleteManyArgs>(args?: SelectSubset<T, JobCurriculumProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCurriculumProjects
     * const jobCurriculumProject = await prisma.jobCurriculumProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCurriculumProjectUpdateManyArgs>(args: SelectSubset<T, JobCurriculumProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumProjects and returns the data updated in the database.
     * @param {JobCurriculumProjectUpdateManyAndReturnArgs} args - Arguments to update many JobCurriculumProjects.
     * @example
     * // Update many JobCurriculumProjects
     * const jobCurriculumProject = await prisma.jobCurriculumProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobCurriculumProjects and only return the `id`
     * const jobCurriculumProjectWithIdOnly = await prisma.jobCurriculumProject.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCurriculumProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, JobCurriculumProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobCurriculumProject.
     * @param {JobCurriculumProjectUpsertArgs} args - Arguments to update or create a JobCurriculumProject.
     * @example
     * // Update or create a JobCurriculumProject
     * const jobCurriculumProject = await prisma.jobCurriculumProject.upsert({
     *   create: {
     *     // ... data to create a JobCurriculumProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCurriculumProject we want to update
     *   }
     * })
     */
    upsert<T extends JobCurriculumProjectUpsertArgs>(args: SelectSubset<T, JobCurriculumProjectUpsertArgs<ExtArgs>>): Prisma__JobCurriculumProjectClient<$Result.GetResult<Prisma.$JobCurriculumProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCurriculumProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectCountArgs} args - Arguments to filter JobCurriculumProjects to count.
     * @example
     * // Count the number of JobCurriculumProjects
     * const count = await prisma.jobCurriculumProject.count({
     *   where: {
     *     // ... the filter for the JobCurriculumProjects we want to count
     *   }
     * })
    **/
    count<T extends JobCurriculumProjectCountArgs>(
      args?: Subset<T, JobCurriculumProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCurriculumProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCurriculumProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCurriculumProjectAggregateArgs>(args: Subset<T, JobCurriculumProjectAggregateArgs>): Prisma.PrismaPromise<GetJobCurriculumProjectAggregateType<T>>

    /**
     * Group by JobCurriculumProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumProjectGroupByArgs} args - Group by arguments.
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
      T extends JobCurriculumProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCurriculumProjectGroupByArgs['orderBy'] }
        : { orderBy?: JobCurriculumProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobCurriculumProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCurriculumProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCurriculumProject model
   */
  readonly fields: JobCurriculumProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCurriculumProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCurriculumProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculum<T extends JobCurriculumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobCurriculumDefaultArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobCurriculumProject model
   */
  interface JobCurriculumProjectFieldRefs {
    readonly id: FieldRef<"JobCurriculumProject", 'String'>
    readonly curriculumId: FieldRef<"JobCurriculumProject", 'String'>
    readonly name: FieldRef<"JobCurriculumProject", 'String'>
    readonly description: FieldRef<"JobCurriculumProject", 'String'>
    readonly order: FieldRef<"JobCurriculumProject", 'Int'>
    readonly createdAt: FieldRef<"JobCurriculumProject", 'DateTime'>
    readonly updatedAt: FieldRef<"JobCurriculumProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobCurriculumProject findUnique
   */
  export type JobCurriculumProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumProject to fetch.
     */
    where: JobCurriculumProjectWhereUniqueInput
  }

  /**
   * JobCurriculumProject findUniqueOrThrow
   */
  export type JobCurriculumProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumProject to fetch.
     */
    where: JobCurriculumProjectWhereUniqueInput
  }

  /**
   * JobCurriculumProject findFirst
   */
  export type JobCurriculumProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumProject to fetch.
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumProjects to fetch.
     */
    orderBy?: JobCurriculumProjectOrderByWithRelationInput | JobCurriculumProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumProjects.
     */
    cursor?: JobCurriculumProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumProjects.
     */
    distinct?: JobCurriculumProjectScalarFieldEnum | JobCurriculumProjectScalarFieldEnum[]
  }

  /**
   * JobCurriculumProject findFirstOrThrow
   */
  export type JobCurriculumProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumProject to fetch.
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumProjects to fetch.
     */
    orderBy?: JobCurriculumProjectOrderByWithRelationInput | JobCurriculumProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumProjects.
     */
    cursor?: JobCurriculumProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumProjects.
     */
    distinct?: JobCurriculumProjectScalarFieldEnum | JobCurriculumProjectScalarFieldEnum[]
  }

  /**
   * JobCurriculumProject findMany
   */
  export type JobCurriculumProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumProjects to fetch.
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumProjects to fetch.
     */
    orderBy?: JobCurriculumProjectOrderByWithRelationInput | JobCurriculumProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCurriculumProjects.
     */
    cursor?: JobCurriculumProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumProjects.
     */
    distinct?: JobCurriculumProjectScalarFieldEnum | JobCurriculumProjectScalarFieldEnum[]
  }

  /**
   * JobCurriculumProject create
   */
  export type JobCurriculumProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCurriculumProject.
     */
    data: XOR<JobCurriculumProjectCreateInput, JobCurriculumProjectUncheckedCreateInput>
  }

  /**
   * JobCurriculumProject createMany
   */
  export type JobCurriculumProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCurriculumProjects.
     */
    data: JobCurriculumProjectCreateManyInput | JobCurriculumProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCurriculumProject createManyAndReturn
   */
  export type JobCurriculumProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * The data used to create many JobCurriculumProjects.
     */
    data: JobCurriculumProjectCreateManyInput | JobCurriculumProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumProject update
   */
  export type JobCurriculumProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCurriculumProject.
     */
    data: XOR<JobCurriculumProjectUpdateInput, JobCurriculumProjectUncheckedUpdateInput>
    /**
     * Choose, which JobCurriculumProject to update.
     */
    where: JobCurriculumProjectWhereUniqueInput
  }

  /**
   * JobCurriculumProject updateMany
   */
  export type JobCurriculumProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCurriculumProjects.
     */
    data: XOR<JobCurriculumProjectUpdateManyMutationInput, JobCurriculumProjectUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumProjects to update
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * Limit how many JobCurriculumProjects to update.
     */
    limit?: number
  }

  /**
   * JobCurriculumProject updateManyAndReturn
   */
  export type JobCurriculumProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * The data used to update JobCurriculumProjects.
     */
    data: XOR<JobCurriculumProjectUpdateManyMutationInput, JobCurriculumProjectUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumProjects to update
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * Limit how many JobCurriculumProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumProject upsert
   */
  export type JobCurriculumProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCurriculumProject to update in case it exists.
     */
    where: JobCurriculumProjectWhereUniqueInput
    /**
     * In case the JobCurriculumProject found by the `where` argument doesn't exist, create a new JobCurriculumProject with this data.
     */
    create: XOR<JobCurriculumProjectCreateInput, JobCurriculumProjectUncheckedCreateInput>
    /**
     * In case the JobCurriculumProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCurriculumProjectUpdateInput, JobCurriculumProjectUncheckedUpdateInput>
  }

  /**
   * JobCurriculumProject delete
   */
  export type JobCurriculumProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
    /**
     * Filter which JobCurriculumProject to delete.
     */
    where: JobCurriculumProjectWhereUniqueInput
  }

  /**
   * JobCurriculumProject deleteMany
   */
  export type JobCurriculumProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumProjects to delete
     */
    where?: JobCurriculumProjectWhereInput
    /**
     * Limit how many JobCurriculumProjects to delete.
     */
    limit?: number
  }

  /**
   * JobCurriculumProject without action
   */
  export type JobCurriculumProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumProject
     */
    select?: JobCurriculumProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumProject
     */
    omit?: JobCurriculumProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumProjectInclude<ExtArgs> | null
  }


  /**
   * Model JobCurriculumPublication
   */

  export type AggregateJobCurriculumPublication = {
    _count: JobCurriculumPublicationCountAggregateOutputType | null
    _avg: JobCurriculumPublicationAvgAggregateOutputType | null
    _sum: JobCurriculumPublicationSumAggregateOutputType | null
    _min: JobCurriculumPublicationMinAggregateOutputType | null
    _max: JobCurriculumPublicationMaxAggregateOutputType | null
  }

  export type JobCurriculumPublicationAvgAggregateOutputType = {
    order: number | null
  }

  export type JobCurriculumPublicationSumAggregateOutputType = {
    order: number | null
  }

  export type JobCurriculumPublicationMinAggregateOutputType = {
    id: string | null
    curriculumId: string | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumPublicationMaxAggregateOutputType = {
    id: string | null
    curriculumId: string | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumPublicationCountAggregateOutputType = {
    id: number
    curriculumId: number
    title: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobCurriculumPublicationAvgAggregateInputType = {
    order?: true
  }

  export type JobCurriculumPublicationSumAggregateInputType = {
    order?: true
  }

  export type JobCurriculumPublicationMinAggregateInputType = {
    id?: true
    curriculumId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumPublicationMaxAggregateInputType = {
    id?: true
    curriculumId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumPublicationCountAggregateInputType = {
    id?: true
    curriculumId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobCurriculumPublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumPublication to aggregate.
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPublications to fetch.
     */
    orderBy?: JobCurriculumPublicationOrderByWithRelationInput | JobCurriculumPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCurriculumPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCurriculumPublications
    **/
    _count?: true | JobCurriculumPublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobCurriculumPublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobCurriculumPublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCurriculumPublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCurriculumPublicationMaxAggregateInputType
  }

  export type GetJobCurriculumPublicationAggregateType<T extends JobCurriculumPublicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCurriculumPublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCurriculumPublication[P]>
      : GetScalarType<T[P], AggregateJobCurriculumPublication[P]>
  }




  export type JobCurriculumPublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumPublicationWhereInput
    orderBy?: JobCurriculumPublicationOrderByWithAggregationInput | JobCurriculumPublicationOrderByWithAggregationInput[]
    by: JobCurriculumPublicationScalarFieldEnum[] | JobCurriculumPublicationScalarFieldEnum
    having?: JobCurriculumPublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCurriculumPublicationCountAggregateInputType | true
    _avg?: JobCurriculumPublicationAvgAggregateInputType
    _sum?: JobCurriculumPublicationSumAggregateInputType
    _min?: JobCurriculumPublicationMinAggregateInputType
    _max?: JobCurriculumPublicationMaxAggregateInputType
  }

  export type JobCurriculumPublicationGroupByOutputType = {
    id: string
    curriculumId: string
    title: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: JobCurriculumPublicationCountAggregateOutputType | null
    _avg: JobCurriculumPublicationAvgAggregateOutputType | null
    _sum: JobCurriculumPublicationSumAggregateOutputType | null
    _min: JobCurriculumPublicationMinAggregateOutputType | null
    _max: JobCurriculumPublicationMaxAggregateOutputType | null
  }

  type GetJobCurriculumPublicationGroupByPayload<T extends JobCurriculumPublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCurriculumPublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCurriculumPublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCurriculumPublicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobCurriculumPublicationGroupByOutputType[P]>
        }
      >
    >


  export type JobCurriculumPublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumPublication"]>

  export type JobCurriculumPublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumPublication"]>

  export type JobCurriculumPublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curriculumId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumPublication"]>

  export type JobCurriculumPublicationSelectScalar = {
    id?: boolean
    curriculumId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobCurriculumPublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "curriculumId" | "title" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["jobCurriculumPublication"]>
  export type JobCurriculumPublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }
  export type JobCurriculumPublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }
  export type JobCurriculumPublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculum?: boolean | JobCurriculumDefaultArgs<ExtArgs>
  }

  export type $JobCurriculumPublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCurriculumPublication"
    objects: {
      curriculum: Prisma.$JobCurriculumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      curriculumId: string
      title: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobCurriculumPublication"]>
    composites: {}
  }

  type JobCurriculumPublicationGetPayload<S extends boolean | null | undefined | JobCurriculumPublicationDefaultArgs> = $Result.GetResult<Prisma.$JobCurriculumPublicationPayload, S>

  type JobCurriculumPublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCurriculumPublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCurriculumPublicationCountAggregateInputType | true
    }

  export interface JobCurriculumPublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCurriculumPublication'], meta: { name: 'JobCurriculumPublication' } }
    /**
     * Find zero or one JobCurriculumPublication that matches the filter.
     * @param {JobCurriculumPublicationFindUniqueArgs} args - Arguments to find a JobCurriculumPublication
     * @example
     * // Get one JobCurriculumPublication
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCurriculumPublicationFindUniqueArgs>(args: SelectSubset<T, JobCurriculumPublicationFindUniqueArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCurriculumPublication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCurriculumPublicationFindUniqueOrThrowArgs} args - Arguments to find a JobCurriculumPublication
     * @example
     * // Get one JobCurriculumPublication
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCurriculumPublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCurriculumPublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumPublication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationFindFirstArgs} args - Arguments to find a JobCurriculumPublication
     * @example
     * // Get one JobCurriculumPublication
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCurriculumPublicationFindFirstArgs>(args?: SelectSubset<T, JobCurriculumPublicationFindFirstArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumPublication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationFindFirstOrThrowArgs} args - Arguments to find a JobCurriculumPublication
     * @example
     * // Get one JobCurriculumPublication
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCurriculumPublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCurriculumPublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCurriculumPublications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCurriculumPublications
     * const jobCurriculumPublications = await prisma.jobCurriculumPublication.findMany()
     * 
     * // Get first 10 JobCurriculumPublications
     * const jobCurriculumPublications = await prisma.jobCurriculumPublication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCurriculumPublicationWithIdOnly = await prisma.jobCurriculumPublication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCurriculumPublicationFindManyArgs>(args?: SelectSubset<T, JobCurriculumPublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCurriculumPublication.
     * @param {JobCurriculumPublicationCreateArgs} args - Arguments to create a JobCurriculumPublication.
     * @example
     * // Create one JobCurriculumPublication
     * const JobCurriculumPublication = await prisma.jobCurriculumPublication.create({
     *   data: {
     *     // ... data to create a JobCurriculumPublication
     *   }
     * })
     * 
     */
    create<T extends JobCurriculumPublicationCreateArgs>(args: SelectSubset<T, JobCurriculumPublicationCreateArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCurriculumPublications.
     * @param {JobCurriculumPublicationCreateManyArgs} args - Arguments to create many JobCurriculumPublications.
     * @example
     * // Create many JobCurriculumPublications
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCurriculumPublicationCreateManyArgs>(args?: SelectSubset<T, JobCurriculumPublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobCurriculumPublications and returns the data saved in the database.
     * @param {JobCurriculumPublicationCreateManyAndReturnArgs} args - Arguments to create many JobCurriculumPublications.
     * @example
     * // Create many JobCurriculumPublications
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobCurriculumPublications and only return the `id`
     * const jobCurriculumPublicationWithIdOnly = await prisma.jobCurriculumPublication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCurriculumPublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCurriculumPublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobCurriculumPublication.
     * @param {JobCurriculumPublicationDeleteArgs} args - Arguments to delete one JobCurriculumPublication.
     * @example
     * // Delete one JobCurriculumPublication
     * const JobCurriculumPublication = await prisma.jobCurriculumPublication.delete({
     *   where: {
     *     // ... filter to delete one JobCurriculumPublication
     *   }
     * })
     * 
     */
    delete<T extends JobCurriculumPublicationDeleteArgs>(args: SelectSubset<T, JobCurriculumPublicationDeleteArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCurriculumPublication.
     * @param {JobCurriculumPublicationUpdateArgs} args - Arguments to update one JobCurriculumPublication.
     * @example
     * // Update one JobCurriculumPublication
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCurriculumPublicationUpdateArgs>(args: SelectSubset<T, JobCurriculumPublicationUpdateArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCurriculumPublications.
     * @param {JobCurriculumPublicationDeleteManyArgs} args - Arguments to filter JobCurriculumPublications to delete.
     * @example
     * // Delete a few JobCurriculumPublications
     * const { count } = await prisma.jobCurriculumPublication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCurriculumPublicationDeleteManyArgs>(args?: SelectSubset<T, JobCurriculumPublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCurriculumPublications
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCurriculumPublicationUpdateManyArgs>(args: SelectSubset<T, JobCurriculumPublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumPublications and returns the data updated in the database.
     * @param {JobCurriculumPublicationUpdateManyAndReturnArgs} args - Arguments to update many JobCurriculumPublications.
     * @example
     * // Update many JobCurriculumPublications
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobCurriculumPublications and only return the `id`
     * const jobCurriculumPublicationWithIdOnly = await prisma.jobCurriculumPublication.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCurriculumPublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobCurriculumPublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobCurriculumPublication.
     * @param {JobCurriculumPublicationUpsertArgs} args - Arguments to update or create a JobCurriculumPublication.
     * @example
     * // Update or create a JobCurriculumPublication
     * const jobCurriculumPublication = await prisma.jobCurriculumPublication.upsert({
     *   create: {
     *     // ... data to create a JobCurriculumPublication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCurriculumPublication we want to update
     *   }
     * })
     */
    upsert<T extends JobCurriculumPublicationUpsertArgs>(args: SelectSubset<T, JobCurriculumPublicationUpsertArgs<ExtArgs>>): Prisma__JobCurriculumPublicationClient<$Result.GetResult<Prisma.$JobCurriculumPublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCurriculumPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationCountArgs} args - Arguments to filter JobCurriculumPublications to count.
     * @example
     * // Count the number of JobCurriculumPublications
     * const count = await prisma.jobCurriculumPublication.count({
     *   where: {
     *     // ... the filter for the JobCurriculumPublications we want to count
     *   }
     * })
    **/
    count<T extends JobCurriculumPublicationCountArgs>(
      args?: Subset<T, JobCurriculumPublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCurriculumPublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCurriculumPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCurriculumPublicationAggregateArgs>(args: Subset<T, JobCurriculumPublicationAggregateArgs>): Prisma.PrismaPromise<GetJobCurriculumPublicationAggregateType<T>>

    /**
     * Group by JobCurriculumPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPublicationGroupByArgs} args - Group by arguments.
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
      T extends JobCurriculumPublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCurriculumPublicationGroupByArgs['orderBy'] }
        : { orderBy?: JobCurriculumPublicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobCurriculumPublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCurriculumPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCurriculumPublication model
   */
  readonly fields: JobCurriculumPublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCurriculumPublication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCurriculumPublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculum<T extends JobCurriculumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobCurriculumDefaultArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobCurriculumPublication model
   */
  interface JobCurriculumPublicationFieldRefs {
    readonly id: FieldRef<"JobCurriculumPublication", 'String'>
    readonly curriculumId: FieldRef<"JobCurriculumPublication", 'String'>
    readonly title: FieldRef<"JobCurriculumPublication", 'String'>
    readonly order: FieldRef<"JobCurriculumPublication", 'Int'>
    readonly createdAt: FieldRef<"JobCurriculumPublication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobCurriculumPublication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobCurriculumPublication findUnique
   */
  export type JobCurriculumPublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPublication to fetch.
     */
    where: JobCurriculumPublicationWhereUniqueInput
  }

  /**
   * JobCurriculumPublication findUniqueOrThrow
   */
  export type JobCurriculumPublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPublication to fetch.
     */
    where: JobCurriculumPublicationWhereUniqueInput
  }

  /**
   * JobCurriculumPublication findFirst
   */
  export type JobCurriculumPublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPublication to fetch.
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPublications to fetch.
     */
    orderBy?: JobCurriculumPublicationOrderByWithRelationInput | JobCurriculumPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumPublications.
     */
    cursor?: JobCurriculumPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumPublications.
     */
    distinct?: JobCurriculumPublicationScalarFieldEnum | JobCurriculumPublicationScalarFieldEnum[]
  }

  /**
   * JobCurriculumPublication findFirstOrThrow
   */
  export type JobCurriculumPublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPublication to fetch.
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPublications to fetch.
     */
    orderBy?: JobCurriculumPublicationOrderByWithRelationInput | JobCurriculumPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumPublications.
     */
    cursor?: JobCurriculumPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumPublications.
     */
    distinct?: JobCurriculumPublicationScalarFieldEnum | JobCurriculumPublicationScalarFieldEnum[]
  }

  /**
   * JobCurriculumPublication findMany
   */
  export type JobCurriculumPublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPublications to fetch.
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPublications to fetch.
     */
    orderBy?: JobCurriculumPublicationOrderByWithRelationInput | JobCurriculumPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCurriculumPublications.
     */
    cursor?: JobCurriculumPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumPublications.
     */
    distinct?: JobCurriculumPublicationScalarFieldEnum | JobCurriculumPublicationScalarFieldEnum[]
  }

  /**
   * JobCurriculumPublication create
   */
  export type JobCurriculumPublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCurriculumPublication.
     */
    data: XOR<JobCurriculumPublicationCreateInput, JobCurriculumPublicationUncheckedCreateInput>
  }

  /**
   * JobCurriculumPublication createMany
   */
  export type JobCurriculumPublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCurriculumPublications.
     */
    data: JobCurriculumPublicationCreateManyInput | JobCurriculumPublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCurriculumPublication createManyAndReturn
   */
  export type JobCurriculumPublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobCurriculumPublications.
     */
    data: JobCurriculumPublicationCreateManyInput | JobCurriculumPublicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumPublication update
   */
  export type JobCurriculumPublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCurriculumPublication.
     */
    data: XOR<JobCurriculumPublicationUpdateInput, JobCurriculumPublicationUncheckedUpdateInput>
    /**
     * Choose, which JobCurriculumPublication to update.
     */
    where: JobCurriculumPublicationWhereUniqueInput
  }

  /**
   * JobCurriculumPublication updateMany
   */
  export type JobCurriculumPublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCurriculumPublications.
     */
    data: XOR<JobCurriculumPublicationUpdateManyMutationInput, JobCurriculumPublicationUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumPublications to update
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * Limit how many JobCurriculumPublications to update.
     */
    limit?: number
  }

  /**
   * JobCurriculumPublication updateManyAndReturn
   */
  export type JobCurriculumPublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * The data used to update JobCurriculumPublications.
     */
    data: XOR<JobCurriculumPublicationUpdateManyMutationInput, JobCurriculumPublicationUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumPublications to update
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * Limit how many JobCurriculumPublications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumPublication upsert
   */
  export type JobCurriculumPublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCurriculumPublication to update in case it exists.
     */
    where: JobCurriculumPublicationWhereUniqueInput
    /**
     * In case the JobCurriculumPublication found by the `where` argument doesn't exist, create a new JobCurriculumPublication with this data.
     */
    create: XOR<JobCurriculumPublicationCreateInput, JobCurriculumPublicationUncheckedCreateInput>
    /**
     * In case the JobCurriculumPublication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCurriculumPublicationUpdateInput, JobCurriculumPublicationUncheckedUpdateInput>
  }

  /**
   * JobCurriculumPublication delete
   */
  export type JobCurriculumPublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
    /**
     * Filter which JobCurriculumPublication to delete.
     */
    where: JobCurriculumPublicationWhereUniqueInput
  }

  /**
   * JobCurriculumPublication deleteMany
   */
  export type JobCurriculumPublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumPublications to delete
     */
    where?: JobCurriculumPublicationWhereInput
    /**
     * Limit how many JobCurriculumPublications to delete.
     */
    limit?: number
  }

  /**
   * JobCurriculumPublication without action
   */
  export type JobCurriculumPublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPublication
     */
    select?: JobCurriculumPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPublication
     */
    omit?: JobCurriculumPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPublicationInclude<ExtArgs> | null
  }


  /**
   * Model JobCurriculumOutbox
   */

  export type AggregateJobCurriculumOutbox = {
    _count: JobCurriculumOutboxCountAggregateOutputType | null
    _avg: JobCurriculumOutboxAvgAggregateOutputType | null
    _sum: JobCurriculumOutboxSumAggregateOutputType | null
    _min: JobCurriculumOutboxMinAggregateOutputType | null
    _max: JobCurriculumOutboxMaxAggregateOutputType | null
  }

  export type JobCurriculumOutboxAvgAggregateOutputType = {
    attempts: number | null
  }

  export type JobCurriculumOutboxSumAggregateOutputType = {
    attempts: number | null
  }

  export type JobCurriculumOutboxMinAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.OutboxStatus | null
    forceRegenerate: boolean | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumOutboxMaxAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.OutboxStatus | null
    forceRegenerate: boolean | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumOutboxCountAggregateOutputType = {
    id: number
    jobOfferId: number
    status: number
    forceRegenerate: number
    attempts: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobCurriculumOutboxAvgAggregateInputType = {
    attempts?: true
  }

  export type JobCurriculumOutboxSumAggregateInputType = {
    attempts?: true
  }

  export type JobCurriculumOutboxMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    forceRegenerate?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumOutboxMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    forceRegenerate?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumOutboxCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    forceRegenerate?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobCurriculumOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumOutbox to aggregate.
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumOutboxes to fetch.
     */
    orderBy?: JobCurriculumOutboxOrderByWithRelationInput | JobCurriculumOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCurriculumOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCurriculumOutboxes
    **/
    _count?: true | JobCurriculumOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobCurriculumOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobCurriculumOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCurriculumOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCurriculumOutboxMaxAggregateInputType
  }

  export type GetJobCurriculumOutboxAggregateType<T extends JobCurriculumOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCurriculumOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCurriculumOutbox[P]>
      : GetScalarType<T[P], AggregateJobCurriculumOutbox[P]>
  }




  export type JobCurriculumOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumOutboxWhereInput
    orderBy?: JobCurriculumOutboxOrderByWithAggregationInput | JobCurriculumOutboxOrderByWithAggregationInput[]
    by: JobCurriculumOutboxScalarFieldEnum[] | JobCurriculumOutboxScalarFieldEnum
    having?: JobCurriculumOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCurriculumOutboxCountAggregateInputType | true
    _avg?: JobCurriculumOutboxAvgAggregateInputType
    _sum?: JobCurriculumOutboxSumAggregateInputType
    _min?: JobCurriculumOutboxMinAggregateInputType
    _max?: JobCurriculumOutboxMaxAggregateInputType
  }

  export type JobCurriculumOutboxGroupByOutputType = {
    id: string
    jobOfferId: string
    status: $Enums.OutboxStatus
    forceRegenerate: boolean
    attempts: number
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobCurriculumOutboxCountAggregateOutputType | null
    _avg: JobCurriculumOutboxAvgAggregateOutputType | null
    _sum: JobCurriculumOutboxSumAggregateOutputType | null
    _min: JobCurriculumOutboxMinAggregateOutputType | null
    _max: JobCurriculumOutboxMaxAggregateOutputType | null
  }

  type GetJobCurriculumOutboxGroupByPayload<T extends JobCurriculumOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCurriculumOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCurriculumOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCurriculumOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], JobCurriculumOutboxGroupByOutputType[P]>
        }
      >
    >


  export type JobCurriculumOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumOutbox"]>

  export type JobCurriculumOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumOutbox"]>

  export type JobCurriculumOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumOutbox"]>

  export type JobCurriculumOutboxSelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobCurriculumOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "status" | "forceRegenerate" | "attempts" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["jobCurriculumOutbox"]>
  export type JobCurriculumOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobCurriculumOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobCurriculumOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }

  export type $JobCurriculumOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCurriculumOutbox"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOfferId: string
      status: $Enums.OutboxStatus
      forceRegenerate: boolean
      attempts: number
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobCurriculumOutbox"]>
    composites: {}
  }

  type JobCurriculumOutboxGetPayload<S extends boolean | null | undefined | JobCurriculumOutboxDefaultArgs> = $Result.GetResult<Prisma.$JobCurriculumOutboxPayload, S>

  type JobCurriculumOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCurriculumOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCurriculumOutboxCountAggregateInputType | true
    }

  export interface JobCurriculumOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCurriculumOutbox'], meta: { name: 'JobCurriculumOutbox' } }
    /**
     * Find zero or one JobCurriculumOutbox that matches the filter.
     * @param {JobCurriculumOutboxFindUniqueArgs} args - Arguments to find a JobCurriculumOutbox
     * @example
     * // Get one JobCurriculumOutbox
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCurriculumOutboxFindUniqueArgs>(args: SelectSubset<T, JobCurriculumOutboxFindUniqueArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCurriculumOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCurriculumOutboxFindUniqueOrThrowArgs} args - Arguments to find a JobCurriculumOutbox
     * @example
     * // Get one JobCurriculumOutbox
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCurriculumOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCurriculumOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxFindFirstArgs} args - Arguments to find a JobCurriculumOutbox
     * @example
     * // Get one JobCurriculumOutbox
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCurriculumOutboxFindFirstArgs>(args?: SelectSubset<T, JobCurriculumOutboxFindFirstArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxFindFirstOrThrowArgs} args - Arguments to find a JobCurriculumOutbox
     * @example
     * // Get one JobCurriculumOutbox
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCurriculumOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCurriculumOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCurriculumOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCurriculumOutboxes
     * const jobCurriculumOutboxes = await prisma.jobCurriculumOutbox.findMany()
     * 
     * // Get first 10 JobCurriculumOutboxes
     * const jobCurriculumOutboxes = await prisma.jobCurriculumOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCurriculumOutboxWithIdOnly = await prisma.jobCurriculumOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCurriculumOutboxFindManyArgs>(args?: SelectSubset<T, JobCurriculumOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCurriculumOutbox.
     * @param {JobCurriculumOutboxCreateArgs} args - Arguments to create a JobCurriculumOutbox.
     * @example
     * // Create one JobCurriculumOutbox
     * const JobCurriculumOutbox = await prisma.jobCurriculumOutbox.create({
     *   data: {
     *     // ... data to create a JobCurriculumOutbox
     *   }
     * })
     * 
     */
    create<T extends JobCurriculumOutboxCreateArgs>(args: SelectSubset<T, JobCurriculumOutboxCreateArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCurriculumOutboxes.
     * @param {JobCurriculumOutboxCreateManyArgs} args - Arguments to create many JobCurriculumOutboxes.
     * @example
     * // Create many JobCurriculumOutboxes
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCurriculumOutboxCreateManyArgs>(args?: SelectSubset<T, JobCurriculumOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobCurriculumOutboxes and returns the data saved in the database.
     * @param {JobCurriculumOutboxCreateManyAndReturnArgs} args - Arguments to create many JobCurriculumOutboxes.
     * @example
     * // Create many JobCurriculumOutboxes
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobCurriculumOutboxes and only return the `id`
     * const jobCurriculumOutboxWithIdOnly = await prisma.jobCurriculumOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCurriculumOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCurriculumOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobCurriculumOutbox.
     * @param {JobCurriculumOutboxDeleteArgs} args - Arguments to delete one JobCurriculumOutbox.
     * @example
     * // Delete one JobCurriculumOutbox
     * const JobCurriculumOutbox = await prisma.jobCurriculumOutbox.delete({
     *   where: {
     *     // ... filter to delete one JobCurriculumOutbox
     *   }
     * })
     * 
     */
    delete<T extends JobCurriculumOutboxDeleteArgs>(args: SelectSubset<T, JobCurriculumOutboxDeleteArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCurriculumOutbox.
     * @param {JobCurriculumOutboxUpdateArgs} args - Arguments to update one JobCurriculumOutbox.
     * @example
     * // Update one JobCurriculumOutbox
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCurriculumOutboxUpdateArgs>(args: SelectSubset<T, JobCurriculumOutboxUpdateArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCurriculumOutboxes.
     * @param {JobCurriculumOutboxDeleteManyArgs} args - Arguments to filter JobCurriculumOutboxes to delete.
     * @example
     * // Delete a few JobCurriculumOutboxes
     * const { count } = await prisma.jobCurriculumOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCurriculumOutboxDeleteManyArgs>(args?: SelectSubset<T, JobCurriculumOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCurriculumOutboxes
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCurriculumOutboxUpdateManyArgs>(args: SelectSubset<T, JobCurriculumOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumOutboxes and returns the data updated in the database.
     * @param {JobCurriculumOutboxUpdateManyAndReturnArgs} args - Arguments to update many JobCurriculumOutboxes.
     * @example
     * // Update many JobCurriculumOutboxes
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobCurriculumOutboxes and only return the `id`
     * const jobCurriculumOutboxWithIdOnly = await prisma.jobCurriculumOutbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCurriculumOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, JobCurriculumOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobCurriculumOutbox.
     * @param {JobCurriculumOutboxUpsertArgs} args - Arguments to update or create a JobCurriculumOutbox.
     * @example
     * // Update or create a JobCurriculumOutbox
     * const jobCurriculumOutbox = await prisma.jobCurriculumOutbox.upsert({
     *   create: {
     *     // ... data to create a JobCurriculumOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCurriculumOutbox we want to update
     *   }
     * })
     */
    upsert<T extends JobCurriculumOutboxUpsertArgs>(args: SelectSubset<T, JobCurriculumOutboxUpsertArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCurriculumOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxCountArgs} args - Arguments to filter JobCurriculumOutboxes to count.
     * @example
     * // Count the number of JobCurriculumOutboxes
     * const count = await prisma.jobCurriculumOutbox.count({
     *   where: {
     *     // ... the filter for the JobCurriculumOutboxes we want to count
     *   }
     * })
    **/
    count<T extends JobCurriculumOutboxCountArgs>(
      args?: Subset<T, JobCurriculumOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCurriculumOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCurriculumOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCurriculumOutboxAggregateArgs>(args: Subset<T, JobCurriculumOutboxAggregateArgs>): Prisma.PrismaPromise<GetJobCurriculumOutboxAggregateType<T>>

    /**
     * Group by JobCurriculumOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumOutboxGroupByArgs} args - Group by arguments.
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
      T extends JobCurriculumOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCurriculumOutboxGroupByArgs['orderBy'] }
        : { orderBy?: JobCurriculumOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobCurriculumOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCurriculumOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCurriculumOutbox model
   */
  readonly fields: JobCurriculumOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCurriculumOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCurriculumOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobCurriculumOutbox model
   */
  interface JobCurriculumOutboxFieldRefs {
    readonly id: FieldRef<"JobCurriculumOutbox", 'String'>
    readonly jobOfferId: FieldRef<"JobCurriculumOutbox", 'String'>
    readonly status: FieldRef<"JobCurriculumOutbox", 'OutboxStatus'>
    readonly forceRegenerate: FieldRef<"JobCurriculumOutbox", 'Boolean'>
    readonly attempts: FieldRef<"JobCurriculumOutbox", 'Int'>
    readonly lastError: FieldRef<"JobCurriculumOutbox", 'String'>
    readonly createdAt: FieldRef<"JobCurriculumOutbox", 'DateTime'>
    readonly updatedAt: FieldRef<"JobCurriculumOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobCurriculumOutbox findUnique
   */
  export type JobCurriculumOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumOutbox to fetch.
     */
    where: JobCurriculumOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumOutbox findUniqueOrThrow
   */
  export type JobCurriculumOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumOutbox to fetch.
     */
    where: JobCurriculumOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumOutbox findFirst
   */
  export type JobCurriculumOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumOutbox to fetch.
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumOutboxes to fetch.
     */
    orderBy?: JobCurriculumOutboxOrderByWithRelationInput | JobCurriculumOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumOutboxes.
     */
    cursor?: JobCurriculumOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumOutboxes.
     */
    distinct?: JobCurriculumOutboxScalarFieldEnum | JobCurriculumOutboxScalarFieldEnum[]
  }

  /**
   * JobCurriculumOutbox findFirstOrThrow
   */
  export type JobCurriculumOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumOutbox to fetch.
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumOutboxes to fetch.
     */
    orderBy?: JobCurriculumOutboxOrderByWithRelationInput | JobCurriculumOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumOutboxes.
     */
    cursor?: JobCurriculumOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumOutboxes.
     */
    distinct?: JobCurriculumOutboxScalarFieldEnum | JobCurriculumOutboxScalarFieldEnum[]
  }

  /**
   * JobCurriculumOutbox findMany
   */
  export type JobCurriculumOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumOutboxes to fetch.
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumOutboxes to fetch.
     */
    orderBy?: JobCurriculumOutboxOrderByWithRelationInput | JobCurriculumOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCurriculumOutboxes.
     */
    cursor?: JobCurriculumOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumOutboxes.
     */
    distinct?: JobCurriculumOutboxScalarFieldEnum | JobCurriculumOutboxScalarFieldEnum[]
  }

  /**
   * JobCurriculumOutbox create
   */
  export type JobCurriculumOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCurriculumOutbox.
     */
    data: XOR<JobCurriculumOutboxCreateInput, JobCurriculumOutboxUncheckedCreateInput>
  }

  /**
   * JobCurriculumOutbox createMany
   */
  export type JobCurriculumOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCurriculumOutboxes.
     */
    data: JobCurriculumOutboxCreateManyInput | JobCurriculumOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCurriculumOutbox createManyAndReturn
   */
  export type JobCurriculumOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many JobCurriculumOutboxes.
     */
    data: JobCurriculumOutboxCreateManyInput | JobCurriculumOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumOutbox update
   */
  export type JobCurriculumOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCurriculumOutbox.
     */
    data: XOR<JobCurriculumOutboxUpdateInput, JobCurriculumOutboxUncheckedUpdateInput>
    /**
     * Choose, which JobCurriculumOutbox to update.
     */
    where: JobCurriculumOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumOutbox updateMany
   */
  export type JobCurriculumOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCurriculumOutboxes.
     */
    data: XOR<JobCurriculumOutboxUpdateManyMutationInput, JobCurriculumOutboxUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumOutboxes to update
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * Limit how many JobCurriculumOutboxes to update.
     */
    limit?: number
  }

  /**
   * JobCurriculumOutbox updateManyAndReturn
   */
  export type JobCurriculumOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * The data used to update JobCurriculumOutboxes.
     */
    data: XOR<JobCurriculumOutboxUpdateManyMutationInput, JobCurriculumOutboxUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumOutboxes to update
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * Limit how many JobCurriculumOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumOutbox upsert
   */
  export type JobCurriculumOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCurriculumOutbox to update in case it exists.
     */
    where: JobCurriculumOutboxWhereUniqueInput
    /**
     * In case the JobCurriculumOutbox found by the `where` argument doesn't exist, create a new JobCurriculumOutbox with this data.
     */
    create: XOR<JobCurriculumOutboxCreateInput, JobCurriculumOutboxUncheckedCreateInput>
    /**
     * In case the JobCurriculumOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCurriculumOutboxUpdateInput, JobCurriculumOutboxUncheckedUpdateInput>
  }

  /**
   * JobCurriculumOutbox delete
   */
  export type JobCurriculumOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    /**
     * Filter which JobCurriculumOutbox to delete.
     */
    where: JobCurriculumOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumOutbox deleteMany
   */
  export type JobCurriculumOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumOutboxes to delete
     */
    where?: JobCurriculumOutboxWhereInput
    /**
     * Limit how many JobCurriculumOutboxes to delete.
     */
    limit?: number
  }

  /**
   * JobCurriculumOutbox without action
   */
  export type JobCurriculumOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
  }


  /**
   * Model JobCurriculumPdfOutbox
   */

  export type AggregateJobCurriculumPdfOutbox = {
    _count: JobCurriculumPdfOutboxCountAggregateOutputType | null
    _avg: JobCurriculumPdfOutboxAvgAggregateOutputType | null
    _sum: JobCurriculumPdfOutboxSumAggregateOutputType | null
    _min: JobCurriculumPdfOutboxMinAggregateOutputType | null
    _max: JobCurriculumPdfOutboxMaxAggregateOutputType | null
  }

  export type JobCurriculumPdfOutboxAvgAggregateOutputType = {
    attempts: number | null
  }

  export type JobCurriculumPdfOutboxSumAggregateOutputType = {
    attempts: number | null
  }

  export type JobCurriculumPdfOutboxMinAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.OutboxStatus | null
    templateName: string | null
    forceRegenerate: boolean | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumPdfOutboxMaxAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.OutboxStatus | null
    templateName: string | null
    forceRegenerate: boolean | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCurriculumPdfOutboxCountAggregateOutputType = {
    id: number
    jobOfferId: number
    status: number
    templateName: number
    forceRegenerate: number
    attempts: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobCurriculumPdfOutboxAvgAggregateInputType = {
    attempts?: true
  }

  export type JobCurriculumPdfOutboxSumAggregateInputType = {
    attempts?: true
  }

  export type JobCurriculumPdfOutboxMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    templateName?: true
    forceRegenerate?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumPdfOutboxMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    templateName?: true
    forceRegenerate?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCurriculumPdfOutboxCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    templateName?: true
    forceRegenerate?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobCurriculumPdfOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumPdfOutbox to aggregate.
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPdfOutboxes to fetch.
     */
    orderBy?: JobCurriculumPdfOutboxOrderByWithRelationInput | JobCurriculumPdfOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCurriculumPdfOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPdfOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPdfOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCurriculumPdfOutboxes
    **/
    _count?: true | JobCurriculumPdfOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobCurriculumPdfOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobCurriculumPdfOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCurriculumPdfOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCurriculumPdfOutboxMaxAggregateInputType
  }

  export type GetJobCurriculumPdfOutboxAggregateType<T extends JobCurriculumPdfOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCurriculumPdfOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCurriculumPdfOutbox[P]>
      : GetScalarType<T[P], AggregateJobCurriculumPdfOutbox[P]>
  }




  export type JobCurriculumPdfOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCurriculumPdfOutboxWhereInput
    orderBy?: JobCurriculumPdfOutboxOrderByWithAggregationInput | JobCurriculumPdfOutboxOrderByWithAggregationInput[]
    by: JobCurriculumPdfOutboxScalarFieldEnum[] | JobCurriculumPdfOutboxScalarFieldEnum
    having?: JobCurriculumPdfOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCurriculumPdfOutboxCountAggregateInputType | true
    _avg?: JobCurriculumPdfOutboxAvgAggregateInputType
    _sum?: JobCurriculumPdfOutboxSumAggregateInputType
    _min?: JobCurriculumPdfOutboxMinAggregateInputType
    _max?: JobCurriculumPdfOutboxMaxAggregateInputType
  }

  export type JobCurriculumPdfOutboxGroupByOutputType = {
    id: string
    jobOfferId: string
    status: $Enums.OutboxStatus
    templateName: string | null
    forceRegenerate: boolean
    attempts: number
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobCurriculumPdfOutboxCountAggregateOutputType | null
    _avg: JobCurriculumPdfOutboxAvgAggregateOutputType | null
    _sum: JobCurriculumPdfOutboxSumAggregateOutputType | null
    _min: JobCurriculumPdfOutboxMinAggregateOutputType | null
    _max: JobCurriculumPdfOutboxMaxAggregateOutputType | null
  }

  type GetJobCurriculumPdfOutboxGroupByPayload<T extends JobCurriculumPdfOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCurriculumPdfOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCurriculumPdfOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCurriculumPdfOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], JobCurriculumPdfOutboxGroupByOutputType[P]>
        }
      >
    >


  export type JobCurriculumPdfOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    templateName?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumPdfOutbox"]>

  export type JobCurriculumPdfOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    templateName?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumPdfOutbox"]>

  export type JobCurriculumPdfOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    templateName?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCurriculumPdfOutbox"]>

  export type JobCurriculumPdfOutboxSelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    templateName?: boolean
    forceRegenerate?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobCurriculumPdfOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "status" | "templateName" | "forceRegenerate" | "attempts" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["jobCurriculumPdfOutbox"]>
  export type JobCurriculumPdfOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobCurriculumPdfOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobCurriculumPdfOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }

  export type $JobCurriculumPdfOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCurriculumPdfOutbox"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOfferId: string
      status: $Enums.OutboxStatus
      templateName: string | null
      forceRegenerate: boolean
      attempts: number
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobCurriculumPdfOutbox"]>
    composites: {}
  }

  type JobCurriculumPdfOutboxGetPayload<S extends boolean | null | undefined | JobCurriculumPdfOutboxDefaultArgs> = $Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload, S>

  type JobCurriculumPdfOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCurriculumPdfOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCurriculumPdfOutboxCountAggregateInputType | true
    }

  export interface JobCurriculumPdfOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCurriculumPdfOutbox'], meta: { name: 'JobCurriculumPdfOutbox' } }
    /**
     * Find zero or one JobCurriculumPdfOutbox that matches the filter.
     * @param {JobCurriculumPdfOutboxFindUniqueArgs} args - Arguments to find a JobCurriculumPdfOutbox
     * @example
     * // Get one JobCurriculumPdfOutbox
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCurriculumPdfOutboxFindUniqueArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxFindUniqueArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCurriculumPdfOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCurriculumPdfOutboxFindUniqueOrThrowArgs} args - Arguments to find a JobCurriculumPdfOutbox
     * @example
     * // Get one JobCurriculumPdfOutbox
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCurriculumPdfOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumPdfOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxFindFirstArgs} args - Arguments to find a JobCurriculumPdfOutbox
     * @example
     * // Get one JobCurriculumPdfOutbox
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCurriculumPdfOutboxFindFirstArgs>(args?: SelectSubset<T, JobCurriculumPdfOutboxFindFirstArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCurriculumPdfOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxFindFirstOrThrowArgs} args - Arguments to find a JobCurriculumPdfOutbox
     * @example
     * // Get one JobCurriculumPdfOutbox
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCurriculumPdfOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCurriculumPdfOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCurriculumPdfOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCurriculumPdfOutboxes
     * const jobCurriculumPdfOutboxes = await prisma.jobCurriculumPdfOutbox.findMany()
     * 
     * // Get first 10 JobCurriculumPdfOutboxes
     * const jobCurriculumPdfOutboxes = await prisma.jobCurriculumPdfOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCurriculumPdfOutboxWithIdOnly = await prisma.jobCurriculumPdfOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCurriculumPdfOutboxFindManyArgs>(args?: SelectSubset<T, JobCurriculumPdfOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCurriculumPdfOutbox.
     * @param {JobCurriculumPdfOutboxCreateArgs} args - Arguments to create a JobCurriculumPdfOutbox.
     * @example
     * // Create one JobCurriculumPdfOutbox
     * const JobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.create({
     *   data: {
     *     // ... data to create a JobCurriculumPdfOutbox
     *   }
     * })
     * 
     */
    create<T extends JobCurriculumPdfOutboxCreateArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxCreateArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCurriculumPdfOutboxes.
     * @param {JobCurriculumPdfOutboxCreateManyArgs} args - Arguments to create many JobCurriculumPdfOutboxes.
     * @example
     * // Create many JobCurriculumPdfOutboxes
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCurriculumPdfOutboxCreateManyArgs>(args?: SelectSubset<T, JobCurriculumPdfOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobCurriculumPdfOutboxes and returns the data saved in the database.
     * @param {JobCurriculumPdfOutboxCreateManyAndReturnArgs} args - Arguments to create many JobCurriculumPdfOutboxes.
     * @example
     * // Create many JobCurriculumPdfOutboxes
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobCurriculumPdfOutboxes and only return the `id`
     * const jobCurriculumPdfOutboxWithIdOnly = await prisma.jobCurriculumPdfOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCurriculumPdfOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCurriculumPdfOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobCurriculumPdfOutbox.
     * @param {JobCurriculumPdfOutboxDeleteArgs} args - Arguments to delete one JobCurriculumPdfOutbox.
     * @example
     * // Delete one JobCurriculumPdfOutbox
     * const JobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.delete({
     *   where: {
     *     // ... filter to delete one JobCurriculumPdfOutbox
     *   }
     * })
     * 
     */
    delete<T extends JobCurriculumPdfOutboxDeleteArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxDeleteArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCurriculumPdfOutbox.
     * @param {JobCurriculumPdfOutboxUpdateArgs} args - Arguments to update one JobCurriculumPdfOutbox.
     * @example
     * // Update one JobCurriculumPdfOutbox
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCurriculumPdfOutboxUpdateArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxUpdateArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCurriculumPdfOutboxes.
     * @param {JobCurriculumPdfOutboxDeleteManyArgs} args - Arguments to filter JobCurriculumPdfOutboxes to delete.
     * @example
     * // Delete a few JobCurriculumPdfOutboxes
     * const { count } = await prisma.jobCurriculumPdfOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCurriculumPdfOutboxDeleteManyArgs>(args?: SelectSubset<T, JobCurriculumPdfOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumPdfOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCurriculumPdfOutboxes
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCurriculumPdfOutboxUpdateManyArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCurriculumPdfOutboxes and returns the data updated in the database.
     * @param {JobCurriculumPdfOutboxUpdateManyAndReturnArgs} args - Arguments to update many JobCurriculumPdfOutboxes.
     * @example
     * // Update many JobCurriculumPdfOutboxes
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobCurriculumPdfOutboxes and only return the `id`
     * const jobCurriculumPdfOutboxWithIdOnly = await prisma.jobCurriculumPdfOutbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobCurriculumPdfOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobCurriculumPdfOutbox.
     * @param {JobCurriculumPdfOutboxUpsertArgs} args - Arguments to update or create a JobCurriculumPdfOutbox.
     * @example
     * // Update or create a JobCurriculumPdfOutbox
     * const jobCurriculumPdfOutbox = await prisma.jobCurriculumPdfOutbox.upsert({
     *   create: {
     *     // ... data to create a JobCurriculumPdfOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCurriculumPdfOutbox we want to update
     *   }
     * })
     */
    upsert<T extends JobCurriculumPdfOutboxUpsertArgs>(args: SelectSubset<T, JobCurriculumPdfOutboxUpsertArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCurriculumPdfOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxCountArgs} args - Arguments to filter JobCurriculumPdfOutboxes to count.
     * @example
     * // Count the number of JobCurriculumPdfOutboxes
     * const count = await prisma.jobCurriculumPdfOutbox.count({
     *   where: {
     *     // ... the filter for the JobCurriculumPdfOutboxes we want to count
     *   }
     * })
    **/
    count<T extends JobCurriculumPdfOutboxCountArgs>(
      args?: Subset<T, JobCurriculumPdfOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCurriculumPdfOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCurriculumPdfOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobCurriculumPdfOutboxAggregateArgs>(args: Subset<T, JobCurriculumPdfOutboxAggregateArgs>): Prisma.PrismaPromise<GetJobCurriculumPdfOutboxAggregateType<T>>

    /**
     * Group by JobCurriculumPdfOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCurriculumPdfOutboxGroupByArgs} args - Group by arguments.
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
      T extends JobCurriculumPdfOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCurriculumPdfOutboxGroupByArgs['orderBy'] }
        : { orderBy?: JobCurriculumPdfOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobCurriculumPdfOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCurriculumPdfOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCurriculumPdfOutbox model
   */
  readonly fields: JobCurriculumPdfOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCurriculumPdfOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCurriculumPdfOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobCurriculumPdfOutbox model
   */
  interface JobCurriculumPdfOutboxFieldRefs {
    readonly id: FieldRef<"JobCurriculumPdfOutbox", 'String'>
    readonly jobOfferId: FieldRef<"JobCurriculumPdfOutbox", 'String'>
    readonly status: FieldRef<"JobCurriculumPdfOutbox", 'OutboxStatus'>
    readonly templateName: FieldRef<"JobCurriculumPdfOutbox", 'String'>
    readonly forceRegenerate: FieldRef<"JobCurriculumPdfOutbox", 'Boolean'>
    readonly attempts: FieldRef<"JobCurriculumPdfOutbox", 'Int'>
    readonly lastError: FieldRef<"JobCurriculumPdfOutbox", 'String'>
    readonly createdAt: FieldRef<"JobCurriculumPdfOutbox", 'DateTime'>
    readonly updatedAt: FieldRef<"JobCurriculumPdfOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobCurriculumPdfOutbox findUnique
   */
  export type JobCurriculumPdfOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPdfOutbox to fetch.
     */
    where: JobCurriculumPdfOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumPdfOutbox findUniqueOrThrow
   */
  export type JobCurriculumPdfOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPdfOutbox to fetch.
     */
    where: JobCurriculumPdfOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumPdfOutbox findFirst
   */
  export type JobCurriculumPdfOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPdfOutbox to fetch.
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPdfOutboxes to fetch.
     */
    orderBy?: JobCurriculumPdfOutboxOrderByWithRelationInput | JobCurriculumPdfOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumPdfOutboxes.
     */
    cursor?: JobCurriculumPdfOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPdfOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPdfOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumPdfOutboxes.
     */
    distinct?: JobCurriculumPdfOutboxScalarFieldEnum | JobCurriculumPdfOutboxScalarFieldEnum[]
  }

  /**
   * JobCurriculumPdfOutbox findFirstOrThrow
   */
  export type JobCurriculumPdfOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPdfOutbox to fetch.
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPdfOutboxes to fetch.
     */
    orderBy?: JobCurriculumPdfOutboxOrderByWithRelationInput | JobCurriculumPdfOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCurriculumPdfOutboxes.
     */
    cursor?: JobCurriculumPdfOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPdfOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPdfOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumPdfOutboxes.
     */
    distinct?: JobCurriculumPdfOutboxScalarFieldEnum | JobCurriculumPdfOutboxScalarFieldEnum[]
  }

  /**
   * JobCurriculumPdfOutbox findMany
   */
  export type JobCurriculumPdfOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobCurriculumPdfOutboxes to fetch.
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCurriculumPdfOutboxes to fetch.
     */
    orderBy?: JobCurriculumPdfOutboxOrderByWithRelationInput | JobCurriculumPdfOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCurriculumPdfOutboxes.
     */
    cursor?: JobCurriculumPdfOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCurriculumPdfOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCurriculumPdfOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCurriculumPdfOutboxes.
     */
    distinct?: JobCurriculumPdfOutboxScalarFieldEnum | JobCurriculumPdfOutboxScalarFieldEnum[]
  }

  /**
   * JobCurriculumPdfOutbox create
   */
  export type JobCurriculumPdfOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCurriculumPdfOutbox.
     */
    data: XOR<JobCurriculumPdfOutboxCreateInput, JobCurriculumPdfOutboxUncheckedCreateInput>
  }

  /**
   * JobCurriculumPdfOutbox createMany
   */
  export type JobCurriculumPdfOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCurriculumPdfOutboxes.
     */
    data: JobCurriculumPdfOutboxCreateManyInput | JobCurriculumPdfOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCurriculumPdfOutbox createManyAndReturn
   */
  export type JobCurriculumPdfOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many JobCurriculumPdfOutboxes.
     */
    data: JobCurriculumPdfOutboxCreateManyInput | JobCurriculumPdfOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumPdfOutbox update
   */
  export type JobCurriculumPdfOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCurriculumPdfOutbox.
     */
    data: XOR<JobCurriculumPdfOutboxUpdateInput, JobCurriculumPdfOutboxUncheckedUpdateInput>
    /**
     * Choose, which JobCurriculumPdfOutbox to update.
     */
    where: JobCurriculumPdfOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumPdfOutbox updateMany
   */
  export type JobCurriculumPdfOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCurriculumPdfOutboxes.
     */
    data: XOR<JobCurriculumPdfOutboxUpdateManyMutationInput, JobCurriculumPdfOutboxUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumPdfOutboxes to update
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * Limit how many JobCurriculumPdfOutboxes to update.
     */
    limit?: number
  }

  /**
   * JobCurriculumPdfOutbox updateManyAndReturn
   */
  export type JobCurriculumPdfOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * The data used to update JobCurriculumPdfOutboxes.
     */
    data: XOR<JobCurriculumPdfOutboxUpdateManyMutationInput, JobCurriculumPdfOutboxUncheckedUpdateManyInput>
    /**
     * Filter which JobCurriculumPdfOutboxes to update
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * Limit how many JobCurriculumPdfOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobCurriculumPdfOutbox upsert
   */
  export type JobCurriculumPdfOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCurriculumPdfOutbox to update in case it exists.
     */
    where: JobCurriculumPdfOutboxWhereUniqueInput
    /**
     * In case the JobCurriculumPdfOutbox found by the `where` argument doesn't exist, create a new JobCurriculumPdfOutbox with this data.
     */
    create: XOR<JobCurriculumPdfOutboxCreateInput, JobCurriculumPdfOutboxUncheckedCreateInput>
    /**
     * In case the JobCurriculumPdfOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCurriculumPdfOutboxUpdateInput, JobCurriculumPdfOutboxUncheckedUpdateInput>
  }

  /**
   * JobCurriculumPdfOutbox delete
   */
  export type JobCurriculumPdfOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    /**
     * Filter which JobCurriculumPdfOutbox to delete.
     */
    where: JobCurriculumPdfOutboxWhereUniqueInput
  }

  /**
   * JobCurriculumPdfOutbox deleteMany
   */
  export type JobCurriculumPdfOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCurriculumPdfOutboxes to delete
     */
    where?: JobCurriculumPdfOutboxWhereInput
    /**
     * Limit how many JobCurriculumPdfOutboxes to delete.
     */
    limit?: number
  }

  /**
   * JobCurriculumPdfOutbox without action
   */
  export type JobCurriculumPdfOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
  }


  /**
   * Model JobEvaluation
   */

  export type AggregateJobEvaluation = {
    _count: JobEvaluationCountAggregateOutputType | null
    _avg: JobEvaluationAvgAggregateOutputType | null
    _sum: JobEvaluationSumAggregateOutputType | null
    _min: JobEvaluationMinAggregateOutputType | null
    _max: JobEvaluationMaxAggregateOutputType | null
  }

  export type JobEvaluationAvgAggregateOutputType = {
    desireMatchScore: number | null
    competenceScore: number | null
    overallScore: number | null
  }

  export type JobEvaluationSumAggregateOutputType = {
    desireMatchScore: number | null
    competenceScore: number | null
    overallScore: number | null
  }

  export type JobEvaluationMinAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.EvaluationStatus | null
    evaluatorModel: $Enums.EvaluatorModel | null
    summary: string | null
    desireMatchScore: number | null
    competenceScore: number | null
    overallScore: number | null
    priority: $Enums.EvaluationPriority | null
    desireMatchReasoning: string | null
    competenceMatch: string | null
    detailedReasoning: string | null
    pros: string | null
    cons: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobEvaluationMaxAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.EvaluationStatus | null
    evaluatorModel: $Enums.EvaluatorModel | null
    summary: string | null
    desireMatchScore: number | null
    competenceScore: number | null
    overallScore: number | null
    priority: $Enums.EvaluationPriority | null
    desireMatchReasoning: string | null
    competenceMatch: string | null
    detailedReasoning: string | null
    pros: string | null
    cons: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobEvaluationCountAggregateOutputType = {
    id: number
    jobOfferId: number
    status: number
    evaluatorModel: number
    summary: number
    desireMatchScore: number
    competenceScore: number
    overallScore: number
    priority: number
    desireMatchReasoning: number
    competenceMatch: number
    detailedReasoning: number
    pros: number
    cons: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobEvaluationAvgAggregateInputType = {
    desireMatchScore?: true
    competenceScore?: true
    overallScore?: true
  }

  export type JobEvaluationSumAggregateInputType = {
    desireMatchScore?: true
    competenceScore?: true
    overallScore?: true
  }

  export type JobEvaluationMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    evaluatorModel?: true
    summary?: true
    desireMatchScore?: true
    competenceScore?: true
    overallScore?: true
    priority?: true
    desireMatchReasoning?: true
    competenceMatch?: true
    detailedReasoning?: true
    pros?: true
    cons?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobEvaluationMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    evaluatorModel?: true
    summary?: true
    desireMatchScore?: true
    competenceScore?: true
    overallScore?: true
    priority?: true
    desireMatchReasoning?: true
    competenceMatch?: true
    detailedReasoning?: true
    pros?: true
    cons?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobEvaluationCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    evaluatorModel?: true
    summary?: true
    desireMatchScore?: true
    competenceScore?: true
    overallScore?: true
    priority?: true
    desireMatchReasoning?: true
    competenceMatch?: true
    detailedReasoning?: true
    pros?: true
    cons?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobEvaluation to aggregate.
     */
    where?: JobEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluations to fetch.
     */
    orderBy?: JobEvaluationOrderByWithRelationInput | JobEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobEvaluations
    **/
    _count?: true | JobEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobEvaluationMaxAggregateInputType
  }

  export type GetJobEvaluationAggregateType<T extends JobEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobEvaluation[P]>
      : GetScalarType<T[P], AggregateJobEvaluation[P]>
  }




  export type JobEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobEvaluationWhereInput
    orderBy?: JobEvaluationOrderByWithAggregationInput | JobEvaluationOrderByWithAggregationInput[]
    by: JobEvaluationScalarFieldEnum[] | JobEvaluationScalarFieldEnum
    having?: JobEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobEvaluationCountAggregateInputType | true
    _avg?: JobEvaluationAvgAggregateInputType
    _sum?: JobEvaluationSumAggregateInputType
    _min?: JobEvaluationMinAggregateInputType
    _max?: JobEvaluationMaxAggregateInputType
  }

  export type JobEvaluationGroupByOutputType = {
    id: string
    jobOfferId: string
    status: $Enums.EvaluationStatus
    evaluatorModel: $Enums.EvaluatorModel
    summary: string | null
    desireMatchScore: number
    competenceScore: number
    overallScore: number
    priority: $Enums.EvaluationPriority
    desireMatchReasoning: string | null
    competenceMatch: string
    detailedReasoning: string
    pros: string | null
    cons: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobEvaluationCountAggregateOutputType | null
    _avg: JobEvaluationAvgAggregateOutputType | null
    _sum: JobEvaluationSumAggregateOutputType | null
    _min: JobEvaluationMinAggregateOutputType | null
    _max: JobEvaluationMaxAggregateOutputType | null
  }

  type GetJobEvaluationGroupByPayload<T extends JobEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], JobEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type JobEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    evaluatorModel?: boolean
    summary?: boolean
    desireMatchScore?: boolean
    competenceScore?: boolean
    overallScore?: boolean
    priority?: boolean
    desireMatchReasoning?: boolean
    competenceMatch?: boolean
    detailedReasoning?: boolean
    pros?: boolean
    cons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobEvaluation"]>

  export type JobEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    evaluatorModel?: boolean
    summary?: boolean
    desireMatchScore?: boolean
    competenceScore?: boolean
    overallScore?: boolean
    priority?: boolean
    desireMatchReasoning?: boolean
    competenceMatch?: boolean
    detailedReasoning?: boolean
    pros?: boolean
    cons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobEvaluation"]>

  export type JobEvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    evaluatorModel?: boolean
    summary?: boolean
    desireMatchScore?: boolean
    competenceScore?: boolean
    overallScore?: boolean
    priority?: boolean
    desireMatchReasoning?: boolean
    competenceMatch?: boolean
    detailedReasoning?: boolean
    pros?: boolean
    cons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobEvaluation"]>

  export type JobEvaluationSelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    evaluatorModel?: boolean
    summary?: boolean
    desireMatchScore?: boolean
    competenceScore?: boolean
    overallScore?: boolean
    priority?: boolean
    desireMatchReasoning?: boolean
    competenceMatch?: boolean
    detailedReasoning?: boolean
    pros?: boolean
    cons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobEvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "status" | "evaluatorModel" | "summary" | "desireMatchScore" | "competenceScore" | "overallScore" | "priority" | "desireMatchReasoning" | "competenceMatch" | "detailedReasoning" | "pros" | "cons" | "createdAt" | "updatedAt", ExtArgs["result"]["jobEvaluation"]>
  export type JobEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobEvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }

  export type $JobEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobEvaluation"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOfferId: string
      status: $Enums.EvaluationStatus
      evaluatorModel: $Enums.EvaluatorModel
      summary: string | null
      desireMatchScore: number
      competenceScore: number
      overallScore: number
      priority: $Enums.EvaluationPriority
      desireMatchReasoning: string | null
      competenceMatch: string
      detailedReasoning: string
      pros: string | null
      cons: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobEvaluation"]>
    composites: {}
  }

  type JobEvaluationGetPayload<S extends boolean | null | undefined | JobEvaluationDefaultArgs> = $Result.GetResult<Prisma.$JobEvaluationPayload, S>

  type JobEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobEvaluationCountAggregateInputType | true
    }

  export interface JobEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobEvaluation'], meta: { name: 'JobEvaluation' } }
    /**
     * Find zero or one JobEvaluation that matches the filter.
     * @param {JobEvaluationFindUniqueArgs} args - Arguments to find a JobEvaluation
     * @example
     * // Get one JobEvaluation
     * const jobEvaluation = await prisma.jobEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobEvaluationFindUniqueArgs>(args: SelectSubset<T, JobEvaluationFindUniqueArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobEvaluationFindUniqueOrThrowArgs} args - Arguments to find a JobEvaluation
     * @example
     * // Get one JobEvaluation
     * const jobEvaluation = await prisma.jobEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationFindFirstArgs} args - Arguments to find a JobEvaluation
     * @example
     * // Get one JobEvaluation
     * const jobEvaluation = await prisma.jobEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobEvaluationFindFirstArgs>(args?: SelectSubset<T, JobEvaluationFindFirstArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationFindFirstOrThrowArgs} args - Arguments to find a JobEvaluation
     * @example
     * // Get one JobEvaluation
     * const jobEvaluation = await prisma.jobEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobEvaluations
     * const jobEvaluations = await prisma.jobEvaluation.findMany()
     * 
     * // Get first 10 JobEvaluations
     * const jobEvaluations = await prisma.jobEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobEvaluationWithIdOnly = await prisma.jobEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobEvaluationFindManyArgs>(args?: SelectSubset<T, JobEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobEvaluation.
     * @param {JobEvaluationCreateArgs} args - Arguments to create a JobEvaluation.
     * @example
     * // Create one JobEvaluation
     * const JobEvaluation = await prisma.jobEvaluation.create({
     *   data: {
     *     // ... data to create a JobEvaluation
     *   }
     * })
     * 
     */
    create<T extends JobEvaluationCreateArgs>(args: SelectSubset<T, JobEvaluationCreateArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobEvaluations.
     * @param {JobEvaluationCreateManyArgs} args - Arguments to create many JobEvaluations.
     * @example
     * // Create many JobEvaluations
     * const jobEvaluation = await prisma.jobEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobEvaluationCreateManyArgs>(args?: SelectSubset<T, JobEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobEvaluations and returns the data saved in the database.
     * @param {JobEvaluationCreateManyAndReturnArgs} args - Arguments to create many JobEvaluations.
     * @example
     * // Create many JobEvaluations
     * const jobEvaluation = await prisma.jobEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobEvaluations and only return the `id`
     * const jobEvaluationWithIdOnly = await prisma.jobEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobEvaluation.
     * @param {JobEvaluationDeleteArgs} args - Arguments to delete one JobEvaluation.
     * @example
     * // Delete one JobEvaluation
     * const JobEvaluation = await prisma.jobEvaluation.delete({
     *   where: {
     *     // ... filter to delete one JobEvaluation
     *   }
     * })
     * 
     */
    delete<T extends JobEvaluationDeleteArgs>(args: SelectSubset<T, JobEvaluationDeleteArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobEvaluation.
     * @param {JobEvaluationUpdateArgs} args - Arguments to update one JobEvaluation.
     * @example
     * // Update one JobEvaluation
     * const jobEvaluation = await prisma.jobEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobEvaluationUpdateArgs>(args: SelectSubset<T, JobEvaluationUpdateArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobEvaluations.
     * @param {JobEvaluationDeleteManyArgs} args - Arguments to filter JobEvaluations to delete.
     * @example
     * // Delete a few JobEvaluations
     * const { count } = await prisma.jobEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobEvaluationDeleteManyArgs>(args?: SelectSubset<T, JobEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobEvaluations
     * const jobEvaluation = await prisma.jobEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobEvaluationUpdateManyArgs>(args: SelectSubset<T, JobEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobEvaluations and returns the data updated in the database.
     * @param {JobEvaluationUpdateManyAndReturnArgs} args - Arguments to update many JobEvaluations.
     * @example
     * // Update many JobEvaluations
     * const jobEvaluation = await prisma.jobEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobEvaluations and only return the `id`
     * const jobEvaluationWithIdOnly = await prisma.jobEvaluation.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobEvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobEvaluation.
     * @param {JobEvaluationUpsertArgs} args - Arguments to update or create a JobEvaluation.
     * @example
     * // Update or create a JobEvaluation
     * const jobEvaluation = await prisma.jobEvaluation.upsert({
     *   create: {
     *     // ... data to create a JobEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends JobEvaluationUpsertArgs>(args: SelectSubset<T, JobEvaluationUpsertArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationCountArgs} args - Arguments to filter JobEvaluations to count.
     * @example
     * // Count the number of JobEvaluations
     * const count = await prisma.jobEvaluation.count({
     *   where: {
     *     // ... the filter for the JobEvaluations we want to count
     *   }
     * })
    **/
    count<T extends JobEvaluationCountArgs>(
      args?: Subset<T, JobEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobEvaluationAggregateArgs>(args: Subset<T, JobEvaluationAggregateArgs>): Prisma.PrismaPromise<GetJobEvaluationAggregateType<T>>

    /**
     * Group by JobEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationGroupByArgs} args - Group by arguments.
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
      T extends JobEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: JobEvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobEvaluation model
   */
  readonly fields: JobEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobEvaluation model
   */
  interface JobEvaluationFieldRefs {
    readonly id: FieldRef<"JobEvaluation", 'String'>
    readonly jobOfferId: FieldRef<"JobEvaluation", 'String'>
    readonly status: FieldRef<"JobEvaluation", 'EvaluationStatus'>
    readonly evaluatorModel: FieldRef<"JobEvaluation", 'EvaluatorModel'>
    readonly summary: FieldRef<"JobEvaluation", 'String'>
    readonly desireMatchScore: FieldRef<"JobEvaluation", 'Float'>
    readonly competenceScore: FieldRef<"JobEvaluation", 'Float'>
    readonly overallScore: FieldRef<"JobEvaluation", 'Float'>
    readonly priority: FieldRef<"JobEvaluation", 'EvaluationPriority'>
    readonly desireMatchReasoning: FieldRef<"JobEvaluation", 'String'>
    readonly competenceMatch: FieldRef<"JobEvaluation", 'String'>
    readonly detailedReasoning: FieldRef<"JobEvaluation", 'String'>
    readonly pros: FieldRef<"JobEvaluation", 'String'>
    readonly cons: FieldRef<"JobEvaluation", 'String'>
    readonly createdAt: FieldRef<"JobEvaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"JobEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobEvaluation findUnique
   */
  export type JobEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluation to fetch.
     */
    where: JobEvaluationWhereUniqueInput
  }

  /**
   * JobEvaluation findUniqueOrThrow
   */
  export type JobEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluation to fetch.
     */
    where: JobEvaluationWhereUniqueInput
  }

  /**
   * JobEvaluation findFirst
   */
  export type JobEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluation to fetch.
     */
    where?: JobEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluations to fetch.
     */
    orderBy?: JobEvaluationOrderByWithRelationInput | JobEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobEvaluations.
     */
    cursor?: JobEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobEvaluations.
     */
    distinct?: JobEvaluationScalarFieldEnum | JobEvaluationScalarFieldEnum[]
  }

  /**
   * JobEvaluation findFirstOrThrow
   */
  export type JobEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluation to fetch.
     */
    where?: JobEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluations to fetch.
     */
    orderBy?: JobEvaluationOrderByWithRelationInput | JobEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobEvaluations.
     */
    cursor?: JobEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobEvaluations.
     */
    distinct?: JobEvaluationScalarFieldEnum | JobEvaluationScalarFieldEnum[]
  }

  /**
   * JobEvaluation findMany
   */
  export type JobEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluations to fetch.
     */
    where?: JobEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluations to fetch.
     */
    orderBy?: JobEvaluationOrderByWithRelationInput | JobEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobEvaluations.
     */
    cursor?: JobEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobEvaluations.
     */
    distinct?: JobEvaluationScalarFieldEnum | JobEvaluationScalarFieldEnum[]
  }

  /**
   * JobEvaluation create
   */
  export type JobEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobEvaluation.
     */
    data: XOR<JobEvaluationCreateInput, JobEvaluationUncheckedCreateInput>
  }

  /**
   * JobEvaluation createMany
   */
  export type JobEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobEvaluations.
     */
    data: JobEvaluationCreateManyInput | JobEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobEvaluation createManyAndReturn
   */
  export type JobEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many JobEvaluations.
     */
    data: JobEvaluationCreateManyInput | JobEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobEvaluation update
   */
  export type JobEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobEvaluation.
     */
    data: XOR<JobEvaluationUpdateInput, JobEvaluationUncheckedUpdateInput>
    /**
     * Choose, which JobEvaluation to update.
     */
    where: JobEvaluationWhereUniqueInput
  }

  /**
   * JobEvaluation updateMany
   */
  export type JobEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobEvaluations.
     */
    data: XOR<JobEvaluationUpdateManyMutationInput, JobEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which JobEvaluations to update
     */
    where?: JobEvaluationWhereInput
    /**
     * Limit how many JobEvaluations to update.
     */
    limit?: number
  }

  /**
   * JobEvaluation updateManyAndReturn
   */
  export type JobEvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * The data used to update JobEvaluations.
     */
    data: XOR<JobEvaluationUpdateManyMutationInput, JobEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which JobEvaluations to update
     */
    where?: JobEvaluationWhereInput
    /**
     * Limit how many JobEvaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobEvaluation upsert
   */
  export type JobEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobEvaluation to update in case it exists.
     */
    where: JobEvaluationWhereUniqueInput
    /**
     * In case the JobEvaluation found by the `where` argument doesn't exist, create a new JobEvaluation with this data.
     */
    create: XOR<JobEvaluationCreateInput, JobEvaluationUncheckedCreateInput>
    /**
     * In case the JobEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobEvaluationUpdateInput, JobEvaluationUncheckedUpdateInput>
  }

  /**
   * JobEvaluation delete
   */
  export type JobEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    /**
     * Filter which JobEvaluation to delete.
     */
    where: JobEvaluationWhereUniqueInput
  }

  /**
   * JobEvaluation deleteMany
   */
  export type JobEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobEvaluations to delete
     */
    where?: JobEvaluationWhereInput
    /**
     * Limit how many JobEvaluations to delete.
     */
    limit?: number
  }

  /**
   * JobEvaluation without action
   */
  export type JobEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
  }


  /**
   * Model JobEvaluationOutbox
   */

  export type AggregateJobEvaluationOutbox = {
    _count: JobEvaluationOutboxCountAggregateOutputType | null
    _avg: JobEvaluationOutboxAvgAggregateOutputType | null
    _sum: JobEvaluationOutboxSumAggregateOutputType | null
    _min: JobEvaluationOutboxMinAggregateOutputType | null
    _max: JobEvaluationOutboxMaxAggregateOutputType | null
  }

  export type JobEvaluationOutboxAvgAggregateOutputType = {
    attempts: number | null
  }

  export type JobEvaluationOutboxSumAggregateOutputType = {
    attempts: number | null
  }

  export type JobEvaluationOutboxMinAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.OutboxStatus | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobEvaluationOutboxMaxAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    status: $Enums.OutboxStatus | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobEvaluationOutboxCountAggregateOutputType = {
    id: number
    jobOfferId: number
    status: number
    attempts: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobEvaluationOutboxAvgAggregateInputType = {
    attempts?: true
  }

  export type JobEvaluationOutboxSumAggregateInputType = {
    attempts?: true
  }

  export type JobEvaluationOutboxMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobEvaluationOutboxMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobEvaluationOutboxCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobEvaluationOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobEvaluationOutbox to aggregate.
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluationOutboxes to fetch.
     */
    orderBy?: JobEvaluationOutboxOrderByWithRelationInput | JobEvaluationOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobEvaluationOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluationOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluationOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobEvaluationOutboxes
    **/
    _count?: true | JobEvaluationOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobEvaluationOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobEvaluationOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobEvaluationOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobEvaluationOutboxMaxAggregateInputType
  }

  export type GetJobEvaluationOutboxAggregateType<T extends JobEvaluationOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateJobEvaluationOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobEvaluationOutbox[P]>
      : GetScalarType<T[P], AggregateJobEvaluationOutbox[P]>
  }




  export type JobEvaluationOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobEvaluationOutboxWhereInput
    orderBy?: JobEvaluationOutboxOrderByWithAggregationInput | JobEvaluationOutboxOrderByWithAggregationInput[]
    by: JobEvaluationOutboxScalarFieldEnum[] | JobEvaluationOutboxScalarFieldEnum
    having?: JobEvaluationOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobEvaluationOutboxCountAggregateInputType | true
    _avg?: JobEvaluationOutboxAvgAggregateInputType
    _sum?: JobEvaluationOutboxSumAggregateInputType
    _min?: JobEvaluationOutboxMinAggregateInputType
    _max?: JobEvaluationOutboxMaxAggregateInputType
  }

  export type JobEvaluationOutboxGroupByOutputType = {
    id: string
    jobOfferId: string
    status: $Enums.OutboxStatus
    attempts: number
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobEvaluationOutboxCountAggregateOutputType | null
    _avg: JobEvaluationOutboxAvgAggregateOutputType | null
    _sum: JobEvaluationOutboxSumAggregateOutputType | null
    _min: JobEvaluationOutboxMinAggregateOutputType | null
    _max: JobEvaluationOutboxMaxAggregateOutputType | null
  }

  type GetJobEvaluationOutboxGroupByPayload<T extends JobEvaluationOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobEvaluationOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobEvaluationOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobEvaluationOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], JobEvaluationOutboxGroupByOutputType[P]>
        }
      >
    >


  export type JobEvaluationOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobEvaluationOutbox"]>

  export type JobEvaluationOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobEvaluationOutbox"]>

  export type JobEvaluationOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobEvaluationOutbox"]>

  export type JobEvaluationOutboxSelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobEvaluationOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "status" | "attempts" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["jobEvaluationOutbox"]>
  export type JobEvaluationOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobEvaluationOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobEvaluationOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }

  export type $JobEvaluationOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobEvaluationOutbox"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOfferId: string
      status: $Enums.OutboxStatus
      attempts: number
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobEvaluationOutbox"]>
    composites: {}
  }

  type JobEvaluationOutboxGetPayload<S extends boolean | null | undefined | JobEvaluationOutboxDefaultArgs> = $Result.GetResult<Prisma.$JobEvaluationOutboxPayload, S>

  type JobEvaluationOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobEvaluationOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobEvaluationOutboxCountAggregateInputType | true
    }

  export interface JobEvaluationOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobEvaluationOutbox'], meta: { name: 'JobEvaluationOutbox' } }
    /**
     * Find zero or one JobEvaluationOutbox that matches the filter.
     * @param {JobEvaluationOutboxFindUniqueArgs} args - Arguments to find a JobEvaluationOutbox
     * @example
     * // Get one JobEvaluationOutbox
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobEvaluationOutboxFindUniqueArgs>(args: SelectSubset<T, JobEvaluationOutboxFindUniqueArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobEvaluationOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobEvaluationOutboxFindUniqueOrThrowArgs} args - Arguments to find a JobEvaluationOutbox
     * @example
     * // Get one JobEvaluationOutbox
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobEvaluationOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, JobEvaluationOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobEvaluationOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxFindFirstArgs} args - Arguments to find a JobEvaluationOutbox
     * @example
     * // Get one JobEvaluationOutbox
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobEvaluationOutboxFindFirstArgs>(args?: SelectSubset<T, JobEvaluationOutboxFindFirstArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobEvaluationOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxFindFirstOrThrowArgs} args - Arguments to find a JobEvaluationOutbox
     * @example
     * // Get one JobEvaluationOutbox
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobEvaluationOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, JobEvaluationOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobEvaluationOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobEvaluationOutboxes
     * const jobEvaluationOutboxes = await prisma.jobEvaluationOutbox.findMany()
     * 
     * // Get first 10 JobEvaluationOutboxes
     * const jobEvaluationOutboxes = await prisma.jobEvaluationOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobEvaluationOutboxWithIdOnly = await prisma.jobEvaluationOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobEvaluationOutboxFindManyArgs>(args?: SelectSubset<T, JobEvaluationOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobEvaluationOutbox.
     * @param {JobEvaluationOutboxCreateArgs} args - Arguments to create a JobEvaluationOutbox.
     * @example
     * // Create one JobEvaluationOutbox
     * const JobEvaluationOutbox = await prisma.jobEvaluationOutbox.create({
     *   data: {
     *     // ... data to create a JobEvaluationOutbox
     *   }
     * })
     * 
     */
    create<T extends JobEvaluationOutboxCreateArgs>(args: SelectSubset<T, JobEvaluationOutboxCreateArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobEvaluationOutboxes.
     * @param {JobEvaluationOutboxCreateManyArgs} args - Arguments to create many JobEvaluationOutboxes.
     * @example
     * // Create many JobEvaluationOutboxes
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobEvaluationOutboxCreateManyArgs>(args?: SelectSubset<T, JobEvaluationOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobEvaluationOutboxes and returns the data saved in the database.
     * @param {JobEvaluationOutboxCreateManyAndReturnArgs} args - Arguments to create many JobEvaluationOutboxes.
     * @example
     * // Create many JobEvaluationOutboxes
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobEvaluationOutboxes and only return the `id`
     * const jobEvaluationOutboxWithIdOnly = await prisma.jobEvaluationOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobEvaluationOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, JobEvaluationOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobEvaluationOutbox.
     * @param {JobEvaluationOutboxDeleteArgs} args - Arguments to delete one JobEvaluationOutbox.
     * @example
     * // Delete one JobEvaluationOutbox
     * const JobEvaluationOutbox = await prisma.jobEvaluationOutbox.delete({
     *   where: {
     *     // ... filter to delete one JobEvaluationOutbox
     *   }
     * })
     * 
     */
    delete<T extends JobEvaluationOutboxDeleteArgs>(args: SelectSubset<T, JobEvaluationOutboxDeleteArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobEvaluationOutbox.
     * @param {JobEvaluationOutboxUpdateArgs} args - Arguments to update one JobEvaluationOutbox.
     * @example
     * // Update one JobEvaluationOutbox
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobEvaluationOutboxUpdateArgs>(args: SelectSubset<T, JobEvaluationOutboxUpdateArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobEvaluationOutboxes.
     * @param {JobEvaluationOutboxDeleteManyArgs} args - Arguments to filter JobEvaluationOutboxes to delete.
     * @example
     * // Delete a few JobEvaluationOutboxes
     * const { count } = await prisma.jobEvaluationOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobEvaluationOutboxDeleteManyArgs>(args?: SelectSubset<T, JobEvaluationOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobEvaluationOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobEvaluationOutboxes
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobEvaluationOutboxUpdateManyArgs>(args: SelectSubset<T, JobEvaluationOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobEvaluationOutboxes and returns the data updated in the database.
     * @param {JobEvaluationOutboxUpdateManyAndReturnArgs} args - Arguments to update many JobEvaluationOutboxes.
     * @example
     * // Update many JobEvaluationOutboxes
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobEvaluationOutboxes and only return the `id`
     * const jobEvaluationOutboxWithIdOnly = await prisma.jobEvaluationOutbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobEvaluationOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, JobEvaluationOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobEvaluationOutbox.
     * @param {JobEvaluationOutboxUpsertArgs} args - Arguments to update or create a JobEvaluationOutbox.
     * @example
     * // Update or create a JobEvaluationOutbox
     * const jobEvaluationOutbox = await prisma.jobEvaluationOutbox.upsert({
     *   create: {
     *     // ... data to create a JobEvaluationOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobEvaluationOutbox we want to update
     *   }
     * })
     */
    upsert<T extends JobEvaluationOutboxUpsertArgs>(args: SelectSubset<T, JobEvaluationOutboxUpsertArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobEvaluationOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxCountArgs} args - Arguments to filter JobEvaluationOutboxes to count.
     * @example
     * // Count the number of JobEvaluationOutboxes
     * const count = await prisma.jobEvaluationOutbox.count({
     *   where: {
     *     // ... the filter for the JobEvaluationOutboxes we want to count
     *   }
     * })
    **/
    count<T extends JobEvaluationOutboxCountArgs>(
      args?: Subset<T, JobEvaluationOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobEvaluationOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobEvaluationOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobEvaluationOutboxAggregateArgs>(args: Subset<T, JobEvaluationOutboxAggregateArgs>): Prisma.PrismaPromise<GetJobEvaluationOutboxAggregateType<T>>

    /**
     * Group by JobEvaluationOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobEvaluationOutboxGroupByArgs} args - Group by arguments.
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
      T extends JobEvaluationOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobEvaluationOutboxGroupByArgs['orderBy'] }
        : { orderBy?: JobEvaluationOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobEvaluationOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobEvaluationOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobEvaluationOutbox model
   */
  readonly fields: JobEvaluationOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobEvaluationOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobEvaluationOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobEvaluationOutbox model
   */
  interface JobEvaluationOutboxFieldRefs {
    readonly id: FieldRef<"JobEvaluationOutbox", 'String'>
    readonly jobOfferId: FieldRef<"JobEvaluationOutbox", 'String'>
    readonly status: FieldRef<"JobEvaluationOutbox", 'OutboxStatus'>
    readonly attempts: FieldRef<"JobEvaluationOutbox", 'Int'>
    readonly lastError: FieldRef<"JobEvaluationOutbox", 'String'>
    readonly createdAt: FieldRef<"JobEvaluationOutbox", 'DateTime'>
    readonly updatedAt: FieldRef<"JobEvaluationOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobEvaluationOutbox findUnique
   */
  export type JobEvaluationOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluationOutbox to fetch.
     */
    where: JobEvaluationOutboxWhereUniqueInput
  }

  /**
   * JobEvaluationOutbox findUniqueOrThrow
   */
  export type JobEvaluationOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluationOutbox to fetch.
     */
    where: JobEvaluationOutboxWhereUniqueInput
  }

  /**
   * JobEvaluationOutbox findFirst
   */
  export type JobEvaluationOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluationOutbox to fetch.
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluationOutboxes to fetch.
     */
    orderBy?: JobEvaluationOutboxOrderByWithRelationInput | JobEvaluationOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobEvaluationOutboxes.
     */
    cursor?: JobEvaluationOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluationOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluationOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobEvaluationOutboxes.
     */
    distinct?: JobEvaluationOutboxScalarFieldEnum | JobEvaluationOutboxScalarFieldEnum[]
  }

  /**
   * JobEvaluationOutbox findFirstOrThrow
   */
  export type JobEvaluationOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluationOutbox to fetch.
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluationOutboxes to fetch.
     */
    orderBy?: JobEvaluationOutboxOrderByWithRelationInput | JobEvaluationOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobEvaluationOutboxes.
     */
    cursor?: JobEvaluationOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluationOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluationOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobEvaluationOutboxes.
     */
    distinct?: JobEvaluationOutboxScalarFieldEnum | JobEvaluationOutboxScalarFieldEnum[]
  }

  /**
   * JobEvaluationOutbox findMany
   */
  export type JobEvaluationOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * Filter, which JobEvaluationOutboxes to fetch.
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobEvaluationOutboxes to fetch.
     */
    orderBy?: JobEvaluationOutboxOrderByWithRelationInput | JobEvaluationOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobEvaluationOutboxes.
     */
    cursor?: JobEvaluationOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobEvaluationOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobEvaluationOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobEvaluationOutboxes.
     */
    distinct?: JobEvaluationOutboxScalarFieldEnum | JobEvaluationOutboxScalarFieldEnum[]
  }

  /**
   * JobEvaluationOutbox create
   */
  export type JobEvaluationOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a JobEvaluationOutbox.
     */
    data: XOR<JobEvaluationOutboxCreateInput, JobEvaluationOutboxUncheckedCreateInput>
  }

  /**
   * JobEvaluationOutbox createMany
   */
  export type JobEvaluationOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobEvaluationOutboxes.
     */
    data: JobEvaluationOutboxCreateManyInput | JobEvaluationOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobEvaluationOutbox createManyAndReturn
   */
  export type JobEvaluationOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many JobEvaluationOutboxes.
     */
    data: JobEvaluationOutboxCreateManyInput | JobEvaluationOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobEvaluationOutbox update
   */
  export type JobEvaluationOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a JobEvaluationOutbox.
     */
    data: XOR<JobEvaluationOutboxUpdateInput, JobEvaluationOutboxUncheckedUpdateInput>
    /**
     * Choose, which JobEvaluationOutbox to update.
     */
    where: JobEvaluationOutboxWhereUniqueInput
  }

  /**
   * JobEvaluationOutbox updateMany
   */
  export type JobEvaluationOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobEvaluationOutboxes.
     */
    data: XOR<JobEvaluationOutboxUpdateManyMutationInput, JobEvaluationOutboxUncheckedUpdateManyInput>
    /**
     * Filter which JobEvaluationOutboxes to update
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * Limit how many JobEvaluationOutboxes to update.
     */
    limit?: number
  }

  /**
   * JobEvaluationOutbox updateManyAndReturn
   */
  export type JobEvaluationOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * The data used to update JobEvaluationOutboxes.
     */
    data: XOR<JobEvaluationOutboxUpdateManyMutationInput, JobEvaluationOutboxUncheckedUpdateManyInput>
    /**
     * Filter which JobEvaluationOutboxes to update
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * Limit how many JobEvaluationOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobEvaluationOutbox upsert
   */
  export type JobEvaluationOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the JobEvaluationOutbox to update in case it exists.
     */
    where: JobEvaluationOutboxWhereUniqueInput
    /**
     * In case the JobEvaluationOutbox found by the `where` argument doesn't exist, create a new JobEvaluationOutbox with this data.
     */
    create: XOR<JobEvaluationOutboxCreateInput, JobEvaluationOutboxUncheckedCreateInput>
    /**
     * In case the JobEvaluationOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobEvaluationOutboxUpdateInput, JobEvaluationOutboxUncheckedUpdateInput>
  }

  /**
   * JobEvaluationOutbox delete
   */
  export type JobEvaluationOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    /**
     * Filter which JobEvaluationOutbox to delete.
     */
    where: JobEvaluationOutboxWhereUniqueInput
  }

  /**
   * JobEvaluationOutbox deleteMany
   */
  export type JobEvaluationOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobEvaluationOutboxes to delete
     */
    where?: JobEvaluationOutboxWhereInput
    /**
     * Limit how many JobEvaluationOutboxes to delete.
     */
    limit?: number
  }

  /**
   * JobEvaluationOutbox without action
   */
  export type JobEvaluationOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
  }


  /**
   * Model JobOffer
   */

  export type AggregateJobOffer = {
    _count: JobOfferCountAggregateOutputType | null
    _avg: JobOfferAvgAggregateOutputType | null
    _sum: JobOfferSumAggregateOutputType | null
    _min: JobOfferMinAggregateOutputType | null
    _max: JobOfferMaxAggregateOutputType | null
  }

  export type JobOfferAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobOfferSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobOfferMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    source: $Enums.JobSource | null
    url: string | null
    title: string | null
    location: string | null
    remoteType: $Enums.RemoteType | null
    rawDescription: string | null
    descriptionMarkdown: string | null
    datePosted: Date | null
    companyId: string | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    contractType: string | null
    roleCategory: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    skills: string | null
    status: $Enums.ApplicationStatus | null
    evaluationProcessStatus: $Enums.JobEvaluationProcessStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOfferMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    source: $Enums.JobSource | null
    url: string | null
    title: string | null
    location: string | null
    remoteType: $Enums.RemoteType | null
    rawDescription: string | null
    descriptionMarkdown: string | null
    datePosted: Date | null
    companyId: string | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    contractType: string | null
    roleCategory: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    skills: string | null
    status: $Enums.ApplicationStatus | null
    evaluationProcessStatus: $Enums.JobEvaluationProcessStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOfferCountAggregateOutputType = {
    id: number
    externalId: number
    source: number
    url: number
    title: number
    location: number
    remoteType: number
    rawDescription: number
    descriptionMarkdown: number
    datePosted: number
    companyId: number
    salaryMin: number
    salaryMax: number
    currency: number
    contractType: number
    roleCategory: number
    experienceLevel: number
    skills: number
    status: number
    evaluationProcessStatus: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobOfferAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobOfferSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobOfferMinAggregateInputType = {
    id?: true
    externalId?: true
    source?: true
    url?: true
    title?: true
    location?: true
    remoteType?: true
    rawDescription?: true
    descriptionMarkdown?: true
    datePosted?: true
    companyId?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    contractType?: true
    roleCategory?: true
    experienceLevel?: true
    skills?: true
    status?: true
    evaluationProcessStatus?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOfferMaxAggregateInputType = {
    id?: true
    externalId?: true
    source?: true
    url?: true
    title?: true
    location?: true
    remoteType?: true
    rawDescription?: true
    descriptionMarkdown?: true
    datePosted?: true
    companyId?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    contractType?: true
    roleCategory?: true
    experienceLevel?: true
    skills?: true
    status?: true
    evaluationProcessStatus?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOfferCountAggregateInputType = {
    id?: true
    externalId?: true
    source?: true
    url?: true
    title?: true
    location?: true
    remoteType?: true
    rawDescription?: true
    descriptionMarkdown?: true
    datePosted?: true
    companyId?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    contractType?: true
    roleCategory?: true
    experienceLevel?: true
    skills?: true
    status?: true
    evaluationProcessStatus?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOffer to aggregate.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOffers
    **/
    _count?: true | JobOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOfferMaxAggregateInputType
  }

  export type GetJobOfferAggregateType<T extends JobOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOffer[P]>
      : GetScalarType<T[P], AggregateJobOffer[P]>
  }




  export type JobOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOfferWhereInput
    orderBy?: JobOfferOrderByWithAggregationInput | JobOfferOrderByWithAggregationInput[]
    by: JobOfferScalarFieldEnum[] | JobOfferScalarFieldEnum
    having?: JobOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOfferCountAggregateInputType | true
    _avg?: JobOfferAvgAggregateInputType
    _sum?: JobOfferSumAggregateInputType
    _min?: JobOfferMinAggregateInputType
    _max?: JobOfferMaxAggregateInputType
  }

  export type JobOfferGroupByOutputType = {
    id: string
    externalId: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location: string | null
    remoteType: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown: string | null
    datePosted: Date | null
    companyId: string
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    contractType: string | null
    roleCategory: string | null
    experienceLevel: $Enums.ExperienceLevel
    skills: string | null
    status: $Enums.ApplicationStatus
    evaluationProcessStatus: $Enums.JobEvaluationProcessStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobOfferCountAggregateOutputType | null
    _avg: JobOfferAvgAggregateOutputType | null
    _sum: JobOfferSumAggregateOutputType | null
    _min: JobOfferMinAggregateOutputType | null
    _max: JobOfferMaxAggregateOutputType | null
  }

  type GetJobOfferGroupByPayload<T extends JobOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
            : GetScalarType<T[P], JobOfferGroupByOutputType[P]>
        }
      >
    >


  export type JobOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    location?: boolean
    remoteType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    companyId?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    roleCategory?: boolean
    experienceLevel?: boolean
    skills?: boolean
    status?: boolean
    evaluationProcessStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    evaluation?: boolean | JobOffer$evaluationArgs<ExtArgs>
    evaluationOutbox?: boolean | JobOffer$evaluationOutboxArgs<ExtArgs>
    curriculum?: boolean | JobOffer$curriculumArgs<ExtArgs>
    curriculumOutbox?: boolean | JobOffer$curriculumOutboxArgs<ExtArgs>
    curriculumPdfOutbox?: boolean | JobOffer$curriculumPdfOutboxArgs<ExtArgs>
    statusHistory?: boolean | JobOffer$statusHistoryArgs<ExtArgs>
    _count?: boolean | JobOfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    location?: boolean
    remoteType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    companyId?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    roleCategory?: boolean
    experienceLevel?: boolean
    skills?: boolean
    status?: boolean
    evaluationProcessStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    location?: boolean
    remoteType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    companyId?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    roleCategory?: boolean
    experienceLevel?: boolean
    skills?: boolean
    status?: boolean
    evaluationProcessStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOffer"]>

  export type JobOfferSelectScalar = {
    id?: boolean
    externalId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    location?: boolean
    remoteType?: boolean
    rawDescription?: boolean
    descriptionMarkdown?: boolean
    datePosted?: boolean
    companyId?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    contractType?: boolean
    roleCategory?: boolean
    experienceLevel?: boolean
    skills?: boolean
    status?: boolean
    evaluationProcessStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "source" | "url" | "title" | "location" | "remoteType" | "rawDescription" | "descriptionMarkdown" | "datePosted" | "companyId" | "salaryMin" | "salaryMax" | "currency" | "contractType" | "roleCategory" | "experienceLevel" | "skills" | "status" | "evaluationProcessStatus" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["jobOffer"]>
  export type JobOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    evaluation?: boolean | JobOffer$evaluationArgs<ExtArgs>
    evaluationOutbox?: boolean | JobOffer$evaluationOutboxArgs<ExtArgs>
    curriculum?: boolean | JobOffer$curriculumArgs<ExtArgs>
    curriculumOutbox?: boolean | JobOffer$curriculumOutboxArgs<ExtArgs>
    curriculumPdfOutbox?: boolean | JobOffer$curriculumPdfOutboxArgs<ExtArgs>
    statusHistory?: boolean | JobOffer$statusHistoryArgs<ExtArgs>
    _count?: boolean | JobOfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type JobOfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $JobOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOffer"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      evaluation: Prisma.$JobEvaluationPayload<ExtArgs> | null
      evaluationOutbox: Prisma.$JobEvaluationOutboxPayload<ExtArgs> | null
      curriculum: Prisma.$JobCurriculumPayload<ExtArgs> | null
      curriculumOutbox: Prisma.$JobCurriculumOutboxPayload<ExtArgs> | null
      curriculumPdfOutbox: Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs> | null
      statusHistory: Prisma.$JobStatusHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      source: $Enums.JobSource
      url: string
      title: string
      location: string | null
      remoteType: $Enums.RemoteType
      rawDescription: string
      descriptionMarkdown: string | null
      datePosted: Date | null
      companyId: string
      salaryMin: number | null
      salaryMax: number | null
      currency: string | null
      contractType: string | null
      roleCategory: string | null
      experienceLevel: $Enums.ExperienceLevel
      skills: string | null
      status: $Enums.ApplicationStatus
      evaluationProcessStatus: $Enums.JobEvaluationProcessStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobOffer"]>
    composites: {}
  }

  type JobOfferGetPayload<S extends boolean | null | undefined | JobOfferDefaultArgs> = $Result.GetResult<Prisma.$JobOfferPayload, S>

  type JobOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOfferCountAggregateInputType | true
    }

  export interface JobOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOffer'], meta: { name: 'JobOffer' } }
    /**
     * Find zero or one JobOffer that matches the filter.
     * @param {JobOfferFindUniqueArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOfferFindUniqueArgs>(args: SelectSubset<T, JobOfferFindUniqueArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOfferFindUniqueOrThrowArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindFirstArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOfferFindFirstArgs>(args?: SelectSubset<T, JobOfferFindFirstArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindFirstOrThrowArgs} args - Arguments to find a JobOffer
     * @example
     * // Get one JobOffer
     * const jobOffer = await prisma.jobOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOffers
     * const jobOffers = await prisma.jobOffer.findMany()
     * 
     * // Get first 10 JobOffers
     * const jobOffers = await prisma.jobOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobOfferFindManyArgs>(args?: SelectSubset<T, JobOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobOffer.
     * @param {JobOfferCreateArgs} args - Arguments to create a JobOffer.
     * @example
     * // Create one JobOffer
     * const JobOffer = await prisma.jobOffer.create({
     *   data: {
     *     // ... data to create a JobOffer
     *   }
     * })
     * 
     */
    create<T extends JobOfferCreateArgs>(args: SelectSubset<T, JobOfferCreateArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobOffers.
     * @param {JobOfferCreateManyArgs} args - Arguments to create many JobOffers.
     * @example
     * // Create many JobOffers
     * const jobOffer = await prisma.jobOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOfferCreateManyArgs>(args?: SelectSubset<T, JobOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobOffers and returns the data saved in the database.
     * @param {JobOfferCreateManyAndReturnArgs} args - Arguments to create many JobOffers.
     * @example
     * // Create many JobOffers
     * const jobOffer = await prisma.jobOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobOffers and only return the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, JobOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobOffer.
     * @param {JobOfferDeleteArgs} args - Arguments to delete one JobOffer.
     * @example
     * // Delete one JobOffer
     * const JobOffer = await prisma.jobOffer.delete({
     *   where: {
     *     // ... filter to delete one JobOffer
     *   }
     * })
     * 
     */
    delete<T extends JobOfferDeleteArgs>(args: SelectSubset<T, JobOfferDeleteArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobOffer.
     * @param {JobOfferUpdateArgs} args - Arguments to update one JobOffer.
     * @example
     * // Update one JobOffer
     * const jobOffer = await prisma.jobOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOfferUpdateArgs>(args: SelectSubset<T, JobOfferUpdateArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobOffers.
     * @param {JobOfferDeleteManyArgs} args - Arguments to filter JobOffers to delete.
     * @example
     * // Delete a few JobOffers
     * const { count } = await prisma.jobOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOfferDeleteManyArgs>(args?: SelectSubset<T, JobOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOffers
     * const jobOffer = await prisma.jobOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOfferUpdateManyArgs>(args: SelectSubset<T, JobOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOffers and returns the data updated in the database.
     * @param {JobOfferUpdateManyAndReturnArgs} args - Arguments to update many JobOffers.
     * @example
     * // Update many JobOffers
     * const jobOffer = await prisma.jobOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobOffers and only return the `id`
     * const jobOfferWithIdOnly = await prisma.jobOffer.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, JobOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobOffer.
     * @param {JobOfferUpsertArgs} args - Arguments to update or create a JobOffer.
     * @example
     * // Update or create a JobOffer
     * const jobOffer = await prisma.jobOffer.upsert({
     *   create: {
     *     // ... data to create a JobOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOffer we want to update
     *   }
     * })
     */
    upsert<T extends JobOfferUpsertArgs>(args: SelectSubset<T, JobOfferUpsertArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferCountArgs} args - Arguments to filter JobOffers to count.
     * @example
     * // Count the number of JobOffers
     * const count = await prisma.jobOffer.count({
     *   where: {
     *     // ... the filter for the JobOffers we want to count
     *   }
     * })
    **/
    count<T extends JobOfferCountArgs>(
      args?: Subset<T, JobOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobOfferAggregateArgs>(args: Subset<T, JobOfferAggregateArgs>): Prisma.PrismaPromise<GetJobOfferAggregateType<T>>

    /**
     * Group by JobOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOfferGroupByArgs} args - Group by arguments.
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
      T extends JobOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOfferGroupByArgs['orderBy'] }
        : { orderBy?: JobOfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOffer model
   */
  readonly fields: JobOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluation<T extends JobOffer$evaluationArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$evaluationArgs<ExtArgs>>): Prisma__JobEvaluationClient<$Result.GetResult<Prisma.$JobEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    evaluationOutbox<T extends JobOffer$evaluationOutboxArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$evaluationOutboxArgs<ExtArgs>>): Prisma__JobEvaluationOutboxClient<$Result.GetResult<Prisma.$JobEvaluationOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    curriculum<T extends JobOffer$curriculumArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$curriculumArgs<ExtArgs>>): Prisma__JobCurriculumClient<$Result.GetResult<Prisma.$JobCurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    curriculumOutbox<T extends JobOffer$curriculumOutboxArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$curriculumOutboxArgs<ExtArgs>>): Prisma__JobCurriculumOutboxClient<$Result.GetResult<Prisma.$JobCurriculumOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    curriculumPdfOutbox<T extends JobOffer$curriculumPdfOutboxArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$curriculumPdfOutboxArgs<ExtArgs>>): Prisma__JobCurriculumPdfOutboxClient<$Result.GetResult<Prisma.$JobCurriculumPdfOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    statusHistory<T extends JobOffer$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, JobOffer$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobOffer model
   */
  interface JobOfferFieldRefs {
    readonly id: FieldRef<"JobOffer", 'String'>
    readonly externalId: FieldRef<"JobOffer", 'String'>
    readonly source: FieldRef<"JobOffer", 'JobSource'>
    readonly url: FieldRef<"JobOffer", 'String'>
    readonly title: FieldRef<"JobOffer", 'String'>
    readonly location: FieldRef<"JobOffer", 'String'>
    readonly remoteType: FieldRef<"JobOffer", 'RemoteType'>
    readonly rawDescription: FieldRef<"JobOffer", 'String'>
    readonly descriptionMarkdown: FieldRef<"JobOffer", 'String'>
    readonly datePosted: FieldRef<"JobOffer", 'DateTime'>
    readonly companyId: FieldRef<"JobOffer", 'String'>
    readonly salaryMin: FieldRef<"JobOffer", 'Float'>
    readonly salaryMax: FieldRef<"JobOffer", 'Float'>
    readonly currency: FieldRef<"JobOffer", 'String'>
    readonly contractType: FieldRef<"JobOffer", 'String'>
    readonly roleCategory: FieldRef<"JobOffer", 'String'>
    readonly experienceLevel: FieldRef<"JobOffer", 'ExperienceLevel'>
    readonly skills: FieldRef<"JobOffer", 'String'>
    readonly status: FieldRef<"JobOffer", 'ApplicationStatus'>
    readonly evaluationProcessStatus: FieldRef<"JobOffer", 'JobEvaluationProcessStatus'>
    readonly notes: FieldRef<"JobOffer", 'String'>
    readonly createdAt: FieldRef<"JobOffer", 'DateTime'>
    readonly updatedAt: FieldRef<"JobOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobOffer findUnique
   */
  export type JobOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer findUniqueOrThrow
   */
  export type JobOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer findFirst
   */
  export type JobOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer findFirstOrThrow
   */
  export type JobOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffer to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer findMany
   */
  export type JobOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter, which JobOffers to fetch.
     */
    where?: JobOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOffers to fetch.
     */
    orderBy?: JobOfferOrderByWithRelationInput | JobOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOffers.
     */
    cursor?: JobOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOffers.
     */
    distinct?: JobOfferScalarFieldEnum | JobOfferScalarFieldEnum[]
  }

  /**
   * JobOffer create
   */
  export type JobOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a JobOffer.
     */
    data: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>
  }

  /**
   * JobOffer createMany
   */
  export type JobOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobOffer createManyAndReturn
   */
  export type JobOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data used to create many JobOffers.
     */
    data: JobOfferCreateManyInput | JobOfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOffer update
   */
  export type JobOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a JobOffer.
     */
    data: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>
    /**
     * Choose, which JobOffer to update.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer updateMany
   */
  export type JobOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOffers.
     */
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyInput>
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number
  }

  /**
   * JobOffer updateManyAndReturn
   */
  export type JobOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * The data used to update JobOffers.
     */
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyInput>
    /**
     * Filter which JobOffers to update
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOffer upsert
   */
  export type JobOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the JobOffer to update in case it exists.
     */
    where: JobOfferWhereUniqueInput
    /**
     * In case the JobOffer found by the `where` argument doesn't exist, create a new JobOffer with this data.
     */
    create: XOR<JobOfferCreateInput, JobOfferUncheckedCreateInput>
    /**
     * In case the JobOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOfferUpdateInput, JobOfferUncheckedUpdateInput>
  }

  /**
   * JobOffer delete
   */
  export type JobOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
    /**
     * Filter which JobOffer to delete.
     */
    where: JobOfferWhereUniqueInput
  }

  /**
   * JobOffer deleteMany
   */
  export type JobOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOffers to delete
     */
    where?: JobOfferWhereInput
    /**
     * Limit how many JobOffers to delete.
     */
    limit?: number
  }

  /**
   * JobOffer.evaluation
   */
  export type JobOffer$evaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluation
     */
    select?: JobEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluation
     */
    omit?: JobEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationInclude<ExtArgs> | null
    where?: JobEvaluationWhereInput
  }

  /**
   * JobOffer.evaluationOutbox
   */
  export type JobOffer$evaluationOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobEvaluationOutbox
     */
    select?: JobEvaluationOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobEvaluationOutbox
     */
    omit?: JobEvaluationOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobEvaluationOutboxInclude<ExtArgs> | null
    where?: JobEvaluationOutboxWhereInput
  }

  /**
   * JobOffer.curriculum
   */
  export type JobOffer$curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculum
     */
    select?: JobCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculum
     */
    omit?: JobCurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumInclude<ExtArgs> | null
    where?: JobCurriculumWhereInput
  }

  /**
   * JobOffer.curriculumOutbox
   */
  export type JobOffer$curriculumOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumOutbox
     */
    select?: JobCurriculumOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumOutbox
     */
    omit?: JobCurriculumOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumOutboxInclude<ExtArgs> | null
    where?: JobCurriculumOutboxWhereInput
  }

  /**
   * JobOffer.curriculumPdfOutbox
   */
  export type JobOffer$curriculumPdfOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCurriculumPdfOutbox
     */
    select?: JobCurriculumPdfOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCurriculumPdfOutbox
     */
    omit?: JobCurriculumPdfOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCurriculumPdfOutboxInclude<ExtArgs> | null
    where?: JobCurriculumPdfOutboxWhereInput
  }

  /**
   * JobOffer.statusHistory
   */
  export type JobOffer$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    where?: JobStatusHistoryWhereInput
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[]
    cursor?: JobStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[]
  }

  /**
   * JobOffer without action
   */
  export type JobOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOffer
     */
    select?: JobOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOffer
     */
    omit?: JobOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOfferInclude<ExtArgs> | null
  }


  /**
   * Model JobStatusHistory
   */

  export type AggregateJobStatusHistory = {
    _count: JobStatusHistoryCountAggregateOutputType | null
    _min: JobStatusHistoryMinAggregateOutputType | null
    _max: JobStatusHistoryMaxAggregateOutputType | null
  }

  export type JobStatusHistoryMinAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    fromStatus: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus | null
    createdAt: Date | null
  }

  export type JobStatusHistoryMaxAggregateOutputType = {
    id: string | null
    jobOfferId: string | null
    fromStatus: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus | null
    createdAt: Date | null
  }

  export type JobStatusHistoryCountAggregateOutputType = {
    id: number
    jobOfferId: number
    fromStatus: number
    toStatus: number
    createdAt: number
    _all: number
  }


  export type JobStatusHistoryMinAggregateInputType = {
    id?: true
    jobOfferId?: true
    fromStatus?: true
    toStatus?: true
    createdAt?: true
  }

  export type JobStatusHistoryMaxAggregateInputType = {
    id?: true
    jobOfferId?: true
    fromStatus?: true
    toStatus?: true
    createdAt?: true
  }

  export type JobStatusHistoryCountAggregateInputType = {
    id?: true
    jobOfferId?: true
    fromStatus?: true
    toStatus?: true
    createdAt?: true
    _all?: true
  }

  export type JobStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobStatusHistory to aggregate.
     */
    where?: JobStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobStatusHistories
    **/
    _count?: true | JobStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobStatusHistoryMaxAggregateInputType
  }

  export type GetJobStatusHistoryAggregateType<T extends JobStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateJobStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobStatusHistory[P]>
      : GetScalarType<T[P], AggregateJobStatusHistory[P]>
  }




  export type JobStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobStatusHistoryWhereInput
    orderBy?: JobStatusHistoryOrderByWithAggregationInput | JobStatusHistoryOrderByWithAggregationInput[]
    by: JobStatusHistoryScalarFieldEnum[] | JobStatusHistoryScalarFieldEnum
    having?: JobStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobStatusHistoryCountAggregateInputType | true
    _min?: JobStatusHistoryMinAggregateInputType
    _max?: JobStatusHistoryMaxAggregateInputType
  }

  export type JobStatusHistoryGroupByOutputType = {
    id: string
    jobOfferId: string
    fromStatus: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt: Date
    _count: JobStatusHistoryCountAggregateOutputType | null
    _min: JobStatusHistoryMinAggregateOutputType | null
    _max: JobStatusHistoryMaxAggregateOutputType | null
  }

  type GetJobStatusHistoryGroupByPayload<T extends JobStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], JobStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type JobStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    createdAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobStatusHistory"]>

  export type JobStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    createdAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobStatusHistory"]>

  export type JobStatusHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOfferId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    createdAt?: boolean
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobStatusHistory"]>

  export type JobStatusHistorySelectScalar = {
    id?: boolean
    jobOfferId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    createdAt?: boolean
  }

  export type JobStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOfferId" | "fromStatus" | "toStatus" | "createdAt", ExtArgs["result"]["jobStatusHistory"]>
  export type JobStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }
  export type JobStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOffer?: boolean | JobOfferDefaultArgs<ExtArgs>
  }

  export type $JobStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobStatusHistory"
    objects: {
      jobOffer: Prisma.$JobOfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOfferId: string
      fromStatus: $Enums.ApplicationStatus | null
      toStatus: $Enums.ApplicationStatus
      createdAt: Date
    }, ExtArgs["result"]["jobStatusHistory"]>
    composites: {}
  }

  type JobStatusHistoryGetPayload<S extends boolean | null | undefined | JobStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$JobStatusHistoryPayload, S>

  type JobStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobStatusHistoryCountAggregateInputType | true
    }

  export interface JobStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobStatusHistory'], meta: { name: 'JobStatusHistory' } }
    /**
     * Find zero or one JobStatusHistory that matches the filter.
     * @param {JobStatusHistoryFindUniqueArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobStatusHistoryFindUniqueArgs>(args: SelectSubset<T, JobStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, JobStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryFindFirstArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobStatusHistoryFindFirstArgs>(args?: SelectSubset<T, JobStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a JobStatusHistory
     * @example
     * // Get one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, JobStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobStatusHistories
     * const jobStatusHistories = await prisma.jobStatusHistory.findMany()
     * 
     * // Get first 10 JobStatusHistories
     * const jobStatusHistories = await prisma.jobStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobStatusHistoryWithIdOnly = await prisma.jobStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobStatusHistoryFindManyArgs>(args?: SelectSubset<T, JobStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobStatusHistory.
     * @param {JobStatusHistoryCreateArgs} args - Arguments to create a JobStatusHistory.
     * @example
     * // Create one JobStatusHistory
     * const JobStatusHistory = await prisma.jobStatusHistory.create({
     *   data: {
     *     // ... data to create a JobStatusHistory
     *   }
     * })
     * 
     */
    create<T extends JobStatusHistoryCreateArgs>(args: SelectSubset<T, JobStatusHistoryCreateArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobStatusHistories.
     * @param {JobStatusHistoryCreateManyArgs} args - Arguments to create many JobStatusHistories.
     * @example
     * // Create many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobStatusHistoryCreateManyArgs>(args?: SelectSubset<T, JobStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobStatusHistories and returns the data saved in the database.
     * @param {JobStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many JobStatusHistories.
     * @example
     * // Create many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobStatusHistories and only return the `id`
     * const jobStatusHistoryWithIdOnly = await prisma.jobStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, JobStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobStatusHistory.
     * @param {JobStatusHistoryDeleteArgs} args - Arguments to delete one JobStatusHistory.
     * @example
     * // Delete one JobStatusHistory
     * const JobStatusHistory = await prisma.jobStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one JobStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends JobStatusHistoryDeleteArgs>(args: SelectSubset<T, JobStatusHistoryDeleteArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobStatusHistory.
     * @param {JobStatusHistoryUpdateArgs} args - Arguments to update one JobStatusHistory.
     * @example
     * // Update one JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobStatusHistoryUpdateArgs>(args: SelectSubset<T, JobStatusHistoryUpdateArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobStatusHistories.
     * @param {JobStatusHistoryDeleteManyArgs} args - Arguments to filter JobStatusHistories to delete.
     * @example
     * // Delete a few JobStatusHistories
     * const { count } = await prisma.jobStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, JobStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobStatusHistoryUpdateManyArgs>(args: SelectSubset<T, JobStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobStatusHistories and returns the data updated in the database.
     * @param {JobStatusHistoryUpdateManyAndReturnArgs} args - Arguments to update many JobStatusHistories.
     * @example
     * // Update many JobStatusHistories
     * const jobStatusHistory = await prisma.jobStatusHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobStatusHistories and only return the `id`
     * const jobStatusHistoryWithIdOnly = await prisma.jobStatusHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobStatusHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, JobStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobStatusHistory.
     * @param {JobStatusHistoryUpsertArgs} args - Arguments to update or create a JobStatusHistory.
     * @example
     * // Update or create a JobStatusHistory
     * const jobStatusHistory = await prisma.jobStatusHistory.upsert({
     *   create: {
     *     // ... data to create a JobStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends JobStatusHistoryUpsertArgs>(args: SelectSubset<T, JobStatusHistoryUpsertArgs<ExtArgs>>): Prisma__JobStatusHistoryClient<$Result.GetResult<Prisma.$JobStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryCountArgs} args - Arguments to filter JobStatusHistories to count.
     * @example
     * // Count the number of JobStatusHistories
     * const count = await prisma.jobStatusHistory.count({
     *   where: {
     *     // ... the filter for the JobStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends JobStatusHistoryCountArgs>(
      args?: Subset<T, JobStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobStatusHistoryAggregateArgs>(args: Subset<T, JobStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetJobStatusHistoryAggregateType<T>>

    /**
     * Group by JobStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobStatusHistoryGroupByArgs} args - Group by arguments.
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
      T extends JobStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: JobStatusHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobStatusHistory model
   */
  readonly fields: JobStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOffer<T extends JobOfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOfferDefaultArgs<ExtArgs>>): Prisma__JobOfferClient<$Result.GetResult<Prisma.$JobOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobStatusHistory model
   */
  interface JobStatusHistoryFieldRefs {
    readonly id: FieldRef<"JobStatusHistory", 'String'>
    readonly jobOfferId: FieldRef<"JobStatusHistory", 'String'>
    readonly fromStatus: FieldRef<"JobStatusHistory", 'ApplicationStatus'>
    readonly toStatus: FieldRef<"JobStatusHistory", 'ApplicationStatus'>
    readonly createdAt: FieldRef<"JobStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobStatusHistory findUnique
   */
  export type JobStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where: JobStatusHistoryWhereUniqueInput
  }

  /**
   * JobStatusHistory findUniqueOrThrow
   */
  export type JobStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where: JobStatusHistoryWhereUniqueInput
  }

  /**
   * JobStatusHistory findFirst
   */
  export type JobStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where?: JobStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobStatusHistories.
     */
    cursor?: JobStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobStatusHistories.
     */
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[]
  }

  /**
   * JobStatusHistory findFirstOrThrow
   */
  export type JobStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which JobStatusHistory to fetch.
     */
    where?: JobStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobStatusHistories.
     */
    cursor?: JobStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobStatusHistories.
     */
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[]
  }

  /**
   * JobStatusHistory findMany
   */
  export type JobStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which JobStatusHistories to fetch.
     */
    where?: JobStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobStatusHistories to fetch.
     */
    orderBy?: JobStatusHistoryOrderByWithRelationInput | JobStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobStatusHistories.
     */
    cursor?: JobStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobStatusHistories.
     */
    distinct?: JobStatusHistoryScalarFieldEnum | JobStatusHistoryScalarFieldEnum[]
  }

  /**
   * JobStatusHistory create
   */
  export type JobStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a JobStatusHistory.
     */
    data: XOR<JobStatusHistoryCreateInput, JobStatusHistoryUncheckedCreateInput>
  }

  /**
   * JobStatusHistory createMany
   */
  export type JobStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobStatusHistories.
     */
    data: JobStatusHistoryCreateManyInput | JobStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobStatusHistory createManyAndReturn
   */
  export type JobStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many JobStatusHistories.
     */
    data: JobStatusHistoryCreateManyInput | JobStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobStatusHistory update
   */
  export type JobStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a JobStatusHistory.
     */
    data: XOR<JobStatusHistoryUpdateInput, JobStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which JobStatusHistory to update.
     */
    where: JobStatusHistoryWhereUniqueInput
  }

  /**
   * JobStatusHistory updateMany
   */
  export type JobStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobStatusHistories.
     */
    data: XOR<JobStatusHistoryUpdateManyMutationInput, JobStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which JobStatusHistories to update
     */
    where?: JobStatusHistoryWhereInput
    /**
     * Limit how many JobStatusHistories to update.
     */
    limit?: number
  }

  /**
   * JobStatusHistory updateManyAndReturn
   */
  export type JobStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to update JobStatusHistories.
     */
    data: XOR<JobStatusHistoryUpdateManyMutationInput, JobStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which JobStatusHistories to update
     */
    where?: JobStatusHistoryWhereInput
    /**
     * Limit how many JobStatusHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobStatusHistory upsert
   */
  export type JobStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the JobStatusHistory to update in case it exists.
     */
    where: JobStatusHistoryWhereUniqueInput
    /**
     * In case the JobStatusHistory found by the `where` argument doesn't exist, create a new JobStatusHistory with this data.
     */
    create: XOR<JobStatusHistoryCreateInput, JobStatusHistoryUncheckedCreateInput>
    /**
     * In case the JobStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobStatusHistoryUpdateInput, JobStatusHistoryUncheckedUpdateInput>
  }

  /**
   * JobStatusHistory delete
   */
  export type JobStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which JobStatusHistory to delete.
     */
    where: JobStatusHistoryWhereUniqueInput
  }

  /**
   * JobStatusHistory deleteMany
   */
  export type JobStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobStatusHistories to delete
     */
    where?: JobStatusHistoryWhereInput
    /**
     * Limit how many JobStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * JobStatusHistory without action
   */
  export type JobStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobStatusHistory
     */
    select?: JobStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobStatusHistory
     */
    omit?: JobStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model SyncState
   */

  export type AggregateSyncState = {
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  export type SyncStateAvgAggregateOutputType = {
    totalJobsExtracted: number | null
  }

  export type SyncStateSumAggregateOutputType = {
    totalJobsExtracted: number | null
  }

  export type SyncStateMinAggregateOutputType = {
    source: string | null
    lastSyncedAt: Date | null
    totalJobsExtracted: number | null
    lastStatus: string | null
    updatedAt: Date | null
  }

  export type SyncStateMaxAggregateOutputType = {
    source: string | null
    lastSyncedAt: Date | null
    totalJobsExtracted: number | null
    lastStatus: string | null
    updatedAt: Date | null
  }

  export type SyncStateCountAggregateOutputType = {
    source: number
    lastSyncedAt: number
    totalJobsExtracted: number
    lastStatus: number
    updatedAt: number
    _all: number
  }


  export type SyncStateAvgAggregateInputType = {
    totalJobsExtracted?: true
  }

  export type SyncStateSumAggregateInputType = {
    totalJobsExtracted?: true
  }

  export type SyncStateMinAggregateInputType = {
    source?: true
    lastSyncedAt?: true
    totalJobsExtracted?: true
    lastStatus?: true
    updatedAt?: true
  }

  export type SyncStateMaxAggregateInputType = {
    source?: true
    lastSyncedAt?: true
    totalJobsExtracted?: true
    lastStatus?: true
    updatedAt?: true
  }

  export type SyncStateCountAggregateInputType = {
    source?: true
    lastSyncedAt?: true
    totalJobsExtracted?: true
    lastStatus?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncState to aggregate.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncStates
    **/
    _count?: true | SyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncStateMaxAggregateInputType
  }

  export type GetSyncStateAggregateType<T extends SyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncState[P]>
      : GetScalarType<T[P], AggregateSyncState[P]>
  }




  export type SyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncStateWhereInput
    orderBy?: SyncStateOrderByWithAggregationInput | SyncStateOrderByWithAggregationInput[]
    by: SyncStateScalarFieldEnum[] | SyncStateScalarFieldEnum
    having?: SyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncStateCountAggregateInputType | true
    _avg?: SyncStateAvgAggregateInputType
    _sum?: SyncStateSumAggregateInputType
    _min?: SyncStateMinAggregateInputType
    _max?: SyncStateMaxAggregateInputType
  }

  export type SyncStateGroupByOutputType = {
    source: string
    lastSyncedAt: Date
    totalJobsExtracted: number
    lastStatus: string
    updatedAt: Date
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  type GetSyncStateGroupByPayload<T extends SyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
        }
      >
    >


  export type SyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    source?: boolean
    lastSyncedAt?: boolean
    totalJobsExtracted?: boolean
    lastStatus?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    source?: boolean
    lastSyncedAt?: boolean
    totalJobsExtracted?: boolean
    lastStatus?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    source?: boolean
    lastSyncedAt?: boolean
    totalJobsExtracted?: boolean
    lastStatus?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectScalar = {
    source?: boolean
    lastSyncedAt?: boolean
    totalJobsExtracted?: boolean
    lastStatus?: boolean
    updatedAt?: boolean
  }

  export type SyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"source" | "lastSyncedAt" | "totalJobsExtracted" | "lastStatus" | "updatedAt", ExtArgs["result"]["syncState"]>

  export type $SyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      source: string
      lastSyncedAt: Date
      totalJobsExtracted: number
      lastStatus: string
      updatedAt: Date
    }, ExtArgs["result"]["syncState"]>
    composites: {}
  }

  type SyncStateGetPayload<S extends boolean | null | undefined | SyncStateDefaultArgs> = $Result.GetResult<Prisma.$SyncStatePayload, S>

  type SyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncStateCountAggregateInputType | true
    }

  export interface SyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncState'], meta: { name: 'SyncState' } }
    /**
     * Find zero or one SyncState that matches the filter.
     * @param {SyncStateFindUniqueArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncStateFindUniqueArgs>(args: SelectSubset<T, SyncStateFindUniqueArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncStateFindUniqueOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncStateFindFirstArgs>(args?: SelectSubset<T, SyncStateFindFirstArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncStates
     * const syncStates = await prisma.syncState.findMany()
     * 
     * // Get first 10 SyncStates
     * const syncStates = await prisma.syncState.findMany({ take: 10 })
     * 
     * // Only select the `source`
     * const syncStateWithSourceOnly = await prisma.syncState.findMany({ select: { source: true } })
     * 
     */
    findMany<T extends SyncStateFindManyArgs>(args?: SelectSubset<T, SyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncState.
     * @param {SyncStateCreateArgs} args - Arguments to create a SyncState.
     * @example
     * // Create one SyncState
     * const SyncState = await prisma.syncState.create({
     *   data: {
     *     // ... data to create a SyncState
     *   }
     * })
     * 
     */
    create<T extends SyncStateCreateArgs>(args: SelectSubset<T, SyncStateCreateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncStates.
     * @param {SyncStateCreateManyArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncStateCreateManyArgs>(args?: SelectSubset<T, SyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncStates and returns the data saved in the database.
     * @param {SyncStateCreateManyAndReturnArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncStates and only return the `source`
     * const syncStateWithSourceOnly = await prisma.syncState.createManyAndReturn({
     *   select: { source: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncState.
     * @param {SyncStateDeleteArgs} args - Arguments to delete one SyncState.
     * @example
     * // Delete one SyncState
     * const SyncState = await prisma.syncState.delete({
     *   where: {
     *     // ... filter to delete one SyncState
     *   }
     * })
     * 
     */
    delete<T extends SyncStateDeleteArgs>(args: SelectSubset<T, SyncStateDeleteArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncState.
     * @param {SyncStateUpdateArgs} args - Arguments to update one SyncState.
     * @example
     * // Update one SyncState
     * const syncState = await prisma.syncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncStateUpdateArgs>(args: SelectSubset<T, SyncStateUpdateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncStates.
     * @param {SyncStateDeleteManyArgs} args - Arguments to filter SyncStates to delete.
     * @example
     * // Delete a few SyncStates
     * const { count } = await prisma.syncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncStateDeleteManyArgs>(args?: SelectSubset<T, SyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncStateUpdateManyArgs>(args: SelectSubset<T, SyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates and returns the data updated in the database.
     * @param {SyncStateUpdateManyAndReturnArgs} args - Arguments to update many SyncStates.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncStates and only return the `source`
     * const syncStateWithSourceOnly = await prisma.syncState.updateManyAndReturn({
     *   select: { source: true },
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
    updateManyAndReturn<T extends SyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncState.
     * @param {SyncStateUpsertArgs} args - Arguments to update or create a SyncState.
     * @example
     * // Update or create a SyncState
     * const syncState = await prisma.syncState.upsert({
     *   create: {
     *     // ... data to create a SyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncState we want to update
     *   }
     * })
     */
    upsert<T extends SyncStateUpsertArgs>(args: SelectSubset<T, SyncStateUpsertArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateCountArgs} args - Arguments to filter SyncStates to count.
     * @example
     * // Count the number of SyncStates
     * const count = await prisma.syncState.count({
     *   where: {
     *     // ... the filter for the SyncStates we want to count
     *   }
     * })
    **/
    count<T extends SyncStateCountArgs>(
      args?: Subset<T, SyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncStateAggregateArgs>(args: Subset<T, SyncStateAggregateArgs>): Prisma.PrismaPromise<GetSyncStateAggregateType<T>>

    /**
     * Group by SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateGroupByArgs} args - Group by arguments.
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
      T extends SyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncStateGroupByArgs['orderBy'] }
        : { orderBy?: SyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncState model
   */
  readonly fields: SyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SyncState model
   */
  interface SyncStateFieldRefs {
    readonly source: FieldRef<"SyncState", 'String'>
    readonly lastSyncedAt: FieldRef<"SyncState", 'DateTime'>
    readonly totalJobsExtracted: FieldRef<"SyncState", 'Int'>
    readonly lastStatus: FieldRef<"SyncState", 'String'>
    readonly updatedAt: FieldRef<"SyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncState findUnique
   */
  export type SyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findUniqueOrThrow
   */
  export type SyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findFirst
   */
  export type SyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findFirstOrThrow
   */
  export type SyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findMany
   */
  export type SyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncStates to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState create
   */
  export type SyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncState.
     */
    data: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
  }

  /**
   * SyncState createMany
   */
  export type SyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState createManyAndReturn
   */
  export type SyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState update
   */
  export type SyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncState.
     */
    data: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
    /**
     * Choose, which SyncState to update.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState updateMany
   */
  export type SyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState updateManyAndReturn
   */
  export type SyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState upsert
   */
  export type SyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncState to update in case it exists.
     */
    where: SyncStateWhereUniqueInput
    /**
     * In case the SyncState found by the `where` argument doesn't exist, create a new SyncState with this data.
     */
    create: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
    /**
     * In case the SyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
  }

  /**
   * SyncState delete
   */
  export type SyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter which SyncState to delete.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState deleteMany
   */
  export type SyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncStates to delete
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to delete.
     */
    limit?: number
  }

  /**
   * SyncState without action
   */
  export type SyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    resumeText: string | null
    searchCriteriaText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    resumeText: string | null
    searchCriteriaText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    resumeText: number
    searchCriteriaText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    resumeText?: true
    searchCriteriaText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    resumeText?: true
    searchCriteriaText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    resumeText?: true
    searchCriteriaText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    resumeText: string | null
    searchCriteriaText: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeText?: boolean
    searchCriteriaText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeText?: boolean
    searchCriteriaText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeText?: boolean
    searchCriteriaText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    resumeText?: boolean
    searchCriteriaText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeText" | "searchCriteriaText" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeText: string | null
      searchCriteriaText: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly resumeText: FieldRef<"UserProfile", 'String'>
    readonly searchCriteriaText: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    websiteUrl: 'websiteUrl',
    linkedinUrl: 'linkedinUrl',
    industry: 'industry',
    fundingStage: 'fundingStage',
    companySizeRange: 'companySizeRange',
    employeeCount: 'employeeCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const JobCurriculumScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    storageKey: 'storageKey',
    pdfStatus: 'pdfStatus',
    explanation: 'explanation',
    customLabel: 'customLabel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobCurriculumScalarFieldEnum = (typeof JobCurriculumScalarFieldEnum)[keyof typeof JobCurriculumScalarFieldEnum]


  export const JobCurriculumWorkScalarFieldEnum: {
    id: 'id',
    curriculumId: 'curriculumId',
    name: 'name',
    position: 'position',
    summary: 'summary',
    include: 'include',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobCurriculumWorkScalarFieldEnum = (typeof JobCurriculumWorkScalarFieldEnum)[keyof typeof JobCurriculumWorkScalarFieldEnum]


  export const JobCurriculumProjectScalarFieldEnum: {
    id: 'id',
    curriculumId: 'curriculumId',
    name: 'name',
    description: 'description',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobCurriculumProjectScalarFieldEnum = (typeof JobCurriculumProjectScalarFieldEnum)[keyof typeof JobCurriculumProjectScalarFieldEnum]


  export const JobCurriculumPublicationScalarFieldEnum: {
    id: 'id',
    curriculumId: 'curriculumId',
    title: 'title',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobCurriculumPublicationScalarFieldEnum = (typeof JobCurriculumPublicationScalarFieldEnum)[keyof typeof JobCurriculumPublicationScalarFieldEnum]


  export const JobCurriculumOutboxScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    status: 'status',
    forceRegenerate: 'forceRegenerate',
    attempts: 'attempts',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobCurriculumOutboxScalarFieldEnum = (typeof JobCurriculumOutboxScalarFieldEnum)[keyof typeof JobCurriculumOutboxScalarFieldEnum]


  export const JobCurriculumPdfOutboxScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    status: 'status',
    templateName: 'templateName',
    forceRegenerate: 'forceRegenerate',
    attempts: 'attempts',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobCurriculumPdfOutboxScalarFieldEnum = (typeof JobCurriculumPdfOutboxScalarFieldEnum)[keyof typeof JobCurriculumPdfOutboxScalarFieldEnum]


  export const JobEvaluationScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    status: 'status',
    evaluatorModel: 'evaluatorModel',
    summary: 'summary',
    desireMatchScore: 'desireMatchScore',
    competenceScore: 'competenceScore',
    overallScore: 'overallScore',
    priority: 'priority',
    desireMatchReasoning: 'desireMatchReasoning',
    competenceMatch: 'competenceMatch',
    detailedReasoning: 'detailedReasoning',
    pros: 'pros',
    cons: 'cons',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobEvaluationScalarFieldEnum = (typeof JobEvaluationScalarFieldEnum)[keyof typeof JobEvaluationScalarFieldEnum]


  export const JobEvaluationOutboxScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    status: 'status',
    attempts: 'attempts',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobEvaluationOutboxScalarFieldEnum = (typeof JobEvaluationOutboxScalarFieldEnum)[keyof typeof JobEvaluationOutboxScalarFieldEnum]


  export const JobOfferScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    source: 'source',
    url: 'url',
    title: 'title',
    location: 'location',
    remoteType: 'remoteType',
    rawDescription: 'rawDescription',
    descriptionMarkdown: 'descriptionMarkdown',
    datePosted: 'datePosted',
    companyId: 'companyId',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    currency: 'currency',
    contractType: 'contractType',
    roleCategory: 'roleCategory',
    experienceLevel: 'experienceLevel',
    skills: 'skills',
    status: 'status',
    evaluationProcessStatus: 'evaluationProcessStatus',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobOfferScalarFieldEnum = (typeof JobOfferScalarFieldEnum)[keyof typeof JobOfferScalarFieldEnum]


  export const JobStatusHistoryScalarFieldEnum: {
    id: 'id',
    jobOfferId: 'jobOfferId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    createdAt: 'createdAt'
  };

  export type JobStatusHistoryScalarFieldEnum = (typeof JobStatusHistoryScalarFieldEnum)[keyof typeof JobStatusHistoryScalarFieldEnum]


  export const SyncStateScalarFieldEnum: {
    source: 'source',
    lastSyncedAt: 'lastSyncedAt',
    totalJobsExtracted: 'totalJobsExtracted',
    lastStatus: 'lastStatus',
    updatedAt: 'updatedAt'
  };

  export type SyncStateScalarFieldEnum = (typeof SyncStateScalarFieldEnum)[keyof typeof SyncStateScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    resumeText: 'resumeText',
    searchCriteriaText: 'searchCriteriaText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JobCurriculumPdfStatus'
   */
  export type EnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobCurriculumPdfStatus'>
    


  /**
   * Reference to a field of type 'JobCurriculumPdfStatus[]'
   */
  export type ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobCurriculumPdfStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OutboxStatus'
   */
  export type EnumOutboxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutboxStatus'>
    


  /**
   * Reference to a field of type 'OutboxStatus[]'
   */
  export type ListEnumOutboxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutboxStatus[]'>
    


  /**
   * Reference to a field of type 'EvaluationStatus'
   */
  export type EnumEvaluationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationStatus'>
    


  /**
   * Reference to a field of type 'EvaluationStatus[]'
   */
  export type ListEnumEvaluationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationStatus[]'>
    


  /**
   * Reference to a field of type 'EvaluatorModel'
   */
  export type EnumEvaluatorModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluatorModel'>
    


  /**
   * Reference to a field of type 'EvaluatorModel[]'
   */
  export type ListEnumEvaluatorModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluatorModel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EvaluationPriority'
   */
  export type EnumEvaluationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationPriority'>
    


  /**
   * Reference to a field of type 'EvaluationPriority[]'
   */
  export type ListEnumEvaluationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationPriority[]'>
    


  /**
   * Reference to a field of type 'JobSource'
   */
  export type EnumJobSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobSource'>
    


  /**
   * Reference to a field of type 'JobSource[]'
   */
  export type ListEnumJobSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobSource[]'>
    


  /**
   * Reference to a field of type 'RemoteType'
   */
  export type EnumRemoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemoteType'>
    


  /**
   * Reference to a field of type 'RemoteType[]'
   */
  export type ListEnumRemoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemoteType[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'JobEvaluationProcessStatus'
   */
  export type EnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobEvaluationProcessStatus'>
    


  /**
   * Reference to a field of type 'JobEvaluationProcessStatus[]'
   */
  export type ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobEvaluationProcessStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    linkedinUrl?: StringNullableFilter<"Company"> | string | null
    industry?: StringNullableFilter<"Company"> | string | null
    fundingStage?: StringNullableFilter<"Company"> | string | null
    companySizeRange?: StringNullableFilter<"Company"> | string | null
    employeeCount?: IntNullableFilter<"Company"> | number | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    jobOffers?: JobOfferListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    fundingStage?: SortOrderInput | SortOrder
    companySizeRange?: SortOrderInput | SortOrder
    employeeCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOffers?: JobOfferOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    linkedinUrl?: StringNullableFilter<"Company"> | string | null
    industry?: StringNullableFilter<"Company"> | string | null
    fundingStage?: StringNullableFilter<"Company"> | string | null
    companySizeRange?: StringNullableFilter<"Company"> | string | null
    employeeCount?: IntNullableFilter<"Company"> | number | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    jobOffers?: JobOfferListRelationFilter
  }, "id" | "name">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    fundingStage?: SortOrderInput | SortOrder
    companySizeRange?: SortOrderInput | SortOrder
    employeeCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    websiteUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Company"> | string | null
    fundingStage?: StringNullableWithAggregatesFilter<"Company"> | string | null
    companySizeRange?: StringNullableWithAggregatesFilter<"Company"> | string | null
    employeeCount?: IntNullableWithAggregatesFilter<"Company"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type JobCurriculumWhereInput = {
    AND?: JobCurriculumWhereInput | JobCurriculumWhereInput[]
    OR?: JobCurriculumWhereInput[]
    NOT?: JobCurriculumWhereInput | JobCurriculumWhereInput[]
    id?: StringFilter<"JobCurriculum"> | string
    jobOfferId?: StringFilter<"JobCurriculum"> | string
    storageKey?: StringNullableFilter<"JobCurriculum"> | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFilter<"JobCurriculum"> | $Enums.JobCurriculumPdfStatus
    explanation?: StringFilter<"JobCurriculum"> | string
    customLabel?: StringNullableFilter<"JobCurriculum"> | string | null
    createdAt?: DateTimeFilter<"JobCurriculum"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculum"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
    work?: JobCurriculumWorkListRelationFilter
    projects?: JobCurriculumProjectListRelationFilter
    publications?: JobCurriculumPublicationListRelationFilter
  }

  export type JobCurriculumOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    pdfStatus?: SortOrder
    explanation?: SortOrder
    customLabel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
    work?: JobCurriculumWorkOrderByRelationAggregateInput
    projects?: JobCurriculumProjectOrderByRelationAggregateInput
    publications?: JobCurriculumPublicationOrderByRelationAggregateInput
  }

  export type JobCurriculumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobOfferId?: string
    AND?: JobCurriculumWhereInput | JobCurriculumWhereInput[]
    OR?: JobCurriculumWhereInput[]
    NOT?: JobCurriculumWhereInput | JobCurriculumWhereInput[]
    storageKey?: StringNullableFilter<"JobCurriculum"> | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFilter<"JobCurriculum"> | $Enums.JobCurriculumPdfStatus
    explanation?: StringFilter<"JobCurriculum"> | string
    customLabel?: StringNullableFilter<"JobCurriculum"> | string | null
    createdAt?: DateTimeFilter<"JobCurriculum"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculum"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
    work?: JobCurriculumWorkListRelationFilter
    projects?: JobCurriculumProjectListRelationFilter
    publications?: JobCurriculumPublicationListRelationFilter
  }, "id" | "jobOfferId">

  export type JobCurriculumOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    pdfStatus?: SortOrder
    explanation?: SortOrder
    customLabel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCurriculumCountOrderByAggregateInput
    _max?: JobCurriculumMaxOrderByAggregateInput
    _min?: JobCurriculumMinOrderByAggregateInput
  }

  export type JobCurriculumScalarWhereWithAggregatesInput = {
    AND?: JobCurriculumScalarWhereWithAggregatesInput | JobCurriculumScalarWhereWithAggregatesInput[]
    OR?: JobCurriculumScalarWhereWithAggregatesInput[]
    NOT?: JobCurriculumScalarWhereWithAggregatesInput | JobCurriculumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobCurriculum"> | string
    jobOfferId?: StringWithAggregatesFilter<"JobCurriculum"> | string
    storageKey?: StringNullableWithAggregatesFilter<"JobCurriculum"> | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusWithAggregatesFilter<"JobCurriculum"> | $Enums.JobCurriculumPdfStatus
    explanation?: StringWithAggregatesFilter<"JobCurriculum"> | string
    customLabel?: StringNullableWithAggregatesFilter<"JobCurriculum"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobCurriculum"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobCurriculum"> | Date | string
  }

  export type JobCurriculumWorkWhereInput = {
    AND?: JobCurriculumWorkWhereInput | JobCurriculumWorkWhereInput[]
    OR?: JobCurriculumWorkWhereInput[]
    NOT?: JobCurriculumWorkWhereInput | JobCurriculumWorkWhereInput[]
    id?: StringFilter<"JobCurriculumWork"> | string
    curriculumId?: StringFilter<"JobCurriculumWork"> | string
    name?: StringFilter<"JobCurriculumWork"> | string
    position?: StringFilter<"JobCurriculumWork"> | string
    summary?: StringFilter<"JobCurriculumWork"> | string
    include?: BoolFilter<"JobCurriculumWork"> | boolean
    order?: IntFilter<"JobCurriculumWork"> | number
    createdAt?: DateTimeFilter<"JobCurriculumWork"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumWork"> | Date | string
    curriculum?: XOR<JobCurriculumScalarRelationFilter, JobCurriculumWhereInput>
  }

  export type JobCurriculumWorkOrderByWithRelationInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    summary?: SortOrder
    include?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curriculum?: JobCurriculumOrderByWithRelationInput
  }

  export type JobCurriculumWorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobCurriculumWorkWhereInput | JobCurriculumWorkWhereInput[]
    OR?: JobCurriculumWorkWhereInput[]
    NOT?: JobCurriculumWorkWhereInput | JobCurriculumWorkWhereInput[]
    curriculumId?: StringFilter<"JobCurriculumWork"> | string
    name?: StringFilter<"JobCurriculumWork"> | string
    position?: StringFilter<"JobCurriculumWork"> | string
    summary?: StringFilter<"JobCurriculumWork"> | string
    include?: BoolFilter<"JobCurriculumWork"> | boolean
    order?: IntFilter<"JobCurriculumWork"> | number
    createdAt?: DateTimeFilter<"JobCurriculumWork"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumWork"> | Date | string
    curriculum?: XOR<JobCurriculumScalarRelationFilter, JobCurriculumWhereInput>
  }, "id">

  export type JobCurriculumWorkOrderByWithAggregationInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    summary?: SortOrder
    include?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCurriculumWorkCountOrderByAggregateInput
    _avg?: JobCurriculumWorkAvgOrderByAggregateInput
    _max?: JobCurriculumWorkMaxOrderByAggregateInput
    _min?: JobCurriculumWorkMinOrderByAggregateInput
    _sum?: JobCurriculumWorkSumOrderByAggregateInput
  }

  export type JobCurriculumWorkScalarWhereWithAggregatesInput = {
    AND?: JobCurriculumWorkScalarWhereWithAggregatesInput | JobCurriculumWorkScalarWhereWithAggregatesInput[]
    OR?: JobCurriculumWorkScalarWhereWithAggregatesInput[]
    NOT?: JobCurriculumWorkScalarWhereWithAggregatesInput | JobCurriculumWorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobCurriculumWork"> | string
    curriculumId?: StringWithAggregatesFilter<"JobCurriculumWork"> | string
    name?: StringWithAggregatesFilter<"JobCurriculumWork"> | string
    position?: StringWithAggregatesFilter<"JobCurriculumWork"> | string
    summary?: StringWithAggregatesFilter<"JobCurriculumWork"> | string
    include?: BoolWithAggregatesFilter<"JobCurriculumWork"> | boolean
    order?: IntWithAggregatesFilter<"JobCurriculumWork"> | number
    createdAt?: DateTimeWithAggregatesFilter<"JobCurriculumWork"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobCurriculumWork"> | Date | string
  }

  export type JobCurriculumProjectWhereInput = {
    AND?: JobCurriculumProjectWhereInput | JobCurriculumProjectWhereInput[]
    OR?: JobCurriculumProjectWhereInput[]
    NOT?: JobCurriculumProjectWhereInput | JobCurriculumProjectWhereInput[]
    id?: StringFilter<"JobCurriculumProject"> | string
    curriculumId?: StringFilter<"JobCurriculumProject"> | string
    name?: StringFilter<"JobCurriculumProject"> | string
    description?: StringFilter<"JobCurriculumProject"> | string
    order?: IntFilter<"JobCurriculumProject"> | number
    createdAt?: DateTimeFilter<"JobCurriculumProject"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumProject"> | Date | string
    curriculum?: XOR<JobCurriculumScalarRelationFilter, JobCurriculumWhereInput>
  }

  export type JobCurriculumProjectOrderByWithRelationInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curriculum?: JobCurriculumOrderByWithRelationInput
  }

  export type JobCurriculumProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobCurriculumProjectWhereInput | JobCurriculumProjectWhereInput[]
    OR?: JobCurriculumProjectWhereInput[]
    NOT?: JobCurriculumProjectWhereInput | JobCurriculumProjectWhereInput[]
    curriculumId?: StringFilter<"JobCurriculumProject"> | string
    name?: StringFilter<"JobCurriculumProject"> | string
    description?: StringFilter<"JobCurriculumProject"> | string
    order?: IntFilter<"JobCurriculumProject"> | number
    createdAt?: DateTimeFilter<"JobCurriculumProject"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumProject"> | Date | string
    curriculum?: XOR<JobCurriculumScalarRelationFilter, JobCurriculumWhereInput>
  }, "id">

  export type JobCurriculumProjectOrderByWithAggregationInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCurriculumProjectCountOrderByAggregateInput
    _avg?: JobCurriculumProjectAvgOrderByAggregateInput
    _max?: JobCurriculumProjectMaxOrderByAggregateInput
    _min?: JobCurriculumProjectMinOrderByAggregateInput
    _sum?: JobCurriculumProjectSumOrderByAggregateInput
  }

  export type JobCurriculumProjectScalarWhereWithAggregatesInput = {
    AND?: JobCurriculumProjectScalarWhereWithAggregatesInput | JobCurriculumProjectScalarWhereWithAggregatesInput[]
    OR?: JobCurriculumProjectScalarWhereWithAggregatesInput[]
    NOT?: JobCurriculumProjectScalarWhereWithAggregatesInput | JobCurriculumProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobCurriculumProject"> | string
    curriculumId?: StringWithAggregatesFilter<"JobCurriculumProject"> | string
    name?: StringWithAggregatesFilter<"JobCurriculumProject"> | string
    description?: StringWithAggregatesFilter<"JobCurriculumProject"> | string
    order?: IntWithAggregatesFilter<"JobCurriculumProject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"JobCurriculumProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobCurriculumProject"> | Date | string
  }

  export type JobCurriculumPublicationWhereInput = {
    AND?: JobCurriculumPublicationWhereInput | JobCurriculumPublicationWhereInput[]
    OR?: JobCurriculumPublicationWhereInput[]
    NOT?: JobCurriculumPublicationWhereInput | JobCurriculumPublicationWhereInput[]
    id?: StringFilter<"JobCurriculumPublication"> | string
    curriculumId?: StringFilter<"JobCurriculumPublication"> | string
    title?: StringFilter<"JobCurriculumPublication"> | string
    order?: IntFilter<"JobCurriculumPublication"> | number
    createdAt?: DateTimeFilter<"JobCurriculumPublication"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumPublication"> | Date | string
    curriculum?: XOR<JobCurriculumScalarRelationFilter, JobCurriculumWhereInput>
  }

  export type JobCurriculumPublicationOrderByWithRelationInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curriculum?: JobCurriculumOrderByWithRelationInput
  }

  export type JobCurriculumPublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobCurriculumPublicationWhereInput | JobCurriculumPublicationWhereInput[]
    OR?: JobCurriculumPublicationWhereInput[]
    NOT?: JobCurriculumPublicationWhereInput | JobCurriculumPublicationWhereInput[]
    curriculumId?: StringFilter<"JobCurriculumPublication"> | string
    title?: StringFilter<"JobCurriculumPublication"> | string
    order?: IntFilter<"JobCurriculumPublication"> | number
    createdAt?: DateTimeFilter<"JobCurriculumPublication"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumPublication"> | Date | string
    curriculum?: XOR<JobCurriculumScalarRelationFilter, JobCurriculumWhereInput>
  }, "id">

  export type JobCurriculumPublicationOrderByWithAggregationInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCurriculumPublicationCountOrderByAggregateInput
    _avg?: JobCurriculumPublicationAvgOrderByAggregateInput
    _max?: JobCurriculumPublicationMaxOrderByAggregateInput
    _min?: JobCurriculumPublicationMinOrderByAggregateInput
    _sum?: JobCurriculumPublicationSumOrderByAggregateInput
  }

  export type JobCurriculumPublicationScalarWhereWithAggregatesInput = {
    AND?: JobCurriculumPublicationScalarWhereWithAggregatesInput | JobCurriculumPublicationScalarWhereWithAggregatesInput[]
    OR?: JobCurriculumPublicationScalarWhereWithAggregatesInput[]
    NOT?: JobCurriculumPublicationScalarWhereWithAggregatesInput | JobCurriculumPublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobCurriculumPublication"> | string
    curriculumId?: StringWithAggregatesFilter<"JobCurriculumPublication"> | string
    title?: StringWithAggregatesFilter<"JobCurriculumPublication"> | string
    order?: IntWithAggregatesFilter<"JobCurriculumPublication"> | number
    createdAt?: DateTimeWithAggregatesFilter<"JobCurriculumPublication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobCurriculumPublication"> | Date | string
  }

  export type JobCurriculumOutboxWhereInput = {
    AND?: JobCurriculumOutboxWhereInput | JobCurriculumOutboxWhereInput[]
    OR?: JobCurriculumOutboxWhereInput[]
    NOT?: JobCurriculumOutboxWhereInput | JobCurriculumOutboxWhereInput[]
    id?: StringFilter<"JobCurriculumOutbox"> | string
    jobOfferId?: StringFilter<"JobCurriculumOutbox"> | string
    status?: EnumOutboxStatusFilter<"JobCurriculumOutbox"> | $Enums.OutboxStatus
    forceRegenerate?: BoolFilter<"JobCurriculumOutbox"> | boolean
    attempts?: IntFilter<"JobCurriculumOutbox"> | number
    lastError?: StringNullableFilter<"JobCurriculumOutbox"> | string | null
    createdAt?: DateTimeFilter<"JobCurriculumOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumOutbox"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }

  export type JobCurriculumOutboxOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
  }

  export type JobCurriculumOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobOfferId?: string
    AND?: JobCurriculumOutboxWhereInput | JobCurriculumOutboxWhereInput[]
    OR?: JobCurriculumOutboxWhereInput[]
    NOT?: JobCurriculumOutboxWhereInput | JobCurriculumOutboxWhereInput[]
    status?: EnumOutboxStatusFilter<"JobCurriculumOutbox"> | $Enums.OutboxStatus
    forceRegenerate?: BoolFilter<"JobCurriculumOutbox"> | boolean
    attempts?: IntFilter<"JobCurriculumOutbox"> | number
    lastError?: StringNullableFilter<"JobCurriculumOutbox"> | string | null
    createdAt?: DateTimeFilter<"JobCurriculumOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumOutbox"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }, "id" | "jobOfferId">

  export type JobCurriculumOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCurriculumOutboxCountOrderByAggregateInput
    _avg?: JobCurriculumOutboxAvgOrderByAggregateInput
    _max?: JobCurriculumOutboxMaxOrderByAggregateInput
    _min?: JobCurriculumOutboxMinOrderByAggregateInput
    _sum?: JobCurriculumOutboxSumOrderByAggregateInput
  }

  export type JobCurriculumOutboxScalarWhereWithAggregatesInput = {
    AND?: JobCurriculumOutboxScalarWhereWithAggregatesInput | JobCurriculumOutboxScalarWhereWithAggregatesInput[]
    OR?: JobCurriculumOutboxScalarWhereWithAggregatesInput[]
    NOT?: JobCurriculumOutboxScalarWhereWithAggregatesInput | JobCurriculumOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobCurriculumOutbox"> | string
    jobOfferId?: StringWithAggregatesFilter<"JobCurriculumOutbox"> | string
    status?: EnumOutboxStatusWithAggregatesFilter<"JobCurriculumOutbox"> | $Enums.OutboxStatus
    forceRegenerate?: BoolWithAggregatesFilter<"JobCurriculumOutbox"> | boolean
    attempts?: IntWithAggregatesFilter<"JobCurriculumOutbox"> | number
    lastError?: StringNullableWithAggregatesFilter<"JobCurriculumOutbox"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobCurriculumOutbox"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobCurriculumOutbox"> | Date | string
  }

  export type JobCurriculumPdfOutboxWhereInput = {
    AND?: JobCurriculumPdfOutboxWhereInput | JobCurriculumPdfOutboxWhereInput[]
    OR?: JobCurriculumPdfOutboxWhereInput[]
    NOT?: JobCurriculumPdfOutboxWhereInput | JobCurriculumPdfOutboxWhereInput[]
    id?: StringFilter<"JobCurriculumPdfOutbox"> | string
    jobOfferId?: StringFilter<"JobCurriculumPdfOutbox"> | string
    status?: EnumOutboxStatusFilter<"JobCurriculumPdfOutbox"> | $Enums.OutboxStatus
    templateName?: StringNullableFilter<"JobCurriculumPdfOutbox"> | string | null
    forceRegenerate?: BoolFilter<"JobCurriculumPdfOutbox"> | boolean
    attempts?: IntFilter<"JobCurriculumPdfOutbox"> | number
    lastError?: StringNullableFilter<"JobCurriculumPdfOutbox"> | string | null
    createdAt?: DateTimeFilter<"JobCurriculumPdfOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumPdfOutbox"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }

  export type JobCurriculumPdfOutboxOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    templateName?: SortOrderInput | SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
  }

  export type JobCurriculumPdfOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobOfferId?: string
    AND?: JobCurriculumPdfOutboxWhereInput | JobCurriculumPdfOutboxWhereInput[]
    OR?: JobCurriculumPdfOutboxWhereInput[]
    NOT?: JobCurriculumPdfOutboxWhereInput | JobCurriculumPdfOutboxWhereInput[]
    status?: EnumOutboxStatusFilter<"JobCurriculumPdfOutbox"> | $Enums.OutboxStatus
    templateName?: StringNullableFilter<"JobCurriculumPdfOutbox"> | string | null
    forceRegenerate?: BoolFilter<"JobCurriculumPdfOutbox"> | boolean
    attempts?: IntFilter<"JobCurriculumPdfOutbox"> | number
    lastError?: StringNullableFilter<"JobCurriculumPdfOutbox"> | string | null
    createdAt?: DateTimeFilter<"JobCurriculumPdfOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumPdfOutbox"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }, "id" | "jobOfferId">

  export type JobCurriculumPdfOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    templateName?: SortOrderInput | SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCurriculumPdfOutboxCountOrderByAggregateInput
    _avg?: JobCurriculumPdfOutboxAvgOrderByAggregateInput
    _max?: JobCurriculumPdfOutboxMaxOrderByAggregateInput
    _min?: JobCurriculumPdfOutboxMinOrderByAggregateInput
    _sum?: JobCurriculumPdfOutboxSumOrderByAggregateInput
  }

  export type JobCurriculumPdfOutboxScalarWhereWithAggregatesInput = {
    AND?: JobCurriculumPdfOutboxScalarWhereWithAggregatesInput | JobCurriculumPdfOutboxScalarWhereWithAggregatesInput[]
    OR?: JobCurriculumPdfOutboxScalarWhereWithAggregatesInput[]
    NOT?: JobCurriculumPdfOutboxScalarWhereWithAggregatesInput | JobCurriculumPdfOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobCurriculumPdfOutbox"> | string
    jobOfferId?: StringWithAggregatesFilter<"JobCurriculumPdfOutbox"> | string
    status?: EnumOutboxStatusWithAggregatesFilter<"JobCurriculumPdfOutbox"> | $Enums.OutboxStatus
    templateName?: StringNullableWithAggregatesFilter<"JobCurriculumPdfOutbox"> | string | null
    forceRegenerate?: BoolWithAggregatesFilter<"JobCurriculumPdfOutbox"> | boolean
    attempts?: IntWithAggregatesFilter<"JobCurriculumPdfOutbox"> | number
    lastError?: StringNullableWithAggregatesFilter<"JobCurriculumPdfOutbox"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobCurriculumPdfOutbox"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobCurriculumPdfOutbox"> | Date | string
  }

  export type JobEvaluationWhereInput = {
    AND?: JobEvaluationWhereInput | JobEvaluationWhereInput[]
    OR?: JobEvaluationWhereInput[]
    NOT?: JobEvaluationWhereInput | JobEvaluationWhereInput[]
    id?: StringFilter<"JobEvaluation"> | string
    jobOfferId?: StringFilter<"JobEvaluation"> | string
    status?: EnumEvaluationStatusFilter<"JobEvaluation"> | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFilter<"JobEvaluation"> | $Enums.EvaluatorModel
    summary?: StringNullableFilter<"JobEvaluation"> | string | null
    desireMatchScore?: FloatFilter<"JobEvaluation"> | number
    competenceScore?: FloatFilter<"JobEvaluation"> | number
    overallScore?: FloatFilter<"JobEvaluation"> | number
    priority?: EnumEvaluationPriorityFilter<"JobEvaluation"> | $Enums.EvaluationPriority
    desireMatchReasoning?: StringNullableFilter<"JobEvaluation"> | string | null
    competenceMatch?: StringFilter<"JobEvaluation"> | string
    detailedReasoning?: StringFilter<"JobEvaluation"> | string
    pros?: StringNullableFilter<"JobEvaluation"> | string | null
    cons?: StringNullableFilter<"JobEvaluation"> | string | null
    createdAt?: DateTimeFilter<"JobEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"JobEvaluation"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }

  export type JobEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    evaluatorModel?: SortOrder
    summary?: SortOrderInput | SortOrder
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
    priority?: SortOrder
    desireMatchReasoning?: SortOrderInput | SortOrder
    competenceMatch?: SortOrder
    detailedReasoning?: SortOrder
    pros?: SortOrderInput | SortOrder
    cons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
  }

  export type JobEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobOfferId?: string
    AND?: JobEvaluationWhereInput | JobEvaluationWhereInput[]
    OR?: JobEvaluationWhereInput[]
    NOT?: JobEvaluationWhereInput | JobEvaluationWhereInput[]
    status?: EnumEvaluationStatusFilter<"JobEvaluation"> | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFilter<"JobEvaluation"> | $Enums.EvaluatorModel
    summary?: StringNullableFilter<"JobEvaluation"> | string | null
    desireMatchScore?: FloatFilter<"JobEvaluation"> | number
    competenceScore?: FloatFilter<"JobEvaluation"> | number
    overallScore?: FloatFilter<"JobEvaluation"> | number
    priority?: EnumEvaluationPriorityFilter<"JobEvaluation"> | $Enums.EvaluationPriority
    desireMatchReasoning?: StringNullableFilter<"JobEvaluation"> | string | null
    competenceMatch?: StringFilter<"JobEvaluation"> | string
    detailedReasoning?: StringFilter<"JobEvaluation"> | string
    pros?: StringNullableFilter<"JobEvaluation"> | string | null
    cons?: StringNullableFilter<"JobEvaluation"> | string | null
    createdAt?: DateTimeFilter<"JobEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"JobEvaluation"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }, "id" | "jobOfferId">

  export type JobEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    evaluatorModel?: SortOrder
    summary?: SortOrderInput | SortOrder
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
    priority?: SortOrder
    desireMatchReasoning?: SortOrderInput | SortOrder
    competenceMatch?: SortOrder
    detailedReasoning?: SortOrder
    pros?: SortOrderInput | SortOrder
    cons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobEvaluationCountOrderByAggregateInput
    _avg?: JobEvaluationAvgOrderByAggregateInput
    _max?: JobEvaluationMaxOrderByAggregateInput
    _min?: JobEvaluationMinOrderByAggregateInput
    _sum?: JobEvaluationSumOrderByAggregateInput
  }

  export type JobEvaluationScalarWhereWithAggregatesInput = {
    AND?: JobEvaluationScalarWhereWithAggregatesInput | JobEvaluationScalarWhereWithAggregatesInput[]
    OR?: JobEvaluationScalarWhereWithAggregatesInput[]
    NOT?: JobEvaluationScalarWhereWithAggregatesInput | JobEvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobEvaluation"> | string
    jobOfferId?: StringWithAggregatesFilter<"JobEvaluation"> | string
    status?: EnumEvaluationStatusWithAggregatesFilter<"JobEvaluation"> | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelWithAggregatesFilter<"JobEvaluation"> | $Enums.EvaluatorModel
    summary?: StringNullableWithAggregatesFilter<"JobEvaluation"> | string | null
    desireMatchScore?: FloatWithAggregatesFilter<"JobEvaluation"> | number
    competenceScore?: FloatWithAggregatesFilter<"JobEvaluation"> | number
    overallScore?: FloatWithAggregatesFilter<"JobEvaluation"> | number
    priority?: EnumEvaluationPriorityWithAggregatesFilter<"JobEvaluation"> | $Enums.EvaluationPriority
    desireMatchReasoning?: StringNullableWithAggregatesFilter<"JobEvaluation"> | string | null
    competenceMatch?: StringWithAggregatesFilter<"JobEvaluation"> | string
    detailedReasoning?: StringWithAggregatesFilter<"JobEvaluation"> | string
    pros?: StringNullableWithAggregatesFilter<"JobEvaluation"> | string | null
    cons?: StringNullableWithAggregatesFilter<"JobEvaluation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobEvaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobEvaluation"> | Date | string
  }

  export type JobEvaluationOutboxWhereInput = {
    AND?: JobEvaluationOutboxWhereInput | JobEvaluationOutboxWhereInput[]
    OR?: JobEvaluationOutboxWhereInput[]
    NOT?: JobEvaluationOutboxWhereInput | JobEvaluationOutboxWhereInput[]
    id?: StringFilter<"JobEvaluationOutbox"> | string
    jobOfferId?: StringFilter<"JobEvaluationOutbox"> | string
    status?: EnumOutboxStatusFilter<"JobEvaluationOutbox"> | $Enums.OutboxStatus
    attempts?: IntFilter<"JobEvaluationOutbox"> | number
    lastError?: StringNullableFilter<"JobEvaluationOutbox"> | string | null
    createdAt?: DateTimeFilter<"JobEvaluationOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"JobEvaluationOutbox"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }

  export type JobEvaluationOutboxOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
  }

  export type JobEvaluationOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobOfferId?: string
    AND?: JobEvaluationOutboxWhereInput | JobEvaluationOutboxWhereInput[]
    OR?: JobEvaluationOutboxWhereInput[]
    NOT?: JobEvaluationOutboxWhereInput | JobEvaluationOutboxWhereInput[]
    status?: EnumOutboxStatusFilter<"JobEvaluationOutbox"> | $Enums.OutboxStatus
    attempts?: IntFilter<"JobEvaluationOutbox"> | number
    lastError?: StringNullableFilter<"JobEvaluationOutbox"> | string | null
    createdAt?: DateTimeFilter<"JobEvaluationOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"JobEvaluationOutbox"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }, "id" | "jobOfferId">

  export type JobEvaluationOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobEvaluationOutboxCountOrderByAggregateInput
    _avg?: JobEvaluationOutboxAvgOrderByAggregateInput
    _max?: JobEvaluationOutboxMaxOrderByAggregateInput
    _min?: JobEvaluationOutboxMinOrderByAggregateInput
    _sum?: JobEvaluationOutboxSumOrderByAggregateInput
  }

  export type JobEvaluationOutboxScalarWhereWithAggregatesInput = {
    AND?: JobEvaluationOutboxScalarWhereWithAggregatesInput | JobEvaluationOutboxScalarWhereWithAggregatesInput[]
    OR?: JobEvaluationOutboxScalarWhereWithAggregatesInput[]
    NOT?: JobEvaluationOutboxScalarWhereWithAggregatesInput | JobEvaluationOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobEvaluationOutbox"> | string
    jobOfferId?: StringWithAggregatesFilter<"JobEvaluationOutbox"> | string
    status?: EnumOutboxStatusWithAggregatesFilter<"JobEvaluationOutbox"> | $Enums.OutboxStatus
    attempts?: IntWithAggregatesFilter<"JobEvaluationOutbox"> | number
    lastError?: StringNullableWithAggregatesFilter<"JobEvaluationOutbox"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobEvaluationOutbox"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobEvaluationOutbox"> | Date | string
  }

  export type JobOfferWhereInput = {
    AND?: JobOfferWhereInput | JobOfferWhereInput[]
    OR?: JobOfferWhereInput[]
    NOT?: JobOfferWhereInput | JobOfferWhereInput[]
    id?: StringFilter<"JobOffer"> | string
    externalId?: StringNullableFilter<"JobOffer"> | string | null
    source?: EnumJobSourceFilter<"JobOffer"> | $Enums.JobSource
    url?: StringFilter<"JobOffer"> | string
    title?: StringFilter<"JobOffer"> | string
    location?: StringNullableFilter<"JobOffer"> | string | null
    remoteType?: EnumRemoteTypeFilter<"JobOffer"> | $Enums.RemoteType
    rawDescription?: StringFilter<"JobOffer"> | string
    descriptionMarkdown?: StringNullableFilter<"JobOffer"> | string | null
    datePosted?: DateTimeNullableFilter<"JobOffer"> | Date | string | null
    companyId?: StringFilter<"JobOffer"> | string
    salaryMin?: FloatNullableFilter<"JobOffer"> | number | null
    salaryMax?: FloatNullableFilter<"JobOffer"> | number | null
    currency?: StringNullableFilter<"JobOffer"> | string | null
    contractType?: StringNullableFilter<"JobOffer"> | string | null
    roleCategory?: StringNullableFilter<"JobOffer"> | string | null
    experienceLevel?: EnumExperienceLevelFilter<"JobOffer"> | $Enums.ExperienceLevel
    skills?: StringNullableFilter<"JobOffer"> | string | null
    status?: EnumApplicationStatusFilter<"JobOffer"> | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFilter<"JobOffer"> | $Enums.JobEvaluationProcessStatus
    notes?: StringNullableFilter<"JobOffer"> | string | null
    createdAt?: DateTimeFilter<"JobOffer"> | Date | string
    updatedAt?: DateTimeFilter<"JobOffer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    evaluation?: XOR<JobEvaluationNullableScalarRelationFilter, JobEvaluationWhereInput> | null
    evaluationOutbox?: XOR<JobEvaluationOutboxNullableScalarRelationFilter, JobEvaluationOutboxWhereInput> | null
    curriculum?: XOR<JobCurriculumNullableScalarRelationFilter, JobCurriculumWhereInput> | null
    curriculumOutbox?: XOR<JobCurriculumOutboxNullableScalarRelationFilter, JobCurriculumOutboxWhereInput> | null
    curriculumPdfOutbox?: XOR<JobCurriculumPdfOutboxNullableScalarRelationFilter, JobCurriculumPdfOutboxWhereInput> | null
    statusHistory?: JobStatusHistoryListRelationFilter
  }

  export type JobOfferOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    location?: SortOrderInput | SortOrder
    remoteType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrderInput | SortOrder
    datePosted?: SortOrderInput | SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    contractType?: SortOrderInput | SortOrder
    roleCategory?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    skills?: SortOrderInput | SortOrder
    status?: SortOrder
    evaluationProcessStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    evaluation?: JobEvaluationOrderByWithRelationInput
    evaluationOutbox?: JobEvaluationOutboxOrderByWithRelationInput
    curriculum?: JobCurriculumOrderByWithRelationInput
    curriculumOutbox?: JobCurriculumOutboxOrderByWithRelationInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxOrderByWithRelationInput
    statusHistory?: JobStatusHistoryOrderByRelationAggregateInput
  }

  export type JobOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    source_externalId?: JobOfferSourceExternalIdCompoundUniqueInput
    AND?: JobOfferWhereInput | JobOfferWhereInput[]
    OR?: JobOfferWhereInput[]
    NOT?: JobOfferWhereInput | JobOfferWhereInput[]
    externalId?: StringNullableFilter<"JobOffer"> | string | null
    source?: EnumJobSourceFilter<"JobOffer"> | $Enums.JobSource
    title?: StringFilter<"JobOffer"> | string
    location?: StringNullableFilter<"JobOffer"> | string | null
    remoteType?: EnumRemoteTypeFilter<"JobOffer"> | $Enums.RemoteType
    rawDescription?: StringFilter<"JobOffer"> | string
    descriptionMarkdown?: StringNullableFilter<"JobOffer"> | string | null
    datePosted?: DateTimeNullableFilter<"JobOffer"> | Date | string | null
    companyId?: StringFilter<"JobOffer"> | string
    salaryMin?: FloatNullableFilter<"JobOffer"> | number | null
    salaryMax?: FloatNullableFilter<"JobOffer"> | number | null
    currency?: StringNullableFilter<"JobOffer"> | string | null
    contractType?: StringNullableFilter<"JobOffer"> | string | null
    roleCategory?: StringNullableFilter<"JobOffer"> | string | null
    experienceLevel?: EnumExperienceLevelFilter<"JobOffer"> | $Enums.ExperienceLevel
    skills?: StringNullableFilter<"JobOffer"> | string | null
    status?: EnumApplicationStatusFilter<"JobOffer"> | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFilter<"JobOffer"> | $Enums.JobEvaluationProcessStatus
    notes?: StringNullableFilter<"JobOffer"> | string | null
    createdAt?: DateTimeFilter<"JobOffer"> | Date | string
    updatedAt?: DateTimeFilter<"JobOffer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    evaluation?: XOR<JobEvaluationNullableScalarRelationFilter, JobEvaluationWhereInput> | null
    evaluationOutbox?: XOR<JobEvaluationOutboxNullableScalarRelationFilter, JobEvaluationOutboxWhereInput> | null
    curriculum?: XOR<JobCurriculumNullableScalarRelationFilter, JobCurriculumWhereInput> | null
    curriculumOutbox?: XOR<JobCurriculumOutboxNullableScalarRelationFilter, JobCurriculumOutboxWhereInput> | null
    curriculumPdfOutbox?: XOR<JobCurriculumPdfOutboxNullableScalarRelationFilter, JobCurriculumPdfOutboxWhereInput> | null
    statusHistory?: JobStatusHistoryListRelationFilter
  }, "id" | "url" | "source_externalId">

  export type JobOfferOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    location?: SortOrderInput | SortOrder
    remoteType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrderInput | SortOrder
    datePosted?: SortOrderInput | SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    contractType?: SortOrderInput | SortOrder
    roleCategory?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    skills?: SortOrderInput | SortOrder
    status?: SortOrder
    evaluationProcessStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobOfferCountOrderByAggregateInput
    _avg?: JobOfferAvgOrderByAggregateInput
    _max?: JobOfferMaxOrderByAggregateInput
    _min?: JobOfferMinOrderByAggregateInput
    _sum?: JobOfferSumOrderByAggregateInput
  }

  export type JobOfferScalarWhereWithAggregatesInput = {
    AND?: JobOfferScalarWhereWithAggregatesInput | JobOfferScalarWhereWithAggregatesInput[]
    OR?: JobOfferScalarWhereWithAggregatesInput[]
    NOT?: JobOfferScalarWhereWithAggregatesInput | JobOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobOffer"> | string
    externalId?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    source?: EnumJobSourceWithAggregatesFilter<"JobOffer"> | $Enums.JobSource
    url?: StringWithAggregatesFilter<"JobOffer"> | string
    title?: StringWithAggregatesFilter<"JobOffer"> | string
    location?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    remoteType?: EnumRemoteTypeWithAggregatesFilter<"JobOffer"> | $Enums.RemoteType
    rawDescription?: StringWithAggregatesFilter<"JobOffer"> | string
    descriptionMarkdown?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    datePosted?: DateTimeNullableWithAggregatesFilter<"JobOffer"> | Date | string | null
    companyId?: StringWithAggregatesFilter<"JobOffer"> | string
    salaryMin?: FloatNullableWithAggregatesFilter<"JobOffer"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"JobOffer"> | number | null
    currency?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    contractType?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    roleCategory?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    experienceLevel?: EnumExperienceLevelWithAggregatesFilter<"JobOffer"> | $Enums.ExperienceLevel
    skills?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    status?: EnumApplicationStatusWithAggregatesFilter<"JobOffer"> | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusWithAggregatesFilter<"JobOffer"> | $Enums.JobEvaluationProcessStatus
    notes?: StringNullableWithAggregatesFilter<"JobOffer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobOffer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobOffer"> | Date | string
  }

  export type JobStatusHistoryWhereInput = {
    AND?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[]
    OR?: JobStatusHistoryWhereInput[]
    NOT?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[]
    id?: StringFilter<"JobStatusHistory"> | string
    jobOfferId?: StringFilter<"JobStatusHistory"> | string
    fromStatus?: EnumApplicationStatusNullableFilter<"JobStatusHistory"> | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFilter<"JobStatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"JobStatusHistory"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }

  export type JobStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
    jobOffer?: JobOfferOrderByWithRelationInput
  }

  export type JobStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[]
    OR?: JobStatusHistoryWhereInput[]
    NOT?: JobStatusHistoryWhereInput | JobStatusHistoryWhereInput[]
    jobOfferId?: StringFilter<"JobStatusHistory"> | string
    fromStatus?: EnumApplicationStatusNullableFilter<"JobStatusHistory"> | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFilter<"JobStatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"JobStatusHistory"> | Date | string
    jobOffer?: XOR<JobOfferScalarRelationFilter, JobOfferWhereInput>
  }, "id">

  export type JobStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
    _count?: JobStatusHistoryCountOrderByAggregateInput
    _max?: JobStatusHistoryMaxOrderByAggregateInput
    _min?: JobStatusHistoryMinOrderByAggregateInput
  }

  export type JobStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: JobStatusHistoryScalarWhereWithAggregatesInput | JobStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: JobStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: JobStatusHistoryScalarWhereWithAggregatesInput | JobStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobStatusHistory"> | string
    jobOfferId?: StringWithAggregatesFilter<"JobStatusHistory"> | string
    fromStatus?: EnumApplicationStatusNullableWithAggregatesFilter<"JobStatusHistory"> | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusWithAggregatesFilter<"JobStatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"JobStatusHistory"> | Date | string
  }

  export type SyncStateWhereInput = {
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    source?: StringFilter<"SyncState"> | string
    lastSyncedAt?: DateTimeFilter<"SyncState"> | Date | string
    totalJobsExtracted?: IntFilter<"SyncState"> | number
    lastStatus?: StringFilter<"SyncState"> | string
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }

  export type SyncStateOrderByWithRelationInput = {
    source?: SortOrder
    lastSyncedAt?: SortOrder
    totalJobsExtracted?: SortOrder
    lastStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateWhereUniqueInput = Prisma.AtLeast<{
    source?: string
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    lastSyncedAt?: DateTimeFilter<"SyncState"> | Date | string
    totalJobsExtracted?: IntFilter<"SyncState"> | number
    lastStatus?: StringFilter<"SyncState"> | string
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }, "source">

  export type SyncStateOrderByWithAggregationInput = {
    source?: SortOrder
    lastSyncedAt?: SortOrder
    totalJobsExtracted?: SortOrder
    lastStatus?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncStateCountOrderByAggregateInput
    _avg?: SyncStateAvgOrderByAggregateInput
    _max?: SyncStateMaxOrderByAggregateInput
    _min?: SyncStateMinOrderByAggregateInput
    _sum?: SyncStateSumOrderByAggregateInput
  }

  export type SyncStateScalarWhereWithAggregatesInput = {
    AND?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    OR?: SyncStateScalarWhereWithAggregatesInput[]
    NOT?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    source?: StringWithAggregatesFilter<"SyncState"> | string
    lastSyncedAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
    totalJobsExtracted?: IntWithAggregatesFilter<"SyncState"> | number
    lastStatus?: StringWithAggregatesFilter<"SyncState"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    resumeText?: StringNullableFilter<"UserProfile"> | string | null
    searchCriteriaText?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    resumeText?: SortOrderInput | SortOrder
    searchCriteriaText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    resumeText?: StringNullableFilter<"UserProfile"> | string | null
    searchCriteriaText?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    resumeText?: SortOrderInput | SortOrder
    searchCriteriaText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    resumeText?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    searchCriteriaText?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    linkedinUrl?: string | null
    industry?: string | null
    fundingStage?: string | null
    companySizeRange?: string | null
    employeeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffers?: JobOfferCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    linkedinUrl?: string | null
    industry?: string | null
    fundingStage?: string | null
    companySizeRange?: string | null
    employeeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffers?: JobOfferUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    fundingStage?: NullableStringFieldUpdateOperationsInput | string | null
    companySizeRange?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffers?: JobOfferUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    fundingStage?: NullableStringFieldUpdateOperationsInput | string | null
    companySizeRange?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffers?: JobOfferUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    linkedinUrl?: string | null
    industry?: string | null
    fundingStage?: string | null
    companySizeRange?: string | null
    employeeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    fundingStage?: NullableStringFieldUpdateOperationsInput | string | null
    companySizeRange?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    fundingStage?: NullableStringFieldUpdateOperationsInput | string | null
    companySizeRange?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumCreateInput = {
    id?: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutCurriculumInput
    work?: JobCurriculumWorkCreateNestedManyWithoutCurriculumInput
    projects?: JobCurriculumProjectCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumUncheckedCreateInput = {
    id?: string
    jobOfferId: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work?: JobCurriculumWorkUncheckedCreateNestedManyWithoutCurriculumInput
    projects?: JobCurriculumProjectUncheckedCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationUncheckedCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutCurriculumNestedInput
    work?: JobCurriculumWorkUpdateManyWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumCreateManyInput = {
    id?: string
    jobOfferId: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumWorkCreateInput = {
    id?: string
    name: string
    position: string
    summary: string
    include?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    curriculum: JobCurriculumCreateNestedOneWithoutWorkInput
  }

  export type JobCurriculumWorkUncheckedCreateInput = {
    id?: string
    curriculumId: string
    name: string
    position: string
    summary: string
    include?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumWorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curriculum?: JobCurriculumUpdateOneRequiredWithoutWorkNestedInput
  }

  export type JobCurriculumWorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculumId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumWorkCreateManyInput = {
    id?: string
    curriculumId: string
    name: string
    position: string
    summary: string
    include?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumWorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumWorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculumId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumProjectCreateInput = {
    id?: string
    name: string
    description: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    curriculum: JobCurriculumCreateNestedOneWithoutProjectsInput
  }

  export type JobCurriculumProjectUncheckedCreateInput = {
    id?: string
    curriculumId: string
    name: string
    description: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curriculum?: JobCurriculumUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type JobCurriculumProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculumId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumProjectCreateManyInput = {
    id?: string
    curriculumId: string
    name: string
    description: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculumId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPublicationCreateInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    curriculum: JobCurriculumCreateNestedOneWithoutPublicationsInput
  }

  export type JobCurriculumPublicationUncheckedCreateInput = {
    id?: string
    curriculumId: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curriculum?: JobCurriculumUpdateOneRequiredWithoutPublicationsNestedInput
  }

  export type JobCurriculumPublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculumId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPublicationCreateManyInput = {
    id?: string
    curriculumId: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    curriculumId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumOutboxCreateInput = {
    id?: string
    status?: $Enums.OutboxStatus
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutCurriculumOutboxInput
  }

  export type JobCurriculumOutboxUncheckedCreateInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.OutboxStatus
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutCurriculumOutboxNestedInput
  }

  export type JobCurriculumOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumOutboxCreateManyInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.OutboxStatus
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPdfOutboxCreateInput = {
    id?: string
    status?: $Enums.OutboxStatus
    templateName?: string | null
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutCurriculumPdfOutboxInput
  }

  export type JobCurriculumPdfOutboxUncheckedCreateInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.OutboxStatus
    templateName?: string | null
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPdfOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutCurriculumPdfOutboxNestedInput
  }

  export type JobCurriculumPdfOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPdfOutboxCreateManyInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.OutboxStatus
    templateName?: string | null
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPdfOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPdfOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationCreateInput = {
    id?: string
    status?: $Enums.EvaluationStatus
    evaluatorModel?: $Enums.EvaluatorModel
    summary?: string | null
    desireMatchScore?: number
    competenceScore?: number
    overallScore?: number
    priority: $Enums.EvaluationPriority
    desireMatchReasoning?: string | null
    competenceMatch: string
    detailedReasoning: string
    pros?: string | null
    cons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutEvaluationInput
  }

  export type JobEvaluationUncheckedCreateInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.EvaluationStatus
    evaluatorModel?: $Enums.EvaluatorModel
    summary?: string | null
    desireMatchScore?: number
    competenceScore?: number
    overallScore?: number
    priority: $Enums.EvaluationPriority
    desireMatchReasoning?: string | null
    competenceMatch: string
    detailedReasoning: string
    pros?: string | null
    cons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFieldUpdateOperationsInput | $Enums.EvaluatorModel
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    desireMatchScore?: FloatFieldUpdateOperationsInput | number
    competenceScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    priority?: EnumEvaluationPriorityFieldUpdateOperationsInput | $Enums.EvaluationPriority
    desireMatchReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    competenceMatch?: StringFieldUpdateOperationsInput | string
    detailedReasoning?: StringFieldUpdateOperationsInput | string
    pros?: NullableStringFieldUpdateOperationsInput | string | null
    cons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type JobEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFieldUpdateOperationsInput | $Enums.EvaluatorModel
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    desireMatchScore?: FloatFieldUpdateOperationsInput | number
    competenceScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    priority?: EnumEvaluationPriorityFieldUpdateOperationsInput | $Enums.EvaluationPriority
    desireMatchReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    competenceMatch?: StringFieldUpdateOperationsInput | string
    detailedReasoning?: StringFieldUpdateOperationsInput | string
    pros?: NullableStringFieldUpdateOperationsInput | string | null
    cons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationCreateManyInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.EvaluationStatus
    evaluatorModel?: $Enums.EvaluatorModel
    summary?: string | null
    desireMatchScore?: number
    competenceScore?: number
    overallScore?: number
    priority: $Enums.EvaluationPriority
    desireMatchReasoning?: string | null
    competenceMatch: string
    detailedReasoning: string
    pros?: string | null
    cons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFieldUpdateOperationsInput | $Enums.EvaluatorModel
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    desireMatchScore?: FloatFieldUpdateOperationsInput | number
    competenceScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    priority?: EnumEvaluationPriorityFieldUpdateOperationsInput | $Enums.EvaluationPriority
    desireMatchReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    competenceMatch?: StringFieldUpdateOperationsInput | string
    detailedReasoning?: StringFieldUpdateOperationsInput | string
    pros?: NullableStringFieldUpdateOperationsInput | string | null
    cons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFieldUpdateOperationsInput | $Enums.EvaluatorModel
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    desireMatchScore?: FloatFieldUpdateOperationsInput | number
    competenceScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    priority?: EnumEvaluationPriorityFieldUpdateOperationsInput | $Enums.EvaluationPriority
    desireMatchReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    competenceMatch?: StringFieldUpdateOperationsInput | string
    detailedReasoning?: StringFieldUpdateOperationsInput | string
    pros?: NullableStringFieldUpdateOperationsInput | string | null
    cons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationOutboxCreateInput = {
    id?: string
    status?: $Enums.OutboxStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutEvaluationOutboxInput
  }

  export type JobEvaluationOutboxUncheckedCreateInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.OutboxStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutEvaluationOutboxNestedInput
  }

  export type JobEvaluationOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationOutboxCreateManyInput = {
    id?: string
    jobOfferId: string
    status?: $Enums.OutboxStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOfferCreateInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferCreateManyInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryCreateInput = {
    id?: string
    fromStatus?: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutStatusHistoryInput
  }

  export type JobStatusHistoryUncheckedCreateInput = {
    id?: string
    jobOfferId: string
    fromStatus?: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type JobStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type JobStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryCreateManyInput = {
    id?: string
    jobOfferId: string
    fromStatus?: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type JobStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateInput = {
    source: string
    lastSyncedAt?: Date | string
    totalJobsExtracted?: number
    lastStatus?: string
    updatedAt?: Date | string
  }

  export type SyncStateUncheckedCreateInput = {
    source: string
    lastSyncedAt?: Date | string
    totalJobsExtracted?: number
    lastStatus?: string
    updatedAt?: Date | string
  }

  export type SyncStateUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalJobsExtracted?: IntFieldUpdateOperationsInput | number
    lastStatus?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalJobsExtracted?: IntFieldUpdateOperationsInput | number
    lastStatus?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateManyInput = {
    source: string
    lastSyncedAt?: Date | string
    totalJobsExtracted?: number
    lastStatus?: string
    updatedAt?: Date | string
  }

  export type SyncStateUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalJobsExtracted?: IntFieldUpdateOperationsInput | number
    lastStatus?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateManyInput = {
    source?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalJobsExtracted?: IntFieldUpdateOperationsInput | number
    lastStatus?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    resumeText?: string | null
    searchCriteriaText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    resumeText?: string | null
    searchCriteriaText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    searchCriteriaText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    searchCriteriaText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    resumeText?: string | null
    searchCriteriaText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    searchCriteriaText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    searchCriteriaText?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type JobOfferListRelationFilter = {
    every?: JobOfferWhereInput
    some?: JobOfferWhereInput
    none?: JobOfferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrder
    linkedinUrl?: SortOrder
    industry?: SortOrder
    fundingStage?: SortOrder
    companySizeRange?: SortOrder
    employeeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    employeeCount?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrder
    linkedinUrl?: SortOrder
    industry?: SortOrder
    fundingStage?: SortOrder
    companySizeRange?: SortOrder
    employeeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    websiteUrl?: SortOrder
    linkedinUrl?: SortOrder
    industry?: SortOrder
    fundingStage?: SortOrder
    companySizeRange?: SortOrder
    employeeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    employeeCount?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumJobCurriculumPdfStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCurriculumPdfStatus | EnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel> | $Enums.JobCurriculumPdfStatus
  }

  export type JobOfferScalarRelationFilter = {
    is?: JobOfferWhereInput
    isNot?: JobOfferWhereInput
  }

  export type JobCurriculumWorkListRelationFilter = {
    every?: JobCurriculumWorkWhereInput
    some?: JobCurriculumWorkWhereInput
    none?: JobCurriculumWorkWhereInput
  }

  export type JobCurriculumProjectListRelationFilter = {
    every?: JobCurriculumProjectWhereInput
    some?: JobCurriculumProjectWhereInput
    none?: JobCurriculumProjectWhereInput
  }

  export type JobCurriculumPublicationListRelationFilter = {
    every?: JobCurriculumPublicationWhereInput
    some?: JobCurriculumPublicationWhereInput
    none?: JobCurriculumPublicationWhereInput
  }

  export type JobCurriculumWorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCurriculumProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCurriculumPublicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCurriculumCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    storageKey?: SortOrder
    pdfStatus?: SortOrder
    explanation?: SortOrder
    customLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    storageKey?: SortOrder
    pdfStatus?: SortOrder
    explanation?: SortOrder
    customLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    storageKey?: SortOrder
    pdfStatus?: SortOrder
    explanation?: SortOrder
    customLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJobCurriculumPdfStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCurriculumPdfStatus | EnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobCurriculumPdfStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobCurriculumPdfStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel>
    _max?: NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type JobCurriculumScalarRelationFilter = {
    is?: JobCurriculumWhereInput
    isNot?: JobCurriculumWhereInput
  }

  export type JobCurriculumWorkCountOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    summary?: SortOrder
    include?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumWorkAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type JobCurriculumWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    summary?: SortOrder
    include?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumWorkMinOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    summary?: SortOrder
    include?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumWorkSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type JobCurriculumProjectCountOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumProjectAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type JobCurriculumProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumProjectMinOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumProjectSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type JobCurriculumPublicationCountOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumPublicationAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type JobCurriculumPublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumPublicationMinOrderByAggregateInput = {
    id?: SortOrder
    curriculumId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumPublicationSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumOutboxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusFilter<$PrismaModel> | $Enums.OutboxStatus
  }

  export type JobCurriculumOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumOutboxAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type JobCurriculumOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumOutboxSumOrderByAggregateInput = {
    attempts?: SortOrder
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

  export type JobCurriculumPdfOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    templateName?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumPdfOutboxAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type JobCurriculumPdfOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    templateName?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumPdfOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    templateName?: SortOrder
    forceRegenerate?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobCurriculumPdfOutboxSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumEvaluationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusFilter<$PrismaModel> | $Enums.EvaluationStatus
  }

  export type EnumEvaluatorModelFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluatorModel | EnumEvaluatorModelFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluatorModelFilter<$PrismaModel> | $Enums.EvaluatorModel
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumEvaluationPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationPriority | EnumEvaluationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationPriorityFilter<$PrismaModel> | $Enums.EvaluationPriority
  }

  export type JobEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    evaluatorModel?: SortOrder
    summary?: SortOrder
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
    priority?: SortOrder
    desireMatchReasoning?: SortOrder
    competenceMatch?: SortOrder
    detailedReasoning?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobEvaluationAvgOrderByAggregateInput = {
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
  }

  export type JobEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    evaluatorModel?: SortOrder
    summary?: SortOrder
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
    priority?: SortOrder
    desireMatchReasoning?: SortOrder
    competenceMatch?: SortOrder
    detailedReasoning?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    evaluatorModel?: SortOrder
    summary?: SortOrder
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
    priority?: SortOrder
    desireMatchReasoning?: SortOrder
    competenceMatch?: SortOrder
    detailedReasoning?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobEvaluationSumOrderByAggregateInput = {
    desireMatchScore?: SortOrder
    competenceScore?: SortOrder
    overallScore?: SortOrder
  }

  export type EnumEvaluationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationStatusFilter<$PrismaModel>
    _max?: NestedEnumEvaluationStatusFilter<$PrismaModel>
  }

  export type EnumEvaluatorModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluatorModel | EnumEvaluatorModelFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluatorModelWithAggregatesFilter<$PrismaModel> | $Enums.EvaluatorModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluatorModelFilter<$PrismaModel>
    _max?: NestedEnumEvaluatorModelFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEvaluationPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationPriority | EnumEvaluationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationPriorityWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationPriorityFilter<$PrismaModel>
    _max?: NestedEnumEvaluationPriorityFilter<$PrismaModel>
  }

  export type JobEvaluationOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobEvaluationOutboxAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type JobEvaluationOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobEvaluationOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobEvaluationOutboxSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumJobSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.JobSource | EnumJobSourceFieldRefInput<$PrismaModel>
    in?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumJobSourceFilter<$PrismaModel> | $Enums.JobSource
  }

  export type EnumRemoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | EnumRemoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRemoteTypeFilter<$PrismaModel> | $Enums.RemoteType
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

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type EnumJobEvaluationProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobEvaluationProcessStatus | EnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel> | $Enums.JobEvaluationProcessStatus
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type JobEvaluationNullableScalarRelationFilter = {
    is?: JobEvaluationWhereInput | null
    isNot?: JobEvaluationWhereInput | null
  }

  export type JobEvaluationOutboxNullableScalarRelationFilter = {
    is?: JobEvaluationOutboxWhereInput | null
    isNot?: JobEvaluationOutboxWhereInput | null
  }

  export type JobCurriculumNullableScalarRelationFilter = {
    is?: JobCurriculumWhereInput | null
    isNot?: JobCurriculumWhereInput | null
  }

  export type JobCurriculumOutboxNullableScalarRelationFilter = {
    is?: JobCurriculumOutboxWhereInput | null
    isNot?: JobCurriculumOutboxWhereInput | null
  }

  export type JobCurriculumPdfOutboxNullableScalarRelationFilter = {
    is?: JobCurriculumPdfOutboxWhereInput | null
    isNot?: JobCurriculumPdfOutboxWhereInput | null
  }

  export type JobStatusHistoryListRelationFilter = {
    every?: JobStatusHistoryWhereInput
    some?: JobStatusHistoryWhereInput
    none?: JobStatusHistoryWhereInput
  }

  export type JobStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOfferSourceExternalIdCompoundUniqueInput = {
    source: $Enums.JobSource
    externalId: string
  }

  export type JobOfferCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    location?: SortOrder
    remoteType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrder
    datePosted?: SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    contractType?: SortOrder
    roleCategory?: SortOrder
    experienceLevel?: SortOrder
    skills?: SortOrder
    status?: SortOrder
    evaluationProcessStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOfferAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    location?: SortOrder
    remoteType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrder
    datePosted?: SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    contractType?: SortOrder
    roleCategory?: SortOrder
    experienceLevel?: SortOrder
    skills?: SortOrder
    status?: SortOrder
    evaluationProcessStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOfferMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    location?: SortOrder
    remoteType?: SortOrder
    rawDescription?: SortOrder
    descriptionMarkdown?: SortOrder
    datePosted?: SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    contractType?: SortOrder
    roleCategory?: SortOrder
    experienceLevel?: SortOrder
    skills?: SortOrder
    status?: SortOrder
    evaluationProcessStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOfferSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type EnumJobSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobSource | EnumJobSourceFieldRefInput<$PrismaModel>
    in?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumJobSourceWithAggregatesFilter<$PrismaModel> | $Enums.JobSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobSourceFilter<$PrismaModel>
    _max?: NestedEnumJobSourceFilter<$PrismaModel>
  }

  export type EnumRemoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | EnumRemoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRemoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.RemoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemoteTypeFilter<$PrismaModel>
    _max?: NestedEnumRemoteTypeFilter<$PrismaModel>
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

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumJobEvaluationProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobEvaluationProcessStatus | EnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobEvaluationProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobEvaluationProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel>
  }

  export type EnumApplicationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableFilter<$PrismaModel> | $Enums.ApplicationStatus | null
  }

  export type JobStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type JobStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type JobStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    jobOfferId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
  }

  export type SyncStateCountOrderByAggregateInput = {
    source?: SortOrder
    lastSyncedAt?: SortOrder
    totalJobsExtracted?: SortOrder
    lastStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateAvgOrderByAggregateInput = {
    totalJobsExtracted?: SortOrder
  }

  export type SyncStateMaxOrderByAggregateInput = {
    source?: SortOrder
    lastSyncedAt?: SortOrder
    totalJobsExtracted?: SortOrder
    lastStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateMinOrderByAggregateInput = {
    source?: SortOrder
    lastSyncedAt?: SortOrder
    totalJobsExtracted?: SortOrder
    lastStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateSumOrderByAggregateInput = {
    totalJobsExtracted?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    resumeText?: SortOrder
    searchCriteriaText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeText?: SortOrder
    searchCriteriaText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    resumeText?: SortOrder
    searchCriteriaText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOfferCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobOfferCreateWithoutCompanyInput, JobOfferUncheckedCreateWithoutCompanyInput> | JobOfferCreateWithoutCompanyInput[] | JobOfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutCompanyInput | JobOfferCreateOrConnectWithoutCompanyInput[]
    createMany?: JobOfferCreateManyCompanyInputEnvelope
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
  }

  export type JobOfferUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobOfferCreateWithoutCompanyInput, JobOfferUncheckedCreateWithoutCompanyInput> | JobOfferCreateWithoutCompanyInput[] | JobOfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutCompanyInput | JobOfferCreateOrConnectWithoutCompanyInput[]
    createMany?: JobOfferCreateManyCompanyInputEnvelope
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobOfferUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobOfferCreateWithoutCompanyInput, JobOfferUncheckedCreateWithoutCompanyInput> | JobOfferCreateWithoutCompanyInput[] | JobOfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutCompanyInput | JobOfferCreateOrConnectWithoutCompanyInput[]
    upsert?: JobOfferUpsertWithWhereUniqueWithoutCompanyInput | JobOfferUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobOfferCreateManyCompanyInputEnvelope
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    update?: JobOfferUpdateWithWhereUniqueWithoutCompanyInput | JobOfferUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobOfferUpdateManyWithWhereWithoutCompanyInput | JobOfferUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
  }

  export type JobOfferUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobOfferCreateWithoutCompanyInput, JobOfferUncheckedCreateWithoutCompanyInput> | JobOfferCreateWithoutCompanyInput[] | JobOfferUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobOfferCreateOrConnectWithoutCompanyInput | JobOfferCreateOrConnectWithoutCompanyInput[]
    upsert?: JobOfferUpsertWithWhereUniqueWithoutCompanyInput | JobOfferUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobOfferCreateManyCompanyInputEnvelope
    set?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    disconnect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    delete?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    connect?: JobOfferWhereUniqueInput | JobOfferWhereUniqueInput[]
    update?: JobOfferUpdateWithWhereUniqueWithoutCompanyInput | JobOfferUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobOfferUpdateManyWithWhereWithoutCompanyInput | JobOfferUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
  }

  export type JobOfferCreateNestedOneWithoutCurriculumInput = {
    create?: XOR<JobOfferCreateWithoutCurriculumInput, JobOfferUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutCurriculumInput
    connect?: JobOfferWhereUniqueInput
  }

  export type JobCurriculumWorkCreateNestedManyWithoutCurriculumInput = {
    create?: XOR<JobCurriculumWorkCreateWithoutCurriculumInput, JobCurriculumWorkUncheckedCreateWithoutCurriculumInput> | JobCurriculumWorkCreateWithoutCurriculumInput[] | JobCurriculumWorkUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumWorkCreateOrConnectWithoutCurriculumInput | JobCurriculumWorkCreateOrConnectWithoutCurriculumInput[]
    createMany?: JobCurriculumWorkCreateManyCurriculumInputEnvelope
    connect?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
  }

  export type JobCurriculumProjectCreateNestedManyWithoutCurriculumInput = {
    create?: XOR<JobCurriculumProjectCreateWithoutCurriculumInput, JobCurriculumProjectUncheckedCreateWithoutCurriculumInput> | JobCurriculumProjectCreateWithoutCurriculumInput[] | JobCurriculumProjectUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumProjectCreateOrConnectWithoutCurriculumInput | JobCurriculumProjectCreateOrConnectWithoutCurriculumInput[]
    createMany?: JobCurriculumProjectCreateManyCurriculumInputEnvelope
    connect?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
  }

  export type JobCurriculumPublicationCreateNestedManyWithoutCurriculumInput = {
    create?: XOR<JobCurriculumPublicationCreateWithoutCurriculumInput, JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput> | JobCurriculumPublicationCreateWithoutCurriculumInput[] | JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput | JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput[]
    createMany?: JobCurriculumPublicationCreateManyCurriculumInputEnvelope
    connect?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
  }

  export type JobCurriculumWorkUncheckedCreateNestedManyWithoutCurriculumInput = {
    create?: XOR<JobCurriculumWorkCreateWithoutCurriculumInput, JobCurriculumWorkUncheckedCreateWithoutCurriculumInput> | JobCurriculumWorkCreateWithoutCurriculumInput[] | JobCurriculumWorkUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumWorkCreateOrConnectWithoutCurriculumInput | JobCurriculumWorkCreateOrConnectWithoutCurriculumInput[]
    createMany?: JobCurriculumWorkCreateManyCurriculumInputEnvelope
    connect?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
  }

  export type JobCurriculumProjectUncheckedCreateNestedManyWithoutCurriculumInput = {
    create?: XOR<JobCurriculumProjectCreateWithoutCurriculumInput, JobCurriculumProjectUncheckedCreateWithoutCurriculumInput> | JobCurriculumProjectCreateWithoutCurriculumInput[] | JobCurriculumProjectUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumProjectCreateOrConnectWithoutCurriculumInput | JobCurriculumProjectCreateOrConnectWithoutCurriculumInput[]
    createMany?: JobCurriculumProjectCreateManyCurriculumInputEnvelope
    connect?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
  }

  export type JobCurriculumPublicationUncheckedCreateNestedManyWithoutCurriculumInput = {
    create?: XOR<JobCurriculumPublicationCreateWithoutCurriculumInput, JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput> | JobCurriculumPublicationCreateWithoutCurriculumInput[] | JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput | JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput[]
    createMany?: JobCurriculumPublicationCreateManyCurriculumInputEnvelope
    connect?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
  }

  export type EnumJobCurriculumPdfStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobCurriculumPdfStatus
  }

  export type JobOfferUpdateOneRequiredWithoutCurriculumNestedInput = {
    create?: XOR<JobOfferCreateWithoutCurriculumInput, JobOfferUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutCurriculumInput
    upsert?: JobOfferUpsertWithoutCurriculumInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutCurriculumInput, JobOfferUpdateWithoutCurriculumInput>, JobOfferUncheckedUpdateWithoutCurriculumInput>
  }

  export type JobCurriculumWorkUpdateManyWithoutCurriculumNestedInput = {
    create?: XOR<JobCurriculumWorkCreateWithoutCurriculumInput, JobCurriculumWorkUncheckedCreateWithoutCurriculumInput> | JobCurriculumWorkCreateWithoutCurriculumInput[] | JobCurriculumWorkUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumWorkCreateOrConnectWithoutCurriculumInput | JobCurriculumWorkCreateOrConnectWithoutCurriculumInput[]
    upsert?: JobCurriculumWorkUpsertWithWhereUniqueWithoutCurriculumInput | JobCurriculumWorkUpsertWithWhereUniqueWithoutCurriculumInput[]
    createMany?: JobCurriculumWorkCreateManyCurriculumInputEnvelope
    set?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    disconnect?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    delete?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    connect?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    update?: JobCurriculumWorkUpdateWithWhereUniqueWithoutCurriculumInput | JobCurriculumWorkUpdateWithWhereUniqueWithoutCurriculumInput[]
    updateMany?: JobCurriculumWorkUpdateManyWithWhereWithoutCurriculumInput | JobCurriculumWorkUpdateManyWithWhereWithoutCurriculumInput[]
    deleteMany?: JobCurriculumWorkScalarWhereInput | JobCurriculumWorkScalarWhereInput[]
  }

  export type JobCurriculumProjectUpdateManyWithoutCurriculumNestedInput = {
    create?: XOR<JobCurriculumProjectCreateWithoutCurriculumInput, JobCurriculumProjectUncheckedCreateWithoutCurriculumInput> | JobCurriculumProjectCreateWithoutCurriculumInput[] | JobCurriculumProjectUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumProjectCreateOrConnectWithoutCurriculumInput | JobCurriculumProjectCreateOrConnectWithoutCurriculumInput[]
    upsert?: JobCurriculumProjectUpsertWithWhereUniqueWithoutCurriculumInput | JobCurriculumProjectUpsertWithWhereUniqueWithoutCurriculumInput[]
    createMany?: JobCurriculumProjectCreateManyCurriculumInputEnvelope
    set?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    disconnect?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    delete?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    connect?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    update?: JobCurriculumProjectUpdateWithWhereUniqueWithoutCurriculumInput | JobCurriculumProjectUpdateWithWhereUniqueWithoutCurriculumInput[]
    updateMany?: JobCurriculumProjectUpdateManyWithWhereWithoutCurriculumInput | JobCurriculumProjectUpdateManyWithWhereWithoutCurriculumInput[]
    deleteMany?: JobCurriculumProjectScalarWhereInput | JobCurriculumProjectScalarWhereInput[]
  }

  export type JobCurriculumPublicationUpdateManyWithoutCurriculumNestedInput = {
    create?: XOR<JobCurriculumPublicationCreateWithoutCurriculumInput, JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput> | JobCurriculumPublicationCreateWithoutCurriculumInput[] | JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput | JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput[]
    upsert?: JobCurriculumPublicationUpsertWithWhereUniqueWithoutCurriculumInput | JobCurriculumPublicationUpsertWithWhereUniqueWithoutCurriculumInput[]
    createMany?: JobCurriculumPublicationCreateManyCurriculumInputEnvelope
    set?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    disconnect?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    delete?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    connect?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    update?: JobCurriculumPublicationUpdateWithWhereUniqueWithoutCurriculumInput | JobCurriculumPublicationUpdateWithWhereUniqueWithoutCurriculumInput[]
    updateMany?: JobCurriculumPublicationUpdateManyWithWhereWithoutCurriculumInput | JobCurriculumPublicationUpdateManyWithWhereWithoutCurriculumInput[]
    deleteMany?: JobCurriculumPublicationScalarWhereInput | JobCurriculumPublicationScalarWhereInput[]
  }

  export type JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumNestedInput = {
    create?: XOR<JobCurriculumWorkCreateWithoutCurriculumInput, JobCurriculumWorkUncheckedCreateWithoutCurriculumInput> | JobCurriculumWorkCreateWithoutCurriculumInput[] | JobCurriculumWorkUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumWorkCreateOrConnectWithoutCurriculumInput | JobCurriculumWorkCreateOrConnectWithoutCurriculumInput[]
    upsert?: JobCurriculumWorkUpsertWithWhereUniqueWithoutCurriculumInput | JobCurriculumWorkUpsertWithWhereUniqueWithoutCurriculumInput[]
    createMany?: JobCurriculumWorkCreateManyCurriculumInputEnvelope
    set?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    disconnect?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    delete?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    connect?: JobCurriculumWorkWhereUniqueInput | JobCurriculumWorkWhereUniqueInput[]
    update?: JobCurriculumWorkUpdateWithWhereUniqueWithoutCurriculumInput | JobCurriculumWorkUpdateWithWhereUniqueWithoutCurriculumInput[]
    updateMany?: JobCurriculumWorkUpdateManyWithWhereWithoutCurriculumInput | JobCurriculumWorkUpdateManyWithWhereWithoutCurriculumInput[]
    deleteMany?: JobCurriculumWorkScalarWhereInput | JobCurriculumWorkScalarWhereInput[]
  }

  export type JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumNestedInput = {
    create?: XOR<JobCurriculumProjectCreateWithoutCurriculumInput, JobCurriculumProjectUncheckedCreateWithoutCurriculumInput> | JobCurriculumProjectCreateWithoutCurriculumInput[] | JobCurriculumProjectUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumProjectCreateOrConnectWithoutCurriculumInput | JobCurriculumProjectCreateOrConnectWithoutCurriculumInput[]
    upsert?: JobCurriculumProjectUpsertWithWhereUniqueWithoutCurriculumInput | JobCurriculumProjectUpsertWithWhereUniqueWithoutCurriculumInput[]
    createMany?: JobCurriculumProjectCreateManyCurriculumInputEnvelope
    set?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    disconnect?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    delete?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    connect?: JobCurriculumProjectWhereUniqueInput | JobCurriculumProjectWhereUniqueInput[]
    update?: JobCurriculumProjectUpdateWithWhereUniqueWithoutCurriculumInput | JobCurriculumProjectUpdateWithWhereUniqueWithoutCurriculumInput[]
    updateMany?: JobCurriculumProjectUpdateManyWithWhereWithoutCurriculumInput | JobCurriculumProjectUpdateManyWithWhereWithoutCurriculumInput[]
    deleteMany?: JobCurriculumProjectScalarWhereInput | JobCurriculumProjectScalarWhereInput[]
  }

  export type JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumNestedInput = {
    create?: XOR<JobCurriculumPublicationCreateWithoutCurriculumInput, JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput> | JobCurriculumPublicationCreateWithoutCurriculumInput[] | JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput[]
    connectOrCreate?: JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput | JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput[]
    upsert?: JobCurriculumPublicationUpsertWithWhereUniqueWithoutCurriculumInput | JobCurriculumPublicationUpsertWithWhereUniqueWithoutCurriculumInput[]
    createMany?: JobCurriculumPublicationCreateManyCurriculumInputEnvelope
    set?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    disconnect?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    delete?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    connect?: JobCurriculumPublicationWhereUniqueInput | JobCurriculumPublicationWhereUniqueInput[]
    update?: JobCurriculumPublicationUpdateWithWhereUniqueWithoutCurriculumInput | JobCurriculumPublicationUpdateWithWhereUniqueWithoutCurriculumInput[]
    updateMany?: JobCurriculumPublicationUpdateManyWithWhereWithoutCurriculumInput | JobCurriculumPublicationUpdateManyWithWhereWithoutCurriculumInput[]
    deleteMany?: JobCurriculumPublicationScalarWhereInput | JobCurriculumPublicationScalarWhereInput[]
  }

  export type JobCurriculumCreateNestedOneWithoutWorkInput = {
    create?: XOR<JobCurriculumCreateWithoutWorkInput, JobCurriculumUncheckedCreateWithoutWorkInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutWorkInput
    connect?: JobCurriculumWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobCurriculumUpdateOneRequiredWithoutWorkNestedInput = {
    create?: XOR<JobCurriculumCreateWithoutWorkInput, JobCurriculumUncheckedCreateWithoutWorkInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutWorkInput
    upsert?: JobCurriculumUpsertWithoutWorkInput
    connect?: JobCurriculumWhereUniqueInput
    update?: XOR<XOR<JobCurriculumUpdateToOneWithWhereWithoutWorkInput, JobCurriculumUpdateWithoutWorkInput>, JobCurriculumUncheckedUpdateWithoutWorkInput>
  }

  export type JobCurriculumCreateNestedOneWithoutProjectsInput = {
    create?: XOR<JobCurriculumCreateWithoutProjectsInput, JobCurriculumUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutProjectsInput
    connect?: JobCurriculumWhereUniqueInput
  }

  export type JobCurriculumUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<JobCurriculumCreateWithoutProjectsInput, JobCurriculumUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutProjectsInput
    upsert?: JobCurriculumUpsertWithoutProjectsInput
    connect?: JobCurriculumWhereUniqueInput
    update?: XOR<XOR<JobCurriculumUpdateToOneWithWhereWithoutProjectsInput, JobCurriculumUpdateWithoutProjectsInput>, JobCurriculumUncheckedUpdateWithoutProjectsInput>
  }

  export type JobCurriculumCreateNestedOneWithoutPublicationsInput = {
    create?: XOR<JobCurriculumCreateWithoutPublicationsInput, JobCurriculumUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutPublicationsInput
    connect?: JobCurriculumWhereUniqueInput
  }

  export type JobCurriculumUpdateOneRequiredWithoutPublicationsNestedInput = {
    create?: XOR<JobCurriculumCreateWithoutPublicationsInput, JobCurriculumUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutPublicationsInput
    upsert?: JobCurriculumUpsertWithoutPublicationsInput
    connect?: JobCurriculumWhereUniqueInput
    update?: XOR<XOR<JobCurriculumUpdateToOneWithWhereWithoutPublicationsInput, JobCurriculumUpdateWithoutPublicationsInput>, JobCurriculumUncheckedUpdateWithoutPublicationsInput>
  }

  export type JobOfferCreateNestedOneWithoutCurriculumOutboxInput = {
    create?: XOR<JobOfferCreateWithoutCurriculumOutboxInput, JobOfferUncheckedCreateWithoutCurriculumOutboxInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutCurriculumOutboxInput
    connect?: JobOfferWhereUniqueInput
  }

  export type EnumOutboxStatusFieldUpdateOperationsInput = {
    set?: $Enums.OutboxStatus
  }

  export type JobOfferUpdateOneRequiredWithoutCurriculumOutboxNestedInput = {
    create?: XOR<JobOfferCreateWithoutCurriculumOutboxInput, JobOfferUncheckedCreateWithoutCurriculumOutboxInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutCurriculumOutboxInput
    upsert?: JobOfferUpsertWithoutCurriculumOutboxInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutCurriculumOutboxInput, JobOfferUpdateWithoutCurriculumOutboxInput>, JobOfferUncheckedUpdateWithoutCurriculumOutboxInput>
  }

  export type JobOfferCreateNestedOneWithoutCurriculumPdfOutboxInput = {
    create?: XOR<JobOfferCreateWithoutCurriculumPdfOutboxInput, JobOfferUncheckedCreateWithoutCurriculumPdfOutboxInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutCurriculumPdfOutboxInput
    connect?: JobOfferWhereUniqueInput
  }

  export type JobOfferUpdateOneRequiredWithoutCurriculumPdfOutboxNestedInput = {
    create?: XOR<JobOfferCreateWithoutCurriculumPdfOutboxInput, JobOfferUncheckedCreateWithoutCurriculumPdfOutboxInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutCurriculumPdfOutboxInput
    upsert?: JobOfferUpsertWithoutCurriculumPdfOutboxInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutCurriculumPdfOutboxInput, JobOfferUpdateWithoutCurriculumPdfOutboxInput>, JobOfferUncheckedUpdateWithoutCurriculumPdfOutboxInput>
  }

  export type JobOfferCreateNestedOneWithoutEvaluationInput = {
    create?: XOR<JobOfferCreateWithoutEvaluationInput, JobOfferUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutEvaluationInput
    connect?: JobOfferWhereUniqueInput
  }

  export type EnumEvaluationStatusFieldUpdateOperationsInput = {
    set?: $Enums.EvaluationStatus
  }

  export type EnumEvaluatorModelFieldUpdateOperationsInput = {
    set?: $Enums.EvaluatorModel
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEvaluationPriorityFieldUpdateOperationsInput = {
    set?: $Enums.EvaluationPriority
  }

  export type JobOfferUpdateOneRequiredWithoutEvaluationNestedInput = {
    create?: XOR<JobOfferCreateWithoutEvaluationInput, JobOfferUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutEvaluationInput
    upsert?: JobOfferUpsertWithoutEvaluationInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutEvaluationInput, JobOfferUpdateWithoutEvaluationInput>, JobOfferUncheckedUpdateWithoutEvaluationInput>
  }

  export type JobOfferCreateNestedOneWithoutEvaluationOutboxInput = {
    create?: XOR<JobOfferCreateWithoutEvaluationOutboxInput, JobOfferUncheckedCreateWithoutEvaluationOutboxInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutEvaluationOutboxInput
    connect?: JobOfferWhereUniqueInput
  }

  export type JobOfferUpdateOneRequiredWithoutEvaluationOutboxNestedInput = {
    create?: XOR<JobOfferCreateWithoutEvaluationOutboxInput, JobOfferUncheckedCreateWithoutEvaluationOutboxInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutEvaluationOutboxInput
    upsert?: JobOfferUpsertWithoutEvaluationOutboxInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutEvaluationOutboxInput, JobOfferUpdateWithoutEvaluationOutboxInput>, JobOfferUncheckedUpdateWithoutEvaluationOutboxInput>
  }

  export type CompanyCreateNestedOneWithoutJobOffersInput = {
    create?: XOR<CompanyCreateWithoutJobOffersInput, CompanyUncheckedCreateWithoutJobOffersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobOffersInput
    connect?: CompanyWhereUniqueInput
  }

  export type JobEvaluationCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobEvaluationCreateWithoutJobOfferInput, JobEvaluationUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationCreateOrConnectWithoutJobOfferInput
    connect?: JobEvaluationWhereUniqueInput
  }

  export type JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobEvaluationOutboxCreateWithoutJobOfferInput, JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationOutboxCreateOrConnectWithoutJobOfferInput
    connect?: JobEvaluationOutboxWhereUniqueInput
  }

  export type JobCurriculumCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobCurriculumCreateWithoutJobOfferInput, JobCurriculumUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutJobOfferInput
    connect?: JobCurriculumWhereUniqueInput
  }

  export type JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobCurriculumOutboxCreateWithoutJobOfferInput, JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumOutboxCreateOrConnectWithoutJobOfferInput
    connect?: JobCurriculumOutboxWhereUniqueInput
  }

  export type JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobCurriculumPdfOutboxCreateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumPdfOutboxCreateOrConnectWithoutJobOfferInput
    connect?: JobCurriculumPdfOutboxWhereUniqueInput
  }

  export type JobStatusHistoryCreateNestedManyWithoutJobOfferInput = {
    create?: XOR<JobStatusHistoryCreateWithoutJobOfferInput, JobStatusHistoryUncheckedCreateWithoutJobOfferInput> | JobStatusHistoryCreateWithoutJobOfferInput[] | JobStatusHistoryUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobStatusHistoryCreateOrConnectWithoutJobOfferInput | JobStatusHistoryCreateOrConnectWithoutJobOfferInput[]
    createMany?: JobStatusHistoryCreateManyJobOfferInputEnvelope
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
  }

  export type JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobEvaluationCreateWithoutJobOfferInput, JobEvaluationUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationCreateOrConnectWithoutJobOfferInput
    connect?: JobEvaluationWhereUniqueInput
  }

  export type JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobEvaluationOutboxCreateWithoutJobOfferInput, JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationOutboxCreateOrConnectWithoutJobOfferInput
    connect?: JobEvaluationOutboxWhereUniqueInput
  }

  export type JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobCurriculumCreateWithoutJobOfferInput, JobCurriculumUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutJobOfferInput
    connect?: JobCurriculumWhereUniqueInput
  }

  export type JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobCurriculumOutboxCreateWithoutJobOfferInput, JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumOutboxCreateOrConnectWithoutJobOfferInput
    connect?: JobCurriculumOutboxWhereUniqueInput
  }

  export type JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput = {
    create?: XOR<JobCurriculumPdfOutboxCreateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumPdfOutboxCreateOrConnectWithoutJobOfferInput
    connect?: JobCurriculumPdfOutboxWhereUniqueInput
  }

  export type JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput = {
    create?: XOR<JobStatusHistoryCreateWithoutJobOfferInput, JobStatusHistoryUncheckedCreateWithoutJobOfferInput> | JobStatusHistoryCreateWithoutJobOfferInput[] | JobStatusHistoryUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobStatusHistoryCreateOrConnectWithoutJobOfferInput | JobStatusHistoryCreateOrConnectWithoutJobOfferInput[]
    createMany?: JobStatusHistoryCreateManyJobOfferInputEnvelope
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
  }

  export type EnumJobSourceFieldUpdateOperationsInput = {
    set?: $Enums.JobSource
  }

  export type EnumRemoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.RemoteType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type EnumJobEvaluationProcessStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobEvaluationProcessStatus
  }

  export type CompanyUpdateOneRequiredWithoutJobOffersNestedInput = {
    create?: XOR<CompanyCreateWithoutJobOffersInput, CompanyUncheckedCreateWithoutJobOffersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobOffersInput
    upsert?: CompanyUpsertWithoutJobOffersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJobOffersInput, CompanyUpdateWithoutJobOffersInput>, CompanyUncheckedUpdateWithoutJobOffersInput>
  }

  export type JobEvaluationUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobEvaluationCreateWithoutJobOfferInput, JobEvaluationUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationCreateOrConnectWithoutJobOfferInput
    upsert?: JobEvaluationUpsertWithoutJobOfferInput
    disconnect?: JobEvaluationWhereInput | boolean
    delete?: JobEvaluationWhereInput | boolean
    connect?: JobEvaluationWhereUniqueInput
    update?: XOR<XOR<JobEvaluationUpdateToOneWithWhereWithoutJobOfferInput, JobEvaluationUpdateWithoutJobOfferInput>, JobEvaluationUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobEvaluationOutboxCreateWithoutJobOfferInput, JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationOutboxCreateOrConnectWithoutJobOfferInput
    upsert?: JobEvaluationOutboxUpsertWithoutJobOfferInput
    disconnect?: JobEvaluationOutboxWhereInput | boolean
    delete?: JobEvaluationOutboxWhereInput | boolean
    connect?: JobEvaluationOutboxWhereUniqueInput
    update?: XOR<XOR<JobEvaluationOutboxUpdateToOneWithWhereWithoutJobOfferInput, JobEvaluationOutboxUpdateWithoutJobOfferInput>, JobEvaluationOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobCurriculumCreateWithoutJobOfferInput, JobCurriculumUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutJobOfferInput
    upsert?: JobCurriculumUpsertWithoutJobOfferInput
    disconnect?: JobCurriculumWhereInput | boolean
    delete?: JobCurriculumWhereInput | boolean
    connect?: JobCurriculumWhereUniqueInput
    update?: XOR<XOR<JobCurriculumUpdateToOneWithWhereWithoutJobOfferInput, JobCurriculumUpdateWithoutJobOfferInput>, JobCurriculumUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobCurriculumOutboxCreateWithoutJobOfferInput, JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumOutboxCreateOrConnectWithoutJobOfferInput
    upsert?: JobCurriculumOutboxUpsertWithoutJobOfferInput
    disconnect?: JobCurriculumOutboxWhereInput | boolean
    delete?: JobCurriculumOutboxWhereInput | boolean
    connect?: JobCurriculumOutboxWhereUniqueInput
    update?: XOR<XOR<JobCurriculumOutboxUpdateToOneWithWhereWithoutJobOfferInput, JobCurriculumOutboxUpdateWithoutJobOfferInput>, JobCurriculumOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobCurriculumPdfOutboxCreateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumPdfOutboxCreateOrConnectWithoutJobOfferInput
    upsert?: JobCurriculumPdfOutboxUpsertWithoutJobOfferInput
    disconnect?: JobCurriculumPdfOutboxWhereInput | boolean
    delete?: JobCurriculumPdfOutboxWhereInput | boolean
    connect?: JobCurriculumPdfOutboxWhereUniqueInput
    update?: XOR<XOR<JobCurriculumPdfOutboxUpdateToOneWithWhereWithoutJobOfferInput, JobCurriculumPdfOutboxUpdateWithoutJobOfferInput>, JobCurriculumPdfOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobStatusHistoryUpdateManyWithoutJobOfferNestedInput = {
    create?: XOR<JobStatusHistoryCreateWithoutJobOfferInput, JobStatusHistoryUncheckedCreateWithoutJobOfferInput> | JobStatusHistoryCreateWithoutJobOfferInput[] | JobStatusHistoryUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobStatusHistoryCreateOrConnectWithoutJobOfferInput | JobStatusHistoryCreateOrConnectWithoutJobOfferInput[]
    upsert?: JobStatusHistoryUpsertWithWhereUniqueWithoutJobOfferInput | JobStatusHistoryUpsertWithWhereUniqueWithoutJobOfferInput[]
    createMany?: JobStatusHistoryCreateManyJobOfferInputEnvelope
    set?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    disconnect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    delete?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    update?: JobStatusHistoryUpdateWithWhereUniqueWithoutJobOfferInput | JobStatusHistoryUpdateWithWhereUniqueWithoutJobOfferInput[]
    updateMany?: JobStatusHistoryUpdateManyWithWhereWithoutJobOfferInput | JobStatusHistoryUpdateManyWithWhereWithoutJobOfferInput[]
    deleteMany?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[]
  }

  export type JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobEvaluationCreateWithoutJobOfferInput, JobEvaluationUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationCreateOrConnectWithoutJobOfferInput
    upsert?: JobEvaluationUpsertWithoutJobOfferInput
    disconnect?: JobEvaluationWhereInput | boolean
    delete?: JobEvaluationWhereInput | boolean
    connect?: JobEvaluationWhereUniqueInput
    update?: XOR<XOR<JobEvaluationUpdateToOneWithWhereWithoutJobOfferInput, JobEvaluationUpdateWithoutJobOfferInput>, JobEvaluationUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobEvaluationOutboxCreateWithoutJobOfferInput, JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobEvaluationOutboxCreateOrConnectWithoutJobOfferInput
    upsert?: JobEvaluationOutboxUpsertWithoutJobOfferInput
    disconnect?: JobEvaluationOutboxWhereInput | boolean
    delete?: JobEvaluationOutboxWhereInput | boolean
    connect?: JobEvaluationOutboxWhereUniqueInput
    update?: XOR<XOR<JobEvaluationOutboxUpdateToOneWithWhereWithoutJobOfferInput, JobEvaluationOutboxUpdateWithoutJobOfferInput>, JobEvaluationOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobCurriculumCreateWithoutJobOfferInput, JobCurriculumUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumCreateOrConnectWithoutJobOfferInput
    upsert?: JobCurriculumUpsertWithoutJobOfferInput
    disconnect?: JobCurriculumWhereInput | boolean
    delete?: JobCurriculumWhereInput | boolean
    connect?: JobCurriculumWhereUniqueInput
    update?: XOR<XOR<JobCurriculumUpdateToOneWithWhereWithoutJobOfferInput, JobCurriculumUpdateWithoutJobOfferInput>, JobCurriculumUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobCurriculumOutboxCreateWithoutJobOfferInput, JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumOutboxCreateOrConnectWithoutJobOfferInput
    upsert?: JobCurriculumOutboxUpsertWithoutJobOfferInput
    disconnect?: JobCurriculumOutboxWhereInput | boolean
    delete?: JobCurriculumOutboxWhereInput | boolean
    connect?: JobCurriculumOutboxWhereUniqueInput
    update?: XOR<XOR<JobCurriculumOutboxUpdateToOneWithWhereWithoutJobOfferInput, JobCurriculumOutboxUpdateWithoutJobOfferInput>, JobCurriculumOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput = {
    create?: XOR<JobCurriculumPdfOutboxCreateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput>
    connectOrCreate?: JobCurriculumPdfOutboxCreateOrConnectWithoutJobOfferInput
    upsert?: JobCurriculumPdfOutboxUpsertWithoutJobOfferInput
    disconnect?: JobCurriculumPdfOutboxWhereInput | boolean
    delete?: JobCurriculumPdfOutboxWhereInput | boolean
    connect?: JobCurriculumPdfOutboxWhereUniqueInput
    update?: XOR<XOR<JobCurriculumPdfOutboxUpdateToOneWithWhereWithoutJobOfferInput, JobCurriculumPdfOutboxUpdateWithoutJobOfferInput>, JobCurriculumPdfOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput = {
    create?: XOR<JobStatusHistoryCreateWithoutJobOfferInput, JobStatusHistoryUncheckedCreateWithoutJobOfferInput> | JobStatusHistoryCreateWithoutJobOfferInput[] | JobStatusHistoryUncheckedCreateWithoutJobOfferInput[]
    connectOrCreate?: JobStatusHistoryCreateOrConnectWithoutJobOfferInput | JobStatusHistoryCreateOrConnectWithoutJobOfferInput[]
    upsert?: JobStatusHistoryUpsertWithWhereUniqueWithoutJobOfferInput | JobStatusHistoryUpsertWithWhereUniqueWithoutJobOfferInput[]
    createMany?: JobStatusHistoryCreateManyJobOfferInputEnvelope
    set?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    disconnect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    delete?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    connect?: JobStatusHistoryWhereUniqueInput | JobStatusHistoryWhereUniqueInput[]
    update?: JobStatusHistoryUpdateWithWhereUniqueWithoutJobOfferInput | JobStatusHistoryUpdateWithWhereUniqueWithoutJobOfferInput[]
    updateMany?: JobStatusHistoryUpdateManyWithWhereWithoutJobOfferInput | JobStatusHistoryUpdateManyWithWhereWithoutJobOfferInput[]
    deleteMany?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[]
  }

  export type JobOfferCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<JobOfferCreateWithoutStatusHistoryInput, JobOfferUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutStatusHistoryInput
    connect?: JobOfferWhereUniqueInput
  }

  export type NullableEnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus | null
  }

  export type JobOfferUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<JobOfferCreateWithoutStatusHistoryInput, JobOfferUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: JobOfferCreateOrConnectWithoutStatusHistoryInput
    upsert?: JobOfferUpsertWithoutStatusHistoryInput
    connect?: JobOfferWhereUniqueInput
    update?: XOR<XOR<JobOfferUpdateToOneWithWhereWithoutStatusHistoryInput, JobOfferUpdateWithoutStatusHistoryInput>, JobOfferUncheckedUpdateWithoutStatusHistoryInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCurriculumPdfStatus | EnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel> | $Enums.JobCurriculumPdfStatus
  }

  export type NestedEnumJobCurriculumPdfStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobCurriculumPdfStatus | EnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobCurriculumPdfStatus[] | ListEnumJobCurriculumPdfStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobCurriculumPdfStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobCurriculumPdfStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel>
    _max?: NestedEnumJobCurriculumPdfStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumOutboxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusFilter<$PrismaModel> | $Enums.OutboxStatus
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

  export type NestedEnumEvaluationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusFilter<$PrismaModel> | $Enums.EvaluationStatus
  }

  export type NestedEnumEvaluatorModelFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluatorModel | EnumEvaluatorModelFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluatorModelFilter<$PrismaModel> | $Enums.EvaluatorModel
  }

  export type NestedEnumEvaluationPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationPriority | EnumEvaluationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationPriorityFilter<$PrismaModel> | $Enums.EvaluationPriority
  }

  export type NestedEnumEvaluationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationStatus | EnumEvaluationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationStatus[] | ListEnumEvaluationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationStatusFilter<$PrismaModel>
    _max?: NestedEnumEvaluationStatusFilter<$PrismaModel>
  }

  export type NestedEnumEvaluatorModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluatorModel | EnumEvaluatorModelFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluatorModel[] | ListEnumEvaluatorModelFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluatorModelWithAggregatesFilter<$PrismaModel> | $Enums.EvaluatorModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluatorModelFilter<$PrismaModel>
    _max?: NestedEnumEvaluatorModelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEvaluationPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvaluationPriority | EnumEvaluationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvaluationPriority[] | ListEnumEvaluationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumEvaluationPriorityWithAggregatesFilter<$PrismaModel> | $Enums.EvaluationPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvaluationPriorityFilter<$PrismaModel>
    _max?: NestedEnumEvaluationPriorityFilter<$PrismaModel>
  }

  export type NestedEnumJobSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.JobSource | EnumJobSourceFieldRefInput<$PrismaModel>
    in?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumJobSourceFilter<$PrismaModel> | $Enums.JobSource
  }

  export type NestedEnumRemoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | EnumRemoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRemoteTypeFilter<$PrismaModel> | $Enums.RemoteType
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

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobEvaluationProcessStatus | EnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel> | $Enums.JobEvaluationProcessStatus
  }

  export type NestedEnumJobSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobSource | EnumJobSourceFieldRefInput<$PrismaModel>
    in?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobSource[] | ListEnumJobSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumJobSourceWithAggregatesFilter<$PrismaModel> | $Enums.JobSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobSourceFilter<$PrismaModel>
    _max?: NestedEnumJobSourceFilter<$PrismaModel>
  }

  export type NestedEnumRemoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | EnumRemoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemoteType[] | ListEnumRemoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRemoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.RemoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemoteTypeFilter<$PrismaModel>
    _max?: NestedEnumRemoteTypeFilter<$PrismaModel>
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

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumJobEvaluationProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobEvaluationProcessStatus | EnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobEvaluationProcessStatus[] | ListEnumJobEvaluationProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobEvaluationProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobEvaluationProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumJobEvaluationProcessStatusFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableFilter<$PrismaModel> | $Enums.ApplicationStatus | null
  }

  export type NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
  }

  export type JobOfferCreateWithoutCompanyInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutCompanyInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutCompanyInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutCompanyInput, JobOfferUncheckedCreateWithoutCompanyInput>
  }

  export type JobOfferCreateManyCompanyInputEnvelope = {
    data: JobOfferCreateManyCompanyInput | JobOfferCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type JobOfferUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobOfferWhereUniqueInput
    update: XOR<JobOfferUpdateWithoutCompanyInput, JobOfferUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobOfferCreateWithoutCompanyInput, JobOfferUncheckedCreateWithoutCompanyInput>
  }

  export type JobOfferUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobOfferWhereUniqueInput
    data: XOR<JobOfferUpdateWithoutCompanyInput, JobOfferUncheckedUpdateWithoutCompanyInput>
  }

  export type JobOfferUpdateManyWithWhereWithoutCompanyInput = {
    where: JobOfferScalarWhereInput
    data: XOR<JobOfferUpdateManyMutationInput, JobOfferUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobOfferScalarWhereInput = {
    AND?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
    OR?: JobOfferScalarWhereInput[]
    NOT?: JobOfferScalarWhereInput | JobOfferScalarWhereInput[]
    id?: StringFilter<"JobOffer"> | string
    externalId?: StringNullableFilter<"JobOffer"> | string | null
    source?: EnumJobSourceFilter<"JobOffer"> | $Enums.JobSource
    url?: StringFilter<"JobOffer"> | string
    title?: StringFilter<"JobOffer"> | string
    location?: StringNullableFilter<"JobOffer"> | string | null
    remoteType?: EnumRemoteTypeFilter<"JobOffer"> | $Enums.RemoteType
    rawDescription?: StringFilter<"JobOffer"> | string
    descriptionMarkdown?: StringNullableFilter<"JobOffer"> | string | null
    datePosted?: DateTimeNullableFilter<"JobOffer"> | Date | string | null
    companyId?: StringFilter<"JobOffer"> | string
    salaryMin?: FloatNullableFilter<"JobOffer"> | number | null
    salaryMax?: FloatNullableFilter<"JobOffer"> | number | null
    currency?: StringNullableFilter<"JobOffer"> | string | null
    contractType?: StringNullableFilter<"JobOffer"> | string | null
    roleCategory?: StringNullableFilter<"JobOffer"> | string | null
    experienceLevel?: EnumExperienceLevelFilter<"JobOffer"> | $Enums.ExperienceLevel
    skills?: StringNullableFilter<"JobOffer"> | string | null
    status?: EnumApplicationStatusFilter<"JobOffer"> | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFilter<"JobOffer"> | $Enums.JobEvaluationProcessStatus
    notes?: StringNullableFilter<"JobOffer"> | string | null
    createdAt?: DateTimeFilter<"JobOffer"> | Date | string
    updatedAt?: DateTimeFilter<"JobOffer"> | Date | string
  }

  export type JobOfferCreateWithoutCurriculumInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutCurriculumInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutCurriculumInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutCurriculumInput, JobOfferUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumWorkCreateWithoutCurriculumInput = {
    id?: string
    name: string
    position: string
    summary: string
    include?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumWorkUncheckedCreateWithoutCurriculumInput = {
    id?: string
    name: string
    position: string
    summary: string
    include?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumWorkCreateOrConnectWithoutCurriculumInput = {
    where: JobCurriculumWorkWhereUniqueInput
    create: XOR<JobCurriculumWorkCreateWithoutCurriculumInput, JobCurriculumWorkUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumWorkCreateManyCurriculumInputEnvelope = {
    data: JobCurriculumWorkCreateManyCurriculumInput | JobCurriculumWorkCreateManyCurriculumInput[]
    skipDuplicates?: boolean
  }

  export type JobCurriculumProjectCreateWithoutCurriculumInput = {
    id?: string
    name: string
    description: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumProjectUncheckedCreateWithoutCurriculumInput = {
    id?: string
    name: string
    description: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumProjectCreateOrConnectWithoutCurriculumInput = {
    where: JobCurriculumProjectWhereUniqueInput
    create: XOR<JobCurriculumProjectCreateWithoutCurriculumInput, JobCurriculumProjectUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumProjectCreateManyCurriculumInputEnvelope = {
    data: JobCurriculumProjectCreateManyCurriculumInput | JobCurriculumProjectCreateManyCurriculumInput[]
    skipDuplicates?: boolean
  }

  export type JobCurriculumPublicationCreateWithoutCurriculumInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPublicationCreateOrConnectWithoutCurriculumInput = {
    where: JobCurriculumPublicationWhereUniqueInput
    create: XOR<JobCurriculumPublicationCreateWithoutCurriculumInput, JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumPublicationCreateManyCurriculumInputEnvelope = {
    data: JobCurriculumPublicationCreateManyCurriculumInput | JobCurriculumPublicationCreateManyCurriculumInput[]
    skipDuplicates?: boolean
  }

  export type JobOfferUpsertWithoutCurriculumInput = {
    update: XOR<JobOfferUpdateWithoutCurriculumInput, JobOfferUncheckedUpdateWithoutCurriculumInput>
    create: XOR<JobOfferCreateWithoutCurriculumInput, JobOfferUncheckedCreateWithoutCurriculumInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutCurriculumInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutCurriculumInput, JobOfferUncheckedUpdateWithoutCurriculumInput>
  }

  export type JobOfferUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobCurriculumWorkUpsertWithWhereUniqueWithoutCurriculumInput = {
    where: JobCurriculumWorkWhereUniqueInput
    update: XOR<JobCurriculumWorkUpdateWithoutCurriculumInput, JobCurriculumWorkUncheckedUpdateWithoutCurriculumInput>
    create: XOR<JobCurriculumWorkCreateWithoutCurriculumInput, JobCurriculumWorkUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumWorkUpdateWithWhereUniqueWithoutCurriculumInput = {
    where: JobCurriculumWorkWhereUniqueInput
    data: XOR<JobCurriculumWorkUpdateWithoutCurriculumInput, JobCurriculumWorkUncheckedUpdateWithoutCurriculumInput>
  }

  export type JobCurriculumWorkUpdateManyWithWhereWithoutCurriculumInput = {
    where: JobCurriculumWorkScalarWhereInput
    data: XOR<JobCurriculumWorkUpdateManyMutationInput, JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumInput>
  }

  export type JobCurriculumWorkScalarWhereInput = {
    AND?: JobCurriculumWorkScalarWhereInput | JobCurriculumWorkScalarWhereInput[]
    OR?: JobCurriculumWorkScalarWhereInput[]
    NOT?: JobCurriculumWorkScalarWhereInput | JobCurriculumWorkScalarWhereInput[]
    id?: StringFilter<"JobCurriculumWork"> | string
    curriculumId?: StringFilter<"JobCurriculumWork"> | string
    name?: StringFilter<"JobCurriculumWork"> | string
    position?: StringFilter<"JobCurriculumWork"> | string
    summary?: StringFilter<"JobCurriculumWork"> | string
    include?: BoolFilter<"JobCurriculumWork"> | boolean
    order?: IntFilter<"JobCurriculumWork"> | number
    createdAt?: DateTimeFilter<"JobCurriculumWork"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumWork"> | Date | string
  }

  export type JobCurriculumProjectUpsertWithWhereUniqueWithoutCurriculumInput = {
    where: JobCurriculumProjectWhereUniqueInput
    update: XOR<JobCurriculumProjectUpdateWithoutCurriculumInput, JobCurriculumProjectUncheckedUpdateWithoutCurriculumInput>
    create: XOR<JobCurriculumProjectCreateWithoutCurriculumInput, JobCurriculumProjectUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumProjectUpdateWithWhereUniqueWithoutCurriculumInput = {
    where: JobCurriculumProjectWhereUniqueInput
    data: XOR<JobCurriculumProjectUpdateWithoutCurriculumInput, JobCurriculumProjectUncheckedUpdateWithoutCurriculumInput>
  }

  export type JobCurriculumProjectUpdateManyWithWhereWithoutCurriculumInput = {
    where: JobCurriculumProjectScalarWhereInput
    data: XOR<JobCurriculumProjectUpdateManyMutationInput, JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumInput>
  }

  export type JobCurriculumProjectScalarWhereInput = {
    AND?: JobCurriculumProjectScalarWhereInput | JobCurriculumProjectScalarWhereInput[]
    OR?: JobCurriculumProjectScalarWhereInput[]
    NOT?: JobCurriculumProjectScalarWhereInput | JobCurriculumProjectScalarWhereInput[]
    id?: StringFilter<"JobCurriculumProject"> | string
    curriculumId?: StringFilter<"JobCurriculumProject"> | string
    name?: StringFilter<"JobCurriculumProject"> | string
    description?: StringFilter<"JobCurriculumProject"> | string
    order?: IntFilter<"JobCurriculumProject"> | number
    createdAt?: DateTimeFilter<"JobCurriculumProject"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumProject"> | Date | string
  }

  export type JobCurriculumPublicationUpsertWithWhereUniqueWithoutCurriculumInput = {
    where: JobCurriculumPublicationWhereUniqueInput
    update: XOR<JobCurriculumPublicationUpdateWithoutCurriculumInput, JobCurriculumPublicationUncheckedUpdateWithoutCurriculumInput>
    create: XOR<JobCurriculumPublicationCreateWithoutCurriculumInput, JobCurriculumPublicationUncheckedCreateWithoutCurriculumInput>
  }

  export type JobCurriculumPublicationUpdateWithWhereUniqueWithoutCurriculumInput = {
    where: JobCurriculumPublicationWhereUniqueInput
    data: XOR<JobCurriculumPublicationUpdateWithoutCurriculumInput, JobCurriculumPublicationUncheckedUpdateWithoutCurriculumInput>
  }

  export type JobCurriculumPublicationUpdateManyWithWhereWithoutCurriculumInput = {
    where: JobCurriculumPublicationScalarWhereInput
    data: XOR<JobCurriculumPublicationUpdateManyMutationInput, JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumInput>
  }

  export type JobCurriculumPublicationScalarWhereInput = {
    AND?: JobCurriculumPublicationScalarWhereInput | JobCurriculumPublicationScalarWhereInput[]
    OR?: JobCurriculumPublicationScalarWhereInput[]
    NOT?: JobCurriculumPublicationScalarWhereInput | JobCurriculumPublicationScalarWhereInput[]
    id?: StringFilter<"JobCurriculumPublication"> | string
    curriculumId?: StringFilter<"JobCurriculumPublication"> | string
    title?: StringFilter<"JobCurriculumPublication"> | string
    order?: IntFilter<"JobCurriculumPublication"> | number
    createdAt?: DateTimeFilter<"JobCurriculumPublication"> | Date | string
    updatedAt?: DateTimeFilter<"JobCurriculumPublication"> | Date | string
  }

  export type JobCurriculumCreateWithoutWorkInput = {
    id?: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutCurriculumInput
    projects?: JobCurriculumProjectCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumUncheckedCreateWithoutWorkInput = {
    id?: string
    jobOfferId: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: JobCurriculumProjectUncheckedCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationUncheckedCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumCreateOrConnectWithoutWorkInput = {
    where: JobCurriculumWhereUniqueInput
    create: XOR<JobCurriculumCreateWithoutWorkInput, JobCurriculumUncheckedCreateWithoutWorkInput>
  }

  export type JobCurriculumUpsertWithoutWorkInput = {
    update: XOR<JobCurriculumUpdateWithoutWorkInput, JobCurriculumUncheckedUpdateWithoutWorkInput>
    create: XOR<JobCurriculumCreateWithoutWorkInput, JobCurriculumUncheckedCreateWithoutWorkInput>
    where?: JobCurriculumWhereInput
  }

  export type JobCurriculumUpdateToOneWithWhereWithoutWorkInput = {
    where?: JobCurriculumWhereInput
    data: XOR<JobCurriculumUpdateWithoutWorkInput, JobCurriculumUncheckedUpdateWithoutWorkInput>
  }

  export type JobCurriculumUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumCreateWithoutProjectsInput = {
    id?: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutCurriculumInput
    work?: JobCurriculumWorkCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumUncheckedCreateWithoutProjectsInput = {
    id?: string
    jobOfferId: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work?: JobCurriculumWorkUncheckedCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationUncheckedCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumCreateOrConnectWithoutProjectsInput = {
    where: JobCurriculumWhereUniqueInput
    create: XOR<JobCurriculumCreateWithoutProjectsInput, JobCurriculumUncheckedCreateWithoutProjectsInput>
  }

  export type JobCurriculumUpsertWithoutProjectsInput = {
    update: XOR<JobCurriculumUpdateWithoutProjectsInput, JobCurriculumUncheckedUpdateWithoutProjectsInput>
    create: XOR<JobCurriculumCreateWithoutProjectsInput, JobCurriculumUncheckedCreateWithoutProjectsInput>
    where?: JobCurriculumWhereInput
  }

  export type JobCurriculumUpdateToOneWithWhereWithoutProjectsInput = {
    where?: JobCurriculumWhereInput
    data: XOR<JobCurriculumUpdateWithoutProjectsInput, JobCurriculumUncheckedUpdateWithoutProjectsInput>
  }

  export type JobCurriculumUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutCurriculumNestedInput
    work?: JobCurriculumWorkUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumCreateWithoutPublicationsInput = {
    id?: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOffer: JobOfferCreateNestedOneWithoutCurriculumInput
    work?: JobCurriculumWorkCreateNestedManyWithoutCurriculumInput
    projects?: JobCurriculumProjectCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumUncheckedCreateWithoutPublicationsInput = {
    id?: string
    jobOfferId: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work?: JobCurriculumWorkUncheckedCreateNestedManyWithoutCurriculumInput
    projects?: JobCurriculumProjectUncheckedCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumCreateOrConnectWithoutPublicationsInput = {
    where: JobCurriculumWhereUniqueInput
    create: XOR<JobCurriculumCreateWithoutPublicationsInput, JobCurriculumUncheckedCreateWithoutPublicationsInput>
  }

  export type JobCurriculumUpsertWithoutPublicationsInput = {
    update: XOR<JobCurriculumUpdateWithoutPublicationsInput, JobCurriculumUncheckedUpdateWithoutPublicationsInput>
    create: XOR<JobCurriculumCreateWithoutPublicationsInput, JobCurriculumUncheckedCreateWithoutPublicationsInput>
    where?: JobCurriculumWhereInput
  }

  export type JobCurriculumUpdateToOneWithWhereWithoutPublicationsInput = {
    where?: JobCurriculumWhereInput
    data: XOR<JobCurriculumUpdateWithoutPublicationsInput, JobCurriculumUncheckedUpdateWithoutPublicationsInput>
  }

  export type JobCurriculumUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOffer?: JobOfferUpdateOneRequiredWithoutCurriculumNestedInput
    work?: JobCurriculumWorkUpdateManyWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumUncheckedUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOfferId?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumNestedInput
  }

  export type JobOfferCreateWithoutCurriculumOutboxInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutCurriculumOutboxInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutCurriculumOutboxInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutCurriculumOutboxInput, JobOfferUncheckedCreateWithoutCurriculumOutboxInput>
  }

  export type JobOfferUpsertWithoutCurriculumOutboxInput = {
    update: XOR<JobOfferUpdateWithoutCurriculumOutboxInput, JobOfferUncheckedUpdateWithoutCurriculumOutboxInput>
    create: XOR<JobOfferCreateWithoutCurriculumOutboxInput, JobOfferUncheckedCreateWithoutCurriculumOutboxInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutCurriculumOutboxInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutCurriculumOutboxInput, JobOfferUncheckedUpdateWithoutCurriculumOutboxInput>
  }

  export type JobOfferUpdateWithoutCurriculumOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutCurriculumOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferCreateWithoutCurriculumPdfOutboxInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutCurriculumPdfOutboxInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutCurriculumPdfOutboxInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutCurriculumPdfOutboxInput, JobOfferUncheckedCreateWithoutCurriculumPdfOutboxInput>
  }

  export type JobOfferUpsertWithoutCurriculumPdfOutboxInput = {
    update: XOR<JobOfferUpdateWithoutCurriculumPdfOutboxInput, JobOfferUncheckedUpdateWithoutCurriculumPdfOutboxInput>
    create: XOR<JobOfferCreateWithoutCurriculumPdfOutboxInput, JobOfferUncheckedCreateWithoutCurriculumPdfOutboxInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutCurriculumPdfOutboxInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutCurriculumPdfOutboxInput, JobOfferUncheckedUpdateWithoutCurriculumPdfOutboxInput>
  }

  export type JobOfferUpdateWithoutCurriculumPdfOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutCurriculumPdfOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferCreateWithoutEvaluationInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutEvaluationInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutEvaluationInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutEvaluationInput, JobOfferUncheckedCreateWithoutEvaluationInput>
  }

  export type JobOfferUpsertWithoutEvaluationInput = {
    update: XOR<JobOfferUpdateWithoutEvaluationInput, JobOfferUncheckedUpdateWithoutEvaluationInput>
    create: XOR<JobOfferCreateWithoutEvaluationInput, JobOfferUncheckedCreateWithoutEvaluationInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutEvaluationInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutEvaluationInput, JobOfferUncheckedUpdateWithoutEvaluationInput>
  }

  export type JobOfferUpdateWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferCreateWithoutEvaluationOutboxInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutEvaluationOutboxInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    statusHistory?: JobStatusHistoryUncheckedCreateNestedManyWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutEvaluationOutboxInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutEvaluationOutboxInput, JobOfferUncheckedCreateWithoutEvaluationOutboxInput>
  }

  export type JobOfferUpsertWithoutEvaluationOutboxInput = {
    update: XOR<JobOfferUpdateWithoutEvaluationOutboxInput, JobOfferUncheckedUpdateWithoutEvaluationOutboxInput>
    create: XOR<JobOfferCreateWithoutEvaluationOutboxInput, JobOfferUncheckedCreateWithoutEvaluationOutboxInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutEvaluationOutboxInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutEvaluationOutboxInput, JobOfferUncheckedUpdateWithoutEvaluationOutboxInput>
  }

  export type JobOfferUpdateWithoutEvaluationOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutEvaluationOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type CompanyCreateWithoutJobOffersInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    linkedinUrl?: string | null
    industry?: string | null
    fundingStage?: string | null
    companySizeRange?: string | null
    employeeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutJobOffersInput = {
    id?: string
    name: string
    websiteUrl?: string | null
    linkedinUrl?: string | null
    industry?: string | null
    fundingStage?: string | null
    companySizeRange?: string | null
    employeeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutJobOffersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutJobOffersInput, CompanyUncheckedCreateWithoutJobOffersInput>
  }

  export type JobEvaluationCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.EvaluationStatus
    evaluatorModel?: $Enums.EvaluatorModel
    summary?: string | null
    desireMatchScore?: number
    competenceScore?: number
    overallScore?: number
    priority: $Enums.EvaluationPriority
    desireMatchReasoning?: string | null
    competenceMatch: string
    detailedReasoning: string
    pros?: string | null
    cons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationUncheckedCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.EvaluationStatus
    evaluatorModel?: $Enums.EvaluatorModel
    summary?: string | null
    desireMatchScore?: number
    competenceScore?: number
    overallScore?: number
    priority: $Enums.EvaluationPriority
    desireMatchReasoning?: string | null
    competenceMatch: string
    detailedReasoning: string
    pros?: string | null
    cons?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationCreateOrConnectWithoutJobOfferInput = {
    where: JobEvaluationWhereUniqueInput
    create: XOR<JobEvaluationCreateWithoutJobOfferInput, JobEvaluationUncheckedCreateWithoutJobOfferInput>
  }

  export type JobEvaluationOutboxCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.OutboxStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.OutboxStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobEvaluationOutboxCreateOrConnectWithoutJobOfferInput = {
    where: JobEvaluationOutboxWhereUniqueInput
    create: XOR<JobEvaluationOutboxCreateWithoutJobOfferInput, JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput>
  }

  export type JobCurriculumCreateWithoutJobOfferInput = {
    id?: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work?: JobCurriculumWorkCreateNestedManyWithoutCurriculumInput
    projects?: JobCurriculumProjectCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumUncheckedCreateWithoutJobOfferInput = {
    id?: string
    storageKey?: string | null
    pdfStatus?: $Enums.JobCurriculumPdfStatus
    explanation: string
    customLabel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work?: JobCurriculumWorkUncheckedCreateNestedManyWithoutCurriculumInput
    projects?: JobCurriculumProjectUncheckedCreateNestedManyWithoutCurriculumInput
    publications?: JobCurriculumPublicationUncheckedCreateNestedManyWithoutCurriculumInput
  }

  export type JobCurriculumCreateOrConnectWithoutJobOfferInput = {
    where: JobCurriculumWhereUniqueInput
    create: XOR<JobCurriculumCreateWithoutJobOfferInput, JobCurriculumUncheckedCreateWithoutJobOfferInput>
  }

  export type JobCurriculumOutboxCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.OutboxStatus
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.OutboxStatus
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumOutboxCreateOrConnectWithoutJobOfferInput = {
    where: JobCurriculumOutboxWhereUniqueInput
    create: XOR<JobCurriculumOutboxCreateWithoutJobOfferInput, JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput>
  }

  export type JobCurriculumPdfOutboxCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.OutboxStatus
    templateName?: string | null
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput = {
    id?: string
    status?: $Enums.OutboxStatus
    templateName?: string | null
    forceRegenerate?: boolean
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPdfOutboxCreateOrConnectWithoutJobOfferInput = {
    where: JobCurriculumPdfOutboxWhereUniqueInput
    create: XOR<JobCurriculumPdfOutboxCreateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput>
  }

  export type JobStatusHistoryCreateWithoutJobOfferInput = {
    id?: string
    fromStatus?: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type JobStatusHistoryUncheckedCreateWithoutJobOfferInput = {
    id?: string
    fromStatus?: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type JobStatusHistoryCreateOrConnectWithoutJobOfferInput = {
    where: JobStatusHistoryWhereUniqueInput
    create: XOR<JobStatusHistoryCreateWithoutJobOfferInput, JobStatusHistoryUncheckedCreateWithoutJobOfferInput>
  }

  export type JobStatusHistoryCreateManyJobOfferInputEnvelope = {
    data: JobStatusHistoryCreateManyJobOfferInput | JobStatusHistoryCreateManyJobOfferInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutJobOffersInput = {
    update: XOR<CompanyUpdateWithoutJobOffersInput, CompanyUncheckedUpdateWithoutJobOffersInput>
    create: XOR<CompanyCreateWithoutJobOffersInput, CompanyUncheckedCreateWithoutJobOffersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutJobOffersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutJobOffersInput, CompanyUncheckedUpdateWithoutJobOffersInput>
  }

  export type CompanyUpdateWithoutJobOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    fundingStage?: NullableStringFieldUpdateOperationsInput | string | null
    companySizeRange?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutJobOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    fundingStage?: NullableStringFieldUpdateOperationsInput | string | null
    companySizeRange?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationUpsertWithoutJobOfferInput = {
    update: XOR<JobEvaluationUpdateWithoutJobOfferInput, JobEvaluationUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobEvaluationCreateWithoutJobOfferInput, JobEvaluationUncheckedCreateWithoutJobOfferInput>
    where?: JobEvaluationWhereInput
  }

  export type JobEvaluationUpdateToOneWithWhereWithoutJobOfferInput = {
    where?: JobEvaluationWhereInput
    data: XOR<JobEvaluationUpdateWithoutJobOfferInput, JobEvaluationUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobEvaluationUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFieldUpdateOperationsInput | $Enums.EvaluatorModel
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    desireMatchScore?: FloatFieldUpdateOperationsInput | number
    competenceScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    priority?: EnumEvaluationPriorityFieldUpdateOperationsInput | $Enums.EvaluationPriority
    desireMatchReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    competenceMatch?: StringFieldUpdateOperationsInput | string
    detailedReasoning?: StringFieldUpdateOperationsInput | string
    pros?: NullableStringFieldUpdateOperationsInput | string | null
    cons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationUncheckedUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus
    evaluatorModel?: EnumEvaluatorModelFieldUpdateOperationsInput | $Enums.EvaluatorModel
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    desireMatchScore?: FloatFieldUpdateOperationsInput | number
    competenceScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    priority?: EnumEvaluationPriorityFieldUpdateOperationsInput | $Enums.EvaluationPriority
    desireMatchReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    competenceMatch?: StringFieldUpdateOperationsInput | string
    detailedReasoning?: StringFieldUpdateOperationsInput | string
    pros?: NullableStringFieldUpdateOperationsInput | string | null
    cons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationOutboxUpsertWithoutJobOfferInput = {
    update: XOR<JobEvaluationOutboxUpdateWithoutJobOfferInput, JobEvaluationOutboxUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobEvaluationOutboxCreateWithoutJobOfferInput, JobEvaluationOutboxUncheckedCreateWithoutJobOfferInput>
    where?: JobEvaluationOutboxWhereInput
  }

  export type JobEvaluationOutboxUpdateToOneWithWhereWithoutJobOfferInput = {
    where?: JobEvaluationOutboxWhereInput
    data: XOR<JobEvaluationOutboxUpdateWithoutJobOfferInput, JobEvaluationOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobEvaluationOutboxUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobEvaluationOutboxUncheckedUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumUpsertWithoutJobOfferInput = {
    update: XOR<JobCurriculumUpdateWithoutJobOfferInput, JobCurriculumUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobCurriculumCreateWithoutJobOfferInput, JobCurriculumUncheckedCreateWithoutJobOfferInput>
    where?: JobCurriculumWhereInput
  }

  export type JobCurriculumUpdateToOneWithWhereWithoutJobOfferInput = {
    where?: JobCurriculumWhereInput
    data: XOR<JobCurriculumUpdateWithoutJobOfferInput, JobCurriculumUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: JobCurriculumWorkUpdateManyWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumUncheckedUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfStatus?: EnumJobCurriculumPdfStatusFieldUpdateOperationsInput | $Enums.JobCurriculumPdfStatus
    explanation?: StringFieldUpdateOperationsInput | string
    customLabel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumNestedInput
    projects?: JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumNestedInput
    publications?: JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumNestedInput
  }

  export type JobCurriculumOutboxUpsertWithoutJobOfferInput = {
    update: XOR<JobCurriculumOutboxUpdateWithoutJobOfferInput, JobCurriculumOutboxUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobCurriculumOutboxCreateWithoutJobOfferInput, JobCurriculumOutboxUncheckedCreateWithoutJobOfferInput>
    where?: JobCurriculumOutboxWhereInput
  }

  export type JobCurriculumOutboxUpdateToOneWithWhereWithoutJobOfferInput = {
    where?: JobCurriculumOutboxWhereInput
    data: XOR<JobCurriculumOutboxUpdateWithoutJobOfferInput, JobCurriculumOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumOutboxUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumOutboxUncheckedUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPdfOutboxUpsertWithoutJobOfferInput = {
    update: XOR<JobCurriculumPdfOutboxUpdateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobCurriculumPdfOutboxCreateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedCreateWithoutJobOfferInput>
    where?: JobCurriculumPdfOutboxWhereInput
  }

  export type JobCurriculumPdfOutboxUpdateToOneWithWhereWithoutJobOfferInput = {
    where?: JobCurriculumPdfOutboxWhereInput
    data: XOR<JobCurriculumPdfOutboxUpdateWithoutJobOfferInput, JobCurriculumPdfOutboxUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobCurriculumPdfOutboxUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPdfOutboxUncheckedUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    templateName?: NullableStringFieldUpdateOperationsInput | string | null
    forceRegenerate?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryUpsertWithWhereUniqueWithoutJobOfferInput = {
    where: JobStatusHistoryWhereUniqueInput
    update: XOR<JobStatusHistoryUpdateWithoutJobOfferInput, JobStatusHistoryUncheckedUpdateWithoutJobOfferInput>
    create: XOR<JobStatusHistoryCreateWithoutJobOfferInput, JobStatusHistoryUncheckedCreateWithoutJobOfferInput>
  }

  export type JobStatusHistoryUpdateWithWhereUniqueWithoutJobOfferInput = {
    where: JobStatusHistoryWhereUniqueInput
    data: XOR<JobStatusHistoryUpdateWithoutJobOfferInput, JobStatusHistoryUncheckedUpdateWithoutJobOfferInput>
  }

  export type JobStatusHistoryUpdateManyWithWhereWithoutJobOfferInput = {
    where: JobStatusHistoryScalarWhereInput
    data: XOR<JobStatusHistoryUpdateManyMutationInput, JobStatusHistoryUncheckedUpdateManyWithoutJobOfferInput>
  }

  export type JobStatusHistoryScalarWhereInput = {
    AND?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[]
    OR?: JobStatusHistoryScalarWhereInput[]
    NOT?: JobStatusHistoryScalarWhereInput | JobStatusHistoryScalarWhereInput[]
    id?: StringFilter<"JobStatusHistory"> | string
    jobOfferId?: StringFilter<"JobStatusHistory"> | string
    fromStatus?: EnumApplicationStatusNullableFilter<"JobStatusHistory"> | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFilter<"JobStatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"JobStatusHistory"> | Date | string
  }

  export type JobOfferCreateWithoutStatusHistoryInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutJobOffersInput
    evaluation?: JobEvaluationCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxCreateNestedOneWithoutJobOfferInput
  }

  export type JobOfferUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    companyId: string
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: JobEvaluationUncheckedCreateNestedOneWithoutJobOfferInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculum?: JobCurriculumUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedCreateNestedOneWithoutJobOfferInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedCreateNestedOneWithoutJobOfferInput
  }

  export type JobOfferCreateOrConnectWithoutStatusHistoryInput = {
    where: JobOfferWhereUniqueInput
    create: XOR<JobOfferCreateWithoutStatusHistoryInput, JobOfferUncheckedCreateWithoutStatusHistoryInput>
  }

  export type JobOfferUpsertWithoutStatusHistoryInput = {
    update: XOR<JobOfferUpdateWithoutStatusHistoryInput, JobOfferUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<JobOfferCreateWithoutStatusHistoryInput, JobOfferUncheckedCreateWithoutStatusHistoryInput>
    where?: JobOfferWhereInput
  }

  export type JobOfferUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: JobOfferWhereInput
    data: XOR<JobOfferUpdateWithoutStatusHistoryInput, JobOfferUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type JobOfferUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutJobOffersNestedInput
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
  }

  export type JobOfferCreateManyCompanyInput = {
    id?: string
    externalId?: string | null
    source: $Enums.JobSource
    url: string
    title: string
    location?: string | null
    remoteType?: $Enums.RemoteType
    rawDescription: string
    descriptionMarkdown?: string | null
    datePosted?: Date | string | null
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string | null
    contractType?: string | null
    roleCategory?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    skills?: string | null
    status?: $Enums.ApplicationStatus
    evaluationProcessStatus?: $Enums.JobEvaluationProcessStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOfferUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: JobEvaluationUncheckedUpdateOneWithoutJobOfferNestedInput
    evaluationOutbox?: JobEvaluationOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculum?: JobCurriculumUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumOutbox?: JobCurriculumOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    curriculumPdfOutbox?: JobCurriculumPdfOutboxUncheckedUpdateOneWithoutJobOfferNestedInput
    statusHistory?: JobStatusHistoryUncheckedUpdateManyWithoutJobOfferNestedInput
  }

  export type JobOfferUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumJobSourceFieldUpdateOperationsInput | $Enums.JobSource
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remoteType?: EnumRemoteTypeFieldUpdateOperationsInput | $Enums.RemoteType
    rawDescription?: StringFieldUpdateOperationsInput | string
    descriptionMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    datePosted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleCategory?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    evaluationProcessStatus?: EnumJobEvaluationProcessStatusFieldUpdateOperationsInput | $Enums.JobEvaluationProcessStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumWorkCreateManyCurriculumInput = {
    id?: string
    name: string
    position: string
    summary: string
    include?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumProjectCreateManyCurriculumInput = {
    id?: string
    name: string
    description: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumPublicationCreateManyCurriculumInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCurriculumWorkUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumWorkUncheckedUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumWorkUncheckedUpdateManyWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    include?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumProjectUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumProjectUncheckedUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumProjectUncheckedUpdateManyWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPublicationUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPublicationUncheckedUpdateWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCurriculumPublicationUncheckedUpdateManyWithoutCurriculumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryCreateManyJobOfferInput = {
    id?: string
    fromStatus?: $Enums.ApplicationStatus | null
    toStatus: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type JobStatusHistoryUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryUncheckedUpdateWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobStatusHistoryUncheckedUpdateManyWithoutJobOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    toStatus?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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