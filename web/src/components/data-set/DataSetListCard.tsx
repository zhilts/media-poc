import { generatePath } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ListItemText, ListItemButton, ListItemAvatar, Avatar } from '@mui/material';
import { DataSet } from '../../models';
import { PATH } from '../../routing/path';

interface IDataSetCardProps {
  item: DataSet;
}

export const DataSetListCard = ({ item }: IDataSetCardProps): JSX.Element => {
  const navigate = useNavigate();
  return <ListItemButton onClick={ () => navigate(generatePath(PATH.DATA_SET_DETAILS, { id: item.id })) }>
    <ListItemAvatar>
      <Avatar>
        { item.id }
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={ `#${ item.id } ${ item.name }` }
      secondary={ item.createdAt.format('YYYY-MM-DD_HH-mm-ss') }
    />
  </ListItemButton>;
};
