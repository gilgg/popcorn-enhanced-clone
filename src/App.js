import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/nav/Nav";
import DetailsPage from "./pages/DetailsPage";
import BrowsePage from "./pages/BrowsePage";
import BrowseGenrePage from "./pages/BrowseGenrePage";
import BrowseSearchPage from "./pages/BrowseSearchPage";
import DraggableComponent from "./components/utils/Draggable";

const App = () => {
  console.log("in app");
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/browse" />
        </Route>
        <Route path="/browse" exact>
          <BrowsePage />
        </Route>
        <Route path="/browse/:type" exact>
          <BrowsePage />
        </Route>
        <Route path="/browse/:type/search/" exact>
          <Redirect to="/browse" />
        </Route>
        <Route path="/browse/:type/search/:query">
          <BrowseSearchPage />
        </Route>
        <Route path="/browse/:type/:genreName" exact>
          <BrowseGenrePage />
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
