import { get, set } from '../utils/localStorage'
export function addDepartment (value) {
    const data = get()
    const department = data.department
    department.push(value)
    set(data)
    console.log(data, department, value,888)
}