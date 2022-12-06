import { useState, useCallback } from 'react';
import { generatePath } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataSet } from '../../models';
import { PATH } from '../../routing/path';
import { ConfirmationModal } from '../general';

interface IDataSetDetailsProps {
  item: DataSet;
  onDelete: () => Promise<void>
}

export const DataSetDetails = ({ item, onDelete }: IDataSetDetailsProps): JSX.Element => {
  const itemId = item?.id as number;
  const navigate = useNavigate();
  const [ showDeleteConfirmation, setShowDeleteConfirmation ] = useState(false);
  const onDeleteConfirm = useCallback((isConfirmedDelete: boolean) => {
    setShowDeleteConfirmation(false);
    if (isConfirmedDelete) {
      onDelete()
        .then(() => navigate(generatePath(PATH.DATA_SET_LIST)));
    }
  }, [itemId, navigate]);
  return item && <>
    <Typography
      component="h1"
      variant="h2"
      gutterBottom
    >
      { item.name }
    </Typography>
    <Stack direction="row">
      <IconButton onClick={ () => navigate(generatePath(PATH.DATA_SET_EDIT, { id: item.id })) }>
        <EditIcon color="primary" />
      </IconButton>
      <IconButton onClick={ () => setShowDeleteConfirmation(true) }>
        <DeleteIcon color="error" />
      </IconButton>
    </Stack>
    <ConfirmationModal
      title="Delete DataSet"
      message="Are you sure want to delete item?"
      open={ showDeleteConfirmation }
      onClose={ onDeleteConfirm } />
  </>;
};
