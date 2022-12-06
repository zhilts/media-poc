import { useParams } from 'react-router-dom';
import { DataSetCRUD } from '../api/data-set';
import { DataSetEdit, Header, PageBody } from '../components';

export const DataSetEditPage = () => {
  const { id } = useParams();
  const { item, update } = DataSetCRUD.useItem(id);
  return <div>
    <Header>
      Data Set #{ item?.id } { item?.name }
    </Header>
    <PageBody>
      <DataSetEdit item={ item } onSubmit={ update } />
    </PageBody>
  </div>;
};
