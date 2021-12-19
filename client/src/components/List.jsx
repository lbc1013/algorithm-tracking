import React from 'react';
import ListEntry from './ListEntry.jsx'

function List (props) {
  return (
    <div>
      {props.dataList.map((element) => {
        return <ListEntry eachList = {element}/>
      })}
    </div>
  )

}

export default List;