// import {Divider} from 'antd'
import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, ShoppingOutlined, UnlockOutlined } from '@ant-design/icons';
import Code from "@c/Coder"
import { Register } from '@api/account'
import { VALIDATOR_PASSWORD }  from '@/utils/validator'
// 密码加密
import CryptoJS from 'crypto-js'
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      code: '',
      module: 'register',
    }
  }
  finish = () => {
    const {username, password, code } = this.state
    const params = {
      username,
      password: CryptoJS.MD5(password).toString(),
      code,
    }
    Register(params).then(res => {
      message.success(res.data.message)
      if (res.data.resCode === 0) {
        this.toggleType()
      }
    }).catch(error => {

    })
  
  }
  toggleType= () => {
    this.props.switchType('login')
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

  render() { 
    const { username, module, code, password } = this.state
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
          onFinish={this.finish}
        >
          <Form.Item name="username" rules={[
            { required: true, message: '邮箱不能为空'},
            { type: 'email', message: '邮箱格式不正确'}
          ]}>
            <Input value={username} onChange={this.usernameChange} prefix={<UserOutlined />} placeholder="请输入邮箱" className=""
            />
          </Form.Item>

          <Form.Item name="password"
            rules={[
            ({getFieldValue}) => ({
              validator(rule, value) {
                const pass = getFieldValue('passwordsecond')
                if (!value) {
                  return Promise.reject('密码不能为空')
                }
                if (!VALIDATOR_PASSWORD.test(value)) {
                  return Promise.reject('请输入大于6位小于20位的数字+密码')
                }
                if (pass && value!==pass) {
                  return Promise.reject('两次密码不一致')
                }
                return Promise.resolve()
              },
             
            })
          ]}>
            <Input.Password value={password} onChange={this.passwordChange} prefix={<ShoppingOutlined />} placeholder="请输入密码"/>
          </Form.Item>

          <Form.Item name="passwordsecond" 
            rules={[
              ({getFieldValue}) => ({
                validator(rule, value) {
                if (!value) {
                  return Promise.reject('确认密码不能为空')
                }
                if (value!==getFieldValue('password')) {
                  return Promise.reject('两次密码不一致')
                }
                return Promise.resolve()
              },
              })
            ]}>
            <Input.Password prefix={<ShoppingOutlined />} placeholder="请确认密码"/>
          </Form.Item>

          <Form.Item  name="code" rusles={[
            { required: true, len: '6', message: '请输入长度为6位的验证码'}
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
            <Button type="primary" htmlType="submit" block>注册</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
 
export default RegisterForm;