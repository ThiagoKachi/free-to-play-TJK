import React, { useContext } from 'react';

import { GameByIdContext } from '../../context/GameByIdProvider';

import windowsImg from '../../assets/windows.png';

import './styles.scss';

type GameProps = {
  game: {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
  };
};

export function Card({
  game: { id, title, thumbnail, short_description, genre, platform },
}: GameProps) {
  const { gameById, redirectToGameDetails } = useContext(GameByIdContext);

  return (
    <div
      className="card"
      onClick={() => gameById(id).then(() => redirectToGameDetails(id))}
    >
      <img className="thumbnail" src={thumbnail} alt="Thumbnail do jogo" />
      {title.length > 18 ? <h2>{title.substr(0, 17)}...</h2> : <h2>{title}</h2>}
      <p>
        {short_description.length > 30
          ? `${short_description.substr(0, 29)}...`
          : short_description}
      </p>
      <div className="type-platform">
        <span>{genre}</span>
        {platform === 'PC (Windows)' ? (
          <img src={windowsImg} alt="Plataforma" />
        ) : (
          <span className="all-platforms">All</span>
        )}
      </div>
    </div>
  );
}
