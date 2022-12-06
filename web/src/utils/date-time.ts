import moment, { Moment } from 'moment';

export const parseDateTime = (value: string): Moment => moment(value).utc();
