import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import styles from "./App.module.scss";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <div className={styles.container}>
          <Nav />
          <Route path={["/", "/game/:id"]} component={Home} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
