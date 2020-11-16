import React from "react";
import { useSelector } from 'react-redux';
import Table from '../components/Table';
import Game from '../components/Game';

const Main = () => {
  const game = useSelector((store) => store.game);
  const themes = useSelector((store) => store.themes);
  return (
    <React.Fragment>
      {!game && <Table themes={themes} />}
      {game && <Game title={game.title} question={game.question} price={game.price} answer={game.answer} />}
    </React.Fragment>
  )
};

export default Main;
