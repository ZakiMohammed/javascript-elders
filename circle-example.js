const Circle = require('./circle')

const circle = new Circle(3);

console.log('Area:', circle.area());
console.log('Circumference:', circle.circumference());
console.log('Diameter:', circle.diameter());
console.log('Area of Sector:', circle.areaOfSector(60));
console.log('Length of Arc:', circle.lengthOfArc(60));