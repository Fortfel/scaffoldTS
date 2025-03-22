/**
 * Options for the fetchWithTimeout method.
 */
export type FetchWithTimeoutOptions<TApiResponse> = Readonly<{
  /** Fetch API request options */
  options: RequestInit
  /** Timeout duration in milliseconds */
  timeout?: number
  /** Response type handler */
  responseHandler?: (response: Response) => Promise<TApiResponse>
}>

/**
 * Represents any JSON-serializable value.
 * This type allows for primitive values, arrays, objects, and objects with toJSON methods.
 */
export type Jsonable = string | number | boolean | null | undefined | ReadonlyArray<Jsonable> | { readonly [key: string]: Jsonable } | { toJSON(): Jsonable } // prettier-ignore

/**
 * Options for creating a BaseError instance.
 */
export type BaseErrorOptions = {
  /** The underlying cause of the error */
  cause?: Error
  /** Additional context information that can be serialized to JSON */
  context?: Jsonable
}
