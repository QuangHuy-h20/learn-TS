// Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const last = (arr: Array<any>) => arr[arr.length - 1];
// const l1 = last([1, 2, 3]);
// console.log(l1);
// const l2 = last(["a", "b"]);
// console.log(l2);
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b"]);
var l5 = lastT(["d", "e"]);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m);
// const m2 = makeArr('a')
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT("x");
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY("5", "6");
var m6 = makeArrXY(5, "a");
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple("a", 3);
var m8 = makeTuple("a", "b");
var m9 = makeTuple("a", 3);
var m10 = makeTuple(null, 3);
console.log(m10);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault("a", 3);
// Generics extends
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n1 = makeFullNameConstraint({ firstName: "abc", lastName: "def" });
// const n2 = makeFullNameConstraint ({firstName: 'abc', lastName:'def'})
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n3 = makeFullNameConstraintWithGenerics({
    firstName: "nikolai",
    lastName: "pham",
    age: 22,
    gender: "male"
});
// console.log(n3);
var addNewEmployee = function (emp) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, emp), { uid: uid });
};
var emp1 = addNewEmployee({ name: "abc", age: 30 });
// console.log(emp1);
// console.log(emp1.name);
var addNewEmployeeT = function (emp) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, emp), { uid: uid });
};
var emp2 = addNewEmployeeT({ name: "nam", age: 22, male: true });
// console.log(emp2);
// console.log(emp2.name);
var addNewEmployeeWithConstraint = function (emp) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, emp), { uid: uid });
};
var emp3 = addNewEmployeeWithConstraint({ name: "nam", age: 22 });
console.log(emp3.age);
var numb = {
    uid: 2,
    name: 'numbers',
    data: [1, 2]
};
var resourceOne = {
    uid: 1,
    name: "Person",
    data: "hello"
};
var resourceTwo = {
    uid: 1,
    name: "Things",
    data: {
        name: "blah"
    }
};
var resourceThree = {
    uid: 1,
    name: "Person",
    data: ["hello"]
};
