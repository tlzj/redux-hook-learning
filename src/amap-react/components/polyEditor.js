import React, { Component } from 'react';
import { Map, Polygon, Polyline, PolyEditor } from 'react-amap';
class PolyEditorComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      lineActive: true,
      polygonActive: true,
    }
    this.mapCenter = {longitude: 145, latitude: 30 };
    this.editorEvents = {
      created: (ins) => {console.log(ins)},
      addnode: () => {console.log('polyeditor addnode')},
      adjust: () => {console.log('polyeditor adjust')},
      removenode: () => {console.log('polyeditor removenode')},
      end: () => {console.log('polyeditor end')},
    };
    this.linePath = [
      {longitude: 150, latitude: 20 },
      {longitude: 170, latitude: 20 },
      {longitude: 150, latitude: 30 },
    ];
    this.polygonPath = [
      {longitude: 120, latitude: 30 },
      {longitude: 130, latitude: 30 },
      {longitude: 120, latitude: 40 },
    ];
  }
  togglePolyline(){
    this.setState({
      lineActive: !this.state.lineActive
    });
  }
  togglePolygon(){
    this.setState({
      polygonActive: !this.state.polygonActive
    });
  }
  render(){
    return (
      <div>
        <div style={{width: '100%', height: '370px'}}>
          <Map zoom={3} center={this.mapCenter}>
            <Polygon path={this.polygonPath}>
              <PolyEditor active={this.state.polygonActive} events={this.editorEvents} />
            </Polygon>
            <Polyline path={this.linePath}>
              <PolyEditor active={this.state.lineActive} />
            </Polyline>
          </Map>
        </div>
        <button onClick={() => { this.togglePolyline() }} >Toggle Polyline Editable</button>
        <button onClick={() => { this.togglePolygon() }} >Toggle Polygon Editable</button>
    </div>
    )
  }
}
export default PolyEditorComp;