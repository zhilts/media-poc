import { List } from '@mui/material';
import { DataSet } from '../../models';
import { DataSetListCard } from './DataSetListCard';

interface IDataSetListProps {
  items: DataSet[];
}

export const DataSetList = ({ items }: IDataSetListProps): JSX.Element => {
  return <List>{ items.map(item => <DataSetListCard key={ item.id } item={ item } />) }</List>;
};
