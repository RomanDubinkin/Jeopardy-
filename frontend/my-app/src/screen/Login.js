import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {thunkInit} from '../store/actions';
import { Link } from 'react-router-dom';
import {wsContext} from '../App';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Login() {
  const history = useHistory();
  const ws = React.useContext(wsContext);
  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleClick() {
    dispatch(thunkInit({email,password,ws}));
    history.push('/game');
  }


  return (
    <form name="signinForm" method="POST" action="/signin" className={classes.root} noValidate autoComplete="off">
      <Input onChange={(event) => setEmail(event.target.value)} name="userEmail" type="text"placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
      <Input onChange={(event) => setPassword(event.target.value)} name="userPassword" type="password" placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
      {/* <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} /> */}
      <Button onClick={handleClick} type="button" variant="outlined" color="secondary">LOG IN</Button>
    </form>
  );
}


export default Login;
