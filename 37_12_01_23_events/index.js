var button2 = document.getElementById('button2');
button2.onclick = function() {
    alert('second button clicked');
}

function onFirstButtonClick() {
    alert('first button clicked');
}

button2.addEventListener('click', function () {
    alert('event handler 2');
});

function clickMe(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.clientX);
}