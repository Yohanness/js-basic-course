import { Human } from './models/human';
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

// Start forms

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let userError = document.getElementById('user-error');
    let avatarFile = form.elements['avatar-file'];

    console.log(user.value, avatarFile.value);

    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    };

    if (user.value.length < 4) {
        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.style.borderColor = 'red';
        user.focus();

    } else {
        let promise = $.post("https://5d534181da4ffa0014a0f2a1.mockapi.io/api/v1/users", posting);
        promise.then(
            data => console.log('success POST : ', data),
            error => console.log('error POST : ', error)
        );
    }

    // prevent the browser from submitting the form
    event.preventDefault();
});
