function testequal(val) {
    if (val == 12) {
        return "Equals";
    }
    return "Not Equal";
}
console.log(testequal(12));
console.log("Hello World");

function teststrict(val) {
    if (val === 7) {
        return "Its Equal";
    }
    return "Its Not Equals";
}
console.log(teststrict(10));

function comparequality(a, b) {
    if (a == b) {

        return "Equals";
    }
    return "Not Equals";
}
console.log(comparequality(12, 2));
var names = ["Rohit", "Help", "Can", "Working", "I ", "Intrested", "hope", "fine"];

function golfscore(par, strokes) {
    if (strokes == 1) {

        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes <= par - 3) {
        return names[2];
    } else if (strokes <= par - 4) {
        return names[3];
    } else if (strokes <= par - 5) {
        return names[4];
    } else if (strokes <= par + 3) {
        return names[5];
    } else if (strokes <= par + 2) {
        return names[6];
    } else if (strokes <= par + 1) {
        return names[7];
    } else if (strokes == 2) {
        return names[8];
    }
    return "Help Me";
}
console.log(golfscore(3, 4));

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "Data";
            break;
        case 3:
            answer = "Science";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, -3));
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            count++;
            break;
        case 7:
        case 8:
        case 9:
        case "A":
        case "B":
        case "c":
        case "D":
            count--;
            break;


    }
    var holdbat = 'HOLD';
    if (count > 0) {
        holdbat = 'Bet';
    }
    return count + " " + holdbat;
}
cc(2);
cc(3);
cc(7);
cc('K');
cc('B');
console.log(cc(1));
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everythings!"]

};
var myDog = {
    "name": "QUickly",
    "legs": 3,
    "tails": 2,
    "friends": []
};
var neww = ourDog;
var quic = myDog.tails;
console.log(neww);
var testObj = {
    12: "Namath",
    13: "Montana",
    14: "Unitas"
};
var playerNumber = 13;
var player = testObj[playerNumber];
console.log(player);
console.log(14);
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everythings"]
};
ourDog.bark = "Bow-Work";
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Learning with Youtuber"]
};
delete ourDog.bark;
myDog['bark'] = "Woof!";
console.log(ourDog.bark);

/*function phoneticLookup(val) {
    var result = "";
    switch (val) {
        case "alpha"
        result = "admid";
        break;
        case "B"
        result = "Bebo";
        break;
        case "C"
        result = "Vine";
        break;
        case "D"
        result = "YouTube";
        break;
        case "E"
        result = "Yoyo";
        break;
        case "G"
        result = "Waloo";
        break;
        case "H"
        result = "Help";
        break;
        case "L"
        result = "Hiii";
        break;
        case "M"
        result = "Welcome";

    }
};*/
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);
var our = [];
for (var i = 10; i > 0; i -= 2) {
    our.push(i);
}
console.log(our);
var ou = [];
for (var i = 9; i > 0; i -= 2) {
    ou.push(i);
}
console.log(ou);
var oura = [9, 10, 11, 12, 13, 14, 15];
var total = 0;
for (var i = 0; i < oura.length; i++) {
    total += oura[i];
}
console.log(oura);
console.log(total);

function multipleArray(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multipleArray([1, 2], [3, 4], [5, 6, 7]);
console.log(product);