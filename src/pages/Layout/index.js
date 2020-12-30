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
    this.state = {  }
  }
  render() { 
    return ( 
      <Layout className="layout-wrap">
        <Sider width="250px"><ASider/></Sider>
        <Layout>
          <Header className="header-wrap"><HeaderWrap/></Header>
          <Content className="content-warp"><MainContent/></Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
 
export default LayoutMain;