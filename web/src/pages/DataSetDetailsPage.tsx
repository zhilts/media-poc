import { generatePath } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { DataSetCRUD } from '../api/data-set';
import { DataSetDetails, Header, PageBody } from '../components';
import { PATH } from '../routing/path';

export const DataSetDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { item, delItem } = DataSetCRUD.useItem(id);
  return <div>
    <Header>
      Data Set: #{ item?.id } { item?.name }
    </Header>
    <PageBody>
      <Button onClick={ () => navigate(generatePath(PATH.DATA_SET_LIST)) } variant="contained">
        Back
      </Button>
      <DataSetDetails item={ item } onDelete={ delItem } />
    </PageBody>
  </div>;
};
