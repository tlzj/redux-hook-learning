import React, { Component } from 'react';
import ImgSrc from './1.jpg';
import { Map } from 'react-amap';
import html2canvas from 'html2canvas';
import ZoomCtrl from './components/zoomCtrl.js';
// import MouseTool from './components/mouseTool.js'; // 鼠标组件（画圆，画正方形，框选等）
// import MarkComponent from './components/markComponent.js'; // 显示单个坐标点
import MarksComponent from './components/marksComponent.js'; // 显示多个坐标点

class AmapReact extends Component {
  onClick = () => {
    html2canvas(document.body, {
      useCORS: true, // 开启跨域图片截图，要保证后台对应开启跨域访问
    }).then(function(canvas) {
        document.body.appendChild(canvas);
    });
  }
  render(){
    return (
      <div>
        <img src="http://192.168.101.14:8099/image/v1/753374984/objects/5d7a08132ce7970810100b13/1568278547050001001.jpg?client_token=753374984_0_1599814546_8e25f2f19f96d49c8fd67c50d97cf171&crop=x_561,y_392,w_169,h_201" alt=""/>
        <img style={{ width: 100, height: 100}} src={ImgSrc} alt=""/>
        {/* <div style={{ height: 300 }}>
          <Map amapkey='a879095e67d7da850cee4a0679b6b857'>
            <ZoomCtrl />
          </Map>
        </div> */}
        {/* <MouseTool />
        <MarkComponent /> */}
        {/* <MarksComponent /> */}
        <button onClick={this.onClick}>点击截图</button>
      </div>
    )
  }
}
export default AmapReact;