import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Nav />
        <Route path={["/", "/game/:id"]} component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
