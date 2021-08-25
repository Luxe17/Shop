import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;