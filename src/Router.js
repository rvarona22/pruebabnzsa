import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nosotros from './components/Nosotros';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/nosotros/" component={Nosotros} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;