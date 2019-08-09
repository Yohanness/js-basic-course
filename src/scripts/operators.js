


let a, b;
a = 2;
b = '2';
if (a === b) {
    console.log('eq');
}


console.log(1 === true);


let var1, var2;

var1 = 2;
var2 = '10';

console.log(++var1);
console.log(var1++);
console.log(var1);
console.log(typeof (var2));
console.log(typeof (+var2));

let userSettings = null;
let defaultSettings = { name: 'jojo' };
console.log(userSettings || defaultSettings);
if (!userSettings) {
    userSettings = { name: 'jojo', age: '30' };
}
console.log(userSettings || defaultSettings);

let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(true);
} else {
    console.log(false);
}

let foo = 4;
console.log(foo > 5 ? true : false);

foo >>= 1;

console.log(foo);
