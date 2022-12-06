export interface ISerializer<T, U> {
  fromJSON: (json: U) => T;
  toJSON: (item: T) => U;
}
