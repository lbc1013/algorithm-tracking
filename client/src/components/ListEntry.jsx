import React from 'react';

function ListEntry (props) {
  return (
      <tr>
        <td>{props.eachList.name}</td>
        <td>{props.eachList.language}</td>
      </tr>
    // <div id='ListEntry'>
    //   <p onClick = {() => {props.handleAlgorithmClick(props.eachList.name)}} id='algo'>Algorithm Name : {props.eachList.name} </p>
    //   <p class='lang' id={props.eachList.name}>Language : {props.eachList.language}</p>
    // </div>
  )
}

export default ListEntry;