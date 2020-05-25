import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import WrapLogin from "./views/login/login";
import Admin from "./views/admin/admin";
export default class App extends React.Component{

    render() {
        return(
           <BrowserRouter>
               <Switch>
                   <Route path='/login' component={WrapLogin}/>
                   <Route path='/' component={Admin}/>
               </Switch>
           </BrowserRouter>
        )
    }
}