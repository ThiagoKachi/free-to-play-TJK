import React from 'react';

import { Footer } from '../../components/Footer';
import { Description } from '../../components/Description';
import { Header } from '../../components/Header';

import './styles.scss';

export function PromoGames() {
  return (
    <>
      <Header />
      <Description
        buttonTitle="Ver Jogos Grátis"
        pageDescription={
          <>
            as melhores <span>promoções!</span>
          </>
        }
        changeImage="promos"
        linkTo="/"
      />
      <Footer />
    </>
  );
}
