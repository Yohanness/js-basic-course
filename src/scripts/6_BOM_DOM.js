import { Human } from './models/human';

// For info : https://developer.mozilla.org/en-US/docs/Web/API/Location

// Window  > BOM
// Document > DOM

//year = 1956;


// console.log(window.year);

console.log(window.innerWidth);
console.log(innerWidth);


let intervalId = setInterval(() => {
  console.log('every 1sec');
}, 1000);


let timeoutId = setTimeout(() => {
  console.log('7 sec passed - stop timer');
  clearInterval(intervalId);
}, 7000);
console.log(timeoutId);

// clearTimeout(timeoutId);


console.log(window.location.hostname);
console.log(window.location.href);
// Show params in URL like ?useApi=true
console.log(window.location.search);


console.log(document.body);
console.log(document.links);
// document.onClick ...

let element = document.getElementById('first');

element.textContent = 'New content for 1st paragraph';
element.setAttribute('foo', 'fooVal');
element.classList.add('p2');
element.style.color = 'blue';
console.log(element);
