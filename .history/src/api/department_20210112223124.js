import { get, set } from '../utils/localStorage'
export function addDepartment (value) {
    const data = get('Admin-db')
    const department = data.department
    department.push(value)
    set('Admin-db',value)
    console.log(data,888)
}