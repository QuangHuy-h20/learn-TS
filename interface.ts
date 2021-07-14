// interface

interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
  }
  
  const nikolai: Person = {
    name: "nikolai",
    age: 22,
    speak(text: string): void {
      console.log(text);
      // return text
    },
    spend(amt: number): number {
      return amt;
    },
  };
  
  // console.log(nikolai)
  
  const helloPerson = (onePerson: Person) => console.log(`Hello ${onePerson.name}`);
  
  helloPerson(nikolai)
  