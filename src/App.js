import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      isSaveButtonDisabled: true,
    };
  }

  validateAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSingularAttribute = 90;
    const graterThenZero = !!(cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0);
    const lessThenNinety = !!(cardAttr1 <= maxSingularAttribute
      && cardAttr2 <= maxSingularAttribute
      && cardAttr3 <= maxSingularAttribute);
    return graterThenZero && lessThenNinety;
  };

  validateForm = () => {
    const maxAttributePoints = 210;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const validInput = !!(cardName && cardDescription && cardImage);
    const currentPoints = +cardAttr1 + +cardAttr2 + +cardAttr3;
    const validatedAttr = this.validateAttributes();
    const validatedInfo = !!(validInput
      && currentPoints <= maxAttributePoints
      && validatedAttr
    );
    if (validatedInfo) { this.setState({ isSaveButtonDisabled: false }); } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => this.validateForm());
  };

  onSaveButtonClick = () => {

  };

  render() {
    return (
      <div>
        <Form
          key="newCard"
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          key="previewCard"
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
