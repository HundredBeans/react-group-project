import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/home';
import SignIn from '../pages/signin';
import Profile from '../pages/profile';
import LogOut from '../pages/logout';
import FormPostMeme from '../pages/formPostMeme';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/logout" component={LogOut} />
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;