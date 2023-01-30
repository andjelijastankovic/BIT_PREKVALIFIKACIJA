/*
    Soccer player

    ○ Create page which has soccer field as bg image
    ○ In top left corner there should be image of soccer player
    ○ When user clicks anywhere on the field, the player is moved to that
    position
    ○ Add the button which is used to disable player movement
*/
var field = document.querySelector('div');
var btn = document.getElementById('btn');
function move() {
    var foot = document.getElementById('foot');
    var x = event.clientX;
    var y = event.clientY;

    foot.style.left = x + 'px';
    foot.style.top = y + 'px';
}

field.addEventListener('click', move);

function remove() {
    field.removeEventListener('click', move);
    btn.textContent = 'No more moving';
    btn.style.backgroundColor = 'red';
}