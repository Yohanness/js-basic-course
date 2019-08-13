import { Human } from './models/human';

// Conventoin to use '$' for jquery
import $ from 'jquery';

let heroes = [
    { id: 1, type: 'dragon' },
    { id: 2, type: 'canon' },
    { id: 3, type: 'aigle' },
    { id: 4, type: 'canon' },
    { id: null, type: 'elf' }
];
let human = new Human(2);
console.log(human.identify(' name : jojo'));


// Start HTTP module

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    // Not practical to work directly with xhr as we need to know 
    // specific status codes, better to use lib instead like jquery
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open("GET", "https://5d534181da4ffa0014a0f2a1.mockapi.io/api/v1/users", true);
xhttp.send();

// jquery 

$.get("https://5d534181da4ffa0014a0f2a1.mockapi.io/api/v1/users",
    data => console.log('data: ', data)
);

//not the best, 2nd for jquery :
let promise = $.get("https://5d534181da4ffa0014a0f2a1.mockapi.io/api/v1/users");

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);

// POST
let user = {
    name: 'Jojo LB',
    avatar: 'jojo.jpg'
};

let promisePost = $.post("https://5d534181da4ffa0014a0f2a1.mockapi.io/api/v1/users", user);

promisePost.then(
    data => console.log('success POST : ', data),
    error => console.log('error POST : ', error)
);
