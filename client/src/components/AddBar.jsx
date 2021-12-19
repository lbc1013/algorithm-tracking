import React from 'react';

class AddBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };

  }

  render () {
    return (
    <div>
      <label>Algorithms : </label>
      <input type="text" id="algor"/><br/>
      <label>Language : </label>
      <input type="text" id="lag"/><br/>
      <br/>
      <input onClick = {this.props.handleSumbit} type="submit" value="Submit"></input>
      <input type="submit" value="Delete"></input>
      <input type="submit" value="Update"></input>
      <br/>
      <br/>
    </div>
    );
  }
}

export default AddBar;