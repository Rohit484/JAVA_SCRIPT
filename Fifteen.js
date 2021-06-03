for (num = 1; num <= 1000; num++) {
    let FindForThree = num % 3;
    let FindForFive = num % 5;
    if (FindForThree == 0)
        console.log("Fuzz");
    else if (FindForFive == 0)
        console.log("Buzz");
    else if ((FindForFive == 0) && (FindForThree == 0))
        console.log("FuzzBuzz");
    else
        console.log(num);
}