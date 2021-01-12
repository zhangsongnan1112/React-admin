export function addDepartment (value) {
    const data = JSON.parse(localStorage.getItem('Admin-db'))
    const department = data.department
    department.push(value)
    console.log(data,888)
}