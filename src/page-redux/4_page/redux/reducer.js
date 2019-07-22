import { indexAdd, aboutAdd } from './action.js';
function reducer(state, action){
  console.log(state, action, '===')
  const indexState = state.indexState;
  const aboutState = state.aboutState;
  switch(action.type){
    case indexAdd :
      return {
        indexState: {count: indexState.count + 1},
        aboutState
      }
    case aboutAdd :
      return {
        aboutState: {count: aboutState.count + 1},
        indexState
      }
    case 'ABOUTDECR' :
      return {
        aboutState: {count: aboutState.count - 1},
        indexState
      }
    default :
      return state
  }
}
export default reducer;