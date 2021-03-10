import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './login';
import registration from './regstration';
import home from './home';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/registration' component={registration}/>
                    <Route exact path='/home' component={home}/>
                </Switch>
            </Router>
        )
    }
}
export default Routes;
