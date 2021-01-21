import React, { Component,Fragment } from 'react';
import { Form, Input, Button, InputNumber, Radio } from 'antd';
import PropTypes from 'prop-types';
class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mesPreix: {
        "input": "请输入",
        "inNumber": "请选择",
        "select": "请选择",
        "radio": "请选择"
      },
      setFieldsValue: {}
    }
  }
  handlerRules = (item) => {
    const { mesPreix } = this.state
    let rules = []
    if (item.required) {
      let message = item.message || `${mesPreix[item.type]}${item.label}`
      rules.push({ required: true, message })
    }
    if(item.rules && item.rules.length > 0) {
      rules = rules.concat(item.rules)
    }
    return rules;
  }

  inputrender = (item) => {
    const rules = this.handlerRules(item)
    return(
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      > 
      {
        item.type === "input" ? <Input placeholder={item.placeholder} style={item.style}/> :
        <Input.TextArea placeholder={item.placeholder} style={item.style}/>
      }
        
      </Form.Item>
    )
  }

  InputNumrender = (item) => {
    const rules = this.handlerRules(item)
    return(
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      > 
        <InputNumber min={item.min || 0 } style={item.style}/>
      </Form.Item>
    )
  }

  radiorender  = (item) => {
    const rules = this.handlerRules(item)
    return(
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      > 
        <Radio.Group>
          {
            item.options.map(item => {
              return (
              <Radio key={item.value} value={item.value}>{item.label}</Radio>
              )
            })
          }
        </Radio.Group>
      </Form.Item>
    )
  }

  initForm = () => {
    const element = []
    const { fromItem } = this.props
    fromItem.map(item => {
      switch (item.type) {
        case 'input': {
          element.push(this.inputrender(item))
          break;
        }
        case 'textArea': {
          element.push(this.inputrender(item))
          break;
        }

        case 'InNumber': {
          element.push(this.InputNumrender(item))
          break;
        }
        case 'radio': {
          element.push(this.radiorender(item))
          break;
        }
      }
    })
    return element
  }

  onFinish= (value) => {
    this.props.onFinish(value)
  }
  
  componentDidMount() {
    this.props.onRef(this)
  }
  // 重置表单
  resetForm = () => {
    this.form.resetFields()
  }
  setFormValue = (value) => {
    this.form.setFieldsValue({...value})
  }

  render() { 
    const  { buttonConfig, btnLoading } = this.props
    const { layout, initialValues } = this.props.formConfig
    return (
      <Fragment>
         <Form
            ref={form => {this.form = form}}
            { ...layout } 
            initialValues={ initialValues } 
            onFinish={this.onFinish}
          >
            {this.initForm()}
            <Form.Item>
              <Button loading={btnLoading} type={buttonConfig.type|| 'primary'} htmlType="submit">{buttonConfig.text}</Button>
            </Form.Item>
          </Form>
      </Fragment>
    );
  }
}

FormList.propTypes = {
  formConfig: PropTypes.object,
  buttonConfig: PropTypes.object
}

FormList.defaultProps = {
  layout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  },
  buttonConfig: {
    type: "primary",
    text: '确认添加'
  }
}
 
export default FormList;