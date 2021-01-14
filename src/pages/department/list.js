import React, { Component, Fragment } from 'react';
import { Form, Input, Button,  message, Table, Switch, Modal  } from 'antd';
import { departmentList, departmentDelete, departmentStatus } from '@api/department'
import { withRouter } from 'react-router-dom'
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
              <Switch onChange={() => this.handlerChange(record)} checkedChildren="开启" unCheckedChildren="禁用" defaultChecked={record.status ==='1'? true: false} />
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
                <Button Button type = "primary" onClick = {() => {this.props.history.push('/department/add/?id=' + data.id)}} >编辑
                </Button>
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

  openModel(id) {
    this.setState({
      isModalVisible: true,
      id
    })
  }

  // handlerEdit(id) {
  //   this.props.history.push({pathname: '/department/add/', state: id})
  // }

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

  // switch 启用 禁用按钮
  handlerChange(data) {
    console.log(data)
    if (!data.status) return false
    const params = {
      id: data.id,
      statue: data.status === '1' ? false : true
    }
    departmentStatus(params).then(res => {
      if (res.data.resCode === 0) {
        message.info('修改成功')
      } else {
        message.info(res.data.message)
      }
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
 
export default withRouter(DepartLIst);