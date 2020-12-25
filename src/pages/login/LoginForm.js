import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, ShoppingOutlined, UnlockOutlined } from '@ant-design/icons';
import { VALIDATOR_PASSWORD }  from '../../utils/validator'
import { Login } from '../../api/account'
import Code from "../../component/Coder"
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  // 登录
  finish = () => {
    Login().then(res => {

    }).catch(error => {
      alert()
    })
  }

  usernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  toggleType(){
    this.props.switchType('register')
  }

  render() { 
    const { username } = this.state
    const _this = this
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
          onFinish={this.finish}
        >
          <Form.Item name="username" rules={[
            { required: true, message: '邮箱不能为空'},
            { type: 'email', message: '邮箱格式不正确'},
            // ({ getFieldValue }) => ({
            //   validator(rule, value) {
            //     if (value) {
            //       if (testEmail(value)) {
            //         _this.setState({
            //           codeDisabled: false
            //         })
            //         return Promise.resolve();
            //       }
            //       return Promise.reject('邮箱格式不正确');       
            //     }
            //    return Promise.reject();       
            //   },
            // }),
          ]}>
            <Input value={username} onChange={this.usernameChange} prefix={<UserOutlined />} placeholder="Username" className=""/>
          </Form.Item>

          <Form.Item name="password" rules={[
            { required: true, message: '密码不能为空'},
            { pattern: VALIDATOR_PASSWORD, message: '请输入大于6位小于20位的数字+密码'}
          ]}>
            <Input.Password prefix={<ShoppingOutlined />} placeholder="Password"/>
          </Form.Item>

          <Form.Item  name="code" rules={[
            { required: true, message: '验证码不能为空'},
            { len: 6, message: '请输入长度为6位的验证码'}
          ]}>
             <Row gutter={16}>
              <Col span={15}>
                <Input prefix={<UnlockOutlined />} placeholder="Code"/>
              </Col>
              <Col span={9}>
                <Code username={username}/>
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