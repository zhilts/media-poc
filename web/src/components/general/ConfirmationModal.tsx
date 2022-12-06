import { Dialog, DialogContent, DialogActions, Button, DialogTitle } from '@mui/material';

export interface ConfirmationModalProps {
  title: string;
  message: string;
  open: boolean;
  onClose: (value?: boolean) => void;
}

export const ConfirmationModal = ({ onClose, title, message, open, ...other }: ConfirmationModalProps) => {
  const handleCancel = () => {
    onClose(false);
  };

  const handleOk = () => {
    onClose(true);
  };

  return (
    <Dialog
      open={ open }
      { ...other }
    >
      <DialogTitle>{ title }</DialogTitle>
      <DialogContent dividers>
        { message }
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={ handleCancel }>
          Cancel
        </Button>
        <Button onClick={ handleOk }>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};
