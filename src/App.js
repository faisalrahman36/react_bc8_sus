import React from 'react';
import './App.css';

import MenuIcon from '@material-ui/icons/Menu';

import { Button, Icon, makeStyles, Grid, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testButton : {
    backgroundColor : "red"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div >
      Hello world
      <Button color="primary"  variant="contained"> Hello Button</Button>
      <Button color="secondary"  variant="contained"> Hello Button</Button>
      <Button color="secondary"  variant="outlined"> Hello Button</Button>
      <div className={classes.root}>
      <AppBar position="static" className={classes.testButton}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" className={classes.testButton}>Login</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>

        <Grid item xs={12} style={{backgroundColor:"blue"}}>
          Hello world 1
        </Grid>


        <Grid item xs={3} style={{backgroundColor:"skyblue"}}>
          Hello world 2
        </Grid>


        <Grid item xs={3} style={{backgroundColor:"magenta"}}>
          Hello world 3
        </Grid>

        <Grid item xs={3} style={{backgroundColor:"cyan"}}>
          Hello world 4
        </Grid>


        <Grid item xs={3} style={{backgroundColor:"grey"}}>
          Hello world 5
          <Grid item xs={8} style={{backgroundColor:"skyblue"}}>
          Hello world 6
        </Grid>
        </Grid>


      </Grid>
    </div>
    </div>
  );
}

export default App;
