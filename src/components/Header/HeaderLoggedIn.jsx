import React from 'react';
import { Box, IconButton, Avatar, Button } from '@mui/material';
import { Link, Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CommentIcon from '@mui/icons-material/Comment';
import { useDispatch } from 'react-redux';
import { loggout } from '../../Reducer/logginSlice';

function HeaderLoggedIn() {
  const dispatch=useDispatch()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
      <IconButton color="inherit" sx={{ mr: 2 }}>
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit" sx={{ mr: 2 }}>
        <CommentIcon />
        <Box component="span" sx={{ ml: 1, color: 'white' }}>
          {/* Chat count goes here */}
        </Box>
      </IconButton>
      
      <IconButton href='http://localhost:3000/myprofile' color="inherit" sx={{ mr: 2 }}>
        <Avatar src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" alt="User avatar" />
      </IconButton>
      
      <Button component={RouterLink} to="/create-order" variant="contained" color="success" size="small" sx={{ mr: 2 }}>
        Create Order
      </Button>
      <Button to="/" onClick={()=>{localStorage.removeItem('jwt'); dispatch(loggout())}} variant="contained" color="secondary" size="small">
       
        Sign Out
      </Button>
    </Box>
  );
}

export default HeaderLoggedIn;
