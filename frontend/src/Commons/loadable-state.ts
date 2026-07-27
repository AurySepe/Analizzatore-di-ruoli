export type LoadableState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: T; isFetching?: boolean };

export type SafeLoadableState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T; isFetching?: boolean };
