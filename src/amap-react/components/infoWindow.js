import React, { Component } from 'react';
import { Map, InfoWindow } from 'react-amap';
class InfoWindowComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: true,
      value: 1,
      position: {
        longitude: 120,
        latitude: 30
      },
      offset: [0, 0],
      size: {
        width: 200,
        height: 140
      }
    }
    this.windowEvents = {
      created: (iw) => {console.log(iw)},
      open: () => {console.log('InfoWindow opened')},
      close: () => {console.log('InfoWindow closed')},
      change: () => {console.log('InfoWindow prop changed')},
    }
  }

  changeOffset(){
    this.setState({
      offset: [Math.random() * 10, Math.random() * 10]
    })
  }

  changeSize(){
    this.setState({
      size: {
        width: 200 + Math.random() * 20,
        height: 140 + Math.random() * 20,
      }
    })
  }

  randomPosition() {
    this.setState({
      position: {
        longitude: 120 + Math.random() * 20,
        latitude: 30 + Math.random() * 20,
      }
    })
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }

  changeValue(){
    this.setState({
      value: this.state.value + 1,
    });
  }

  render(){
    const html = `<div><h4>Greetings</h4><p>This is content of this info window</p><p>Click 'Change Value' Button: ${this.state.value}</p></div>`;
    return <div>
      <div style={{width: 600, height: 500}}>
        <Map>
          <InfoWindow
            position={this.state.position}
            visible={this.state.visible}
            isCustom={false}
            content={html}
            size={this.state.size}
            offset={this.state.offset}
            events={this.windowEvents}
          />
        </Map>
      </div>
      <button onClick={() => { this.toggleVisible() }}>Toggle Visible</button>
      <button onClick={() => { this.randomPosition() }}>Random Position</button>
      <button onClick={() => { this.changeValue() }}>Change Value</button>
      <button onClick={() => { this.changeOffset() }}>Change Offset</button>
      <button onClick={() => { this.resetOffset() }}>Restore Offset</button>
      <button onClick={() => { this.changeSize() }}>Change Size</button>
    </div>
  }
}

export default InfoWindowComponent;