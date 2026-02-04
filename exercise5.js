const vehicle = {
 wheels: 4,
 describe() {
 return `This vehicle has ${this.wheels} wheels`;
 }
};

const car = Object.create(vehicle);

car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;

// Call inherited method
console.log(car.describe());

console.log(Object.hasOwn(car, 'make')); // true
console.log(Object.hasOwn(car, 'wheels')); // false
console.log(car.wheels); // 4 (from prototype)
console.log(car.describe()); 