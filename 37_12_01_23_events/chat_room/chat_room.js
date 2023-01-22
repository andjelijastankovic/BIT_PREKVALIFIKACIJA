function chat() {
    var divForMessages = document.querySelector('.show_messages');
    var message = document.querySelector('.message');
    divForMessages.innerHTML += `<p>${message.value}</p>`;
}