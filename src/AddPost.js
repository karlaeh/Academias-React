import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './style.css'


const useStyles = makeStyles(theme => ({
  absolute: {
    position: 'fixed',
    top: '120px',
    right: '20px',
    backgroundColor: 'coral',
    color: 'white',
  },
}));

function AddPost() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();
  
  return (
    <div>
      <Tooltip title="Add Post" aria-label="Add Post">
        <Fab className={classes.absolute} onClick={handleClickOpen}>
          <CreateIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle className='add-post-title' id="form-dialog-title">Create Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="entry-title"
            label="Title"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="entry-sdescrip"
            label="Short Description"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="entry-descrip"
            label="Description"
            type="text"
            fullWidth
            required
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddPost;