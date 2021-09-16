import React from 'react';

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
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>{short_description}</p>
      <div className="type-platform">
        <p>{genre}</p>
        <img src={platform} alt="" />
      </div>
    </div>
  );
}
