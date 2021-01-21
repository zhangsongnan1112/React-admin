import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import login from '../pages/login'
import PrivateRouter from '../component/PrivateRouter'
import { Provider } from 'react-redux'
import Store from '@/store/index'

export default function AppRouter () {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        {/* 相同的情况下只匹配一个 */}
        <Switch> 
          <Route component={login} exact path='/login'></Route>
          <PrivateRouter component={Layout} path='/'></PrivateRouter>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}