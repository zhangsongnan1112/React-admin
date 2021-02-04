import React, { Component, Fragment } from 'react';
import Tinymce from '@c/tinymce/index'
class TinymceEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        <h2>富文本</h2>
        <Tinymce></Tinymce>
      </Fragment>
    );
  }
}
 
export default TinymceEdit;