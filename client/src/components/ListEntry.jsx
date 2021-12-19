import React from 'react';

function ListEntry (props) {
  return (
    <div id='ListEntry'>
      <p id='algo'>Algorithm Name : {props.eachList.name} </p>
      <p id='lang'>Language : {props.eachList.language}</p>
    </div>
  )
}

export default ListEntry;