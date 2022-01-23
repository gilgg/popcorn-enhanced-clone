import React, { useEffect, useState } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/nav/Nav";
import DetailsPage from "./pages/DetailsPage";
import BrowsePage from "./pages/BrowsePage";
import useInit from "./hooks/useInit";

const App = () => {
  // const [isStateFilled, setIsStateFilled] = useState(false);
  // console.log("isStateFilled", isStateFilled);

  // useInit(setIsStateFilled);
  useInit();
  // console.log("in app")
  
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/browse" exact>
          <BrowsePage browseType="regular" />
        </Route>
        <Route path="/browse/:type" exact>
          <BrowsePage browseType="regular" />
        </Route>
        <Route path="/browse/:type/search/" exact>
          <Redirect to="/browse" />
        </Route>
        <Route path="/browse/:type/search/:query">
          <BrowsePage browseType="search" />
        </Route>
        <Route path="/browse/:type/:genreName" exact>
          <BrowsePage browseType="genre" /> 
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
        <Route path="/">
          <Redirect to="/browse" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
