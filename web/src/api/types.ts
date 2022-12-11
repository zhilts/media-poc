export interface IListHook<T> {
  items: T[];
  reload: () => Promise<T[]>;
}

export interface IItemHook<T> {
  item: T;
  reload: () => Promise<T>;
  update: (item: T) => Promise<T>;
  delItem: () => Promise<void>;
}
