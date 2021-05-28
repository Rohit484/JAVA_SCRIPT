var MyGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof MyGlobal != "undefined") {
        output += "MyGlobal: " + MyGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "\noopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalFunction() {
    var myvar = 5;
    console.log(myvar);
}
//myLocalFunction();
//console.log(myvar);

function minus(num) {
    return num - 7;
}
console.log(minus(10));

function times(num) {
    return num * 5;
}
console.log(times(5));

function nextInline(arr, Item) {
    return Item;
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThattrue) {
    if (wasThattrue) {
        return "Yes , that was true: ";
    }
    return "No thet is not true: ";
}
console.log(trueOrFalse(false));