import { useState, useCallback, useEffect, useRef } from 'react';
import { generatePath } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { clone, assign } from 'lodash';
import { Typography, TextField, Stack, Button } from '@mui/material';
import { DataSet } from '../../models';
import { PATH } from '../../routing/path';

interface IDataSetDetailsProps {
  item: DataSet;
  onSubmit: (item: DataSet) => Promise<DataSet>
}

export const DataSetEdit = ({ item, onSubmit }: IDataSetDetailsProps): JSX.Element => {
  const isNew = !item?.id;
  const navigate = useNavigate();
  const [ editItem, setEditItem ] = useState<DataSet>(null);
  const editItemRef = useRef(null);
  editItemRef.current = editItem;
  useEffect(() => {
    setEditItem(clone(item));
  }, [ item ]);
  const onChange = useCallback((key: string, value: string) => {
    setEditItem((current: DataSet) => assign(clone(current), { [key]: value }));
  }, []);
  const onSave = useCallback(() => {
    onSubmit(editItemRef.current)
      .then((item: DataSet) => navigate(generatePath(PATH.DATA_SET_DETAILS, { id: item.id })));
  }, [ isNew, navigate ]);
  return item &&
    <>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom
      >
        { isNew ? 'Create new data set' : `Edit #${ item.id }: ${ item.name }` }
        <TextField
          required
          label="Name"
          fullWidth
          value={ editItem?.name || '' }
          onChange={ e => onChange('name', e.target.value) }
        />
      </Typography>
      <Stack>
        <Button onClick={ onSave }>{ isNew ? 'Create' : 'Update' }</Button>
      </Stack>
    </>;
};
