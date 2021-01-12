import React, { Component, Fragment } from 'react';
import './login.scss'
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      formType: 'login'
    }
  }

  toggleType = (value) =>{
    this.setState({
      formType: value
    })
  }



  render() { 
    return ( 
      <Fragment>
        {this.state.formType === 'login' ? 
          <LoginForm switchType={this.toggleType}></LoginForm> : 
          <RegisterForm switchType={this.toggleType}></RegisterForm>
        } 
      </Fragment>
    );
  }
}
 
export default Login;