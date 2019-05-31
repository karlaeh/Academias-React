import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css'


const useStyles = makeStyles(theme => ({
  absolute: {
    position: 'fixed',
    top: '120px',
    right: '20px',
    backgroundColor: 'coral',
    color: 'white',
  },
  textField: {
    width: '100%',
  },
  menu: {
    width: '100%',
  }
}));

const categ = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Travel',
    value: 'Travel',
  },
  {
    label: 'Lifestyle',
    value: 'Lifestyle',
  },
  {
    label: 'Business',
    value: 'Business',
  },
  {
    label: 'Food',
    value: 'Food',
  },
  {
    label: 'Work',
    value: 'Work',
  },
];



function AddPost(props) {
  const imageurl = props.getSrc[1]

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    category: '',
    source: imageurl
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  
  const classes = useStyles();
  
  return (
    <div>
      { console.log(imageurl)}
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
          <TextField
          select
          label="Category"
          className={classes.textField}
          value={values.category}
          margin="normal"
          onChange={handleChange('category')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          >
          {categ.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
        ))}
        </TextField>
        <TextField
        label="Image URL"
        className={classes.textField}
        value={values.source}
        onChange={handleChange('source')}
        margin="normal"
        />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddPost;