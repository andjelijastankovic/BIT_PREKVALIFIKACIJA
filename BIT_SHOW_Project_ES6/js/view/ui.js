export function resetSearch() {
    $('#search').val('');
}

export function controlDropdown() {
    $('.drop').css('display', 'none');
    $('.drop').html('');
}

export function searchDropdown(show) {
    const drop = `<li id='${show.id}'> <a href='./show.html'>${show.name}</a> </li>`;
    $('.drop').append(drop);
    $('.drop').css('display', 'block');
}

export function popularShows(shows) {
    const show = `<div class='show'><img src='${shows.image}' id='${shows.id}'> <p>${shows.name}</p></div>`;
    $('.shows').append(show);
    $('#popularShows').append($('.shows'));
}

export function showNameImageSummary(show) {
    const title = $(`<h2>${show.name}</h2>`);
    $('.divTitle').append(title);
    const img = $(`<img src='${show.image}'>`);
    $('.imgDiv').append(img);

    $('.divImgSeasonCast').prepend($('.imgDiv'));
    const summary = $(`${show.summary}`);
    $('.divSummary').append(summary);
    $('#aboutShow').append($('.divTitle'));
    $('#aboutShow').append($('.divImgSeasonCast'));
    $('#aboutShow').append($('.divSummary'));
}

export function seasonNumber(number) {
    $('.divSeason > h2').append(` <span>(${number})</span>`);
}

export function showSeasons(season) {
    $('.seasonList').append(`<li>Premiere date: ${season.premiere} / End date: ${season.end}</li>`);
}

export function showCasts(cast) {
    $('.castList').append(`<li>${cast.person} (<span class='char'>${cast.character}</span>)</li>`);
}

export function showAKAs(aka) {
    $('.akasList').append(`<li>${aka.showName} <span>(${aka.countryName})</span></li>`);
}

export function showCrews(crew) {
    $('.crewList').append(`<li>${crew.name} <span>(${crew.role})</span></li>`);
}

export function showEpisodes(episode) {
    $('.episodesList').append(`<li>S${episode.sNum}E${episode.eNum}: ${episode.eName} (rating: ${episode.eRating})</li>`);
}