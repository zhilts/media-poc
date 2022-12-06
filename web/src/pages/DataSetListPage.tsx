import { generatePath } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataSetCRUD, useDataSetList } from '../api/data-set';
import { DataSetList, Header, PageBody } from '../components';
import { PATH } from '../routing/path';

export const DataSetListPage = () => {
  const { items } = DataSetCRUD.useList();
  console.log(items);
  const navigate = useNavigate();
  return <>
    <Header>
      Data Sets
    </Header>
    <PageBody>
      <Button onClick={ () => navigate(generatePath(PATH.DATA_SET_NEW)) } variant="contained">
        Create
      </Button>
      <DataSetList items={ items } />
    </PageBody>
  </>;
};
