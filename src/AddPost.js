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
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import './style.css'


const useStyles = makeStyles(theme => ({
  absolute: {
    position: 'fixed',
    top: '120px',
    right: '20px',
    backgroundColor: 'coral',
    color: 'white',
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

  const [open, setOpen] = React.useState(false);
  
  const emptyPost = {
    category: '',
    image: 'https://source.unsplash.com/random?',
    comments: []
};
  
  const [values, setValues] = React.useState(emptyPost);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    props.handleNewPost (values);
    setOpen(false);
    setValues(emptyPost)
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setValues(emptyPost)
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
            // id="title"
            value={values.title}
            onChange={handleChange('title')}
            label="Title"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            // id="shortDescription"
            value={values.shortDescription}
            onChange={handleChange('shortDescription')}
            label="Short Description"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            // id="description"
            value={values.description}
            onChange={handleChange('description')}
            label="Description"
            type="text"
            fullWidth
            required
          />
          <TextField
            // id="category"
            select
            label="Category"
            fullWidth
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
            // id="image"
            label="Image URL"
            onChange={handleChange('image')}
            fullWidth
            type='url'
            value={values.image}
            margin="normal"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddPost;