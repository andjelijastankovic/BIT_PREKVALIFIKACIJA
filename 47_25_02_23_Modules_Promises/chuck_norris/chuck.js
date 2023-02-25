/* 
    Create a function which is sending request using fetch and getting data in JSON format
    When data is received from the server, extract joke text, then create paragraph and add
    it to html page.
    There is a button on HTML page!
    Each time when user click the button this function for getting a new joke and that joke
    to the page.
*/
$(document).ready(function() {
    $('button').on('click', randomJoke);
});

function randomJoke() {
    $('p').html('');
    const api = 'https://api.chucknorris.io/jokes/random';

    var jokePromise = fetch(api).then(response => {
        return response.json();
    }).then(response => {
        const body = $('body');
        body.prepend(`<p>${response.value}</p>`);
        console.log(response);
    })
}