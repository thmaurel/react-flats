import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.866667,
      lng: 25.333333
    },
    zoom: 12
  };

  render() {
    let lat = this.props.selectedFlat ? this.props.selectedFlat.lat : 48.866667;
    const lng = this.props.selectedFlat ? this.props.selectedFlat.lng : 2.333333;
    let centera = {lat, lng};
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyABxLlYKl6QhCje2f57FLW90qjPDx4Q65Y" }}
          defaultCenter={centera}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
