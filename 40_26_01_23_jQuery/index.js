$(document).ready(function() {
    // console.log('document ready');
    // var header = $('#header');
    // console.log(header);
    // var ul = $('ul');
    // console.log(ul.html());
    // console.log(ul.text());
    // var listElements = $('li');
    // console.log(listElements);
    listManipulation();
})

function listManipulation() {
    $('#header').html('<h1>Lista</h1>'); //menja samo sadrzaj
    //$('#header').replaceWith('<h1>Lista</h1>'); //menja ceo element, sklonice div
    $('li:last').remove(); //uklanja zadnji element iz liste
    $('#header h1').addClass('headerColor');

    $('li.active').prepend('Dan ');
    $('li.active').append('.');
    $('li:last').after('<li>Cetvrti</li>');

    //dodavanje lise u div #header, append = after
    // $('#header').after('<ul></ul>');
    // $('ul:first').append('<li>Jedan</li>');
    // $('ul:first').append('<li>Dva</li>');

    //dodavanje atributa
    var id = $('div').attr('id'); //vratice vrednost id-a
    var id1 = $('div').attr('id', 'newHeader');


    //uklanjanje atributa 
    //$('li.active').removeAttr('class');

    // $('li:last').addClass('active');
    // $('li:last').removeClass('active');

    
    //iterate over selected elements
    $('li').each(function(index, element) {
        console.log(element);
        if($(element).is('#active-item')) {
            $(element).css({'background-color' : 'yellow', 'color': 'green'})
        } else {
            $(element).css({'background-color' : 'green', 'color': 'yellow'});
        }
    })
}

function submitInput() {
    var inputValue = $('input').val();
    if($.isNumeric(inputValue)) {
        alert(`Vrednost broja je ${inputValue}`);
    } else {
        alert(inputValue);
    }
}