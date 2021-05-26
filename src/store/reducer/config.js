const defaultstate = {
  departmentType: [
    { label: "禁用", value: false },
    { label: "启用", value: true },
  ]  
}

const configReducer = (state = defaultstate, action) => {
  if (action.type === 'ADD_STATE') {
    debugger
    return {
      departmentType: [
        ...state.departmentType,
        action.value
      ]
    }
  }
  return state
}

export default configReducer