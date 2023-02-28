var sectionShows = $('#popularShows');
var showDivs = $('<div></div>').attr('class', 'shows');

export function popularShows(shows) {  
    let show = `<div class='show'><img src='${shows.image}' id='${shows.id}'> <p>${shows.name}</p></div>`;
    showDivs.append(show);
    sectionShows.append(showDivs);
}