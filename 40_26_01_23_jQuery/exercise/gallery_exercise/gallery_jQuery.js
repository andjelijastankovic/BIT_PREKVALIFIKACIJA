$(document).ready(function() {
    /*
        Start with a blank HTML page
        Using just JS (jQuery), create an image gallery
        All links to images in the gallery should be 
        elements of the same array!
        When the gallery is created and visible on the page, 
        create gallery title and
        insert it before the gallery images
        Go through gallery images and set a random size to 
        each gallery image
    */

    $('body').prepend('<div></div>');
    $('div').addClass('imagesDiv');
    $('.imagesDiv').css('background-color', 'rgb(245,245,245)');
    $('.imagesDiv').html('<h1>Amazing Gallery</h1>');
    $('h1').css({'text-align' : 'center', 'color' : 'red'});

    var images = ['<img src="./1.jpg">', '<img src="./2.jpg">', '<img src="./3.jpg">', 
    '<img src="./4.jpg">', '<img src="./5.jpg">', '<img src="./6.jpg">', '<img src="./7.jpg">'];
    

    $.each(images, function(index, element) {
        $('.imagesDiv').append(element);
    })

    $('img').each(function(index, element) {
        var randWidth = Math.floor(Math.random() * (500 - 200)) + 200;
        $(element).css('width', randWidth + 'px');
    })
})