/*
    done - Gallery contains six pictures
    done - At least one of the pictures should have width of 300px
    done - Add event listeners to all images on page
    done - User can click on image and in that moment image will get 1px red border
    If Image width is not 300px event propagation should be stopped!
    done - Register event listener on document object, which listen for clicks 
    done - When click occurs it should print in console on which element user clicked
*/
var images = document.querySelectorAll('img');

function width(element) {
    this.style.border = '2px solid red';
    if(this.width != 300) {
        element.stopPropagation();
    }
}

function whatIsClicked(element) {
    console.log(element.target.tagName);
}

images.forEach(element => {
    element.addEventListener('click', width);
});

document.addEventListener('click', whatIsClicked);







