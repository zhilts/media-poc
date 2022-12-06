import { useRef } from 'react';
import { generatePath } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataSetCRUD } from '../api/data-set';
import { DataSetEdit, Header, PageBody } from '../components';
import { DataSet } from '../models';
import { PATH } from '../routing/path';

export const DataSetCreatePage = () => {
  const navigate = useNavigate();
  const item = useRef(new DataSet(null, '', null));
  return <div>
    <Header>
      New Data Set
    </Header>
    <PageBody>
      <Button onClick={ () => navigate(generatePath(PATH.DATA_SET_LIST)) } variant="contained">
        Back
      </Button>
      <DataSetEdit item={ item.current } onSubmit={DataSetCRUD.createItem}/>
    </PageBody>
  </div>;
};
