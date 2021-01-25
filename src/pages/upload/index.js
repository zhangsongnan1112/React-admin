import React, { Component, Fragment } from 'react';
import UplaodComponent from '@c/Upload/index'
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        <h2>图片上传页面</h2>
        <UplaodComponent></UplaodComponent>
      </Fragment>
    );
  }
}
 
export default Upload;