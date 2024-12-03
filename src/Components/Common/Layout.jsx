import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Avatar, Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Container } from "@mui/material";
import { Link, Outlet} from "react-router-dom";
import { Home, LocalOffer, ConfirmationNumber, Mail, Menu } from "@mui/icons-material";
import Logo from '../../Icons/Logo';

const Layout = () => {
  const drawerWidth = 240;
  const appBarHeight = 64; // Height of the AppBar
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#634E94",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Logo />
          <Box flexGrow={1} />
          <IconButton>
            <Avatar alt="Profile" src="/profile.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            backgroundColor: "#7F69B3",
            color: "#ECEFF5",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: `${appBarHeight}px`,
          },
        }}
      >
        <Box>
          <List>
            <ListItem button component={Link} to="./tiers">
              <ListItemIcon>
                <Home sx={{ color: "#ECEFF5" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#ECEFF5" }} primary="Your Tiers" />
            </ListItem>
            <ListItem button component={Link} to='./offers'>
              <ListItemIcon>
                <LocalOffer sx={{ color: "#ECEFF5" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#ECEFF5" }} primary="Your Offers" />
            </ListItem>
            <ListItem button component={Link} to="./coupons">
              <ListItemIcon>
                <ConfirmationNumber sx={{ color: "#ECEFF5" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#ECEFF5" }} primary="Your Coupons" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="./contact">
              <ListItemIcon>
                <Mail sx={{ color: "#ECEFF5" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#ECEFF5" }} primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Container sx={{
        marginLeft: open ? `${drawerWidth - 15}px` : -2,
        paddingTop: 1,
        paddingBottom: 1,
        marginTop: `${appBarHeight}px`, // Added top margin to compensate for the fixed AppBar
        height: `calc(100vh - ${appBarHeight}px)`,
        width: '100%', // Adjusted to prevent overflow
        overflow: 'auto',
      }}>
        <Box
          component="main"
          sx={{
            width: ' 100%',
            height: '100%',
            p: 0 
          }}>
          <Outlet sidebarOpen={open} />
        </Box>
      </Container>
    </>
  );
};

export default Layout;