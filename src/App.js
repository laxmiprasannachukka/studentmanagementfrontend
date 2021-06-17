import './App.css';
import Home from './home.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          </Switch>
        </Router>
     
    </div>
  );
}

export default App;
