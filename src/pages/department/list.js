import React, { Component, Fragment } from 'react';
import { Form, Input, Button,  message, Switch } from 'antd';
import { departmentStatus } from '@api/department'
import { withRouter } from 'react-router-dom'
import TableList from '@c/TableList'
class DepartLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      switchId: '',
      config: {
        url: 'departentList',
        checkBox: true,
        rowKey: 'id',
        tabHeader: [
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
                  <Button type = "primary" onClick = {() => {this.props.history.push('/department/add/?id=' + data.id)}} >编辑</Button>
                  <Button style={{marginLeft: '20px'}} onClick={() => {this.delete(data.id)}}>删除</Button>
                </div>
              )
            }
          },
        ]
      },
    }
  }
  submitForm = (value) => {
    // if (this.state.tableLoading === true) return false
    this.setState({
      pageNumber: 1,
      pageSize: 10,
      name: value.name
    })
    // this.getList()
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

  getChildRef = (ref) => {
    this.TableList = ref
  }

  delete(id) {
    this.TableList.handlerDelete(id)
  }

  render() {
    return (
      <Fragment>
        <TableList config={this.state.config} batchShow={true} onRef={this.getChildRef}></TableList>
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
      </Fragment>
    );
  }
}
 
export default withRouter(DepartLIst);