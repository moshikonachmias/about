import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Main from "./pages/main/main";
import Trending from "./pages/trending/trending";
import Culture from "./pages/culture/culture";

function App() {
    return (
        <Router>
            <>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/trending">
                        <Trending/>
                    </Route>
                    <Route path="/culture">
                      <Culture />
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
            </>
        </Router>
        /*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*/
    );
}

export default App;
