export function getShowId(element) {
    $(element).click((event) => {
        const id = event.currentTarget.id;
        localStorage.setItem('showId', id);
        location.assign('./show.html');
    });
}