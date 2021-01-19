import React from 'react'
import ReactDOM from 'react-dom' 
import 'antd/dist/antd.css'
import './utils/lowdb'

import Routes from './router'
import store from './store'
console.log(store.getState(), 999)

ReactDOM.render(<Routes/>, document.getElementById('root'))