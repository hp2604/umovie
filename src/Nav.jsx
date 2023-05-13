/*
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


function Nav()
{
    return (
        <>
       <nav className="navbar navbar-expand-lg bg-info text-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Umovie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/bollywood"}>Bollywood</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/hollywood"}>Hollywood</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Git</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
        
    )
    
}
export default Nav;*/
import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
  `
  
;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}));

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/bollywood">
          <ListItemText primary="Bollywood" />
        </ListItem>
        <ListItem button component={Link} to="/hollywood">
          <ListItemText primary="Hollywood" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader position="fixed">
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Typography variant="h6" noWrap>
          Umovie
        </Typography>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        {!open && (
          <List sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <ListItem button component={Link} to="/umovie">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/bollywood">
              <ListItemText primary="Bollywood" />
            </ListItem>
            <ListItem button component={Link} to="/hollywood">
              <ListItemText primary="Hollywood" />
            </ListItem>
            <ListItem button component={Link} to="/umovie">
              <ListItemText primary="Git" />
            </ListItem>

          </List>
        )}
      </Toolbar>
    </StyledHeader>
  );
};

export default Nav;
