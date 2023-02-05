$(document).ready(function() {
    setValue();
});

function setValue() {
    var value = '';
    $('select option:selected').each(function() {
        value = $(this).text();
    })

    $('div').text(value);
}

$('select').change(setValue);

$('select').on('click', function(event) {
    var div = $('div');
    var height = '';
    var width = '';
    if (div.height() > 150) {
        height = '-=50px';
        width = '-=50px'
    } else {
        height = '+=50px';
        width = '+=50px';
    }

    div.animate({height: height, width: width}, 300, console.log('moved for ' + height))
})