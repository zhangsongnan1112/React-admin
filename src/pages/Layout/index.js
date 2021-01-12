import React, { Component } from 'react';
import { Layout } from 'antd';
import './layout.scss'
import ASider from './component/sider'
import HeaderWrap from './component/header'
import MainContent from './component/content'
const { Header, Footer, Sider, Content } = Layout;
class LayoutMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { collapsed } = this.state
    return ( 
      <Layout className="layout-wrap">
        <Sider width="250px"  collapsed={collapsed}><ASider/></Sider>
        <Layout>
          <Header className="header-wrap"><HeaderWrap headerCollapsed={collapsed} toggleCollapsed={this.toggleCollapsed}/></Header>
          <Content className="content-warp"><MainContent/></Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
 
export default LayoutMain;