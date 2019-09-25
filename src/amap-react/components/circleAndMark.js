import React, { Component } from 'react';
import { Map, Circle, Marker } from 'react-amap';

class CircleAndMark extends Component {
  constructor(props){
    super(props);
    this.state = {
      center: {longitude: 114.298776, latitude: 30.591353},
      circleCenter: {longitude: 114.298776, latitude: 30.591353},
      style: { strokeColor: '#ccc', fillColor: 'ragb(0,0,0)', fillOpacity: 0.1 },
    }
    this.markerEvents = {
      dragend: event => {
        console.log(event)
        const { lat, lng } = event.lnglat;
        this.setState({
          center: { longitude: lng, latitude: lat },
          circleCenter: { longitude: lng, latitude: lat }
        })
      },
      dragging: event => {
        console.log(event)
        const { lat, lng } = event.lnglat;
        this.setState({
          circleCenter: { longitude: lng, latitude: lat }
        })
      }
    }
  }

  render(){
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
            <Circle 
              center={ this.state.circleCenter } 
              radius={ 1500 }
              style={ this.state.style }
            />
          </Map>
        </div>
      </div>
    )
  }
}
export default CircleAndMark;