import React, { Component, Fragment } from 'react';
import './sider.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
class HeaderWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  changeCollapsed = () => {
    this.props.toggleCollapsed()
  }

  render() {
    return (
      <Fragment>
        <span className="collapsedIcon" onClick={this.changeCollapsed}> { this.props.headerCollapsed ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }</span>
      </Fragment>
    );
  }
}
 
export default HeaderWrap;