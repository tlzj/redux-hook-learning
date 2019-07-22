import React from 'react';
import { connect } from 'react-redux';
import { aboutAdd, aboutDecr } from './redux/action.js';
function About(props){
  return <div>
    about --------  {props.aboutState.count}
    <br />
    <button onClick={props.aboutAdd}>点击about增加</button>
    <button onClick={props.aboutDecr}>点击about减少</button>
    <div className='data-list'>
      {props.data.map(v => {
        return <div key={v.objectID}>
          <span>{v.author}</span>------
          <span>{v.title}</span>
          </div>
      })}
    </div>
  </div>
}
function mapState(state){
  return state;
}
function mapDispatch(dispatch){
  return {
    aboutAdd(){
      dispatch({
        type: aboutAdd
      })
    },
    aboutDecr(){
      dispatch(aboutDecr())
    }
  }
}
export default connect(mapState, mapDispatch)(About);