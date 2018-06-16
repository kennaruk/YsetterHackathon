import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import LaborRegister from './LaborRegister';
import Header from './Header';
import Register from './Register';

class Routes extends Component {
    render() {
        return (
            <div>
                <Header {...this.props} />
                <Switch>
                    <div className="mainClass">
                        <Route path="/" exact component={Home}/>
                        <Route path="/laborRegister" exact component={LaborRegister}/>
                        <Route path="/register" exact component={Register}/>
                        {/* <Route path="/labor" exact component={Labor}/> */}
                        {/* <Route path="/labor" exact component={Labor}/> */}

                    </div>
                </Switch>
            </div>

        )
    }
}
export default withRouter(Routes);
