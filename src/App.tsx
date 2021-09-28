import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { PromoGames } from './pages/PromoGames';
import { NotFound } from './pages/NotFound';
import { GameDetails } from './pages/GameDetails';

import './styles/global.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/promo" component={PromoGames} />
      <Route exact path="/:gameid" component={GameDetails} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
