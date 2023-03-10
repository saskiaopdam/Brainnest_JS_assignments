// 1. show the largest of two integers

function showLargestInteger(num1, num2) {
    if (num1 > num2) {
        console.log(`When comparing ${num1} and ${num2}, the biggest number is ${num1}.`)
    } else {
        console.log(`When comparing ${num1} and ${num2}, the biggest number is ${num2}.`)
    }
};

showLargestInteger(2, 4); // 4
showLargestInteger(7, 3); // 7

/// 2. check if integer is even or odd

function checkEvenOrOdd(num) {
    if(num % 2 == 0) {
        console.log(`${num} is an even number.`)
    } else {
        console.log(`${num} is an odd number.`)
    }
};

checkEvenOrOdd(2); // even
checkEvenOrOdd(5); // odd