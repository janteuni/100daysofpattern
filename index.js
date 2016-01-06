import React from 'react';
import { render } from 'react-dom';
import { Router, DefaultRoute, Route } from 'react-router';
import App from './components/App';
import About from './pages/About';
import Home from './pages/Home';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import './styles/app.scss';

const rootComponent = (
  <Router>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

const mountNode = document.getElementById('root');

render(rootComponent, mountNode);
