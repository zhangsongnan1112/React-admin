import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
class Tinymce extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  editInit = () => {
    return {
      height: 500,
      language:'zh_CN',
      plugins : 'advlist autolink link image lists preview'
    }
  }
  render() { 
    return (
      <Editor
        inline={false}
        init={this.editInit}
      ></Editor>
    );
  }
}
 
export default Tinymce;