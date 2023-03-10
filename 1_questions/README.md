_Brainnest Frontend Industry Training_

---

# JavaScript

## Assignment 1 - Questions

Read more about JS and try to answer as many questions as you can.

1. Name the three ways to declare a variable?
```
var myVariable;
let myVariable;
const myVariable;
```
2. Which of the three variable declarations should you avoid and why?
```
Var: it's old school. Now we have let and const.
```
3. What rules should you follow when naming variables?
```
descriptive, consise, camelCase, no dashes and not start with digit
```
4. What should you look out for when using the + operator with numbers and
strings?
```
the number will become a string and glued together with the existing string
```
5. How does the % operator work?
```
It gives the remainder of a division.
```
6. Explain the difference between == and ===.
```
== equality operator
=== strict equality operator (comparison includes data type)
```
7. When would you receive a NaN result?
```
When the value is not a number.
```
8. How do you increment and decrement a number?
```
++
--
```
9. Explain the difference between prefixing and post-fixing increment/decrement
operators.
```
prefixing (++myNumber) - the return value is myNumber increased by 1, increment happens in current iteration
postfixing (myNumber) - the return value is myNumber, increment happens in following iteration
```
10. What is operator precedence and how is it handled in JS?
```
The order in which the operators apply in a mathematical expression; In JS it's handled just like in mathematics:
- multiplication (*) and division (/) come before addition (+) and subtraction (-)
- operations inside parentheses are calculated first

https://www.w3schools.com/js/js_precedence.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
```
11. How do you log information to the console?
```
console.log("Hello");
```
12. What does unary plus operator do to string representations of integers?
```
It turns the string representation to a number (changes the type).
```
13. What are the eight data types in JavaScript?
```
number
bigInt
integer
float
null
undefined
boolean
string
```
14. Which data type is NOT primitive?
```
object
```
15. What is the relationship between null and undefined?
```
null represents an empty or unknown value, undefined means there is no value assigned to a variable;
```
16. What is the difference between single, double, and backtick quotes for strings? 
```
'single quotes'
"double quotes"
`back tics`
```
17. What is the term for embedding variables/expressions in a string?
```
string interpolation
```
18. Which type of quote lets you embed variables/expressions in a string?
```
backticks
```
19. How do you embed variables/expressions in a string?
```
let myAge = 25;

`My age is ${myAge}.` // My age is 25.
```
20. How do you escape characters in a string?
```
With a backslash: 'Let\'s go to the beach.'
```
21. What is the difference between the slice/substring/substr string methods?
```
slice: 
    string.slice(indexStart, indexEnd) - returns part of a string from indexEnd up to but excluding indexEnd

    e.g. 
    let sentence = "My children went to school."
    sentence.slice(0, 4) // My c
    sentence.slice(4) // children went to school.

substring:
    string.slice(indexStart, indexEnd) - returns part of a string from indexEnd up to but excluding indexEnd

    e.g. 
    let string = "Mozilla"
    sentence.substring(1, 2) // oz
    sentence.substring(2) // zilla

substr: // deprecated
    string.substr(start, lenth) - returns part of a string from start extending with the number of characters specified by length

    e.g. 
    let string = "Mozilla"
    sentence.substr(1, 2) // oz
    sentence.substr(2) // zilla
```
22. What are the three logical operators and what do they stand for?
```
|| AND operator (both conditions left and right of the operator are true)
&& OR operator (either condition left and right of the operator is true)
! NOT operator (condition is false)
```
23. What are the comparison operators?
```
== equal to
< lower than
> greater than
>= lower than or equal to
<= greater than or equal to
!= not equal to
```
24. What are truthy and falsy values?
```
Values that are considered true / false in a boolean context.
```
25. What are the falsy values in JavaScript?
```
undefined
null
NaN
false
0
-0
0n
"", '', ``
document.all
```
26. What are conditionals?
```
a statement that if a condition aplies, something should happen
```
27. What is the syntax for an if/else conditional?
```
if (condition) {
    // do something
} else (otherwise) {
    // do something else
}
```
28. What is the syntax for a switch statement?
```
const fruit = 'lemons'
switch(fruit) {
    case 'lemons':
        console.log('Apples cost 1 pound.')
        break;
    case 'oranges':
        console.log('Oranges cost 2 pounds.')
        break;
    case 'pears':
        console.log('Pears cost 0.5 pound.')
    default:
        console.log('We are out of 'lemons')
}
```
29. What is the syntax for a ternary operator?
```
condition ? do A : do B
```
30. What is nesting?
```
putting an element inside another element
```
31. What are functions useful for?
```
to describe actions that need to be executed
```
32. How do you invoke a function?
```
myFunction()
```
33. What are anonymous functions?
```
functions without a name, e.g.

let myFunction = function() {
    // do something
};
```
34. What is function scope?
```
a variable is accessible only inside of the function where it is declared
```
35. What are return values?
```
the value that comes out of a function after the function is executed
```
36. What are arrow functions?
```
let myFunction = () => { // do something }
```
