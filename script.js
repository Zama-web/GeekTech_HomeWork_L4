
const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const send = document.getElementById('send');
const rootElem = document.getElementById('root');

xhr.open('GET', url); // Начало
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status <= 204) {
        getUsers(xhr.response);
    } else if (xhr.status >= 400 & xhr.status <= 418) {
        alert('Ошибка' + xhr.status);
    }
}

xhr.send(); // Конец

function getUsers(data) {

    for (let i = 0; i < data.length; i++) {

        const user = data[i];

        let cardElem = document.createElement('div');
        let liName = document.createElement('p');
        let liUsername = document.createElement('p');
        let liEmail = document.createElement('p');

        cardElem.classList.add('card');
        liName.innerText = user.name;
        liUsername.innerText = user.username;
        liEmail.innerText = user.email;

        cardElem.appendChild(liName);
        cardElem.appendChild(liUsername);
        cardElem.appendChild(liEmail);

        rootElem.appendChild(cardElem);
    }
}
