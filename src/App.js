import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const noInfoState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  hasTrunfo: false,
  deck: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      deck: [],
    };
  }

  validateAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSingularAttribute = 90;
    const isValid = !!(cardAttr1 >= 0
      && cardAttr1 <= maxSingularAttribute
      && cardAttr2 >= 0
      && cardAttr2 <= maxSingularAttribute
      && cardAttr3 >= 0
      && cardAttr3 <= maxSingularAttribute
    );
    return isValid;
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
    const { state } = this;
    const { cardTrunfo, hasTrunfo, deck } = state;
    const isTrunfo = hasTrunfo ? true : cardTrunfo;

    const newCard = Object.keys(state).filter((value) => value.startsWith('card'))
      .reduce((prev, curr) => ({
        ...prev,
        [curr]: state[curr],
      }), {});
    const changedDeck = [...deck, newCard];
    this.setState({
      ...noInfoState,
      hasTrunfo: isTrunfo,
      deck: changedDeck,
    });
  };

  render() {
    const { deck } = this.state;
    return (
      <>
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
        <div>
          <h1>Deck</h1>
          {deck.map((value, index) => (<Card key={ index } { ...value } />))}
        </div>
      </>
    );
  }
}

export default App;
