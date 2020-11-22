import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { signUp, setUsers, initStore} from '../store/actions';
import { Link } from 'react-router-dom';
import {wsContext} from '../App';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Login() {
  const ws = React.useContext(wsContext);
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleClick() {
    const response = await fetch('http://localhost:3100/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, 
        password,
      }),
    })
    const newResponse = await response.json();
    if (newResponse.status === 'ok') {
      const response = await fetch('http://localhost:3100/game', {
        method: 'GET',
      });
      const data = await response.json();
      console.log('юхууууууу');
      const id = newResponse.id;
      const login = newResponse.login;
      const email = newResponse.email;
      if (newResponse.data) dispatch(setUsers(newResponse.data));
      dispatch(signUp(id, login, email));
      dispatch(initStore(data));
      ws.send(JSON.stringify({ func: 'setUsers', args: [{login, score: 0}] }));

      // history.push('/');
  }
}

  return (
    <form name="signinForm" method="POST" action="/signin" className={classes.root} noValidate autoComplete="off">
      <Input onChange={(event) => setEmail(event.target.value)} name="userEmail" type="text"placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
      <Input onChange={(event) => setPassword(event.target.value)} name="userPassword" type="password" placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
      {/* <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} /> */}
      <Button onClick={handleClick} type="button" variant="outlined" color="secondary"><Link className="linkClass" to={'/game'}>LOG IN</Link></Button>
    </form>
  );
}


export default Login;
