import React, { Component, Fragment } from 'react';
import { Button, Table, Pagination, Row, Col } from 'antd';
import PropTypes from 'prop-types';
class TableUi extends Component {
  render() {
    const {columns, dataSource, loading, rowKey, rowSelection, batchShow, batchDelete, changPageNUmber, changPageSize, total } = this.props
    return (
      <Fragment>
        <Table 
          pagination={false} 
          rowKey={rowKey} 
          columns={columns} 
          dataSource={dataSource} 
          rowSelection={rowSelection}
          loading={loading}/>
        <Row style={{marginTop: "20px"}}>
          <Col span={4}>{batchShow && <Button onClick={batchDelete}>批量删除</Button>}</Col>
          <Col span={20} >
            <Pagination
              onChange={changPageNUmber}
              onShowSizeChange={changPageSize}
              style={{float: "right"}}
              total={total}
              showSizeChanger
              showQuickJumper
              showTotal={total => `Total ${total} items`}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
TableUi.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  batchShow: PropTypes.bool,
  rowKey: PropTypes.string,
  rowSelection: PropTypes.object
}
TableUi.defaultProps = {
  rowKey: 'id',
  batchShow: true
}
 
export default TableUi;