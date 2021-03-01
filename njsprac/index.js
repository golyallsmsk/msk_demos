function customer(name, address = "", city = "", state = "", zip = "") {
  fulladdress = function () {
    return `${name} ${address} ${city} ${state} ${zip}`;
  };
  return {
    name: name,
    address: address,
    city: city,
    state: state,
    zip: zip,
    fulladdress: fulladdress,
  };
}

class Customer {
  constructor() {
    this.name = "";
    this.address = "";
    this.city = "";
    this.state = "";
    this.zip = "";
  }
  fulladdress = function () {
    return `${this.address} ${this.city} ${this.state} ${this.zip}`;
  };
}

let cust1 = customer("Sri", "10 Woodlands ln", "white Plains", "NY", "10607");
cust1.zip = "11375";
console.log(cust1.name);
console.log(cust1.fulladdress());

let cust2 = customer("Sri2", "10 Woodlands ln");
console.log(cust2.name);
console.log(cust2.fulladdress());

let cust11 = new Customer();
cust11.name = "sri11";
cust11.state = "NY";
console.log(cust11.name);
console.log(cust11.fulladdress());

let foo = 42;
foo = "bar";
foo = true;
console.log(foo);
("use strict");
function fun() {
  return this;
}
console.assert(fun() === undefined);

var num = null;

console.log(Number.isInteger(num));
console.log(Number.isSafeInteger(num));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(num);
// console.log(num.valueOf());
console.log(Number.isNaN(num));
console.log(typeof Number(num));
console.log(Number(num));
var a = 1,
  b = Number.NaN;
console.log(a + b);
