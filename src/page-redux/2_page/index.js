import React from 'react';
import Card from './components/card.js';
import Dialog from './components/dialog.js';
import { connect } from 'react-redux';

const Index = function(props) {
  return (
    <div>
      <Card />
      <Dialog />
      <button onClick={props.changeName}>change name</button>
      <button onClick={props.showDialog}>show dialog</button>
    </div>
  )
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    changeName(){
      dispatch({
        type: 'CHANGE_NAME',
        name: 'tlzj'
      })
    },
    showDialog(){
      dispatch({
        type: 'SHOW_DIALOG'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);