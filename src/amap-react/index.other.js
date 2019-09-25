import React, { Component } from 'react';
import { Map } from 'react-amap';
import html2canvas from 'html2canvas';
class AmapReact extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapStyle: ['normal', 'dark', 'light', 'fresh', 'blue_night'],
      mode: 'normal'
    }
    this.btnStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      background: '#fff',
      padding: '16px',
      border: '1px solid #ccc',
      borderRadius: '3px'
    }
  }

  onClick = () => {
    html2canvas(document.body, {
      // 相关配置
    }).then(function(canvas){
      console.log('canvas:', canvas);
      document.body.appendChild(canvas);
    })
  }

  changeStyle = () => {
    const { mapStyle } = this.state;
    let length = mapStyle.length;
    let index = Math.floor(Math.random() * length);
    let mode = mapStyle[index];
    console.log(mode)
    this.setState({ mode });
  }

  render(){
    return (
      <div>
        <div style={{ height: 300, width: 400, position: 'relative' }}>
          <Map 
            amapkey='a879095e67d7da850cee4a0679b6b857'
            plugins={['ControlBar']}
            viewMode="3D"
            mapStyle={this.state.mode}
          >
            <button style={this.btnStyle} onClick={this.changeStyle}>点击切换主题</button>
          </Map>
        </div>
        <button onClick={this.onClick}>点击截图</button>
      </div>
    )
  }
}
export default AmapReact;