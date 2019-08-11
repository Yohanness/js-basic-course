
import { Human } from './models/human';

let heroes = [
  { id: 1, type: 'dragon' },
  { id: 2, type: 'canon' },
  { id: 3, type: 'aigle' },
  { id: 4, type: 'canon' },
  { id: null, type: 'elf' }
];


class Hero {
  constructor() {
    this.type = 'elf';
  }
  move() {
    return `Moving: ${this.type}`;
  }
}

class Elf extends Hero {
  move() {
    return 'In Elf move() ' + super.move();
  }
}

let elf = new Elf();
console.log(elf.type); 
console.log(elf.move()); 



let human = new Human(1);

human.id = 4;
console.log(human);
console.log(human.identify(' !!!!'));
