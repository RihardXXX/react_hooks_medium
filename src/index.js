import React from 'react';
import ReactDOM from 'react-dom';
import { CurrentUserProvider } from 'context/currentUserContext'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'routes'
import TopBar from 'components/TopBar'
import AutoLoadUser from 'components/AutoLoadUser'

const App = () => {
    return (
        <CurrentUserProvider>
            <AutoLoadUser>
                <Router>
                    <TopBar/>
                    <Routes />
                </Router>
            </AutoLoadUser>
        </CurrentUserProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
