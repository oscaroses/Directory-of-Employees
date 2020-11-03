import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Main";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Directory of Employees</h1>
      </header>
      <body>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </body>
    </div>
  );
}

export default App;