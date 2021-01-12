import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import './sider.scss'
import router from '../../../router/router'
import {
  AppstoreOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
class ASider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      openKeys: [],
      collapsed: false,
    }
  }
  renderMenu = (value) => {
    return (
    <Menu.Item key={value.path}>
        <Link to={value.path}>{value.tilte}</Link>
      </Menu.Item>
    )
  }

  renderSubMenu = (value) => {
    return (
      <SubMenu key={value.path} title={value.tilte}  icon={<AppstoreOutlined />}>
        {
          value.children.map(item => {
            return  item.children && item.children.length > 0
             ? this.renderSubMenu(item) : this.renderMenu(item)
   
          })
        }
      </SubMenu>
    )
  }

  subClick = ({ key, keyPath }) => {
    this.selectMenuHigh({
      selectedKeys: key,
      openKeys: keyPath[keyPath.length-1]
    })
  }

  componentDidMount() {
    const pathname = this.props.history.location.pathname
    const nameArr = pathname.split('/')
    const fullname = nameArr.slice(0,nameArr.length-1).join('/')
    this.selectMenuHigh({
      selectedKeys: pathname,
      openKeys: fullname
    })
  }

  selectMenuHigh = ({selectedKeys, openKeys}) => {
    this.setState({
      selectedKeys: [selectedKeys],
      openKeys: [openKeys]
    })
  }

  OpenChange = (openKeys) => {
    this.setState({
      openKeys: [openKeys[openKeys.length-1]]
    })
  }

  render() { 
    const { selectedKeys, openKeys } = this.state
    return (
      <Fragment>
        <h1 className="logo"><span>Logo</span></h1>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          style={{ height: 'auto', borderRight: 0 }}
          onClick = {this.subClick}
          onOpenChange = {this.OpenChange}
        >
          {
            router && router.map(firstItem => 
              {
               return firstItem.children && firstItem.children.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
              })
          }
         
        </Menu>
      </Fragment>
    );
  }
}
 
export default withRouter(ASider);