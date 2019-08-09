


function startCar(car) {
    let message = 'Starting...';
    let startfn = function turnKey() {
        //let message = 'override';
        console.log(message);
    };
    startfn();
    console.log(message);
}

startCar(123);
let message = 'out';
if (5 === 5) {
    let message = 'Equal';
}
console.log(message);

let app = (function () {
    let carId = 123;
    console.log('inside func');
    let sumToId = function (toAdd) {
        return carId + toAdd;
    };
    return { id: carId, sumToId: sumToId };
})();
console.log(app);
console.log(app.sumToId(5));
console.log(app.sumToId(8));

let o = {
    carId: 456,
    getId: function (prefix) {
        console.log('in o');
        return prefix + this.carId;
    }
};
console.log(o.getId(''));
console.log(o.getId(''));
console.log(o.getId(''));

let newCar = { carId: 789 };
console.log(o.getId.apply(newCar, ['ID : ']));

let newFn = o.getId.bind(newCar);
console.log(newFn(''));

let getId = (_ = 'id') => {

    return _ + 123;
};
console.log(getId());
