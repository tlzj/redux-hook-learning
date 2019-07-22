import React, { useState } from 'react';
import { connect } from 'react-redux';
import { indexAdd, changeData } from './redux/action.js';
import './index.css';
function Index(props){
  const [data, getData] = useState([]);
  console.log(props, '-----props-----')
  function onClick(){
    fetch('http://hn.algolia.com/api/v1/search?query=redux').then(res => res.json()).then(res => {
      const data = res.hits;
      getData(data);
      props.changeData(data)
    })
  }
  return <div className='tlzj-index'>
    Index----------{props.indexState.count}
    <br />
    <button onClick={props.add}>点击增加</button>
    <button onClick={onClick}>点击获取data</button>
    <div className='data-list'>
      {data.map(v => {
        return <div key={v.objectID}>
          <span>{v.author}</span>------
          <span>{v.title}</span>
          </div>
      })}
    </div>
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
    add: function(){
      dispatch({
        type: indexAdd
      })
    },
    changeData(data){
      dispatch({
        type: changeData,
        data
      })
    }
  }
}
export default connect(mapState, mapDispatch)(Index);