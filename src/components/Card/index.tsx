import React from 'react';

import windowsImg from '../../assets/windows.png';

import './styles.scss';

type GameProps = {
  game: {
    id: string;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
  };
};

export function Card({
  game: { title, thumbnail, short_description, genre, platform },
}: GameProps) {
  return (
    <div className="card">
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
