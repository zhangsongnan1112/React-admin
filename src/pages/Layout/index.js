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
      collapsed: false
    }
  }

  componentDidMount() {
    const collapsed = JSON.parse(sessionStorage.getItem('collapsed'))
    this.setState({
      collapsed
    })
  }

  toggleCollapsed = () => {
    const collapsed = !this.state.collapsed
    this.setState({
      collapsed
    })
    sessionStorage.setItem('collapsed', collapsed)
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