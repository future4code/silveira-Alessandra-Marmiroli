import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled';


const Header = () => {
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" variant="h6">
            LabeEddit
          </Button>
          <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header