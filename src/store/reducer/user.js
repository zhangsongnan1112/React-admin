import {setTokenType, setUsernameType} from '../action/type'
import { getToken, getUsername } from '@/utils/cookie'
const defaultstate = {
  token: '' || getToken(),
  username: '' || getUsername()
}
 

const userReducer = (state = defaultstate, action) => {
  if (action.type === setTokenType) {
    return {
      ...state,
      token: action.value
    }
  }
  if (action.type === setUsernameType) {
    return {
      ...state,
      username: action.value
    }
  }
  return state
}

export default userReducer