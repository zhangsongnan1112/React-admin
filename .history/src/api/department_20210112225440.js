import { get, set } from '../utils/localStorage'
export function addDepartment (value) {
    return new Promise((resolve, reject) =>  {
        const data = get()
        const department = data.department
        department.push(value)
        set(data)
        resolve()
    })
}