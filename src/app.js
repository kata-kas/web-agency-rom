import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import DespreNoi from './pages/DespreNoi';
import Portofoliu from './pages/Portofoliu';
import Preturi from './pages/Preturi';
import Contact from './pages/Contact';
import Tsc from './pages/Tsc';

export default function App(){
    return (
       <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/desprenoi">
                    <DespreNoi/>
                </Route>
                <Route path="/portofoliu">
                    <Portofoliu/>
                </Route>
                <Route path="/preturi">
                    <Preturi/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/termeni-si-conditii">
                    <Tsc/>
                </Route>
            </Switch>
       </Router>
    )
}