import React from "react";
import { AppBar, Toolbar, Typography, Button, Box} from "@material-ui/core";
import { useStyles } from "./HeaderStyles";

export default function Navbar() {
    const classes=useStyles()
    const navlinks=[
        {label:"About",Id:"About"},
        {label:"Portfolio",Id:"Portfolio"},
        {label:"Contact",Id:"Contact Us"},
    ]
  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        
        <Typography variant="h5" color="inherit" component="h6">
          {"< Code with Ayaz/ >"}
        </Typography>
        <Box>
        {navlinks.map((item, i)=>(<Button className={classes.navlinks}>{item.label}</Button>))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
