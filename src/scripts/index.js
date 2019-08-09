function Car (id,gaz) {
  this.carId = id;
  this.gaz = gaz;
  this.start = function() {
    console.log('start : ' + this.carId);
  };
  this.getGaz = () => this.gaz; 
}

let car = new Car(123,'90%');

car.start();

console.log(car.getGaz());

let car2 = new Car(4,'70%');

car2.start();

Car.prototype.stop = function () {
  console.log('Stop ' + this.carId);
};

car2.stop();


//  for arrow func this refers to original context
String.prototype.hello = _ => this.toString() + ' Hello';

String.prototype.hello2 = function() {
  return this.toString() + ' Hello';
};

console.log(' test1'.hello());
console.log(' test3'.hello2());

let hero = {
  id: 4,
  attack: 5,
  name: 'Dragon'
};

console.log(JSON.stringify(hero));

let heroes = [
  {id: 1},
  {id: 2},
  {id: 3}
  ];

console.log(JSON.stringify(heroes));

let jsonIn =
` 
  [
    {"id": 1},
    {"id": 2},
    {"id": 3}
  ]
`;

console.log(JSON.parse(jsonIn));
