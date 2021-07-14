/*Array & Objects */

let names = ["a", "b", "c"];
names.push("d");
// names.push(1);
// names.push(false);
console.log(names);

let numbers = [1, 2, 3];
// numbers.push('a');
numbers[2] = 4;

console.log(numbers);

let mixed = [1, "abc", false];

mixed.push(5);
mixed.push(true);
mixed.push("a");
// mixed.push({a:1, b:'2'});

let person = {
  name: "abcd",
  age: 22,
  isStd: false,
};

// person.name = 1;
person.name = "name";

//person.age = '24';

// person.hobbies = 'sports'

person = {
    name: 'efgh',
    age:25,
    isStd: true, 
    // skills:['a']
}