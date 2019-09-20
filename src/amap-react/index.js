import React, { Component } from 'react';
import { Map } from 'react-amap';
import html2canvas from 'html2canvas';
import ZoomCtrl from './components/zoomCtrl.js';
// import MouseTool from './components/mouseTool.js'; // 鼠标组件（画圆，画正方形，框选等）
// import MarkComponent from './components/markComponent.js'; // 显示单个坐标点
import MarksComponent from './components/marksComponent.js'; // 显示多个坐标点

class AmapReact extends Component {
  onClick = () => {
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });
  }
  render(){
    return (
      <div>
        <div style={{ height: 300 }}>
          <Map amapkey='a879095e67d7da850cee4a0679b6b857'>
            <ZoomCtrl />
          </Map>
        </div>
        {/* <MouseTool />
        <MarkComponent /> */}
        <MarksComponent />
        <button onClick={this.onClick}>点击截图</button>
      </div>
    )
  }
}
export default AmapReact;