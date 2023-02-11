$(document).ready(function() {
    showInfo();
    showSeason();
    showCast()
});

function goToShow(someId) {
    // var endpoint = `https://api.tvmaze.com/shows/${someId}`;
    // $.ajax({
    //     method: 'GET',
    //     url: endpoint
    // }).done(function(response) {
    //     localStorage.setItem('showId', someId);
    // }).fail(function(response) {
    //     console.log(response);
    // })
    localStorage.setItem('showId', someId);
    window.location.assign('./showInfo.html');
}

var showId = localStorage.getItem('showId');

function showInfo() {
    var aboutShow = $('#aboutShow');
    var endpoint = `https://api.tvmaze.com/shows/${showId}`;

    $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response) {
        var title = $(`<h2> ${response.name} </h2>`);
        var img = $(`<img src='${response.image.original}'>`);
        var summary = $(`<h2>Show details</h2> ${response.summary}`);
        aboutShow.append(title);
        aboutShow.append(img);
        aboutShow.append(summary);
    }).fail(function(response) {
        console.log(response);
    })
}

function showSeason() {
    var aboutShow = $('#aboutShow');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/seasons`;

    $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response){
        var divSeason = $('<div></div>');
        divSeason.addClass('divSeason');
        divSeason.append(`<h2> Seasons (${response.length}) </h2>`);
        var list = $('<ul></ul>');
        $.each(response, function (index) { 
            list.append(`<li>Premiere date: ${response[index].premiereDate} | End date: ${response[index].endDate}</li>`);    
        });
        divSeason.append(list);
        aboutShow.append(divSeason);

    }).fail(function(response) {
        console.log(response);
    });
}

function showCast() {
    var aboutShow = $('#aboutShow');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/cast`;

    $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response){
        var limit10 = response.slice(0, 10);
        console.log(limit10);
        var divCast = $('<div></div>');
        divCast.addClass('divCast');
        divCast.append(`<h2>Cast</h2>`);
        var list = $('<ul></ul>');
        $.each(limit10, function (index) { 
            list.append(`<li>${limit10[index].person.name}</li>`);    
        });
        divCast.append(list);
        aboutShow.append(divCast);

    }).fail(function(response) {
        console.log(response);
    })
}
