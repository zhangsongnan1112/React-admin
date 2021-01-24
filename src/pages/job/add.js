import React, { Component, Fragment } from 'react';
import { message } from 'antd';
import { addJob, jobDetail, jobtEdit } from '@api/department'
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
        // {
        //   label: 'solt',
        //   name: 'solt',
        //   type: 'solt',
        //   required: true,
        //   soltName: 'title'
        // },
        {
          label: '部门名称',
          name: 'parentId',
          type: 'selectfromend',
          required: true,
          listUrl : 'departentListJob'
        },
        {
          label: '职位名称',
          name: 'jobName',
          type: 'input',
          placeholder: "请输入职位名称",
          required: true,
          message: '职位名称不能为空',
        }, 
        {
          label: '职位状态',
          name: 'status',
          type: 'radio',
          required: true,
          options: [
            { label: "禁用", value: false },
            { label: "启用", value: true },
          ]
        },
        {
          label: '职位详情',
          name: 'content',
          type: 'textArea',
          required: true,
          message: '职位详情不能为空',
          placeholder: "请输入职位详情",
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
    this.props.configLidt()
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
    jobDetail({id: this.state.id}).then(res => {
      const data = res.data
      if (data.resCode === 0) {
        this.DepartAdd.setFormValue(data.data)
      }
    })
  }
  handlerEdit = (value) => {
    const data = value
    data.jobId = this.state.id
    jobtEdit(data).then(res => {
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
    addJob(value).then(res => {
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
          <div ref={(ele)=>{this.title = ele}}>111</div>
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