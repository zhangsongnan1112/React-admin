import Cookies from 'js-cookie'
const TOKEN_NAME = 'reactAdmin'

export function setToken (value) {
  Cookies.set(TOKEN_NAME, value)
}

export function getToken () {
  return Cookies.get(TOKEN_NAME)
}

export function setUsername(value) {
  Cookies.set('username', value)
}

export function getUsername() {
  return Cookies.get('username')
}