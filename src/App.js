import React from 'react';
import Route from './app/Route'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>
        <Route/>
    </Provider>
  );
}

export default App;
