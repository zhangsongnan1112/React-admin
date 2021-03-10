import React, { Component,Fragment } from 'react';
import FormList from '@c/Form'
class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromItem: [
        {
          label: '姓名',
          name: 'name',
          type: 'input',
          placeholder: "请输入姓名",
          required: true,
          message: '姓名不能为空'
        }, 
        {
          label: '身份证',
          name: 'idCard',
          type: 'input',
          placeholder: "请输入身份证",
          required: true,
          message: '身份证不能为空'
        }, 
        {
          label: '手机号',
          name: 'phone',
          type: 'input',
          placeholder: "请输入手机号",
          required: true,
          message: '手机号不能为空'
        }, 
      ]
    }
  }
  getChild = (value) => {
    this.dom = value
  }
  render() {
    const { fromItem } = this.state
    return (
      <Fragment>
        <h2 style={{'margin-bottom': '30px'}}>个人信息</h2>
        <FormList 
          fromItem={fromItem}
          onRef={this.getChild}
        >
        </FormList>
      </Fragment>
    );
  }
}
 
export default UserAdd;