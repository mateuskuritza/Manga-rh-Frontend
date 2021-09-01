import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import "./reset.css";
import RegisterPage from './pages/register';
import RegistersPage from "./pages/registers";
import ValidatePage from './pages/validate';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/:collaboratorName/registrar" component={RegisterPage} />
                <Route exact path="/registros" component={RegistersPage} />
                <Route exact path="/:collaboratorName/validar" component={ValidatePage} />
                <Route path="/" component={() => <h1> 404 - Not Found</h1>} />
            </Switch>
        </Router>
    );
}

export default App;
