import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Topbar from './components/topbar/topbar';
import Home from './components/home/home';
function App() {

  // let token = localStorage.getItem("token");

  return (
    <Router>
      <div className="MainContainer">
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
