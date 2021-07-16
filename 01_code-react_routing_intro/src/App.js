import React from 'react';
import './App.css';

import { BrowserRouter,  Route, Link, Switch } from 'react-router-dom';

import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';

function App() {
  return (
    <div className='App'>
      
      <h1>Hello Pizza Bytes</h1>
      
      <BrowserRouter>

        <nav>
          <ul>
          <li>
            <Link to='/first-page'>Link to first-page</Link>
          </li>
          <li>
            <Link to='/second-page/jose'>Jose's Profile</Link>
          </li>
          <li>
            <Link to='/second-page/santi'>Santi's Profile</Link>
          </li>
          </ul>
        </nav>

        <Switch>
      
          <Route path='/second-page/:name'  component={SecondPageView}/>
          <Route path='/first-page'  component={FirstPageView}/>

        </Switch>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
