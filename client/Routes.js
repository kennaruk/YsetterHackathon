import React from "react";
import { Route, Switch,IndexRoute } from "react-router-dom";

export default ({childProps}) => 
    <Switch>
        {/* {console.log('childProps:', props)} */}
        {/* <Route path="/" exact  render={(props) => { return ( !childProps.isAuthenticated ? <Home {...props} /> : <Homelogin {...props} />)}} />        
        <Route path="/project" exact  render={(props) => { return ( !childProps.isAuthenticated ? <Home {...props} /> : <Project {...props} />)}} />
        <Route path="/CreateNewProject" exact  render={(props) => { return ( !childProps.isAuthenticated ? <Home {...props} /> : <CreateNewProject {...props} />)}} />
        <Route path="/DataSetSelection" exact  render={(props) => { return ( !childProps.isAuthenticated ? <Home {...props} /> : <DataSetSelection {...props} />)}} />
        <Route path="/result" exact  render={(props) => { return ( !childProps.isAuthenticated ? <Home {...props} /> : <Result {...props} />)}} />
        {/* <Route path="/" exact  component={renderLandingPage} props={childProps}/> */}
        {/* <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/register" exact component={Register} props={childProps} /> */} */}

    </Switch>