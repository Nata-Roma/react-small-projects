import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { CountdownTimer } from './components/countdownTimer/CountdownTimer';
import { Header } from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/countdown-timer'>
            <CountdownTimer />
          </Route>
          <Route exact path='/'>
            <div>
              Home
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
