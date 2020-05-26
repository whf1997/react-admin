import React, {Component} from 'react'
import {Modal} from "antd";
import {withRouter} from 'react-router-dom'
import './header.css'
import memoryUtils from "../../utils/memoryUtils";
import LinkButton from "../link-button";
import localUtils from "../../utils/localUtils";
import {formateDate} from "../../utils/dataUtils";
import menuList from "../../config/menuConfig";
 class Header extends Component{

     state={
         currentTime:formateDate(Date.now())
     }
     getTime=()=>{
         //每隔1秒获取数据
         this.intervalId= setInterval(()=>{
             const currentTime=formateDate(Date.now())
             this.setState({
                 currentTime
             })
         },1000)
     }
     componentDidMount() {

         //获取当前的时间
         this.getTime()
     }


     /**
      *当前组件卸载之前调用
      */
     componentWillUnmount() {
         //清除定时器
         clearInterval(this.intervalId)
     }
    logout = () => {
        // 显示确认提示
        Modal.confirm({
            title: '确认退出吗?',
            onOk: () => {
                console.log('OK');
                // 确定后, 删除存储的用户信息
                // local中的
               localUtils.removeAdmin()
                // 内存中的
                memoryUtils.user = {}
                // 跳转到登陆界面
                 this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel');
            },
        })

    }
    getTitle=()=>{
        let title = ''
        const path = this.props.location.pathname
        menuList.forEach(item => {
            if (item.key===path) {
                title = item.title
            } else if (item.children) {
                const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }
    render() {
        const user=memoryUtils.user;
        const title=this.getTitle()
        const {currentTime}=this.state

        return(
            <div className='header'>
                <div className="header-top">
                     <span>
                         {currentTime}&nbsp;&nbsp;&nbsp;&nbsp;
                        欢迎,{user.username}&nbsp;&nbsp;
                         <LinkButton onClick={this.logout}>退出</LinkButton>
                    </span>
                </div>
                <div className='header-bottom'>
                    {title}
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
