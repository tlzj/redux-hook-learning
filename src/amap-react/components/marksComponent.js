// 高德使用 AMap.MarkerClusterer 的聚合坐标点
import { Map, Markers } from 'react-amap';
import React from 'react';
const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
    draggable: true,
  }))
);

class MarksComponent extends React.Component{
  constructor(){
    super();
    this.markers = randomMarker(1000);
    this.center = {longitude: 115, latitude: 40};
    this.state = {
      useCluster: true,
    }
    this.markersEvents  = {
      created: allMarkers => {
        console.log(allMarkers, '全部实例');
      },
      click: (mapsOption, marker) => {
        console.log(mapsOption, marker);
      }
    }
  }
  toggleCluster(){
    this.setState({
      useCluster: !this.state.useCluster,
    });
  }
  render(){   
    return <div>
      <div style={{width: '100%', height: 370}}>
        <Map plugins={['ToolBar']} center={this.center} zoom={5}>
          <Markers 
            markers={this.markers}
            useCluster={this.state.useCluster}
            events={this.markersEvents}
          />
        </Map>
      </div>
      <button onClick={ () => { this.toggleCluster() } }> Toggle Cluster</button>
    </div>
  }
}

export default MarksComponent;