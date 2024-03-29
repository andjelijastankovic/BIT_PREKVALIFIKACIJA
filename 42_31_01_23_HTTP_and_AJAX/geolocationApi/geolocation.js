/* 
    XML
    Use Geolocation API service
    You can find the documentation for this API at
    https://www.geoplugin.com/webservices/xml
    Check out the documentation to see how to use this API
    Create a function which is sending request via AJAX and getting data in XML format
    When data is received from the server, extract country name which is detected based on
    IP address, and show it on the screen.
    
    Extra:
    There is a button and input field on HTML page!
    Each time user clicks the button, function for getting geolocation data is invoked and
    new ip address written in input field is used when sending request.

*/
$(document).ready(function () {
    showGeolocation();
})

function showGeolocation() {
    $('#btn').on('click', function(){

        var request = new XMLHttpRequest();
        var ipValue = $('#ip').val();
        request.open('GET', `http://www.geoplugin.net/xml.gp?ip=${ipValue}`);

        request.onload = function() {
            var response = request.responseXML;
            var countryName = response.querySelector('geoplugin_countryName');
            console.log(countryName);
            $('#geo').append(countryName);
        }

        request.send();
    });
}

/*
function showGeolocation() {
    var request = new XMLHttpRequest();
    request.open('GET', 'geolocation.xml', false);

    request.onload = function(event) {
        var response = request.responseXML;
        var countryName = response.querySelector('geoplugin_countryName');
        console.log(countryName);
        $('#geo').append(countryName);
    }

    request.send();
    
}
*/