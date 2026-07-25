'use strict'

const input = document.querySelector('#name-input');
input.addEventListener('input', addNameInTheGreeting);
const title = document.querySelector('h1');
const span = document.querySelector('#name-output');

function addNameInTheGreeting() {
    if (input.value === '' || input.value.trim() === '') {
        return span.textContent = 'Anonymous';
    }

    return span.textContent = input.value.trim();
};