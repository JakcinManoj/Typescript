
let year: Number =2;
console.log("hello world Jakcin");
const input = document.querySelectorAll('input')
console.log(input);

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

let diameter: number;
const circ = (diameter) => {
  return diameter * Math.PI;
};

// console.log(area('hello'));
console.log(circ(7.5));

let num: any = 25;

num = true;
console.log(num);
num = 'hello';
console.log(num);
num = { name: 'luigi' };
console.log(num);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);

