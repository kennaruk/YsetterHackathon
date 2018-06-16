import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import LaborRegister from './LaborRegister';
import Header from './Header';
import Register from './Register';
import NewLabor1 from './NewLabor1';
import NewLabor2 from './NewLabor2';
import NewLabor3 from './NewLabor3';
import NewLabor4 from './NewLabor4';
import NewLabor5 from './NewLabor5';

class Routes extends Component {
    render() {
        return (
            <div>
                <Header {...this.props} />
                <Switch>
                    <div className="mainClass">
                        <Route path="/" exact component={Home}/>
                        <Route path="/laborRegisterLanding" exact component={LaborRegister}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/laborRegister1" exact component={NewLabor1}/>
                        <Route path="/laborRegister2" exact component={NewLabor2}/>
                        <Route path="/laborRegister3" exact component={NewLabor3}/>
                        <Route path="/laborRegister4" exact component={NewLabor4}/>
                        <Route path="/laborRegister5" exact component={NewLabor5}/>
                        {/* <Route path="/labor" exact component={Labor}/> */}
                        {/* <Route path="/labor" exact component={Labor}/> */}

                    </div>
                </Switch>
            </div>

        )
    }
}
export default withRouter(Routes);
