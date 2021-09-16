import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { SearchGames } from './pages/SearchGames';
import { NotFound } from './pages/NotFound';

import './styles/global.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={SearchGames} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
