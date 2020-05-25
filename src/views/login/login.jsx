import React, {Component} from 'react'
import { Form, Input, Button,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import logo from '../../assets/images/logo.png'
import {reqLogin} from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import localUtils from "../../utils/localUtils";
import {fakeAuth} from "../../utils/fakeAuth";
/**
 * 登录的路由组件
 */
class Login extends Component{

    handleSubmit=(e)=>{
        e.preventDefault()
        const form=this.props.form;
        //对所有表单进行验证
        form.validateFields(async (err,values)=>{
            if(!err){
                const {username,password}=values;
                try{
                   const res= await reqLogin(username,password)
                    console.log('请求成功',res)
                    if(res.data.code===10000){
                         memoryUtils.user=values //存到内存中
                        localUtils.saveAdmin(values)
                        fakeAuth.setToken('abcdefg')
                        this.props.history.replace('/')
                    }else {
                        message.error('登录失败')
                    }
                }catch (e) {
                    console.log('请求失败',e)
                }
            }
        })

    }

    render() {
        const form=this.props.form
        const { getFieldDecorator }=form


        return(
            <div className='login'>
                <header className='login-header'>
                    <img className='img' src={logo} alt='logo'/>
                    <h1 className='h'>React后台管理项目</h1>
                </header>

                <section className='login-content'>
                    <h2 className='login-content-title'>用户登录</h2>
                    <Form >
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {required: true, message: '请输入用户名'},
                                    {min:3, message:'长度不在范围内'},
                                    {max:12, message:'长度不在范围内'},
                                    {
                                        pattern:/^[a-zA-Z0-9]+$/,
                                        message:'用户名必须为字母或者数字'
                                    }
                                ],
                                initialValue:'admin'
                            })(<Input prefix={<UserOutlined type="user"
                                                            style={{color: 'rgba(0,0,0,.25)'}}/>}
                                      placeholder="用户名"/>
                            )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    rules: [
                                        {required: true, message: '请输入密码'},
                                        {min:3, message:'长度不在范围内'},
                                        {max:12, message:'长度不在范围内'},
                                        {
                                            pattern:/^[a-zA-Z0-9]+$/,
                                            message:'用户名必须为字母或者数字'
                                        }
                                    ],
                                })(
                                    <Input
                                        prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit} className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/**
 * 高阶函数,返回的函数是一个高阶组件,能够包装组件生成一个新的组件
 * 高阶组件
 */
const WrapLogin=Form.create()(Login)
export default WrapLogin

