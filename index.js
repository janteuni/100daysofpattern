import React from 'react';
import { Router, DefaultRoute, Route } from 'react-router';
import App from './components/App';
import About from './pages/About';
import Home from './pages/Home';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import './styles/app.scss';

React.render((
  <Router history={createBrowserHistory()}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.body);
