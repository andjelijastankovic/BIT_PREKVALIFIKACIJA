/* 
    Create Super Mario emulator
    ○ On right arrow click, Mario should run to the right
    ■ Running animation
    ■ Ground should move while Mario is running
*/

var ground = document.querySelector('div');
var mario = document.getElementById('mario');

document.onkeydown = function (event) {
  if (event.keyCode == 39) {
    mario.src = './mario_running.gif';
  } else {
    mario.src = './mario.png';
  }
};

