import {setTokenType, setUsernameType} from './type.js'
import { setToken, setUsername } from '@/utils/cookie'
export function setTokenAction(value) {
  setToken(value)
  return {
    type: setTokenType,
    value
  }
}

export function setUsernameAction(value) {
  setUsername(value)
  return {
    type: setUsernameType,
    value
  }
}