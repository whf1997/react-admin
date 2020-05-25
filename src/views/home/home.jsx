import React, {Component} from 'react'
import './home.css'
export default class Home extends Component{

    jump=()=>{
        this.props.history.push('/other')
    };
    render() {
        return(
                <div className='home'>
                    {/*<Button type='primary' onClick={this.jump}> home</Button>*/}
                    欢迎使用削皮皮后台管理系统
                </div>
        )
    }
}

