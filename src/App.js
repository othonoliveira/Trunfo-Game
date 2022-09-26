import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  onInputChange = () => console.log(1);

  onSaveButtonClick = () => console.log(1);

  isSaveButtonDisabled = () => console.log(1);

  render() {
    return (
      <div>
        <Form
          key="newCard"
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo=""
          hasTrunfo=""
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          key="previewCard"
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo=""
          hasTrunfo=""
        />
      </div>
    );
  }
}

export default App;
