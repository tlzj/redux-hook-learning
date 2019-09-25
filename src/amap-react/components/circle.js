import React from 'react';
import { Map, Circle } from 'react-amap';
const randomIndex = (len) => (Math.floor(Math.random() * len));
const randomColor = () => {
  const chars = '0123456789abcdef'.split('');
  const len = chars.length;
  return `#${chars[randomIndex(len)]}${chars[randomIndex(len)]}` 
  + `${chars[randomIndex(len)]}${chars[randomIndex(len)]}` 
  + `${chars[randomIndex(len)]}${chars[randomIndex(len)]}`;
};

class CircleComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      center: {longitude: 114, latitude: 30},
      radius: 15000,
      visible: true,
      style: { strokeColor: '#ccc', fillColor: 'ragb(0,0,0)', fillOpacity: 0.1 },
      draggable: true,
    };
    this.circleEvents = {
      created: (ins) => {console.log(window.circle = ins)},
      click: () => {console.log('clicked')},
      mouseover: () => {console.log('mouseover')},
      dragend: obj => {
        const inglat = obj.lnglat;
        this.setState({
          center: {
            longitude: inglat.lng, 
            latitude: inglat.lat
          }
        })
      }
    }
  }
  
  toggleVisible(){
    this.setState({
      visible: !this.state.visible,
    });
  }
  
  toggleDraggable(){
    this.setState({
      draggable: !this.state.draggable,
    })
  }
  
  changeCenter(){
    this.setState({
      center: {
        longitude: 114 + Math.random() * 2,
        latitude: 30 + Math.random() * 2,
      }
    })
  }
  
  changeStyle(){
    this.setState({
      style: {strokeColor: randomColor() }
    });
  }
  
  changeRadius(){
    this.setState({
      radius: 15000 + Math.random() * 15000
    });
  }
  
  render(){
    return <div>
      <div style={{width: '100%', height: '370px'}}>
        <Map plugins={['ToolBar']} center={this.state.center}>
          <Circle 
            center={ this.state.center } 
            radius={ this.state.radius }
            events={ this.circleEvents }
            visible={ this.state.visible }
            style={ this.state.style }
            draggable={ this.state.draggable }
          />
        </Map>
      </div>
      <button onClick={() => { this.changeCenter() }}>Random Center</button>
      <button onClick={() => { this.changeRadius() }}>Change Radius</button>
      <button onClick={() => { this.toggleVisible() }}>Toggle Visible</button>
      <button onClick={() => { this.toggleDraggable() }}>Toggle Draggable</button>
      <button onClick={() => { this.changeStyle() }}>Change Style</button>
    </div>
  }
}
export default CircleComponent;