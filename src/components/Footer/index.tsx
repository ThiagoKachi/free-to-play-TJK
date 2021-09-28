import React from 'react';

import gameImg from '../../assets/games.png';

import './styles.scss';

export function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={gameImg} alt="Logo image" />
        <h1>freetoplayTJK</h1>
      </div>
      <p>
        Feito por{' '}
        <a href="https://www.linkedin.com/in/thiago-kachinsky">
          Thiago kachinsky
        </a>
      </p>
    </div>
  );
}
