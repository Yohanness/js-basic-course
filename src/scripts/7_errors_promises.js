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

try {
    let elf = newElf;
} catch (error) {
    console.log(error);
} finally {
    console.log('this always exec');
}
console.log('continue...');


try {
    throw new Error('My error custom');
} catch (error) {
    console.log(error);
} finally {
    console.log('this always exec');
}

// Promises

let promise = new Promise(
    function(resolve, reject) {
        // Call func resolve() after 100msec and pass arg some value
        setTimeout(resolve, 2000,'resolve this');
        // setTimeout(reject, 1000,'reject now');
    }
);
promise.then(
    value => console.log('fulfilled: ' + value),
    error => console.log('error: ' + error)
);
console.log(promise);
