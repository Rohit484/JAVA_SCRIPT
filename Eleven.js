let n = 7; // you can take input from prompt or change the value
let string = "";
for (let i = 1; i <= n; ++i) {
    // printing star
    for (let k = 1; k < i; ++k) {
        string += "*";
    }
    string += "\n";
}
console.log(string);