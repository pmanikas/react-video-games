import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Nav />
        <Route path={["/", "/game/:id"]}>
          <Home />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;
