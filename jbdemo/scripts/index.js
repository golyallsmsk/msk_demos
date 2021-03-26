(function () {
  "use strict";
  // alert("Hello");
  // v = 10;
  // console.log(v);
  let number1 = 5;
  let string1 = "Hello";
  let bool1 = true;
  let arr1 = [1, 2, "Hello"];
  let d1 = new Date();
  let obj1 = {};
  let mp = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Test Resolve");
      }, 3000);
      throw "Invalid Rejected";
    } catch (err) {
      reject({ name: "Error", message: err });
    }
  });
  console.log(mp.then((d) => console.log(d)).catch((e) => console.log(e)));
  console.log(this);
  console.log(document);
  console.log(location);
  console.log(location.href);
  console.log(location.origin);
  console.log(screen);
  console.log(location);
  console.log(location);
  console.log(location);
  Date.prototype.addDays = (d) => {
    let d1 = new Date();
    d1.setDate(d1.getDate() + d);
    return d1;
  };
  console.log(d1.addDays(-7));
  console.log(moment()._locale);
  console.log(moment()._locale._months);
  console.log(moment()._locale._weekdays);
  console.log(moment().utc());
  console.log(moment().dayOfYear());
  console.log(moment().format());
  console.log(moment().format("MM-DD-YYYY"));
  console.log(moment().toDate());
  console.log(moment().toObject());
  console.log(moment().add(30, "d").toDate());
  let start = new Date(2021, 0, -1);
  console.log(moment.isDate(start));
  console.log("Before: ", moment().isAfter(start));
  console.log(moment(start).format());
  console.log(moment().diff(start, "days"));
  console.log(!isNaN(undefined));
  console.log(isFinite(10));
  console.log(`
    number1:  ${number1};
    string1 : ${string1};
    bool1 : ${bool1};
    arr1 : ${arr1};
    d1 : ${d1.toString()};
    obj1 : ${JSON.stringify(obj1)}
    `);
  setTimeout(() => {
    console.log("Set Time Out 2000");
  }, 2000);
  let si = setInterval(() => {
    console.log("Set Interval 2000");
  }, 1000);
  setTimeout(() => {
    clearInterval(si);
  }, 10000);
})();

/*

for of
map
...

callbacks, promises, async await

*/

(() => {
  // JSON - JSON.stringify(myobj); JSON.parse(myJson);
  // MIME type for JSON test is application/json
  let myobj = {
    employee: {
      name: "John",
      middlename: null,
      age: 30,
      dob: "01/01/2000",
      cage: function () {
        return 30;
      },
    },
    employees: ["John", "Anna", "Peter"],
  };
  console.log(Object.entries(myobj));
  console.log(myobj);
  console.log(myobj.employee.cage());
  let temp = JSON.stringify(myobj);
  console.log("temp: ", temp);
  let jobj = JSON.parse(temp);
  console.log(jobj);
  let dobt = new Date(myobj.employee.dob);
  console.log(dobt.getFullYear());
  let jobj1 = JSON.parse(temp, (k, v) => (k == "dob" ? new Date(v) : v));
  console.log("jobj1", jobj1);
  jobj1.cage = eval("(" + jobj1.cage + ")");
  console.log(myobj.employee.cage());
  // console.log(jobj1.employee.cage());
})();

(() => {
  //Closures

  let add = (() => {
    let counter = 0;
    return () => ++counter;
  })();

  console.log("Add", add());
  console.log("Add", add());
  console.log("Add", add());
})();

(() => {
  // Javascript
  // scope
  // var, let, const
  // number, string, bool, object, array, function, arrow function
  // Map, ..., Set, WeakSet, WeakMap, Array,
  // for of
  // clousures, generators
  // new Date
  // JSON
  // try catch finally
  //
})();

(() => {
  // Underscore
  let arr = [1, 2, 3, 4, 5, 6];
  let obj = { one: 1, two: 2, three: 3, four: 4, five: 5, sex: 6 };
  let employees = [
    { name: "A", age: 25 },
    { name: "C", age: 21 },
    { name: "B", age: 23 },
  ];
  console.log(
    "Numbers :",
    _.map(arr, (i) => i)
  );
  console.log(
    "Squares :",
    _.map(arr, (i) => i * i)
  );
  console.log(
    "Cubes: ",
    _.map(arr, (i) => i ** 3)
  );
  console.log(
    "Odd : ",
    _.map(arr, (i) => i % 2 == 1)
  );
  console.log(
    "Even : ",
    _.map(arr, (i) => i % 2 == 0)
  );

  console.log(_.find(arr, (i) => i > 3));
  console.log(_.filter(arr, (i) => i > 3));
  console.log(_.first(arr, 2));
  console.log(_.initial(arr));
  console.log(_.last(arr));
  //
  console.log(_.keys(obj));
  console.log(_.values(obj));
  console.log(_.get(obj, "three"));
  console.log(_.has(obj, "eight"));
  console.log(_.isEmpty(obj));
  //chain
  console.log(
    _.chain(employees)
      // .sortBy((i) => i.age)
      .map((e) => e.age + 10)
      .value()
  );
  let eo = _.once(() => {
    console.log("Executed Once");
  });
  eo();
  eo();
  eo();
})();

(() => {
  //GeoLocation API
  let target = { lat: 0, long: 0 };
  let options = { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 };
  navigator.geolocation.getCurrentPosition(
    positionSuccess,
    positionError,
    options
  );

  let watch = navigator.geolocation.watchPosition(
    watchSuccess,
    watchError,
    options
  );

  function watchSuccess(pos) {
    let crd = pos.coords;
    if (target.lat === crd.latitude && target.long === crd.longitude) {
      console.log("You reached target");
      navigator.geolocation.clearWatch(watch);
    }
  }

  function watchError(err) {
    console.log(`Error: ${err.message} `);
  }

  function positionSuccess(pos) {
    console.log(`Current Position is Latitude: ${pos.coords.latitude}
     Longitude : ${pos.coords.longitude} Arruracy : ${pos.coords.altitude}; `);
    console.log(pos);
  }
  function positionError(err) {
    console.log(`Error ${err.message}`);
  }
  console.log(location.href);
})();

(() => {
  // Lodash
})();
