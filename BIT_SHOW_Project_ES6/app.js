import { getData, getShowId, getTop50, getTop10 } from "./js/service/service.js";
import { popularShows, searchDropdown, controlDropdown, resetSearch } from "./js/view/ui.js";
import { Show } from "./js/entities/showClass.js";

const shows = 'http://api.tvmaze.com/shows';
const searchApi = 'http://api.tvmaze.com/search/shows?q=';

$(document).ready(function() {
    allShows();
    search();
});

$(document).click(function() {
    controlDropdown();
    resetSearch();
});

function allShows() {
    getData(shows).then(response => {
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