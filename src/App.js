import React from 'react';
import './App.css';
// import "./NavBar/NavBar";
import { Switch, Route } from 'react-router-dom';
// import SingleProject from './components/SingleProject/SingleProject';
import MainPage from './MainPage';
// import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          {/* <Route exact path="/" render={() => <Home />} /> */}

          {/* <Route
            exact
            path="/:id"
            render={(props) => <SingleProject {...props} />}
          /> */}
        </Switch>
      </div>
      <footer>
        &copy;2020 developed by Katerina Matveeva
        <div> Enthusiastic and Passionate about what I do</div>
      </footer>
    </div>
  );
}

export default App;
