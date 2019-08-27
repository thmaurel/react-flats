import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  select = () => {
    console.log(this.props.flat)
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const { name, imageUrl, price, priceCurrency, lat, lng } = this.props.flat;
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };

    if (this.props.selectedFlat == null) {
      return (
        <div className="card" style={styles} onClick={this.select}>
          <div className="card-category">{price} {priceCurrency}</div>
          <div className="card-description">
            <h2>{name}</h2>
          </div>
          <a className="card-link" href="#"></a>
        </div>
      );
    }

    return (
      <div className={this.props.selectedFlat.name == this.props.flat.name ? "card active" : "card"}
      style={styles} onClick={this.select}>
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
