import moment from 'moment';
import { DataSet } from '../../models';
import { ISerializer } from './base';

export interface IDataSetAPI {
  id: number | null;
  name: string | null;
  created_at: string;
}

class DataSetSerializer implements ISerializer<DataSet, IDataSetAPI> {
  fromJSON(json: IDataSetAPI): DataSet {
    return new DataSet(json.id, json.name, moment(json.created_at).utc());
  }

  toJSON(item: DataSet): IDataSetAPI {
    return {
      id: item.id || null,
      name: item.name,
      created_at: item.createdAt ? item.createdAt.format() : null,
    };
  }
}

export const dataSetSerializer = new DataSetSerializer();
