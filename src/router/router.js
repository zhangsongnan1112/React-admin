const router = [
  {
    tilte: '控制台',
    icon: '',
    path: '/'
  },
  {
    tilte: '部门',
    icon: '',
    path: '/department',
    children: [
      {
        tilte: '部门列表',
        icon: '',
        path: '/department/list'
      },
      {
        tilte: '添加部门户',
        icon: '',
        path: '/department/add'
      }
    ]
  },
  {
    tilte: '用户管理',
    icon: '',
    path: '/user',
    children: [
      {
        tilte: '用户列表',
        icon: '',
        path: '/user/list'
      },
      {
        tilte: '添加用户',
        icon: '',
        path: '/user/add'
      },
      {
        tilte: '部门管理',
        icon: '',
        path: '/user/navigation'
      }
    ]
  }
]

export default router