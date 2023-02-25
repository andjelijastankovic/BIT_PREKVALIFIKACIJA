$(document).ready(function() {
    const id = localStorage.getItem('charId');
    info(id);
})

const info = (someId) => {
    let api = `https://rickandmortyapi.com/api/character/${someId}`;
    fetch(api).then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
        let char = $('<div></div>').attr('class', 'singleChar');
        char.append(`<img src= '${response.image}' class='charImg'>`);
        char.append(`<h3>${response.name}</h3>`);
        char.append(`
            <p> Species: ${response.species}</p>
            <p> Gender: ${response.gender}</p>
            <p> Location: ${response.location.name}</p>
        `);

        $(document.body).append(char);
    });
}
