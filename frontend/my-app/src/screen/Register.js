import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {signUp} from '../store/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Register() {

  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleClick() {
    const request = await fetch('http://localhost:3100/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email, 
        password,
      }),
    })
    
    const response = await request.json();
    if (response.status === 'ok') {
      console.log('юхууууууу');
      const id = response.id;
      const login = response.login;
      const email = response.email;

      dispatch(signUp(id, login, email));

      // history.push('/');
    }
  }
  
  return (
    <form name="registerForm" method="POST" action="/register" className={classes.root} noValidate autoComplete="off">
      <Input onChange={(event) => setName(event.target.value)} name="userName" type="text" placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
      <Input onChange={(event) => setEmail(event.target.value)} name="userEmail" type="text"placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
      <Input onChange={(event) => setPassword(event.target.value)} name="userPassword" type="password" placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
      {/* <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} /> */}
      <Button onClick={handleClick} type="button" variant="outlined" color="secondary"><Link className="linkClass" to={'/game'}>Register</Link></Button>
    </form>
  );
}


export default Register;
