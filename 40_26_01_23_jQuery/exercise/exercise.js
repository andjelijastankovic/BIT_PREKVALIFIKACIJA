$(document).ready(function() {
    //console.log('hello world');

    $('li:first').css('border-bottom', '1px solid red');
    $('li').css('text-transform', 'uppercase');
    $('li.active').css('color', 'red');

    //$('li:eq(1)').css('background-color', 'green');
    var lengthLi = $('ul li').length;
    var middle = Math.floor(lengthLi / 2);
    $("li:eq("+middle+")").css('background-color', 'green');

})