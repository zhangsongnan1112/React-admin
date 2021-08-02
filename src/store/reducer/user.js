import {setTokenType, setUsernameType} from '../action/type'
import { getToken, getUsername } from '@/utils/cookie'
import deepClone from '@/utils/deepClone'
const defaultstate = {
  token: '' || getToken(),
  username: '' || getUsername()
}
 

const userReducer = (state = defaultstate, action) => {
  let newState = {...state} 
  if (action.type === setTokenType) {
    return newState = deepClone({
      ...state,
      token: action.value
    })
  }
  if (action.type === setUsernameType) {
    return newState = deepClone({
      ...state,
      username: action.value
    })
  }
  return newState
}

export default userReducer