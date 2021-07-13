var grocerylist = [
  { item: 'Banana', quantity: 1 },
  { item: 'Onion', quantity: 1 },
  { item: 'Garlic', quantity: 1 },
  { item: 'Olive oil', quantity: 1 },
  { item: 'french bread', quantity: 1 },
]

exports.getAll = (req, res) => {
  res.send(grocerylist);
}