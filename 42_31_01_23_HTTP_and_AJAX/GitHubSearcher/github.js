$(document).ready(function() {
    
    var user = '';
    $('form').on('keypress',function(event){
        if(event.keyCode === 13) {
            var searchValue = $('#search').val();
            gitSearch(searchValue);
            event.preventDefault();
        }

    });

    $('#search').change(function(event){
        if(event.keyCode === 13) {
            var search = $('#search').val();

            gitSearch(search);
        }
    })
});

function userProfile(login) {
    localStorage.setItem('login', login);
    window.location.assign('./user.html');
}

function gitSearch(username) {
    $('.showUsers').empty();
    $.ajax({
        method: 'GET',
        url: `https://api.github.com/search/users?q=${username}in:user`
    }).done(function(response) {
        var items = response.items;
        console.log(items);
        $.each(items, function (i) {

            var user = `<div class='grid-item' onclick='userProfile("${items[i].login}")'><img src='${items[i].avatar_url}'> <p>${items[i].login}</p></div>`;
            $('.showUsers').append(user);
        });
    })
}