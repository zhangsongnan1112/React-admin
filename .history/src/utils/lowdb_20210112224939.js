import { get, set } from './localStorage'
const data = {
    department: [
        {
            username: '人事部',
            number: 12,
            status: true,
            descript: '负责公司人事管理'
        }
    ],
    user: []
}

if (!get()) {
    localStorage.setItem('Admin-db',JSON.stringify(data))
}

