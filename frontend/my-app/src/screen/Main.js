import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import Game from '../components/Game';
import Container from '@material-ui/core/Container';
import { initStore } from "../store/actions";

const ws = new WebSocket('ws://localhost:3100');
const wsContext = React.createContext();
ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  console.log(">>>>>>> getting something from WS server", data);
}

const Main = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3100/game', {
        method: 'GET',
      });
      const data = await response.json();
      console.log('>>>> init data: ', data);
      dispatch(initStore(data));
    };
    getData();
  }, []);

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