$(document).ready(async function () {
    await showInfo();
    await showSeason();
    await showCast();
    await showAKAs();
    await showCrew();
    await showEpisodes();
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

function showAKAs() {
    var aboutShow = $('#aboutShow');
    var akaCrew = $('<div></div>');
    akaCrew.addClass('akaCrew');
    var ulAkas = $('<ul></ul>');

    var akas = $('<div></div>');
    akas.addClass('akas');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/akas`;
    return $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response) {
        var top5 = response.slice(0, 5);
        $.each(top5, function (index) { 
            var aka = `<li>${top5[index].name} <span>(${top5[index].country.name})</span></li>`;
            ulAkas.append(aka);
        });
        akas.prepend('<h2>AKA\'s</h2>');
        akas.append(ulAkas);
        akaCrew.prepend(akas);
        akaCrew.insertAfter(aboutShow);
    }).fail(function(response) {
        console.log(response);
    })
}

function showCrew() {
    var akaCrew = $('.akaCrew');
    var crew = $('<div></div>');
    crew.addClass('crew');
    var ulCrew = $('<ul></ul>');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/crew`;

    return $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response) {
        var top10 = response.slice(0, 5);
        $.each(top10, function (index) { 
            var li = `<li>${response[index].person.name} <span>(${response[index].type})</span></li>`;
            ulCrew.append(li);
        });
        crew.prepend('<h2>Crew</h2>');
        crew.append(ulCrew);
        akaCrew.append(crew);
        
    }).fail(function(response) {
        console.log(response);
    })
}

function showEpisodes() {
    var akaCrew = $('.akaCrew');
    var episodes = $('<div></div>');
    episodes.addClass('episodes');
    var ulEp = $('<ul></ul>');
    var endpoint = `https://api.tvmaze.com/shows/${showId}/episodes`;

    return $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response) {
        $.each(response, function (index) { 
            var li = `<li>S${response[index].season}E${response[index].number}: ${response[index].name}</li>`;
            ulEp.append(li);
        });
        episodes.prepend('<h2>Episodes</h2>');
        episodes.append(ulEp);
        episodes.insertAfter(akaCrew);
    }).fail(function(response) {
        console.log(response);
    })

}

