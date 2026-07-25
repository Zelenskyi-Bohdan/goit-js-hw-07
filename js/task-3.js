'use strict'

function addNameInTheGreeting() {
    if (input.value === '' || input.value.trim() === '') {
        return title.textContent;
    }

    return span.textContent = input.value.trim();
};

const input = document.querySelector('#name-input');
input.addEventListener('input', addNameInTheGreeting);
const title = document.querySelector('h1');
const span = document.querySelector('#name-output');