import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../../src/routes.css';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.3977655,
      lng: -99.1713954
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '350px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB47Cyf6xOIxgFWi8-Y67geGWL6IpkjiDI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
               
          {/* <AnyReactComponent
           className="map-marker"
            lat={19.414296}
            lng={-99.1734486}
            text= {'El Pescadito'} 
          />
         
           <AnyReactComponent
           className="map-marker"
            lat={19.3991522}
            lng={-99.1705524}
            text={'Las Tlayudas'}
          />
           <AnyReactComponent
           className="map-marker"
            lat={19.3622898}
            lng={-99.1845339}
            text={'El Rabanito'}
          />
           <AnyReactComponent
           className="map-marker"
            lat={20.5728811}
            lng={-100.3610274}
            text={'Toks'}
          />
           <AnyReactComponent
           className="map-marker"
            lat={19.394312}
            lng={-99.1734187}
            text={'Casa de tono'}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;