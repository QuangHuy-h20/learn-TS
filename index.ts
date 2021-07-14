// Generics

type stringArr = Array<string>;
type numArr = Array<number>;

// const last = (arr: Array<any>) => arr[arr.length - 1];
// const l1 = last([1, 2, 3]);

// console.log(l1);

// const l2 = last(["a", "b"]);

// console.log(l2);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];

const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(["d", "e"]);

const makeArr = (x: number) => [x];

const m = makeArr(5);

// console.log(m);

// const m2 = makeArr('a')

const makeArrT = <T>(x: T) => [x];

const m3 = makeArrT("x");

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];

const m4 = makeArrXY(5, 6);
const m5 = makeArrXY("5", "6");
const m6 = makeArrXY(5, "a");

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const m7 = makeTuple("a", 3);
const m8 = makeTuple("a", "b");
const m9 = makeTuple<string, number>("a", 3);
const m10 = makeTuple<string | null, number>(null, 3);

console.log(m10);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];

const m11 = makeTupleWithDefault<string | null>("a", 3);

// Generics extends

const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: "abc", lastName: "def" });
// const n2 = makeFullNameConstraint ({firstName: 'abc', lastName:'def'})

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n3 = makeFullNameConstraintWithGenerics({
  firstName: "nikolai",
  lastName: "pham",
  age: 22,
  gender: "male",
});

// console.log(n3);

const addNewEmployee = (emp: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...emp,
    uid,
  };
};

const emp1 = addNewEmployee({ name: "abc", age: 30 });
// console.log(emp1);
// console.log(emp1.name);

const addNewEmployeeT = <T extends object>(emp: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...emp,
    uid,
  };
};

const emp2 = addNewEmployeeT({ name: "nam", age: 22, male: true });

// console.log(emp2);
// console.log(emp2.name);

const addNewEmployeeWithConstraint = <T extends { name: string }>(emp: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...emp,
    uid,
  };
};

const emp3 = addNewEmployeeWithConstraint({ name: "nam", age: 22 });

console.log(emp3.age);

//Generics in Interface

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

type NumberResource = Resource<number[]>;

const numb: NumberResource = {
    uid: 2,
    name: 'numbers',
    data: [1,2],
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: "Person",
  data: "hello",
};

const resourceTwo: Resource<object> = {
  uid: 1,
  name: "Things",
  data: {
    name: "blah",
  },
};

const resourceThree: Resource<string[]> = {
  uid: 1,
  name: "Person",
  data: ["hello"],
};
