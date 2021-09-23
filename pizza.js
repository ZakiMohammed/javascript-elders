const Circle = require("./circle");

// pizza nerd

const pizza = { radius: 4 };

// call
const fullPizza = Circle.prototype.area.call(pizza);
const slice = Circle.prototype.areaOfSector.call(pizza, 45);

// apply
// const fullPizza = Circle.prototype.area.apply(pizza);
// const slice = Circle.prototype.areaOfSector.apply(pizza, [45]);

// bind
// const area = Circle.prototype.area.bind(pizza);
// const areaOfSlice = Circle.prototype.areaOfSector.bind(pizza);

// const fullPizza = area();
// const slice = areaOfSlice(45);

// print
console.log(`Full Pizza: ${fullPizza.toFixed(2)}`)
console.log(`Slice: ${slice.toFixed(2)}`)

// Full Pizza: 50.27
// Slice: 6.28