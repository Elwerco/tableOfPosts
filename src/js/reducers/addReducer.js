const initialState = {
  test: [],
  status: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        test: action.payload,
        status: 'loading'
      }
    case 'STOP_DATA':
      return {
        ...state,
        test: action.payload,
        status: 'stop'
      }
    default:
      return state
  }
}
