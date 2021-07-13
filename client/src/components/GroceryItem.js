import React from 'react';

const itemsStyle = {
  width: '500px',
  margin: 'auto',
  marginTop: '20px',
  border: '5px solid yellow',
  cursor: 'pointer'
};

const spanStyle = {
  padding: '0 20px',
};

const deleteStyle = {
  color: 'red',
  float: 'right',
  fontSize: 'large',
  fontWeight: 'bolder',
  cursor: 'pointer'
};



const GroceryItem = (props) => {

  const deleteItem = (e) => {
    var id = e.target.attributes.getNamedItem('data-tag').value;
    props.deleteItem(id);
    console.log(e.target.attributes.getNamedItem('data-tag').value);
  }

  const changeItemIntern = (e) => {
    var id = e.target.attributes.getNamedItem('data-tag').value;
    var newItem = prompt('Edit the item');
    props.changeItem(id,newItem);
  }

return (
<div style={itemsStyle}>
<span style={spanStyle} data-tag={props.item.id} onClick={changeItemIntern}> {props.item.item} </span>
<span style={spanStyle}> {props.item.quantity} </span>
<span style={deleteStyle} data-tag={props.item.id}  onClick={deleteItem}> X</span>
</div>
)
}

export default GroceryItem;