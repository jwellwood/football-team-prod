import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface Props {
  children: React.ReactNode;
  title?: string;
  buttonElement: React.ReactElement;
}

const PresentationModal: React.FC<Props> = ({
  children,
  title,
  buttonElement,
}) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span
        role='button'
        style={{ cursor: 'pointer' }}
        onClick={handleClickOpen}
      >
        {buttonElement}
      </span>
      <Dialog
        fullWidth
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        PaperProps={{
          style: {
            background: 'rgba(0,0,0,0.9)',
          },
        }}
      >
        {title ? (
          <DialogTitle id='responsive-dialog-title'>{title}</DialogTitle>
        ) : null}
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PresentationModal;
