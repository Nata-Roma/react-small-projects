import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { CountdownTimer } from './components/countdownTimer/CountdownTimer';
import { Header } from './components/header/Header';
import { MarkdownEditor } from './components/markdownEditor/MarkdownEditor';
import { PaperRockScissors } from './components/paperRoskScissors/PaperRockScissors';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <Switch>
          <Route path='/countdown-timer'>
            <CountdownTimer />
          </Route>
          <Route path='/markdown-editor'>
            <MarkdownEditor />
          </Route>
          <Route path='/prs'>
            <PaperRockScissors />
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
