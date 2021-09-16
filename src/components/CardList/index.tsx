import React, { useContext } from 'react';

import { AppContext } from '../../context/AppProvider';
import { Card } from '../Card';

export function CardList() {
  const { gameList } = useContext(AppContext);

  return (
    <>
      {gameList.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </>
  );
}
