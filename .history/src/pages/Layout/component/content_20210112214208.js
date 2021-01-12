import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import PrivateRouter from '../../../component/PrivateRouter'

// 自动化引入

const moduleFiles = require.context('../../', true, /\.js$/)

const components = []
moduleFiles.keys().forEach(item => {
  if (item.includes('/Layout') || item.includes('/login') ) {
    return false
  }
  components.push(
    {
      path: item.split('.')[1],
      component: moduleFiles(item).default
    }
  ) 
})

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Switch> 
        {
          components.map(item => {
            return (
              <PrivateRouter exact key={item.path} component={item.component} path={item.path}></PrivateRouter>
            )
          })
        }
      </Switch>
    )
  }
}
 
export default MainContent;