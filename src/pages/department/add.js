import React, { Component, Fragment } from 'react';
import { message } from 'antd';
import { addDepartment, departmentDetail, departmentEdit } from '@api/department'
import FormList from '@c/Form'
import { configAction } from '@/store/action/config'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
class DepartAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: this.props.location.state ? this.props.location.state.id : '',
      loading: false,
      fromItem: [
        {
          label: '部门名称',
          name: 'name',
          type: 'input',
          placeholder: "请输入部门名称",
          required: true,
          message: '部门名称不能为空',
        },
        {
          label: '部门人数',
          name: 'number',
          type: 'InNumber',
          style: {width: '100px'},
          required: true,
        },
        {
          label: '部门状态',
          name: 'status',
          type: 'radio',
          required: true,
          options: [
            { label: "禁用", value: false },
            { label: "启用", value: true },
          ]
        },
        {
          label: '部门详情',
          name: 'content',
          type: 'textArea',
          required: true,
          message: '部门详情不能为空',
          placeholder: "请输入部门详情",
        },
      ],
      formConfig: {
        initialValues:{number:1, status:true},
      },
      buttonConfig: {
        text: '确认添加'
      }
    }
  }

  componentDidMount() {
    // Store.subscribe(()=>{
    //   console.log(Store.getState(), 'jfk')
    // })
    // Store.dispatch(configAction({ label: "所有", value: 'all' }))
    this.props.configLidt()
    console.log(this.props.config, 66)
    if (this.state.id) {
      this.getDetail()
      this.setState({
        buttonConfig: {
          text: '确认修改'
        }
      })
    } else {
      this.DepartAdd.resetForm()
    }
  }

  getDetail = () => {
    departmentDetail({id: this.state.id}).then(res => {
      const data = res.data
      if (data.resCode === 0) {
        this.DepartAdd.setFormValue(data.data)
      }
    })
  }
  handlerEdit = (value) => {
    const data = value
    data.id = this.state.id
    departmentEdit(data).then(res => {
      if (res.data.resCode === 0) {
        message.info('修改成功')
        this.setState({
          loading: false
        })
      }
    }).catch(error => {
      this.setState({
        loading: false
      })
    })
  }
  handlerAdd = (value) => {
    addDepartment(value).then(res => {
      if (res.data.resCode === 0) {
        message.info('添加成功')
        this.DepartAdd.resetForm()
        this.setState({
          loading: false
        })
      }
    }).catch(error => {
      this.setState({
        loading: false
      })
    })
  }

  getChild = (value) => {
    this.DepartAdd = value
  }

  onFinish = (values) => {
    this.setState({
      loading: true
    })
    this.state.id ? this.handlerEdit(values) : this.handlerAdd(values)
  }
  render() {
    const { loading, fromItem, formConfig, buttonConfig } = this.state
    return (
      <Fragment>
        <FormList 
          fromItem={fromItem} 
          formConfig={formConfig} 
          onFinish={this.onFinish} 
          btnLoading={loading} 
          onRef={this.getChild}
          buttonConfig={buttonConfig}
        >
        </FormList>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    config: state.config
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    configLidt: bindActionCreators(configAction, dispatch)
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DepartAdd);