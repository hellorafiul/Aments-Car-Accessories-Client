import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MainMenu from "./Pages/Shared/Navigation/MainMenu";
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import HotDeal from "./Pages/Home/HotDeal/HotDeal";
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/shop">
              <MainMenu></MainMenu>
              <Services />
              <HotDeal></HotDeal>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/shop/:id">
              <MainMenu></MainMenu>
              <Purchase></Purchase>
              <HotDeal></HotDeal>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/home">
              <Home />
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <MainMenu></MainMenu>
              <Login />
            </Route>
            <Route path="/register">
              <MainMenu></MainMenu>
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
