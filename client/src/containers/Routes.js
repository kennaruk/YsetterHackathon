import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <div className="mainClass">
                    <Route path="/login" exact component={Login}/>
                </div>
            </Switch>

        )
    }
}
export default Routes;
