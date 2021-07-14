import React from 'react';
import GroceryHeader from './GroceryHeader.js';
import GroceryForm from './GroceryForm.js';
import GroceryList from './GroceryList.js';
import axios from 'axios';

const appStyle = {
  width: '594px',
  border: '5px solid #2196f3'
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.getItems = this.getItems.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }

  getItems() {
    var groceriesArray = [];
    axios.get('/getAll')
      .then(groceryList => groceryList)
      .then(result => this.setState({ items: result.data}));
  }

  componentDidMount() {
    this.getItems();
  }



  addItem(item,quantity) {
    axios.post('/postItem', {
      item,
      quantity
    });
    this.getItems();
  }

  deleteItem(id) {
    axios.delete('/items/' + id);
    this.getItems();
  }

  changeItem(id, updatItem) {
    axios.put('/item/' + id + updatItem);
    this.getItems();
  }

  render() {
  return (
  <div style={appStyle}>
   <GroceryHeader  />
   <GroceryForm addItem={this.addItem.bind(this)} />
   <GroceryList itemsList={this.state.items} deleteItem={this.deleteItem} changeItem={this.changeItem} />
  </div>
  )
 }
}

export default App;