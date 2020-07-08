import React from 'react';
//import { Counter } from './features/counter/Counter';
//import HomePage from './components/HomePage';
import ComicsListContainer from '../features/comicsList/Container'
import ComicDetail from '../features/comicDetails/Container'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



function App() {
  return (
    <Router basename="comicbook-app">
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            
            <Route path="/comic">
              <ComicDetail />
            </Route>
              
            <Route path="/">
              <ComicsListContainer />
            </Route>         
              
            
          </Switch>
        </div>
    </Router>
  );
}

export default App;
