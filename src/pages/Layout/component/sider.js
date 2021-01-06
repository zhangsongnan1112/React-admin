import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import './sider.scss'
import router from '../../../router/router'
console.log(router)
const { SubMenu } = Menu;
class ASider extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
      <SubMenu key={value.path} title={value.tilte}>
        {
          value.children.map(item => {
            return  item.children && item.children.length > 0
             ? this.renderSubMenu(item) : this.renderMenu(item)
   
          })
        }
      </SubMenu>
    )
  }
  render() { 
    return (
      <Fragment>
        <h1 className="logo"><span>Logo</span></h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: 'auto', borderRight: 0 }}
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
 
export default ASider;