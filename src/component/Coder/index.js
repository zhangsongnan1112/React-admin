import React, { Component } from 'react';
import { getCode } from '../../api/account'
import { testEmail }  from '../../utils/validator'
import { Button, message } from 'antd';
// 定时器
let timer = null
class Coder extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      codeLoading: false,
      codeDisabled: false,
      codeText: '获取验证码',
      module: props.module
    }
  }

  componentWillReceiveProps({username}) {
    this.setState({
      username
    })
  }

  componentWillUnmount() {
    clearInterval(timer)
  }

  // 获取验证码
  getCode = () => {
    const { username, module } = this.state
    if (!username) {
      message.warning('用户名不能为空')
      return  false
    }
    if (!testEmail(username)) {
      message.warning('邮箱格式不正确')
      return  false
    }
    this.setState({
      codeLoading: true,
      codeText: '发送中'
    })
    const params = {
      username,
      module: module
    }
    getCode(params).then(res => {
      message.success(res.data.message)
      this.countDown()
    }).catch(error => {
      this.setState({
        codeLoading: false,
        codeText: '重新获取'
      })
    })
  }

   countDown = () => {
    let count = 10
    this.setState({
      codeLoading: false,
      codeDisabled: true,
      codeText: `${count}s`
    })
    timer = setInterval(() => {
      count--
      if (count <= 0) {
        clearInterval(timer)
        this.setState({
          codeText: '重新获取',
          codeDisabled: false,
        })
        return false
      }
       this.setState({
        codeText: `${count}s`
      })
    }, 1000)
  }

  render() { 
    const { codeDisabled, codeLoading, codeText } = this.state
    return <Button 
        type="danger" 
        disabled={codeDisabled} 
        loading={codeLoading}
        block onClick={this.getCode}
      >
        {codeText}
      </Button>
  }
}
 
export default Coder;