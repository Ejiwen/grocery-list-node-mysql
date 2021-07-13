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
  }

  getItems() {
    var groceriesArray = [];
    axios.get('/getAll')
      .then(groceryList => groceryList)
      .then(result => this.setState({ items: result.data}));
      // this.setState({ items: result.data.slice(1)})
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
    /*
    const newItem= {item, quantity};
    fetch("http://localhost:3000/groceries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }).then(this.getItems());
    */
  }

  deleteItem(id) {
  fetch('http://localhost:3000/groceries/' + id, { method: 'DELETE' })
        .then(() => console.log('Delete successful'));
        this.getItems();
  }

  render() {
  return (
  <div style={appStyle}>
   <GroceryHeader  />
   <GroceryForm addItem={this.addItem.bind(this)} />
   <GroceryList itemsList={this.state.items} deleteItem={this.deleteItem} />
  </div>
  )
 }
}

export default App;