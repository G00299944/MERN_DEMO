import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Create from '../src/components/create';
import Read from '../src/components/read';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/create" component = {Create}/>
          <Route path="/read" component = {Read}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
