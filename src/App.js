import React from 'react';
import './App.css';

import MenuIcon from '@material-ui/icons/Menu';

import { Button, Icon, makeStyles, Grid, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core'

import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

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

<Grid item xs={12}>
  <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
</Grid>


      </Grid>


    </div>
    
    </div>
  );
}

export default App;
