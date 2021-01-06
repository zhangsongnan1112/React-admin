import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import PrivateRouter from '../../../component/PrivateRouter'
import AddUser from '../../User/addUser'
import UserNavigation from '../../User/navigation'
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Switch> 
        <PrivateRouter exact component={AddUser} path='/user/add'></PrivateRouter>
        <PrivateRouter exact component={UserNavigation} path='/user/navigation'></PrivateRouter>
      </Switch>
    )
  }
}
 
export default MainContent;