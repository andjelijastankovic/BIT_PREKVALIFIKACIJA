import { getData, getTop50, getTop10 } from "./js/service/service.js";
import { getShowId } from "./js/service/getId.js";
import { popularShows, searchDropdown, controlDropdown, resetSearch, showNameImageSummary, seasonNumber, showSeasons, showCasts, showAKAs, showCrews, showEpisodes } from "./js/view/ui.js";
import { Aka } from "./js/entities/aka.js";
import { Cast } from "./js/entities/cast.js";
import { Crew } from "./js/entities/crew.js";
import { Episode } from "./js/entities/episode.js";
import { Season } from "./js/entities/season.js";
import { Show } from "./js/entities/show.js";

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
        top50.forEach(element => {
            const show = new Show(element.id, element.name, element.image.medium, element.summary);
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
            top10.forEach(element => {
                const show = new Show(element.show.id, element.show.name, element.show.image, element.show.summary);
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
    });
}

function showSeason() {
    getData(showSeasonApi).then(response => {
        let numberOfSeasons = response.length;
        seasonNumber(numberOfSeasons);
        response.forEach(element => {
            const season = new Season(element.premiereDate, element.premiereDate);
            showSeasons(season);
        });
    });
}

function showCast() {
    getData(showCastApi).then(response => {
        let top10 = response.slice(0, 10);
        top10.forEach(element => {
            const cast = new Cast(element.character.name, element.person.name);
            showCasts(cast);
        });
    });
}

function showAKA() {
    getData(showAKASApi).then(response => {
        let top5 = response.slice(0, 5);
        top5.forEach(element => {
            const aka = new Aka(element.name, element.country.name);
            showAKAs(aka);
        });
    });
}

function showCrew() {
    getData(showCrewApi).then(response => {
        let top5 = response.slice(0, 5);
        top5.forEach(element => {
            const crew = new Crew(element.person.name, element.type);
            showCrews(crew);
        });
    });
}

function showEpisode() {
    getData(episodesApi).then(response => {
        response.forEach(element => {
            const episode = new Episode(element.season, element.number, element.name, element.rating.average);
            showEpisodes(episode);
        });
    });
}

