import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Bucket from './bucket';
import Todo from './todos';
import './index.css';

export default function (props) {

    return (
        <Router>
            <Switch>
                <Route exact path="/:id">
                    <Todo />
                </Route>
                <Route path="/">
                    <Bucket />
                </Route>
            </Switch>
        </Router>
    )
}