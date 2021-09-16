import React, { useContext } from 'react';

import { Card } from '../Card';

import { AppContext } from '../../context/AppProvider';

import './styles.scss';

export function CardList() {
  const { gameList } = useContext(AppContext);

  return (
    <div className="card-list">
      {gameList.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
}
