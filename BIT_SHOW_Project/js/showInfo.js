$(document).ready(async function () {
    await showInfo();
    await showSeason();
    await showCast();
});


var showId = localStorage.getItem('showId');

function showInfo() {
    var aboutShow = $('#aboutShow');
    var endpoint = `https://api.tvmaze.com/shows/${showId}`;

    return $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function (response) {
        var divTitle = $('<div></div>');
        divTitle.addClass('divTitle');
        var title = $(`<h2>${response.name}</h2>`);
        divTitle.append(title);

        var divImgSeasonCast = $('<div></div>');
        divImgSeasonCast.addClass('divImgSeasonCast');

        var divImg = $('<div></div>');
        divImg.addClass('imgDiv');
        var img = $(`<img src='${response.image.original}'>`);
        divImg.append(img);
        divImgSeasonCast.append(divImg);
        var divSummary = $('<div></div>');
        divSummary.addClass('divSummary');
        var summary = $(`<h2>Show details</h2> ${response.summary}`);
        divSummary.prepend(summary);
        aboutShow.append(divTitle);
        aboutShow.append(divImgSeasonCast);
        aboutShow.append(divSummary);


    }).fail(function (response) {
        console.log(response);
    })
}

function showSeason() {
    var aboutShow = $('#aboutShow');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/seasons`;

    return $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function (response) {
        var divImgSeasonCast = $('.divImgSeasonCast');
        var divSeasonCast = $('<div></div>');
        divSeasonCast.addClass('divSeasonCast');
        var divSeason = $('<div></div>');
        divSeason.addClass('divSeason');
        divSeason.append(`<h2> Seasons (${response.length}) </h2>`);
        var list = $('<ul></ul>');
        $.each(response, function (index) {
            list.append(`<li>Premiere date: ${response[index].premiereDate} / End date: ${response[index].endDate}</li>`);
        });
        divSeason.append(list);
        divSeasonCast.prepend(divSeason);
        divImgSeasonCast.append(divSeasonCast);
        aboutShow.append(divImgSeasonCast);

    }).fail(function (response) {
        console.log(response);
    });
}

function showCast() {
    var divImgSeasonCast = $('.divImgSeasonCast');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/cast`;

    return $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function (response) {
        var limit10 = response.slice(0, 10);
        var divSeasonCast = $('.divSeasonCast');
        var divCast = $('<div></div>');
        divCast.addClass('divCast');
        divCast.append(`<h2>Cast</h2>`);
        var list = $('<ul></ul>');
        $.each(limit10, function (index) {
            list.append(`<li>${limit10[index].person.name} (<span class='char'>${limit10[index].character.name}</span>)</li>`);
        });
        divCast.append(list);
        divSeasonCast.append(divCast);
        divImgSeasonCast.append(divSeasonCast);
        //aboutShow.append(divCast);

    }).fail(function (response) {
        console.log(response);
    })
}
