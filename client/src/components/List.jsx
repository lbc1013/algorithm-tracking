import React from 'react';
import ListEntry from './ListEntry.jsx'

function List (props) {
  return (
    <div>
      {props.dataList.map((element) => {
        return <ListEntry handleAlgorithmClick = {props.handleAlgorithmClick}eachList = {element}/>
      })}
    </div>
  )

}

export default List;