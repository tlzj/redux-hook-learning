import React from 'react';
import { connect } from 'react-redux';
function Dialog(props){
  if(!props.status){
    return null;
  }
  return (
    <div className="m-dialog">
      <div>
        dialog----{props.cardName}
      </div>
      <button onClick={props.hideDialog}>close</button>
    </div>
  )
}

function mapStateToProps(state){
  var info = state.dialog;
  return {
    status: info.status,
    cardName: state.card.name
  }
}
function mapDispatchToProps(dispatch){
  return {
    hideDialog(){
      dispatch({
        type: 'CLOSE_DIALOG'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);