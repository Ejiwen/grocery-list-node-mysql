import React from 'react';
// import headerImg from './grocery-bags.png';

const headerStyle = {
  width: '500px',
  margin: 'auto',
  marginTop: '20px',
  border: '5px solid green'
};

const GroceryHeader = () =>{
  return (
    <div style={headerStyle}>
      <img src='grocery-bags.png' alt='Grocery Header' />
      <h1>GROCERY LIST</h1>
    </div>

  )
}
// const GroceryHeader = () => <h1>Grocery Header</h1>


export default GroceryHeader;