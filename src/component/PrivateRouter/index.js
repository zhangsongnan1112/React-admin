
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from '../../utils/cookie'

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = { routeProps => (
        getToken() ? <Component {...routeProps} /> : <Redirect to ="/login"/>
      )}
    />
  );
}

export default PrivateRouter