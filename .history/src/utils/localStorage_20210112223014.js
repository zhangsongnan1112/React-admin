export function set (name,value) {
    localStorage.setItem(name, JSON.stringify(value))
}

export function get (name) {
  return JSON.parse(localStorage.getItem(name))
}