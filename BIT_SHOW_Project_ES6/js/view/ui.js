export function resetSearch() {
    $('#search').val('');
}

export function popularShows(shows) {  
    let show = `<div class='show'><img src='${shows.image}' id='${shows.id}'> <p>${shows.name}</p></div>`;
    $('.shows').append(show);
    $('#popularShows').append($('.shows'));
}

export function controlDropdown() {
    $('.drop').css('display', 'none');
    $('.drop').html('');
}

export function searchDropdown(show) {
    let drop = `<li id='${show.id}'> <a href='./show.html'>${show.name}</a> </li>`;
    $('.drop').append(drop);
    $('.drop').css('display', 'block');
}