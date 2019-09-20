import React from 'react';
const ZoomCtrl = props => {
  const map = props.__map__;
  console.log(props, '---props');
  if(!map){
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#fff',
    padding: '10px'
  }
  const zoomIn = () => map.zoomIn();
  const zoomOut = () => map.zoomOut();
  return (<div style={style}>
    <button onClick={zoomIn}>zoom in</button>
    <button onClick={zoomOut}>zoom out</button>
  </div>);
}

export default ZoomCtrl;