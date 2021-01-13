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

export function departmentList(data) {
  return service.request({
    url: '/department/list/',
    method: 'post',
    data
  })
}

export function departmentDelete(data) {
  return service.request({
    url: '/department/delete/',
    method: 'post',
    data
  })
}

