import React, { Component } from 'react';
import { Map, Circle, Marker, InfoWindow, CircleEditor } from 'react-amap';

class CircleAndMark extends Component {
  constructor(props){
    super(props);
    this.state = {
      center: {longitude: 114.298776, latitude: 30.591353},
      circleCenter: {longitude: 114.298776, latitude: 30.591353},
      style: { strokeColor: '#ccc', fillColor: 'ragb(0,0,0)', fillOpacity: 0.1 },
      offset: [0, 0], // circle偏移量
      infoVisble: true // 默认隐藏， 点击后展示
    }
    this.markerEvents = {
      dragend: event => {
        console.log(event)
        const { lat, lng } = event.lnglat;
        this.setState({
          center: { longitude: lng, latitude: lat },
          circleCenter: { longitude: lng, latitude: lat },
          offset: [19, 33]
        })
      },
      // dragging: event => {
      //   console.log(event)
      //   const { lat, lng } = event.lnglat;
      //   this.setState({
      //     circleCenter: { longitude: lng, latitude: lat }
      //   })
      // },
      click: event => {
        console.log('----v')
        this.setState({
          infoVisble: !this.state.infoVisble
        })
      }
    }
  }

  render(){
    const html = `<div><h4>Greetings</h4><p>This is content of this info window</p><p>Click 'Change Value' Button: </p></div>`;
    console.log(this.state.infoVisble, '-v')
    return (
      <div>
        <div style={{
          width: 600,
          height: 500
        }}>
          <Map amapkey='a879095e67d7da850cee4a0679b6b857' center={this.state.center} zoom={13}>
            <Marker 
              draggable={true}
              position={this.state.center}
              events={this.markerEvents}
            />
            <InfoWindow
              position={this.state.center}
              visible={this.state.infoVisble}
              isCustom={false}
              content={html}
              size={{
                width: 200,
                height: 140
              }}
              offset={[0, -33]}
              closeWhenClickMap={true}
              showShadow={true}
            />
            <Circle 
              center={ this.state.circleCenter } 
              radius={ 1500 }
              style={ this.state.style }
              // offset={this.state.offset}
            >
              <CircleEditor active={true}/>
            </Circle>
          </Map>
        </div>
      </div>
    )
  }
}
export default CircleAndMark;