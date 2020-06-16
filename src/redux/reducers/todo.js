const initialState = {
  value: 0,
  text: null,
  desc: null,
  data: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const {data} = state
      data.push(action.value)
      return {
        ...initialState,
        value: state.value + 1,
        data
      }
      break
    }
    case 'DELETE': {
      const {data} = state
      data.splice(action.payload, 1)
      return {
        ...state,
        data
      }
    }
    default:
      return state
  }
}

export default todos