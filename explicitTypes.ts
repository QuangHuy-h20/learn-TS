/*Explicit types */

let myName: string = "nam";
let age: number;
let isAuthenticated: boolean;

// myName= 20
myName = "lan";

//age = true
age = 30;

// isAuthenticated = 50
isAuthenticated = false;

//arrays

let students: string[] = ["nam", "trung"];

// students.push(5);
students.push("lan");

//union

let mixed: (string | number | boolean)[];

mixed = ["ha", 5, true];

mixed.push("lan");

let id: string | number;

id = 123;

id = "123";

let hobbies: "book" | "music";

// hobbies = 'cook'

//objects

let person: object;

person = {
  name: "a",
  age: 23,
};

person = []


let student: {
    name: string,
    age: number,

}

student = {
    name: 'aaa',
    age:5
}
