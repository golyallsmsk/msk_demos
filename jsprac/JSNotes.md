# JS Notes

Javascript

Datatype
    String - join, substring, contains
    Number
    Boolean
    undefined
    Null
    Object - { }
    Symbol

Scope
Variable and this
    var
    let
    const
    this

constructor functions
    function customer(name, address, city, state, zip) {
        name : name;
        address : address;
        city : city;
        state : state;
        zip = zip;
        fulladdress : function () {
            return address + city + state + zip;
        }
    }

functions
    Named functions
    Anonmyous Functions
    Immediate Invoked function Expressions
    (() => {
        JS Statements;
    })();

Arrow Functions
    () => {

    }
conditions
    if
    switch
    tenany () ?  "" : ""

loops
    do while
    while
    for
    for in
    for of

Arrays and collections
    length
    push, pop, shift, unshift, slice, splice

Closures
    function which as properties, a inner function that has implementation and which it returns

    function setCouter(num) {
        return function Counter() {
            return ++num;
        }
    }

Generators
