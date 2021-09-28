import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import gameImg from '../../assets/games.png';

export function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="logo">
          <img src={gameImg} alt="Logo image" />
          <h1>freetoplayTJK</h1>
        </div>
        <div className="menu-links">
          <Link to="/" className="search-games">
            Jogos Grátis
          </Link>
          <Link to="/promo" className="search-games">
            Promoções
          </Link>
        </div>
      </div>
    </>
  );
}
