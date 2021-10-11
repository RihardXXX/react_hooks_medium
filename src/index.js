import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'routes'

const App = () => {
    return (
        <div className="App">
            <h3>Welcome to react hooks project</h3>
            <Router>
                <Routes />
            </Router>
        </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
