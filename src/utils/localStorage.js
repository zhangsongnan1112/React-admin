const NAME = 'Admin-db'
export function set (value) {
    localStorage.setItem(NAME, JSON.stringify(value))
}

export function get () {
  return JSON.parse(localStorage.getItem(NAME))
}