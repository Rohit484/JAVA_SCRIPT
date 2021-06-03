for (var num = 1; num <= 100; num++) {
    var cheakForThree = num % 3;
    var cheakForFive = num % 5;
    if ((cheakForThree == 0) && (cheakForFive == 0))
        console.log("FizzBuzz");
    else if (cheakForThree == 0)
        console.log("Fizz");
    else if (cheakForFive == 0)
        console.log("Buzz");
    else
        console.log(num);
}