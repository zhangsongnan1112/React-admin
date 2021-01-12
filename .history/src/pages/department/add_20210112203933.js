import React, { Component } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

class DepartAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 16 },
      }   
    }
  }
  render() {
    const { layout } = this.state
    return (
      <Form { ...layout }>
        <Form.Item
          label="部门名称"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="部门人数"
          name="number"
        >
          <InputNumber min={0}/>
        </Form.Item>
        <Form.Item
          label="部门状态"
          name="stutas"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="部门描述"
          name="descript"
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    );
  }
}
 
export default DepartAdd;