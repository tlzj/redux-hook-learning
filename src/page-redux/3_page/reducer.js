function reducer(state, action){
  console.log(state, action, '---')
  switch(action.type){
    case 'add' :
      return {
        count: ++state.count
      };
    case 'decrement' :
        return {
          count: --state.count
        };
    case 'reset' :
      return {
        count: action.count
      }
    default :
      return state;
  }
}
export default reducer;