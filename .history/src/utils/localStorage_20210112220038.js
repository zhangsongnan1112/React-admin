
export function getItem (name,value) {
    Cookies.set(name, value)
}

export function getItem (name) {
  return Cookies.get(name)
}