import React from 'react';

const itemsStyle = {
  width: '500px',
  margin: 'auto',
  marginTop: '20px',
  border: '5px solid yellow'
};

const deleteStyle = {
  color: 'red',
  float: 'right',
  fontSize: 'large',
  fontWeight: 'bolder'
};



const GroceryItem = (props) => {

  const deleteItem = (e) => {
    var id = e.target.attributes.getNamedItem('data-tag').value;
    props.deleteItem(id);
    console.log(e.target.attributes.getNamedItem('data-tag').value);
  }

return (
<div style={itemsStyle}>
<span > {props.item.item} </span>
<span> {props.item.quantity} </span>
<span style={deleteStyle} data-tag={props.item.id}  onClick={deleteItem}> X</span>
</div>
)
}

export default GroceryItem;