import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './login';
import registration from './regstration';
import home from './home';
import Cart from './cart';
import reactModal from './reactModal';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/registration' component={registration}/>
                    <Route exact path='/home' component={home}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/reactModal' component={reactModal}/>
                </Switch>
            </Router>
        )
    }
}
export default Routes;
