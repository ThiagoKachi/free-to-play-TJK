import React from 'react';

import { Header } from '../../components/Header';
import { Description } from '../../components/Description';
import { CardList } from '../../components/CardList';

import './styles.scss';

export function Home() {
  return (
    <>
      <Header />
      <Description />
      <CardList />
    </>
  );
}
