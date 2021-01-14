import React, { Component, Fragment } from 'react';
import { Form, Input, Button,  message, Table, Switch, Modal  } from 'antd';
import { departmentList, departmentDelete, departmentStatus } from '@api/department'
import { withRouter, Link } from 'react-router-dom'
class DepartLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tableLoading: false,
      pageNumber: 1,
      pageSize: 10,
      total: 0,
      switchId: '',
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
              <Switch onChange={() => this.handlerChange(record)} loading={this.state.switchId === record.id} checkedChildren="开启" unCheckedChildren="禁用" defaultChecked={record.status ==='1'? true: false} />
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
                <Button type = "primary">
                  <Link to={{pathname:'/department/add', state: {id: data.id}}}>编辑</Link>
                </Button>
                {/* <Button type = "primary" onClick = {() => {this.props.history.push('/department/add/?id=' + data.id)}} >编辑</Button> */}
                <Button style={{marginLeft: '20px'}} onClick={() => {this.setState({isModalVisible: true,id: data.id})}}>删除</Button>
              </div>
            )
          }
        },
      ],
      dataSource: [],
      isModalVisible: false,
      id: '',
      selectedRowKeys: []
    }
  }
  submitForm = (value) => {
    if (this.state.tableLoading === true) return false
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
    this.setState({tableLoading: true})
    departmentList(prams).then(res => {
      const data = res.data
      if (data.resCode === 0) {
        this.setState({
          dataSource: data.data.data,
          total: data.data.total,
          tableLoading: false
        })
      }
    }).catch(error => {
      this.setState({tableLoading: false})
    })
  }

  onSelctChange = (selectedRowKeys) => {
    this.setState({selectedRowKeys})
  }

  deleteList = (id) => {
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

  handleOk = () => {
    const { id } = this.state
    this.deleteList(id)
  }

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }

  // switch 启用 禁用按钮
  handlerChange(data) {
    if (!data.status) return false
    this.setState({switchId: data.id})
    const params = {
      id: data.id,
      statue: data.status === '1' ? false : true
    }
    departmentStatus(params).then(res => {
      this.setState({
        switchId: ''
      })
      if (res.data.resCode === 0) {
        message.info('修改成功')
      } else {
        message.info(res.data.message)
      }
    }).catch(error => {
      this.setState({
        switchId: ''
      })
    })
  }

  batchDelete = () => {
    if (this.state.selectedRowKeys.length === 0) return 
    const id = this.state.selectedRowKeys.join()
    this.deleteList(id)
  }

  render() {
    const { columns, dataSource, isModalVisible, tableLoading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
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
        <Table loading={tableLoading} rowKey="id" dataSource={dataSource} columns={columns}  rowSelection={{ ...rowSelection }} />
        <Button onClick={this.batchDelete}>批量删除</Button>
        <Modal title="提示" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消">
          <p>确定删除么？<strong style={{color: 'red'}}>删除后将不可恢复</strong></p>
        </Modal>
      </Fragment>
    );
  }
}
 
export default withRouter(DepartLIst);