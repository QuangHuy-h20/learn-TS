//Any types

let age: any = 25;

age: "abc";

age = { a: 1, b: 2 };

let mixed: any[] = [];

mixed.push(5);
mixed.push("5");
mixed.push(false);

let person: { name: any; age: any };

person = {
  name: true,
  age: 1,
};
