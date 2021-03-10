import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Switch>
                    <Route path="/forecast">
                        <Forecast />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
