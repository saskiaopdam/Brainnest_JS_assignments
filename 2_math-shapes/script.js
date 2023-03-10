// 1. get diagonal of a square

function getDiagonalOfSquare(sideLength) {
    const diagonal = sideLength * Math.sqrt(2);
    console.log(`The diagonal of a square with a sidelength of ${sideLength} is ${diagonal}.`)
    return diagonal;
};

getDiagonalOfSquare(9);

// 2. get area of a triangle

function getAreaOfTriangle(sideA, sideB, sideC) {
    // calculate the semiparameter
    const s = (sideA + sideB + sideC) / 2;
    
    // calculate the area
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    console.log(`The area of a triangle with sidelengths of ${sideA}, ${sideB} and ${sideC} is ${area}.`)
    return area;
};

getAreaOfTriangle(5, 6, 7);

// 3. get circumference of a circle

function getCircumferenceOfCircle(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference of a circle with a radius of ${radius} is ${circumference}.`)
    return circumference;
};

getCircumferenceOfCircle(4);

// 3. get area of a circle

function getAreaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area of a circle with a radius of ${radius} is ${area}.`)
    return area;
};

getAreaOfCircle(4);