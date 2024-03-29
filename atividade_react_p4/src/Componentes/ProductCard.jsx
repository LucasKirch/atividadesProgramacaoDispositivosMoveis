import React, { Component } from 'react';
import './ProductCard.css'; // Importando estilos CSS

class ProductCard extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <div className="product-card">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </div>
    );
  }
}

export default ProductCard;
