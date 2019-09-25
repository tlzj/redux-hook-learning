// import React, { Component } from 'react';
// import { Map, Marker } from 'react-amap';
// import html2canvas from 'html2canvas';
// class AmapReact extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       mapStyle: ['normal', 'dark', 'light', 'fresh', 'blue_night'],
//       mode: 'normal'
//     }
//     this.btnStyle = {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       background: '#fff',
//       padding: '16px',
//       border: '1px solid #ccc',
//       borderRadius: '3px'
//     }
//   }

//   events = () => ({
//     dragend: e => {
//       console.log(e)
//     },
//     click: e => {
//       console.log(e)
//     }
//   })

//   onClick = () => {
//     html2canvas(document.body, {
//       // 相关配置
//     }).then(function(canvas){
//       console.log('canvas:', canvas);
//       document.body.appendChild(canvas);
//     })
//   }

//   changeStyle = () => {
//     const { mapStyle } = this.state;
//     let length = mapStyle.length;
//     let index = Math.floor(Math.random() * length);
//     let mode = mapStyle[index];
//     console.log(mode)
//     this.setState({ mode });
//   }

//   render(){
//     return (
//       <div>
//         <div style={{ height: 300, width: 400, position: 'relative' }}>
//           <Map 
//             amapkey='a879095e67d7da850cee4a0679b6b857'
//             plugins={['ControlBar']}
//             viewMode="3D"
//             mapStyle={this.state.mode}
//           >
//             <Marker position={{longitude: 114.2, latitude: 30.5}} draggable={true} events={this.events()}></Marker>
//             <button style={this.btnStyle} onClick={this.changeStyle}>点击切换主题</button>
//           </Map>
//         </div>
//         <button onClick={this.onClick}>点击截图</button>
//       </div>
//     )
//   }
// }
// export default AmapReact;

import React, { Component } from 'react';
// import PolyEditorComponent from './components/polyEditor.js';
// import CircleComponent from './components/circle.js';
import CircleAndMark from './components/circleAndMark.js';
import { Map, Markers } from 'react-amap';
const randomMarker = len => {
  return Array(len).fill(true).map((e,idx) => {
    return {
      position: {
        longitude: 100 + Math.random() * 30,
        latitude: 30 + Math.random() * 20,
      },
      draggable: true,
      someInfo: {
        info: '这里是自定义的相关信息' + idx,
        idx
      }
    }
  })
}
class MarksComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      useCluster: false,
    }
    this.markers = randomMarker(100);
    this.events = {
      created: param => {
        console.log(param)
      },
      click: (MapsOption, marker) => {
        console.log('MapsOptions:', MapsOption);
        console.log('marker:', marker);
        marker.render(this.renderIcon)
      },
    }
  }

  // 点击mark后渲染对应的dom
  renderIcon = extData => {
    console.log(extData);
    return <div>{extData.someInfo.idx}</div>
  }

  changeUseCluster = () => {
    let useCluster = !this.state.useCluster;
    this.setState({ useCluster });
  }

  render(){
    return (
      <div style={{ width: 300, height: 200 }}>
        <Map amapkey='a879095e67d7da850cee4a0679b6b857'>
          <Markers 
            markers={this.markers}
            useCluster={this.state.useCluster}
            events={this.events}
          />
        </Map>
        <button onClick={this.changeUseCluster}>点击聚合或分散</button>
        <div>---------------</div>
        {/* <PolyEditorComponent /> */}
        <CircleAndMark />
      </div>
    )
  }
}
export default MarksComponent;