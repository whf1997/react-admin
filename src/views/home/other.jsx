import React, {Component} from 'react'
import {Button} from "antd";

export default class Other extends Component{

    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return(
            <div>
                hello other <Button type='primary' onClick={this.goBack}>回退</Button>
            </div>
        )
    }
}

