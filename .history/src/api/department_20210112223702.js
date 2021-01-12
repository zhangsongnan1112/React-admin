import { get, set } from '../utils/localStorage'
export function addDepartment (value) {
    const data = get('Admin-db')
    const department = data.department
    department.push(value)
    set('Admin-db',data)
    console.log(data, department, value,888)
}