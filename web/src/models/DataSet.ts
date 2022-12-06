import { Moment } from 'moment';

import { BaseModel } from './BaseModel';

export class DataSet extends BaseModel {
  constructor(id: number | null = null, public name: string | null = null, public createdAt: Moment = null) {
    super(id);
  }
}
