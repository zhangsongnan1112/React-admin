import Cookies from 'js-cookie'
const TOKEN_NAME = 'reactAdmin'

export function setToken (value) {
    Cookies.set(TOKEN_NAME, value)
}

export function getToken () {
  return Cookies.get(TOKEN_NAME)
}