// reducers.js
const initialState = {
    user: null,
    transactions: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'SET_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  