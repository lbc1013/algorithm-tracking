import React from 'react';
import axios from 'axios';
import AddBar from './AddBar.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list : [],
    };

    //http requeest related
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.handleAlgorithmClick = this.handleAlgorithmClick.bind(this);
  }

  handleSumbit (event) {
    event.preventDefault();
    let algorithmUserInput = document.getElementById('algor').value;
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
        this.handleGet();
      })
      .catch ((err) => {
        console.log("The POST request has an error");
      })
  }

  handleGet () {
    axios({
      method: 'get',
      url: '/algorithm',
    })
      .then ((result) => {
        console.log("The GET request has been successfully done", result);
        this.setState ({
          list: result.data
        })
      })
      .catch ((err) => {
        console.log("The GET request has an error");
      })
  }

  handleDelete (event) {
    event.preventDefault();
    let algorithmUserInput = document.getElementById('algor').value;
    let languageUserInput = document.getElementById('lag').value;

    axios({
      method: 'delete',
      url: '/algorithm',
      data: {
        algorithm: algorithmUserInput,
        language: languageUserInput
      }
    })
      .then ((result) => {
        console.log("The Delete request has been successfully done", result);
        this.handleGet();
      })
      .catch ((err) => {
        console.log("The Delete request has an error");
      })
  }

  handleUpdate (event) {
    event.preventDefault();
    let algorithmUserInput = document.getElementById('algor').value;
    let languageUserInput = document.getElementById('lag').value;

    axios({
      method: 'put',
      url: '/algorithm',
      data: {
        algorithm: algorithmUserInput,
        language: languageUserInput
      }
    })
      .then ((result) => {
        console.log("The Update request has been successfully done", result);
        this.handleGet();
      })
      .catch ((err) => {
        console.log("The Update request has an error");
      })
  }

  handleAlgorithmClick (algorithm) {
    console.log(algorithm);

    document.getElementById(algorithm).style.display = 'block';
  }

  componentDidMount () {
    console.log('app started')
    this.handleGet();
  }

  render () {
    return (
    <div>
      <h2>[Algorithms Tracker]</h2>
      <AddBar handleUpdate = {this.handleUpdate} handleDelete = {this.handleDelete} handleSumbit = {this.handleSumbit}/>
      <List handleAlgorithmClick = {this.handleAlgorithmClick} dataList = {this.state.list}/>

      {/* {
      (this.state.view === 'test1') ? <div>This is test1</div>:
      (this.state.view === 'test2') ? <div>This is test2</div>:
      null
      } */}
    </div>
    );
  }
}

export default App;