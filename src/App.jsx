import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
