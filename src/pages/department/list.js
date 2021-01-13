import React, { Component, Fragment } from 'react';
import { Form, Input, Button,  message, Table } from 'antd';
class DepartLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        },
        {
          title: '操作',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      dataSource: []

    }
  }
  submitForm = (value) => {
    console.log(value)
  }

  render() {
    const { columns, dataSource } = this.state
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
        <Table dataSource={dataSource} columns={columns} />
      </Fragment>
    );
  }
}
 
export default DepartLIst;