import React, { Component } from 'react';
import { Form, Input, Button, InputNumber, Radio, message } from 'antd';
import { addDepartment } from '../../api/department'
class DepartAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 16 },
      },
      loading: false 
    }
  }
  onFinish = (values) => {
    if(!values.username) {
      message.info('请输入部门名称')
      return false
    }
    this.setState({
      loading: true
    })
    addDepartment(values).then(
      message.info('添加成功')
      this.setState({
        loading: false
      })
    )
  }
  render() {
    const { layout, loading } = this.state
    return (
      <Form 
        { ...layout } 
        initialValues={{number:0, stutas:true}}
        onFinish={this.onFinish}
      >
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
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          label="部门状态"
          name="stutas"
        >
          <Radio.Group>
            <Radio value={true}>启用</Radio>
            <Radio value={false}>禁用</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="部门描述"
          name="descript"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" style={{marginLeft: '40px'}}>确认添加</Button>
        </Form.Item>
      </Form>
    );
  }
}
 
export default DepartAdd;