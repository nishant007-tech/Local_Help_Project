import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Topbar from './components/topbar/topbar';
import Home from './components/home/home';
import { useEffect } from 'react';
import Register from './components/register/register';
function App() {

  // let token = localStorage.getItem("token");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Position Object :", position);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    })
  }, [])

  return (
    <Router>
      <div className="MainContainer">
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register_service_provider" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
