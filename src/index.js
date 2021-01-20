import React from 'react'
import ReactDOM from 'react-dom' 
import 'antd/dist/antd.css'
import './utils/lowdb'

import Routes from './router'
import store from './store'

ReactDOM.render(<Routes/>, document.getElementById('root'))