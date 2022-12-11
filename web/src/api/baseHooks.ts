import { useState, useCallback, useEffect } from 'react';
import { del, get, post, put } from './base';
import { ISerializer } from './serilizers/base';
import { IItemHook, IListHook } from './types';

export const useListHook = <T, U>(basePath: string, serializer: ISerializer<T, U>): IListHook<T> => {
  const path = basePath + '/';
  const [ items, setItems ] = useState([]);
  const reload = useCallback(async () => {
    const listRaw: U[] = await get<U[]>(path);
    const items: T[] = listRaw.map(serializer.fromJSON);
    setItems(items);
    return items;
  }, [ path, serializer ]);

  useEffect(() => {
    void reload();
  }, [ reload ]);

  return {
    items,
    reload,
  };
};

export const useItemHook = <T, U>(basePath: string, id: number, serializer: ISerializer<T, U>): IItemHook<T> => {
  const path = `${ basePath }/${ id }/`;
  const [ item, setItem ] = useState(null);

  const reload = useCallback(async () => {
    const rawItem: U = await get<U>(path);
    const item: T = serializer.fromJSON(rawItem);
    setItem(item);
    return item;
  }, [ path, serializer ]);

  const update = useCallback(async (item: T) => {
    const itemRaw = serializer.toJSON(item);
    const newRawItem = await put(path, itemRaw);
    const newItem = serializer.fromJSON(newRawItem);
    setItem(newItem);
    return newItem;
  }, [ path, serializer ]);

  const delItem = useCallback(async () => del(path), [ path ]);

  useEffect(() => void reload(), [reload]);
  return {
    item,
    reload,
    update,
    delItem,
  };
};

interface IModelCRUD <T>{
  useList: () => IListHook<T>;
  useItem: (id: number)=> IItemHook<T>;
  createItem: (item: T) => Promise<T>;
}

export const createModelCRUD = <T, U>(path: string, serializer: ISerializer<T, U>): IModelCRUD<T> => {
  const createItem = async (item: T): Promise<T> => {
    const itemRaw = await post<U>(path, serializer.toJSON(item));
    return serializer.fromJSON(itemRaw);
  }
  return {
    useList: () => useListHook<T, U>(path, serializer),
    useItem: (id: number) => useItemHook(path, id, serializer),
    createItem,
  };
};
