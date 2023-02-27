import { pagination } from "./pagionation.js";

$(document).ready(function() {
    characters();
    pagination();
});

const characters = () => {
    const api = 'https://rickandmortyapi.com/api/character';
    fetch(api).then(response => {
        return response.json();
    }).then(response => {
        const pages = response.info.pages;
        localStorage.setItem('numberOfPages', pages);
        const charactersDiv = $('.characters');
        response.results.forEach(element => {
            var char = `<div class='character'>
                <img src ='${element.image}' onclick='getId(${element.id})'>
                <p>${element.name}</p>
                <button>Like</button>
            </div>`;
            charactersDiv.append(char);
        });
    }).catch(error => {
        console.log(error.message);
    })
}

const getId = (id) => {
    localStorage.setItem('charId',id);
    location.assign('./charPage.html');
}