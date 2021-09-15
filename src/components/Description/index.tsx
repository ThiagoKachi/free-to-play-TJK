import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export function Description() {
  return (
    <section>
      <div className="infos">
        <h1>
          Encontre e acompanhe os melhores jogos <span>grátis!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
          eius!Lorem ipsum dolor sit amet, consectetur.
        </p>
        <Link className="search-button" to="/search">
          Procurar Jogos
        </Link>
      </div>
    </section>
  );
}
