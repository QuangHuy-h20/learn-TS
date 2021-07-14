"use strict";
// Class
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    //   public name: string;
    //   private age: number;
    //   readonly gender: boolean;
    //   constructor(n: string, a: number, g: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.gender = g;
    //   }
    function Employee(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    ;
    Employee.prototype.print = function () {
        return "Name: " + this.name + ", age: " + this.age + ", gender: " + this.gender;
    };
    return Employee;
}());
exports.Employee = Employee;
var nikolai = new Employee("nikolai", 20, true);
// console.log(nikolai.name)
// console.log(nikolai.age)
// console.log(nikolai.gender)
// nikolai.name = 'hai'
// nikolai.gender = false
// console.log(nikolai)
// console.log(nikolai.print());
var foo = new Employee("foo", 22, false);
var employees = [];
employees.push(nikolai);
employees.push(foo);
employees.forEach(function (employee) { return console.log(employee.print()); });
