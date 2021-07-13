import React from 'react';

const formStyle = {
  margin: '40px',
  width: '500px',
  border: '5px solid pink'
};

class GroceryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: '',
      quantity: '',
    };
    this.handleItem = this.handleItem.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleItem(event) {
    this.setState({item: event.target.value});
  }

  handleQuantity(event) {
    this.setState({quantity: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.item, this.state.quantity);
  }

  render() {
  return (
    <form style={formStyle} onSubmit={this.handleSubmit}>
    <label> Item
      <input name="item" value={this.state.item} onChange={this.handleItem} />
    </label>
    <label> Qunatity
      <input name="quantity" value={this.state.quantity} onChange={this.handleQuantity} />
    </label>
    <input type="submit" value="Add Grocery" />
   </form>
  )
  }
}
export default GroceryForm;