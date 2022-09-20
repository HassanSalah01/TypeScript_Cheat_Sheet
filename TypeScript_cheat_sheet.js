// variable declaration
var name1 = "hello";
var num = 5;
var isTrue = true;
var isNull = null;
var isUndefined;
var isObject = {
    name: "marco",
    age: 45
};
console.log(name1);
console.log(num);
console.log(isTrue);
console.log(isNull);
console.log(isUndefined);
console.log(isObject);
//Functions VOID
var printName = function (x) {
    console.log(x);
};
printName("Mark");
// Function Return
var printName2 = function (x) {
    return x;
};
console.log(printName2("Sara"));
// Function default parameters
var printName3 = function (name, age, phoneNumber) {
    return "".concat(name, " ").concat(age).concat(phoneNumber);
};
var printName4 = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var x = 0;
    for (var i = 0; i < num.length; i++) {
        x += num[i];
    }
    return x;
};
//object
var user = {
    name: "Mark",
    age: 20
};
console.log(user);
var user2 = {
    name: "mark",
    age: 30
};
var user3 = {
    name: "sara",
    age: 50
};
console.log(user2);
console.log(user3);
var user4 = {
    name: "john",
    age: 50
};
var user5 = {
    name: "sara"
};
var user6 = {
    name: "sara",
    age: 30,
    getName: function () {
        return this.name;
    }
};
console.log(user6.getName() + " inside The function");
// it is better to name your interfaces as
// A) IUser
// B) UserInterface
// we do this to not mistaken them with classes name
// union Types
var pageNumber;
pageNumber = 5;
pageNumber = "10";
var naming = "Marty";
var userId = "5";
userId = 10;
// Arrays
var arr = [1, 2, 3, 4, 5];
var arr1 = ["a", "b", "c"];
// different type Array
var arr2 = [1, 2, 3, "sara"];
// multy dimenssion array
var arr3 = [1, 2, 3, "sara", ["mark", "poe"]];
//tuple
var tup = [10, "mark"];
tup.push(5); // here will push 5 even if i didnt spe the type
// output = > [10,"mark",5]
// to avoid adding on the tuples add ( readOnly)
var tup2 = [10, "mark"];
// typ2.push(5) --> this will land an error , cant push with readonly prop
//never vs void keyword :
var nev = function () {
    console.log("welcome"); // will return undefined js-fun
    return; // still valid , return undef and its void
};
var AlwaysLogs = function (x) {
    while (true) {
        console.log("welcome");
    }
    // return ; this is unreachble code Cause of the infinite look , We use Never
};
var ErrorHand = function (msg) {
    throw Error(msg); //never cant have a reachble End point
};
// enurm
var time;
(function (time) {
    time[time["one"] = 10] = "one";
    time[time["two"] = 11] = "two";
    time[time["three"] = 12] = "three";
    time[time["four"] = 13] = "four";
})(time || (time = {}));
console.log("".concat(time.two, " ----------------"));
