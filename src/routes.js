import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ConceptExample from './pages/ConceptExample';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:title' exact component={ConceptExample} />
      </Switch>
    </BrowserRouter>
  )
}