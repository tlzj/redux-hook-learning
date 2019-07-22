import React from 'react';
import { connect } from 'react-redux';
function Count(props){
  console.log(props, '1=====')
  return (
    <div>
      <div>{props.count}</div>
      <div>
        <button onClick={() => props.dispatch({
          type: 'add'
        })}>点击+</button>
      </div>
      <div>
        <button
          onClick={() => props.dispatch({type: 'decrement'})}
          >点击-
        </button>
      </div>
    </div>
  )
}
function mapStateToProps(state){
  return {
    count: state.count
  };
}
function mapDispatchToProps(dispatch){
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);