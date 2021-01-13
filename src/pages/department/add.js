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
    if(!values.name) {
      message.info('请输入部门名称')
      return false
    }

    if (!values.content) {
      message.info('请输入部门描述')
      return false
    }
    this.setState({
      loading: true
    })
    addDepartment(values).then(res => {
      console.log(res)
      if (res.data.resCode === 0) {
        message.info('添加成功')
        this.form.resetFields()
        this.setState({
          loading: false
        })
      }
    })
    .catch(error => {
      this.setState({
        loading: false
      })
    })
  }
  render() {
    const { layout, loading } = this.state
    return (
      <Form
        ref={form => {this.form = form}}
        { ...layout } 
        initialValues={{number:1, status:true}}
        onFinish={this.onFinish}
      >
        <Form.Item
          label="部门名称"
          name="name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="部门人数"
          name="number"
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="部门状态"
          name="status"
        >
          <Radio.Group>
            <Radio value={true}>启用</Radio>
            <Radio value={false}>禁用</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="部门描述"
          name="content"
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