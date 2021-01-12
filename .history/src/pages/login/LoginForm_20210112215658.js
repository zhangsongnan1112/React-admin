import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, ShoppingOutlined, UnlockOutlined } from '@ant-design/icons';
import { VALIDATOR_PASSWORD }  from '../../utils/validator'
import { Login } from '../../api/account'
import Code from "../../component/Coder"
import { withRouter } from 'react-router-dom'
import { setToken } from '../../utils/cookie'
// 密码加密
import CryptoJS from 'crypto-js'
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      code: '',
      module: 'login',
      loading: false
    }
  }
  // 登录
  finish = () => {
    const {username, password, code } = this.state
    const params = {
      username,
      password: CryptoJS.MD5(password).toString(),
      code
    }
    this.setState({
      loading: true
    })
    Login(params).then(res => {
      const data = res.data
      if (data.resCode === 0) {
        setToken(data.data.token)
        this.setState({
          loading: false
        })
        message.success('登录成功')
        this.props.history.push('/')
      }
    }).catch(error => {
      this.setState({
        loading: false
      })
    })
  }

  usernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  passwordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  codeChange = (e) => {
    this.setState({
      code: e.target.value
    })
  }

  toggleType(){
    this.props.switchType('register')
  }

  render() { 
    const { username, module, password, code, loading } = this.state
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
            <Input.Password  value={password} onChange={this.passwordChange} prefix={<ShoppingOutlined />} placeholder="Password"/>
          </Form.Item>

          <Form.Item  name="code" rules={[
            { required: true, message: '验证码不能为空'},
            { len: 6, message: '请输入长度为6位的验证码'}
          ]}>
             <Row gutter={16}>
              <Col span={15}>
                <Input value={code} onChange={this.codeChange} prefix={<UnlockOutlined />} placeholder="请输入验证码"/>
              </Col>
              <Col span={9}>
                <Code username={username} module={module}/>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>登录</Button>
          </Form.Item>
        </Form>
      </div>
     );
  }
}
 
export default withRouter(LoginForm);