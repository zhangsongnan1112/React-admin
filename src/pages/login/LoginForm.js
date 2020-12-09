import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, ShoppingOutlined, UnlockOutlined } from '@ant-design/icons';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  finish = () => {
    alert()
  }

  toggleType(){
    this.props.switchType('register')
  }

  render() { 
    return (
      <div className="container">
        <div className="form-header">
          <h1>登录</h1>
          <span onClick={this.toggleType.bind(this)}>注册账号</span>
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

          <Form.Item  name="password" rules={[{ required: true, message: 'Please input your password!'}]}>
             <Row gutter={16}>
              <Col span={15}>
                <Input prefix={<UnlockOutlined />} placeholder="Code"/>
              </Col>
              <Col span={9}>
                <Button type="danger" block>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>登录</Button>
          </Form.Item>
        </Form>
      </div>
     );
  }
}
 
export default LoginForm;