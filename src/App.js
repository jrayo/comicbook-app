import React from 'react';
import Route from './app/Route'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider store={store} >
        <Route data-test="headerComponent"/>
    </Provider>
  );
}

export default App;
