import React, {Component} from 'react'
import {Button, Card, Icon, Table, Modal, message} from "antd";
import LinkButton from "../../components/link-button";

export default class Category extends Component{

    state={
        current:1,
        visible:false
    }

    initColunms=()=>{
        this.columns=[
            {
                title: '分类名称',
                width:300,
                dataIndex: 'Name',
                align:'center',
            },
            {
                title: '操作',
                align: 'center',
                width:100,
                dataIndex: 'action',
                render: (index,record,text) => (
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        {/*<Button type='link' size='small' onClick={this.showSubCategorys.bind(this,record)}>查看子分类</Button>*/}
                        {/*<LinkButton onClick={this.showSubCategorys.bind(this,index)}>查看子分类</LinkButton>*/}
                        <LinkButton onClick={()=>{this.showSubCategorys(index)}}> 查看子分类</LinkButton>
                    </span>
                )
            }
        ]
    }

    showSubCategorys=(record)=>{
       console.log(record)
    }
    initDatas=()=>{
        this.categorys=[
            {
                Name:'电脑',
                key:'1'
            },
            {
                Name:'衣服',
                key:'2'
            },
            {
                Name:'玩具',
                key:'3'
            },
            {
                Name:'电脑',
                key:'4'
            },
            {
                Name:'衣服',
                key:'5'
            },
            {
                Name:'玩具',
                key:'6'
            },
            {
                Name:'电脑',
                key:'7'
            },
            {
                Name:'衣服',
                key:'8'
            },
            {
                Name:'玩具',
                key:'9'
            },
        ]
    }
    componentWillMount() {
        this.initColunms();
        this.initDatas()
    }

    handle=()=>{
        message.success('处理成功')
        this.setState({
            visible:false
        })
    }
    render() {
        const {visible}=this.state
        const title='一级分类列表';
        const extra=(
            <Button type='primary' onClick={()=>(this.setState({visible:true}))}>
                <Icon type='plus'/>
                添加
            </Button>
        )
        console.log(this.data)
        return(
            <Card title={title} extra={extra}>
                <div>
                    <Table
                        columns={this.columns}
                        dataSource={this.categorys}
                        bordered
                        pagination={{ pageSize:5, showQuickJumper:true}}
                    />

                    <Modal title='添加' visible={visible} width={600} onCancel={()=>(this.setState({visible:false}))} onOk={this.handle}/>
                </div>
            </Card>
        )
    }
}

