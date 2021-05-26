import React, { Component, Fragment } from 'react';
import UplaodComponent from '@/component/Upload/index'
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        <h2>七牛云实现图片上传</h2>
        <br></br>
        <UplaodComponent></UplaodComponent>
      </Fragment>
    );
  }
}
 
export default Upload;