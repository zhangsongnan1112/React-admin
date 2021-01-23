import React, { Component, Fragment } from 'react';
import { Form, Input, Button,  message, Switch } from 'antd';
import { departmentStatus } from '@api/department'
import { withRouter, Link } from 'react-router-dom'
import TableList from '@c/TableList'
class DepartLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchId: '',
      config: {
        url: 'jobList',
        checkBox: true,
        rowKey: 'jobId',
        tabHeader: [
          {
            title: '职位名称',
            dataIndex: 'jobName',
            key: 'jobName',
          },
          {
            title: '部门名称',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record, index) => {
              return (
                <Switch onChange={() => this.handlerChange(record)} loading={this.state.switchId === record.jobId} checkedChildren="开启" unCheckedChildren="禁用" defaultChecked={record.status} />
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
                    <Link to={{pathname:'/job/add', state: {id: data.jobId}}}>编辑</Link>
                  </Button>
                  <Button style={{marginLeft: '20px'}} onClick={() => {this.delete(data.jobId)}}>删除</Button>
                </div>
              )
            }
          },
        ]
      },
    }
  }
  submitForm = (value) => {
    this.TableList.getList({name: value.name})
  }

  // switch 启用 禁用按钮
  handlerChange(data) {
    if (!data.status) return false
    this.setState({switchId: data.jobId})
    const params = {
      id: data.jobId,
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
        <TableList config={this.state.config} batchShow={true} onRef={this.getChildRef}></TableList>
      </Fragment>
    );
  }
}
 
export default withRouter(DepartLIst);