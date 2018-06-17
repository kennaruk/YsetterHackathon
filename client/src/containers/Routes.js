import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import LaborRegister from './LaborRegister';
import Header from './Header';
import Register from './Register';
import NewLabor1 from './NewLabor1';
import NewLabor2 from './NewLabor2';
import NewLabor3 from './NewLabor3';
import NewLabor4 from './NewLabor4';
import NewLabor4_new from './NewLabor4_new';
import NewLabor5_new from './NewLabor5_new';
import NewLabor5 from './NewLabor5';
import ListLabor from './ListLabor';
import ListFollower from './ListFollower';
import ScanQrCode from './ScanQrCode';
import RegisterComplete from './RegisterComplete';
import Overview from './Overview';
import Nationality from './Nationality';
import Info from './Info';


class Routes extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header {...this.props} />
                <Switch>
                    <div className="mainClass">
                        <Route path="/" exact component={Home}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/laborRegisterLanding" exact component={LaborRegister}/>
                        <Route path="/NewLabor1" exact component={NewLabor1}/>
                        <Route path="/NewLabor2" exact component={NewLabor2}/>
                        <Route path="/NewLabor3" exact component={NewLabor3}/>
                        <Route path="/NewLabor4" exact component={NewLabor4}/>
                        <Route path="/NewLabor4_new" exact component={NewLabor4_new}/>
                        <Route path="/NewLabor5_new" exact component={NewLabor5_new}/>
                        <Route path="/NewLabor5" exact component={NewLabor5}/>
                        <Route path="/ListLabor" exact component={ListLabor}/>
                        <Route path="/ListFollower" exact component={ListFollower}/>
                        <Route path="/ScanQrCode" exact component={ScanQrCode}/>
                        <Route path="/Info" exact component={Info}/>
                        <Route path="/Overview" exact component={Overview}/>
                        <Route path="/Nationality" exact component={Nationality}/>
                        <Route path="/RegisterComplete" exact component={RegisterComplete}/>
                        {/* <Route path="/labor" exact component={Labor}/> */}
                        {/* <Route path="/labor" exact component={Labor}/> */}

                    </div>
                </Switch>
            </div>

        )
    }
}
export default withRouter(Routes);
