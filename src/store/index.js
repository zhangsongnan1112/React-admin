import { createStore } from 'redux'

const defaultstate = {
    aa: 111
}

const refu = (state = defaultstate, action) => {
    console.log(state)
    return state
}

const store = createStore(refu)

export default store