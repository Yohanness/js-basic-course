import { Human } from './models/human';

let heroes = [
    { id: 1, type: 'dragon' },
    { id: 2, type: 'canon' },
    { id: 3, type: 'aigle' },
    { id: 4, type: 'canon' },
    { id: null, type: 'elf' }
];
let human = new Human(2);
console.log(human.identify(' name : jojo'));

// Start security

// Should not use global variables and store codes & secrets
window.foo = 'Secret Code';

//let inputString = "alert('Hello');";
// do not use eval
//eval(inputString);

// Prevent Man in the middle attacks :
  // Use SSL
  // Use HTTP Header : Strict Transport Security
  // Use cookies attributes: Secure and HttpOnly

// XSS attacks
  // CSP
  // CORS Use http header

