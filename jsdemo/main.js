// "use strict";
// let name1 = "Global";

function f1() {
  var name1 = "function";

  (function inf() {
    var name1 = "inf";
    console.log(name1);
  })();

  if (name1) {
    let name1 = "ifn";
    console.log(name1);
  }
  console.log(name1);
  // console.log(this);
}
f1();
// console.log(name1);
// console.log(this);
/*(() => {
  var me = {
    name: {
      first: "justin",
    },
  };
  var name1 = me.name;

  delete me;

  console.log(name1.first);

  function printThis() {
    console.log(this);
  }

  printThis();
  new printThis();
  let greet = function (...months) {
    months.forEach((m) => console.log("Month: " + m));
  };

  greet(["Jan", "Feb"]);

  let person1 = { name: "sri" };
  let Hi = function () {
    console.log("Hi " + this.name);
  };
  let Hi1 = function (m) {
    console.log(m + " " + this.name);
  };
  Hi.call(person1);
  Hi.call();
  Hi();
  Hi1.call(person1, "Dear");
  Hi1.call(person1, "Good Morning,");
  Hi1("good");
  //   console.log("Hello");
})();

(function () {
  //   alert("Hello");
})();

(function () {
  var message = "Hello";
  //   console.log(message);

  function print() {
    for (i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }

  print(1, 2, 3);
  print("a", "b", false);
})();

function setupCounter(val) {
  return function counter() {
    return val++;
  };
}

let counter1 = setupCounter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());
let counter2 = setupCounter(5);
console.log(counter2());
console.log(counter2());
console.log(counter2());

function* generator(i) {
  yield i;
  yield i + 10;
}

function* generator1(i) {
  yield i;
  yield i + 10;
}

const gen = generator(5);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

const gen1 = generator1(5);

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
*/
