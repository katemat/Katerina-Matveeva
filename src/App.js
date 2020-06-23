import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SingleProject from "./SingleProject";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />

          <Route
            exact
            path="/:id"
            render={(props) => <SingleProject {...props} />}
          />
        </Switch>
      </div>
      <footer>
        &copy;2020 KM
        <div> enthusiastic and passionate about what I do</div>
      </footer>
    </div>
  );
}

export default App;
