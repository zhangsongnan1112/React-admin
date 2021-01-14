import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import login from '../pages/login'
import PrivateRouter from '../component/PrivateRouter'

export default function AppRouter () {
  return (
    <BrowserRouter>
      {/* 相同的情况下只匹配一个 */}
      <Switch> 
        <Route component={login} exact path='/login'></Route>
        <PrivateRouter component={Layout} path='/'></PrivateRouter>
      </Switch>
    </BrowserRouter>
  )
}