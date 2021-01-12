import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

class DepartAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Form>
        <Form.Item
          label="部门名称"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="部门人数"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="部门状态"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="部门描述"
          name="username"
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }
}
 
export default DepartAdd;