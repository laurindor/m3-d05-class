import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';

function App() {
  return (
    <div className='App'>
       <h1>Hello Pizza Bytes</h1>
    </div>
  );
}

export default App;
