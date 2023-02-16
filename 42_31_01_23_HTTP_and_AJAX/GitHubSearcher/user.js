/* 
    When showing repository you should present:
    ● Repository name response.name
    ● Repository image, or some placeholder if there is no picture response.avatar_uel
    ● Description response.description
    ● Number of stars response.stargazers_count
    API documentation for GitHub repositories: https://developer.github.com/${login}/repos/
    Extra:
    For each repository show used languages on that repository
*/
$(document).ready(function() {
    repo();
});

var login = localStorage.getItem('login');

function repo() {
    $.ajax({
        method: 'GET',
        url: `https://api.github.com/users/${login}/repos`
    }).done(function(response) {
        $.each(response, function (i) {
            if(response[i].description == null) {
                response[i].description = 'No description provided for this repo'; 
            } 

            var repo = `<div class='grid-item'> 
                <h4>${response[i].name}</h4> 

                <img src='https://cdn-icons-png.flaticon.com/512/2111/2111612.png'>

                <p style='text-align: center;'>${response[i].description}</p>
                <p style='text-align: center;'> Number of stars: ${response[i].stargazers_count} </p>
            </div>`; 
            $('.showRepo').append(repo);           
        });
    })
}

