import { Human } from './models/human';

let heroes = [
  { id: 1, type: 'dragon' },
  { id: 2, type: 'canon' },
  { id: 3, type: 'aigle' },
  { id: 4, type: 'canon' },
  { id: null, type: 'elf' }
];

let human = new Human(1);

console.log(human);

