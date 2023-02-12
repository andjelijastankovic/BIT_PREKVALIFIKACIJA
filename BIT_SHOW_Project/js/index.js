$(document).ready(function() {
    popularShows();
});

function popularShows() {
    var endpoint = 'http://api.tvmaze.com/shows';
    $.ajax({
        method: 'GET',
        url: endpoint
    }).done(function(response) {
        var sortedRating = response.sort(function(a, b) {
            return b.rating.average - a.rating.average;
        });
        var top50 = sortedRating.slice(0, 50);
        
        var sectionShows = $('#popularShows');
        var showDivs = $('<div></div>');
        showDivs.addClass('shows');
        var show = '';
        $.each(top50, function (index) { 
            show += `<div class='show' ><img src='${top50[index].image.medium}' onclick='goToShow(${top50[index].id})'> <p>${top50[index].name}</p></div>`;
        });
        
        showDivs.append(show);
        sectionShows.append('<h2>Popular shows</h2>');
        sectionShows.append(showDivs);

    }).fail(function(response){
        console.log(response);
    })
}

function goToShow(someId) {
    localStorage.setItem('showId', someId);
    window.location.assign('./showInfo.html');
}