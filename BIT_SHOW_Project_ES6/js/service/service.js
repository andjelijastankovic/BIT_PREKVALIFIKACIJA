export function getData(url) {
    return fetch(url).then(response=> {
        return response.json();
    });
}

export function getTop50(response) {
    let sortedRating = response.sort(function(a, b) {
        return b.rating.average - a.rating.average;
    });
    const top50 = sortedRating.slice(0, 50);
    return top50;
}

function getId(id) {
    localStorage.setItem('charId', id);
    location.assign('./show.html');
}

export function getShowId() {
    $('img').click((event) => {
        getId(event.currentTarget.id);
    });
}