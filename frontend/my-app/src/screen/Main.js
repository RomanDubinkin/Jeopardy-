import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import Game from '../components/Game';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { startGame, initStore, handleAnswer, setUsers } from "../store/actions";

const func = { startGame, initStore, handleAnswer, setUsers };

const ws = new WebSocket('ws://localhost:3100');
const wsContext = React.createContext();

const Main = () => {
  const dispatch = useDispatch();
  const login = useSelector((store)=>store.login);
  // const [virgin, setVirgin] = React.useState(true);
  // if (virgin) {
  //  ws.send(JSON.stringify({ func: 'setUsers', args: login }));
  //  setVirgin(false)};

  React.useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3100/game', {
        method: 'GET',
      });
      const data = await response.json();
      
      dispatch(initStore(data));
      // setVirgin(true);
    };
    getData();
  }, []);

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

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={6} style={{ backgroundColor: 'pink', padding: '5vh' }}>
        <Paper className={classes.paper}>
          <p>{login}</p>
          <p>score: </p>
        </Paper>
      </Grid>
      <Grid item xs={6} style={{ backgroundColor: 'pink', padding: '5vh' }}>
        <Paper className={classes.paper}>
        <p>USER 2</p>
        <p>score: </p>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

  const game = useSelector((store) => store.game);
  const themes = useSelector((store) => store.themes);
  
  return (
    <wsContext.Provider value={ws}>
      <React.Fragment>      
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12}>
              <FormRow />
            </Grid>
          </Grid>
         </div>
        <Container maxWidth="sm" style={{ backgroundColor: 'pink', height: '40vh', marginTop: '10vh' }}>
          {!game.status && <Table themes={themes} />}
          {game.status && <Game title={game.title} question={game.question} price={game.price} answer={game.answer} />}
        </Container>
      </React.Fragment >
    </wsContext.Provider>
  )
};

export default Main;
export { wsContext };
