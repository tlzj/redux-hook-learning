import React, { Component } from 'react';
import html2canvas from 'html2canvas';
class Html2Canvas extends Component {
  componentDidMount(){
    console.log(html2canvas, '-----html2canvas')
  }
  onClick = () => {
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });
  }
  render(){
    return (
      <div id="capture" style={{padding: '10px', background: '#f5da55'}}>
          <h4 style={{color: '#000'}}>Hello world!</h4>
          <button onClick={this.onClick}>点击</button>
      </div>
    )
  }
}
export default Html2Canvas;