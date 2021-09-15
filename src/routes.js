import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { SearchGames } from './pages/SearchGames';
import { NotFound } from './pages/NotFound';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={SearchGames} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}
