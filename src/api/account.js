import service from '../utils/request.js'

export function Login(data) {
  return service.request({
    url: '/login/',
    method: 'post',
    data
  })
}

export function post(data) {
  return service.request({
    url: '',
    methods: 'post',
    data
  })
}