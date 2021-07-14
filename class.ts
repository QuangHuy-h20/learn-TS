// Class

export class Employee {
    //   public name: string;
    //   private age: number;
    //   readonly gender: boolean;
  
    //   constructor(n: string, a: number, g: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.gender = g;
    //   }
  
    constructor(
      public name: string,
      private age: number,
      readonly gender: boolean
    ){};
  
    print() {
      return `Name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
    }
  }
  
  const nikolai = new Employee("nikolai", 20, true);
  
  // console.log(nikolai.name)
  // console.log(nikolai.age)
  // console.log(nikolai.gender)
  
  // nikolai.name = 'hai'
  // nikolai.gender = false
  // console.log(nikolai)
  
  // console.log(nikolai.print());
  
  const foo = new Employee("foo", 22, false)
  
  let employees: Employee[] = []
  
  employees.push(nikolai)
  employees.push(foo)
  
  employees.forEach(employee => console.log(employee.print()))