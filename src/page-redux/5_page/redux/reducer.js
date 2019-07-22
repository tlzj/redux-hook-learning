import { indexAdd, aboutAdd, changeData } from './action.js';
// import { combineReducers } from 'redux';
function IndexReducer(state={}, action){
  switch(action.type){
    case indexAdd :
      return {
        count: state.count + 1
      }
    default :
      return state
  }
}
function AboutReducer(state={}, action){
  console.log(state, action, '--------')
  switch(action.type){
    case aboutAdd :
      return {
        count: state.count - 1
      }
    case 'ABOUTDECR' :
      return {
        count: state.count - 1
      }
    default :
      return state
  }
}

function DataReducer(state={}, action){
  switch(action.type){
    case changeData :
      return action.data
    default :
      return state
  }
}

// function reducer(state, action){
//   return {
//     indexState: IndexReducer(state.indexState, action),
//     aboutState: AboutReducer(state.aboutState, action),
//     data: DataReducer(state.data, action)
//   }
// }
const reducer = combineReducersTlzj({
  indexState: IndexReducer,
  aboutState: AboutReducer,
  data: DataReducer
})

export default reducer

// combineReducers的实现
function combineReducersTlzj(reducers){
  return function(state={}, action){
    return Object.keys(reducers).reduce(
      (nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {})
  }
}