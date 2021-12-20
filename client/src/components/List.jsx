import React from 'react';
import ListEntry from './ListEntry.jsx'

function List (props) {
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {props.dataList.map((element) => {
        return <ListEntry handleAlgorithmClick = {props.handleAlgorithmClick} eachList = {element}/>
      })}
      </tbody>
    </table>
    </div>

    // // <div>
    //   {props.dataList.map((element) => {
    //     return <ListEntry handleAlgorithmClick = {props.handleAlgorithmClick}eachList = {element}/>
    //   })}
    // // </div>
  )

}

export default List;