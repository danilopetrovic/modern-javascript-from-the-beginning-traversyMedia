// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a, b);
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

// Ovo 3 reda nemaju nekog smisla...
let person11, person12, person13;
[person11, person12, person13] = getPeople();
console.log(person11, person12, person13);

// Object Destructuring
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
}

// Old ES5
const name_old = person.name,
      age_old = person.age,
      city_old = person.city;
console.log('Old ES5: ', name_old, age_old, city_old);

// New ES6 Destructuring
const {name, age, city, sayHello} = person;
console.log('New ES6 Destructuring: ', name, age, city);
sayHello(); // moze da se pozove zato sto je izbacena iz objekta...