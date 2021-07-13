import React from 'react';
import GroceryItem from './GroceryItem.js'

const GroceryList = (props) => {
return (
  <ul>
    {

      props.itemsList.map((item,index) => {
        console.log(item)
        return (<GroceryItem key={index} item={item} deleteItem={props.deleteItem} changeItem={props.changeItem} />)
      })
    }

  </ul>

)
}

export default GroceryList;