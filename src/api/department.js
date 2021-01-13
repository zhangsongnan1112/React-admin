import service from '../utils/request.js'
// import { get, set } from '../utils/localStorage'
// export function addDepartment (value) {
//     return new Promise((resolve, reject) =>  {
//         try { 
//             const data = get()
//             const department = data.department
//             department.push(value)
//             set(data)
//             resolve(data)
//         } catch {
//             reject()
//         }
//     })
// }


export function addDepartment(data) {
  return service.request({
    url: '/department/add/',
    method: 'post',
    data
  })
}

