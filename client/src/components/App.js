import React from 'react';
import GroceryHeader from './GroceryHeader.js'
import GroceryForm from './GroceryForm.js'
import GroceryList from './GroceryList.js'

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
    this.setState({ loading: true }, () => {
      fetch("http://127.0.0.1:3000/groceries")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            items: result
          })
        )
        .catch(console.log);
    });
  }

  componentDidMount() {
    this.getItems();
  }



  addItem(item,quantity) {
    const newItem= {item, quantity};
    fetch("http://localhost:3000/groceries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
<<<<<<< HEAD
    }).then(() => this.getItems());

=======
    }).then(this.getItems());
>>>>>>> 9e5cced8670b9a5230569b16a9b51a2045d9ad3e
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
