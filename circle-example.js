const Circle = require('./circle')

const circle = new Circle(3);

console.log('Area:', circle.area());
console.log('Circumference:', circle.circumference());
console.log('Diameter:', circle.diameter());
console.log('Area of Sector:', circle.areaOfSector(60));
console.log('Length of Arc:', circle.lengthOfArc(60));

// Area: 28.274333882308138
// Circumference: 18.84955592153876
// Diameter: 6
// Area of Sector: 4.71238898038469
// Length of Arc: 3.141592653589793