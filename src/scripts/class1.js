
console.log('Hello World!!!!!');

let carIds = [1, 2, 5, 10];

let [car1, car2, car3] = carIds;

let car4, remainCars;

[car4, ...remainCars] = carIds;

console.log(car1, car2, car3);

console.log(car4, remainCars);

function sendCars(day, ...allCarIds) {
    allCarIds.forEach(id => console.log(id));
}

sendCars('Monday');


let car = { id: 5000, style: 'convertible' };
let id, style;

({ id, style } = car);

console.log(id, style);

function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3, rest);
}
let carCodes = 'abcdef';
startCars(...carIds);
startCars(...carCodes);

console.log(typeof (null));
console.log(typeof (function () { }));
let a = typeof ('Hello');
console.log(a);

console.log(Number.parseFloat('43.5'));

let i = 0;
for (; i < 3; i++) {
    if (i === 1) {
        continue;
    }
    console.log(i);
    if (i === 2) {
        break;
    }
}
console.log(i);
