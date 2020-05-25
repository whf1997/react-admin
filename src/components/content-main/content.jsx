import React, {Component} from 'react'

import Category from "../../views/category/category";
import {Route,Switch,Redirect} from "react-router-dom";
import Home from "../../views/home/home";
import Role from "../../views/role/role";
import Product from "../../views/product/product";
import User from "../../views/user/user";
import Other from "../../views/home/other";
import './content.css'
export default class ContentMain extends Component{

    render() {
        return(
            <div className='content' >
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path='/other' component={Other}/>
                    <Route path='/category' component={Category} />
                    <Route path='/product' component={Product} />
                    <Route path='/role' component={Role} />
                    <Route path='/user' component={User} />
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

