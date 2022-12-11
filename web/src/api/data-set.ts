import { post } from './base';
import { DataSet } from '../models';
import { createModelCRUD, useItemHook } from './baseHooks';
import { dataSetSerializer, IDataSetAPI } from './serilizers/DataSetSerializer';

// TODO: Introduce a hook
export const createDataSet = async (item: DataSet): Promise<DataSet> => {
  const itemRaw = await post<IDataSetAPI>(`/medialib/data-set/`, dataSetSerializer.toJSON(item));
  return dataSetSerializer.fromJSON(itemRaw);
};



export const DataSetCRUD = createModelCRUD<DataSet, IDataSetAPI>('/medialib/data-set', dataSetSerializer);
