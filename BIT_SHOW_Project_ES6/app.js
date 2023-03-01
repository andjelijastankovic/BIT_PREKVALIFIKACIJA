import { getData, getShowId, getTop50, getTop10 } from "./js/service/service.js";
import { popularShows, searchDropdown, controlDropdown, resetSearch, showNameImageSummary, seasonNumber, showSeasons, showCasts, showAKAs, showCrews, showEpisodes } from "./js/view/ui.js";
import { Show, Season, Cast, Aka, Crew, Episode } from "./js/entities/showClasses.js";

var showId = localStorage.getItem('showId');
const showsApi = 'http://api.tvmaze.com/shows';
const searchApi = 'http://api.tvmaze.com/search/shows?q=';
const showInfoApi = `https://api.tvmaze.com/shows/${showId}`;
const showSeasonApi = `https://api.tvmaze.com/shows/${showId}/seasons`;
const showCastApi = `https://api.tvmaze.com/shows/${showId}/cast`;
const showAKASApi = `https://api.tvmaze.com/shows/${showId}/akas`;
const showCrewApi = `https://api.tvmaze.com/shows/${showId}/crew`;
const episodesApi = `https://api.tvmaze.com/shows/${showId}/episodes`;

$(document).ready(function() {
    allShows();
    search();
    showInfo();
    showSeason();
    showCast();
    showAKA();
    showCrew();
    showEpisode();
});

$(document).click(function() {
    controlDropdown();
    resetSearch();
});

function allShows() {
    getData(showsApi).then(response => {
        const top50 = getTop50(response);

        $.each(top50, function (i) { 
            const show = new Show(response[i].id, response[i].name, response[i].image.medium, response[i].summary);
            popularShows(show);   
        });

        getShowId('img');
    });
}

function search() {
    $('#search').keyup(function(event) {
        let searchValue = encodeURIComponent($('#search').val());
        let api = searchApi.concat(searchValue);
        getData(api).then(response => {
            controlDropdown();
            const top10 = getTop10(response);

            $.each(top10, function(i) {
                let image = top10[i].show.image;
                if(image == null) {
                    image = 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
                }
                const show = new Show(top10[i].show.id, top10[i].show.name, image, top10[i].show.summary);
                searchDropdown(show);
            });

            getShowId('li');
        });
    });
}

function showInfo() {
    getData(showInfoApi).then(response => {
        const show = new Show(response.id, response.name, response.image.original, response.summary);
        showNameImageSummary(show);
    })
}

function showSeason() {
    getData(showSeasonApi).then(response => {
        let numberOfSeasons = response.length;
        seasonNumber(numberOfSeasons);
        $.each(response, function (i) {
            if(response[i].premiereDate == null) {
                response[i].premiereDate = 'Unknown date';
            } 
            if(response[i].premiereDate == null) {
                response[i].premiereDate = 'Unknown date';
            } 
            const season = new Season(response[i].premiereDate, response[i].premiereDate);
            showSeasons(season, numberOfSeasons);
        });
    })
}

function showCast() {
    getData(showCastApi).then(response => {
        let top10 = response.slice(0, 10);
        $.each(top10, function (i) { 
            const cast = new Cast(response[i].character.name, response[i].person.name);
            showCasts(cast);
        });
    })
}

function showAKA() {
    getData(showAKASApi).then(response => {
        let top5 = response.slice(0, 5);
        $.each(top5, function (i) {
            const aka = new Aka(response[i].name, response[i].country.name);
            showAKAs(aka);
        });
    })
}

function showCrew() {
    getData(showCrewApi).then(response => {
        let top5 = response.slice(0, 5);
        $.each(top5, function(i) {
            const crew = new Crew(response[i].person.name, response[i].type);
            showCrews(crew);
        })
    })
}

function showEpisode() {
    getData(episodesApi).then(response => {
        $.each(response, function (i) { 
            const episode = new Episode(response[i].season, response[i].number, response[i].name, response[i].rating.average);
            showEpisodes(episode);
        });
    })
}

