import { getData, getShowId, getTop50 } from "./js/service/service.js";
import { popularShows } from "./js/view/ui.js";
import { Show } from "./js/entities/showClass.js";

const shows = 'http://api.tvmaze.com/shows';

$(document).ready(function() {
    allShows();
});

function allShows() {
    getData(shows).then(response => {
        const top50 = getTop50(response);

        $.each(top50, function (i) { 
            const show = new Show(response[i].id, response[i].name, response[i].image.medium, response[i].summary);
            popularShows(show);   
        });

        getShowId();
    });
}