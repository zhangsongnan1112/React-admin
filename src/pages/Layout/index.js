import React, { Component } from 'react';
import{ Button } from 'antd'
import '../../styles/layout.scss'
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <ul className="box">
        <li>11111</li>
        <Button type="primary">11</Button>
      </ul>
    );
  }
}
 
export default Layout;