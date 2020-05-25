import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'
import './left-nav.css'
import menuList from "../../config/menuConfig";
import read from '../../assets/images/read.png'

import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";

class LeftNav extends Component{


    //数据数组生成标签数组
    getMenuNodes = (menuList) => {

        // 得到当前请求的path
        const path = this.props.location.pathname

        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                // 如果当前请求路由与当前菜单的某个子菜单的key匹配, 将菜单的key保存为openKey
                const cItem=item.children.find(cItem => cItem.key===path)
                if (cItem) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }
    render() {
        const path=this.props.location.pathname
        this.menuNodes = this.getMenuNodes(menuList)
        return(
            <div className='left-nav'>
                <header className='left-nav-header'>
                    <img style={{width:40,height:40, marginLeft:15,marginRight:15}} src={read} alt='logo'/>
                    <h1 style={{color:'white' ,fontSize:20,marginBottom:0}}>削皮皮后台</h1>
                </header>
                <Menu
                mode='inline'
                theme='dark'
                selectedKeys={[path]}
                defaultOpenKeys={[this.openKey]}>
                    {this.menuNodes}
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)