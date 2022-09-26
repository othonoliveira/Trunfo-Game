import React, { ReactPropTypes } from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      isSaveButtonDisabled,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <h1>{cardName}</h1>
        <img src={ cardImage } alt="card" data-testid="description-card" />
        
      </div>
    );
  }
}

export default Card;
