import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList selectFlat={this.selectFlat} selectedFlat ={this.state.selectedFlat}/>
        </div>
        <div className="map-container">
          <SimpleMap selectedFlat ={this.state.selectedFlat}/>
        </div>
      </div>
    );
  }
}

export default App;
