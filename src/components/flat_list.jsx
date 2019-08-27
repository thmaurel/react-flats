import React, { Component } from 'react';
import Flat from './flat';
import flats from '../../data/flat';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  createList = () => {
    return this.state.flats.map(flat => <Flat flat={flat} key={flat.name} selectedFlat={this.props.selectedFlat} selectFlat={this.props.selectFlat} />);
  }

  render() {
    return (
      this.createList()
    );
  }
}

export default FlatList;
