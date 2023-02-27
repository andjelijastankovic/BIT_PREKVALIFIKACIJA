export const pagination = () => {
    let current = 1;
    const paginationDiv = $('.pagination');
    let pages = localStorage.getItem('numberOfPages');
    //let numberOfPages = 5;
    for (let i = current; i <= pages; i++) {
        paginationDiv.append(`<button value=${i} class='pag'>${i}</button>`);
    }

    $('.pag').click(function () {
        current = Number($(this).val());
        fetch(`https://rickandmortyapi.com/api/character/?page=${current}`).then(response => {
            return response.json();
        }).then(response => {
            const charactersDiv = $('.characters');
            charactersDiv.html('');
            response.results.forEach(element => {
                var char = `<div class='character'>
                    <img src ='${element.image}' onclick='getId(${element.id})'>
                    <p>${element.name}</p>
                    <button>Like</button>
                </div>`;
                charactersDiv.append(char);
            });
        })
    })
}