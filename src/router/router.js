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
        tilte: '添加部门',
        icon: '',
        path: '/department/add'
      }
    ]
  },
  {
    tilte: '职位',
    icon: '',
    path: '/job',
    children: [
      {
        tilte: '职位列表',
        icon: '',
        path: '/job/list'
      },
      {
        tilte: '添加职位',
        icon: '',
        path: '/job/add'
      }
    ]
  },
  {
    tilte: '职员管理',
    icon: '',
    path: '/user',
    children: [
      {
        tilte: '职员列表',
        icon: '',
        path: '/user/list'
      },
      {
        tilte: '添加职员',
        icon: '',
        path: '/user/add'
      },
      {
        tilte: '部门管理',
        icon: '',
        path: '/user/navigation'
      }
    ]
  },
  {
    tilte: '上传',
    icon: '',
    path: '/upload/index'
  },
  {
    tilte: '富文本',
    icon: '',
    path: '/tinymce/index'
  }
]

export default router