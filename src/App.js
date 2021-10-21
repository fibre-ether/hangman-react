import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './screens/game';
import Home from './screens/home';

function App() {
  

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/play" exact component= {Game}/>
        <Route path="/" exact component= {Home}/>
        <Route path="/"  render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
    
  );
}
//<AlertDismiss show={showAlert} setShow={setShowAlert} title="Error Title"/>
export default App;