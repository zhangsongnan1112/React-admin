const TOKEN_NAME = 'reactAdmin'

export function setToken (value) {
  sessionStorage.setItem(TOKEN_NAME, value)
}

export function getToken () {
  return sessionStorage.getItem(TOKEN_NAME)
}
