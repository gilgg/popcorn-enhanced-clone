import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/nav/Nav";
import DetailsPage from "./pages/DetailsPage";
import BrowsePage from "./pages/BrowsePage";
import useInit from "./hooks/useInit";

const App = () => {
  const isLoading = useInit();

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/browse" exact>
          <BrowsePage browseType="regular" isLoading={isLoading} />
        </Route>
        <Route path="/browse/:type" exact>
          <BrowsePage browseType="regular" isLoading={isLoading} />
        </Route>
        <Route path="/browse/:type/search/" exact>
          <Redirect to="/browse" />
        </Route>
        <Route path="/browse/:type/search/:query">
          <BrowsePage browseType="search" isLoading={isLoading} />
        </Route>
        <Route path="/browse/:type/:genreName" exact>
          <BrowsePage browseType="genre" isLoading={isLoading} />
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
