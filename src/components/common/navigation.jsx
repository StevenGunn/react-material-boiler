import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './appBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Home from '@material-ui/icons/HomeTwoTone';
import Person from '@material-ui/icons/PersonOutlineTwoTone';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    '& a': {
      color: 'black',
      textDecoration: 'none',
      },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    height: 'inherit',
    padding: 'inherit'
  }
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.drawerContainer}>
        <Toolbar />
        <List>
          <Link to='/'>
            <ListItem button key="Home">
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to='/one'>
            <ListItem button key="Person">
              <ListItemIcon><Person /></ListItemIcon>
              <ListItemText primary="Person" />
            </ListItem>
          </Link>
        </List>
      </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Paper className={classes.paper}>
          { props.children }
        </Paper>
      </main>
    </div>
  );
}
