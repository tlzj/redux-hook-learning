import React from 'react';
import { connect } from 'react-redux';
import { indexAdd } from './redux/action.js';
function Index(props){
  return <div>
    Index----------{props.indexState.count}
    <br />
    <button onClick={props.add}>点击增加</button>
  </div>
}
function mapState(state){
  return state;
}
function mapDispatch(dispatch){
  return {
    add: function(){
      dispatch({
        type: indexAdd
      })
    }
  }
}
export default connect(mapState, mapDispatch)(Index);