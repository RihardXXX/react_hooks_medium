import React from 'react';
import ReactDOM from 'react-dom';
import { CurrentUserProvider } from 'context/currentUserContext'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'routes'
import TopBar from 'components/TopBar'

const App = () => {
    return (
        <CurrentUserProvider>
            <Router>
                <TopBar/>
                <Routes />
            </Router>
        </CurrentUserProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
