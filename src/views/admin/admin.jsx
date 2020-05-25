import React, {Component} from 'react'
import memoryUtils from "../../utils/memoryUtils";
import { Layout } from 'antd';
import LeftNav from "../../components/left-nav/left-nav";
import Header from "../../components/header/header";
import {fakeAuth} from "../../utils/fakeAuth";
import ContentMain from "../../components/content-main/content";
const { Footer, Sider, Content, } = Layout
export default class Admin extends Component{

    render() {
        const user=memoryUtils.user;
        console.log(user)
        console.log(fakeAuth.authenticate())
        if(!fakeAuth.authenticate()){
            this.props.history.replace('/login') // 事件回调函数中进行路由跳转
            // return <Redirect to="/login"/> // 自动跳转到指定的路由路径
        }
        return(
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{background:"white" ,margin:20,marginBottom:0}}>
                        <ContentMain>
                        </ContentMain>
                    </Content>
                    <Footer style={{color:'#cccccc',height:10, justifyContent:'center', display:"flex", alignItems: 'center'}}>好好学习,天天向上</Footer>
                </Layout>
            </Layout>


        )
    }
}

