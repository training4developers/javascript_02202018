const parent = {
  name: 'parent',
  amt: 2000,
  address: {
    street: '123 Oak Lane',
    city: 'Mountain View',
    state: 'CA',
  }
};

const child = Object.create(parent);
child.name = 'child';

parent.amt = 3000;
child.amt = 15;
delete child.amt;

console.log(parent.address.state);
console.log(child.address.state);

child.address = {
  state: 'NY',
};

console.log(parent.address.state);
console.log(child.address.state);

console.dir(child);