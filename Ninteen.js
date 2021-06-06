/* square = function(x) {
     return x * x;
 }
 console.log(square(12));
 console.log(square(3));
 console.log(square(9));
 const makeNoise = function(x) {
     console.log("Ping IS Here!!", x);
 };
 makeNoise(12);
 makeNoise(18);
 const power = function(base, exponent) {
     let result = 1;
     for (let count = 0; count < exponent; count++) {
         result += base;
     }
     return result;
 };
 console.log(power(2, 14));
 let x = 10;
 if (true) {
     let y = 20;
     var z = 30;
     console.log(x + y + z);
 }
 console.log(x + z);
 const halve = function(n) {
     return n / 2;
 };
 let n = 10;
 console.log(halve(100));
 console.log(n);
 const hummus = function(factor) {
     const ingredient = function(amount, unit, name) {
         let ingredientAmount = amount * factor;
         if (ingredientAmount > 1) {
             unit == "S";
         }
         console.log('$[ingrediantAmount]$[unit]$[name]');
     };

     ingredient(1, "can", "Chikepeas");
     ingredient(2, "cup", "Help here");
     ingredient(3, "help", "Boy");
     ingredient(4, "Heero", "Jay");
     ingredient(5, "help_World", "Likha");
     ingredient(6, "Kubar", "DevOps");
 };
 let ne = function() {
     for (let i = 1; i <= 13; i++)
         console.log("Help For Everyone", i);
 };
 ne();
 ne();
 let nw = function(x, y) {
     z = x + y;
     b = x - y;
     v = x * y;
     g = x / y;
     m = x % y;

     console.log("Your Toral Sum is: ", z, " ", b, " ", " ", v, g, m);

 }
 nw(3, 9);
 nw(90, 67);
 let launchMissiles = function() {
     missileSystem.lunch("Now");
 };
 if (safeMode) {
     launchMissiles = function()

 };
*/
function square(x) {
    return x * x;

}
square(9);
console.log("The Future Syas: ", future());

function future() {
    return "YOu Will NEVER win the my heart: ";
}
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

function greate(who) {
    console.log("Hello " + who);
}
greate("Harry");
console.log("Bye");
/*
function chicken() {
    return eggs();
}

function eggs() {
    return chicken();
}
console.log(chicken() + " came first. ");
*/
function minus(a, b) {
    if (b === undefined)
        return -a;
    else
        return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

/*function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));*/
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

/*function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);

        }
    }
    return find(1, "1");
}
console.log(findSolution(24));*/
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {

            return find(current + 5, '(${history}+5)') ||
                find(current * 3, '(${history}*3)');
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));