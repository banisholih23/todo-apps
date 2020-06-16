const initialState = {
  value: false
}

const toggleTask = (state=initialState, action) => {
  switch(action.type) {
    case 'TOGGLE' : {
      return {
        ...initialState,
        value: !state.value
      }
      break
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default toggleTask