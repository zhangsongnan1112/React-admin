// import {Divider} from 'antd'
import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, ShoppingOutlined, UnlockOutlined } from '@ant-design/icons';
import Code from "../../component/Coder"
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  finish = () => {
    alert()
  
  }
  toggleType= () => {
    this.props.switchType('login')
  }

  render() { 
    const { username } = this.state
    return ( 
      <div className="container">
        <div className="form-header">
          <h1>注册</h1>
          <span onClick={this.toggleType}>登录</span>
        </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={() => this.finish}
        >
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!'}]}>
            <Input prefix={<UserOutlined />} placeholder="Username" className=""/>
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!'}]}>
            <Input.Password prefix={<ShoppingOutlined />} placeholder="Password"/>
          </Form.Item>

          <Form.Item name="passwordsecond" rules={[{ required: true, message: 'Please input your password!'}]}>
            <Input.Password prefix={<ShoppingOutlined />} placeholder="Password"/>
          </Form.Item>

          <Form.Item  name="password" rules={[{ required: true, message: 'Please input your password!'}]}>
             <Row gutter={16}>
              <Col span={15}>
                <Input prefix={<UnlockOutlined />} placeholder="Code"/>
              </Col>
              <Col span={9}>
                <Code username={username}></Code>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>注册</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
 
export default RegisterForm;