import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './screens/game';

function App() {
  useEffect(() => {
    console.log("started"); 
  }, []);
  

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component= {Game}/>
        <Route path="/"  render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
    
  );
}
//<AlertDismiss show={showAlert} setShow={setShowAlert} title="Error Title"/>
export default App;