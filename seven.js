function freezeObj() {
    "Use Strict";
    const MATH_CONSTRANT = {
        PI: 3.14

    };
    try {
        MATH_CONSTRANT.PI = 98;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTRANT.PI;
}
const PI = freezeObj();
console.log(PI);

var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
const increment = (function() {
    return function increment(number, value) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removefirsttwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removefirsttwo(source);
console.log(arr);
console.log(source);