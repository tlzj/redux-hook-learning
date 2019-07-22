import React from 'react';
import { connect } from 'react-redux';
function Count(props){
  console.log(props, '=====')
  return (
    <div>
      <div>{props.count}</div>
      <div><button onClick={props.addCount}>点击+</button></div>
      <div><button onClick={props.decrement}>点击-</button></div>
      <div><button onClick={props.reset}>重置</button></div>
    </div>
  )
}
function mapStateToProps(state){
  return {
    count: state.count
  };
}
function mapDispatchToProps(dispatch){
  return {
    addCount(){
      dispatch({
        type: 'add'
      })
    },
    decrement(){
      dispatch({
        type: 'decrement'
      })
    },
    reset(){
      dispatch({
        type: 'reset',
        count: 0
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);