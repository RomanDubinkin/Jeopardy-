import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import Game from '../components/Game';
import Container from '@material-ui/core/Container';
import { startGame, initStore, handleAnswer, setUsers } from "../store/actions";

const func = { startGame, initStore, handleAnswer, setUsers };

const ws = new WebSocket('ws://localhost:3100');
const wsContext = React.createContext();

const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((store)=>store.users);
  // tried to reset users table on init, without success -()
  // ws.onopen = ()=>{
  //   setTimeout(()=>{ws.send(JSON.stringify({ func: 'setUsers', args: users }))}, 1000);
  // };
  React.useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3100/game', {
        method: 'GET',
      });
      const data = await response.json();
      
      dispatch(initStore(data));
    };
    getData();
  }, []);

  ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  dispatch(func[data.func](data.args));
}

  const game = useSelector((store) => store.game);
  const themes = useSelector((store) => store.themes);
  return (
    <wsContext.Provider value={ws}>
      <React.Fragment>
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