$(document).ready(function() {
    
    var user = '';
    $('form').on('keypress',function(event){
        if(event.keyCode === 13) {
            var searchValue = $('#search').val();
            gitSearch(searchValue);
            event.preventDefault();
        }

    });

    $('#search').change(function(){
        var search = $('#search').val();

        gitSearch(search);
    })
});



function gitSearch(username) {
    $('.showUsers').empty();

    $.get(`https://api.github.com/search/users?q=${username}in:user`,
    function(data) {
        console.log(data);
        data.items.forEach(item => {
            user = `<div class='grid-item'><a target='_blank' href='${item.html_url}'><img src='${item.avatar_url}'></a><p>${item.login}</p></div>`;
            $('.showUsers').append(user);
        });
    })
}

