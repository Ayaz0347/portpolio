import React from 'react';
import {Box, Typography} from '@material-ui/core'
import {useStyles} from './HeaderStyles'
import Navbar from './Navbar';

export default function Header() {
const classes=useStyles()
  return(
    <Box className={classes.HeaderWrapper}>
        <Navbar/>
     <Box>
     <Box className={classes.Headercontainer}>
      <Typography variant='h2' component="h4" className={classes.headerTitle}> Hello Developers...</Typography>
      <Typography variant='h2' component="h4" className={classes.headerTitle}> I will create websites and applications on your need.. .</Typography>
      </Box>
     </Box>
    </Box>
  )
}
