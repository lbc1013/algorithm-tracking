import React from 'react';
import axios from 'axios';
import AddBar from './AddBar.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit (event) {
    event.preventDefault();
    let algorithmUserInput = document.getElementById('algo').value;
    let languageUserInput = document.getElementById('lag').value;
    console.log(algorithmUserInput , languageUserInput) ;

    axios({
      method: 'post',
      url: '/algorithm',
      data: {
        algorithm: algorithmUserInput,
        language: languageUserInput
      }
    })
      .then ((result) => {
        console.log("The POST request has been successfully done");
      })
      .catch ((err) => {
        console.log("The POST request has an error");
      })
  }

  render () {
    return (
    <div>
      <h2>[Algorithms Tracker]</h2>
      <AddBar handleSumbit = {this.handleSumbit}/>
    </div>
    );
  }
}

export default App;