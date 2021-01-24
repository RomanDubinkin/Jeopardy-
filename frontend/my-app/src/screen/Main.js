import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import Game from '../components/Game';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { startGame, initStore, handleAnswer, setUsers } from "../store/actions";
import {wsContext} from '../App';

const func = { startGame, initStore, handleAnswer, setUsers };

const Main = () => {
  const game = useSelector((store) => store.game);
  const themes = useSelector((store) => store.themes);
  const users = useSelector((store) => store.users)
  const dispatch = useDispatch();
  const ws = React.useContext(wsContext);

  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('http://localhost:3100/game', {
  //       method: 'GET',
  //     });
  //     const data = await response.json();
      
  //     dispatch(initStore(data));
  //   };
  //   getData();
  // }, []);

  ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  dispatch(func[data.func](data.args));
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const classes = useStyles();

function Score ({user,size}) {
  return (
    <Grid item xs={size} style={{ backgroundColor: 'pink', padding: '5vh' }}>
      <Paper className={classes.paper}>
        <p>{user.login}</p>
        <p>score: {user.score} </p>
        </Paper>
    </Grid>
  )
}

function FormRow({users}) {
  const size = 12/users.length;
  return (
    <React.Fragment>
      {users.map(user=><Score key={user.login} user={user} size={size}/>)}
    </React.Fragment>
  );
}
    
  return ( 
      <React.Fragment>      
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12}>
              <FormRow users={users}/>
            </Grid>
          </Grid>
         </div>

        <Container maxWidth="sm" style={{ backgroundColor: 'pink', height: '40vh', marginTop: '10vh' }}>
          {!game.status && <Table themes={themes} />}
          {game.status && <Game title={game.title} question={game.question} price={game.price} answer={game.answer} />}
        </Container>
      </React.Fragment >
  )
};

export default Main;
