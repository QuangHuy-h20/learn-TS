// Function signature

// let greet: Function

// greet = () =>{
//     console.log('abc')
// }

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);

greet("abc", "hello");

let calculate: (a: number, b: number, c: string) => number;

calculate = (numOne: number, numTwo: number, action: string) =>
  action === "add" ? numOne + numTwo : numOne - numTwo;

console.log(calculate(4, 2, "add"));

type Student = { name: string; age: number };

let printStudent: (student: Student) => void;

printStudent = ({ name, age }: Student) => {
  console.log(`${name} is ${age} ys old`);
};

printStudent({ name: "abc", age: 25 });

const other = {
    name: 'nam',
    age: 25
}

printStudent(other)
