import React, { Component, Fragment } from 'react';
import { Form, Input, message, Modal  } from 'antd';
import { commonApi } from '@api/department'
import PropTypes from 'prop-types';
import requestUrl from '@api/requestUrl'
import TableUi from './tableUi'
class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      total: 0,
      pageNumber: 1,
      pageSize: 10,
      name: '',
      tableLoading: false,
      selectedRowKeys: [],
      isModalVisible: false // 弹窗是否显示
    }
  }

  componentDidMount() {
    this.getList()
    this.props.onRef(this)
  }

  getList = (params) => {
    const { pageNumber, pageSize } = this.state
    const requestData = {
      url: requestUrl[this.props.config.url],
      data: {
        pageNumber,
        pageSize,
        ...params
      }
    }
    this.setState({tableLoading: true})
    commonApi(requestData).then(res => {
      const data = res.data
      if (data.resCode === 0) {
        this.setState({
          dataSource: data.data.data,
          total: data.data.total,
          tableLoading: false
        })
      }
    }).catch(error => {
      this.setState({tableLoading: false})
    })
  }

  onSelctChange = (selectedRowKeys) => {
    this.setState({selectedRowKeys})
  }
  // 删除
  handlerDelete = (id) => {
    this.setState({
      selectedRowKeys: [id]
    })
    this.setState({
      isModalVisible: true
    })
  }
  // 批量删除
  batchDelete = (id) => {
    if (this.state.selectedRowKeys.length === 0) {
      message.info('请先选择数据')
      return false
    }
    this.setState({
      isModalVisible: true
    })
  }
  deleteList = () => {
    const id = this.state.selectedRowKeys.join()
    const data = {
      url: requestUrl[this.props.config.url+"Delete"],
      data: {
        id
      }
    }
    commonApi(data).then(res => {
      if (res.data.resCode === 0) {
        this.setState({
          isModalVisible: false,
          id: ''
        })
      }
      message.info(res.data.message)
      this.getList()
    })
  }

  changPageNUmber = (value) => {
    this.setState({
      pageNumber: 1,
      pageNumber: value
    }, () => {
      this.getList()
    })
  }
  changPageSize = (current, size) => {
    this.setState({
      pageSize: size
    }, () => {
      this.getList()
    })
  }
  // 弹窗确定按钮
  handleOk = () => {
    this.deleteList()
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }

  render() {
    const { tabHeader, checkBox, rowKey } = this.props.config
    const { dataSource, tableLoading, total, isModalVisible } =this.state
    const rowSelection = {
      onChange: this.onSelctChange
    }
    return (
      <Fragment>
        <TableUi
          rowKey={rowKey}
          columns={tabHeader}
          dataSource={dataSource}
          loading={tableLoading}
          rowSelection={checkBox ? { ...rowSelection }: null}
          batchDelete = {this.batchDelete}
          changPageNUmber={this.changPageNUmber}
          changPageSize={this.changPageSize}
          total={total}
        />
        <Modal title="提示" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消">
          <p>确定删除么？<strong style={{color: 'red'}}>删除后将不可恢复</strong></p>
        </Modal>
      </Fragment>
    );
  }
}
TableList.propTypes = {
  config: PropTypes.object
}
TableList.defaultProps = {
  batchShow: false
}

 
export default TableList;