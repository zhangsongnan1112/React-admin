import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './login.scss'
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  finish = () => {
    alert()
  }

  render() { 
    return ( 
      <div className="container">
        <div className="form-header">
          <h1>登录</h1>
          <span>注册账号</span>
        </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={() => this.finish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!'}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!'}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
 
export default Layout;