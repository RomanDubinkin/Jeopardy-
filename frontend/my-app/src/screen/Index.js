import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
}));

function Index() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Jeopardy!
          </Typography>
            {
              user
                ?
                <>
                  {/* <Button onClick={logout} color="inherit">Logout</Button> */}
                  <Button color="secondary"><Link className="linkClass" to={'/home'}>Home</Link></Button>
                  <Button color="secondary"><Link className="linkClass" to={`/profile/${user.id}`}>Profile</Link></Button>
                </>
                :
                <>
                  <Button color="secondary"><Link className="linkClass" to={'/register'}>Sign Up</Link></Button>
                  <Button color="secondary"><Link className="linkClass" to={'/login'}>Login</Link></Button>
                </>
            }
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Index;
