import './App.css';
import Header from './Header';
import Middle from './Middle';
import Home from './Home';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="App">
      <Switch>

        <Route path="/login">
          <Header />
          <Login />
        </Route>

        <Route path="/">
        <Header />
        <Middle />
        <Home />
     </Route>

    

      </Switch>
    
    
     
    </div>

    </Router>
  );
}

export default App;
