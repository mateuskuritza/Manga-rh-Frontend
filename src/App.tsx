import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import "./reset.css";
import RegisterPage from './pages/register';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/:collaboratorName/registrar" component={RegisterPage} />
                <Route path="/" component={() => <h1> 404 - Not Found</h1>} />
            </Switch>
        </Router>
    );
}

export default App;
