import React, { Component, Fragment } from 'react';
import { Form, Input, Button,  message, Table, Switch, Modal  } from 'antd';
import { departmentList, departmentDelete } from '@api/department'
class DepartLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pageNumber: 1,
      pageSize: 10,
      total: 0,
      columns: [
        {
          title: '部门',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '人数',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (text, record, index) => {
            return (
              <Switch checkedChildren="开启" unCheckedChildren="禁用" defaultChecked={record.status ==='1'? true: false} />
            )
          }
        },
        {
          title: '操作',
          width: 200,
          dataIndex: 'address',
          key: 'address',
          render: (text, data) => {
            return (
              <div>
                <Button type = "primary"> 操作</Button>
                <Button style={{marginLeft: '20px'}} onClick={() => {this.openModel(data.id)}}>删除</Button>
              </div>
            )
          }
        },
      ],
      dataSource: [],
      isModalVisible: false,
      id: ''
    }
  }
  submitForm = (value) => {
    this.setState({
      pageNumber: 1,
      pageSize: 10,
      name: value.name
    })
    this.getList()
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    const { name, pageNumber, pageSize } = this.state
    const prams = {
      pageNumber,
      pageSize
    }
    if (name) {
      prams.name = name
    }
    departmentList(prams).then(res => {
      const data = res.data
      if (data.resCode === 0) {
        this.setState({
          dataSource: data.data.data,
          total: data.data.total
        })
      }
    })
  }

  openModel = (id) => {
    console.log(id,9999)
    this.setState({
      isModalVisible: true,
      id
    })
  }

  onSelctChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows)
  }

  handleOk = () => {
    const { id } = this.state
    departmentDelete({id}).then(res => {
      if (res.data.resCode === 0) {
        this.setState({
          isModalVisible: false,
          id: ''
        })
      }
      message.info(res.data.message)
      this.getList()
    })
  }

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }

  render() {
    const { columns, dataSource, isModalVisible } = this.state
    const rowSelection = {
      onChange: this.onSelctChange
    }
    return (
      <Fragment>
        <Form  layout="inline" onFinish={this.submitForm} style={{marginBottom: '40px'}}>
          <Form.Item label="部门名称" name="name">
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
        <Table rowKey="id" dataSource={dataSource} columns={columns}  rowSelection={{ ...rowSelection }} />
        <Modal title="提示" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消">
          <p>确定删除么？<strong style={{color: 'red'}}>删除后将不可恢复</strong></p>
        </Modal>
      </Fragment>
    );
  }
}
 
export default DepartLIst;