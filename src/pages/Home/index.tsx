import React, { useContext } from 'react';

import { Header } from '../../components/Header';
import { Description } from '../../components/Description';
import { CardList } from '../../components/CardList';
import { Loading } from '../../components/Loading';
import { Footer } from '../../components/Footer';

import { AppContext } from '../../context/AppProvider';

import './styles.scss';

export function Home() {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <Header />
      <Description />
      {isLoading ? <Loading /> : <CardList />}
      <Footer />
    </>
  );
}
