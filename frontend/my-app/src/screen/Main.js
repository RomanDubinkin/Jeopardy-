import React from "react";
import { useSelector } from 'react-redux';
import Table from '../components/Table';
import Game from '../components/Game';
import Container from '@material-ui/core/Container';

const Main = () => {
  const game = useSelector((store) => store.game);
  const themes = useSelector((store) => store.themes);
  return (
    <React.Fragment>
      <Container maxWidth="sm" style={{ backgroundColor: 'pink', height: '40vh', marginTop: '10vh' }}>
        {!game.status && <Table themes={themes} />}
        {game.status && <Game title={game.title} question={game.question} price={game.price} answer={game.answer} />}
      </Container>
    </React.Fragment >
  )
};

export default Main;
