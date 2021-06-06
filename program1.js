function countBs(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            count++;

        }
    }
    return (count); // return outside of for loop
}



console.log(countBs("BBBBBBBBC"));


function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) { // use the variable char instead of  the string "char"
            count++;
        }
    }
    return (count); // return outside of the for loop
}
console.log(countChar("kakkerlak", "k"));