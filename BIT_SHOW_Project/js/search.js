$(document).ready(function() {
    searchList();
})

function searchList() {
    $('#search').keypress(function(event) {
        $('.drop').css('display', 'none');
        if(event.key == 'Enter') {
            event.preventDefault();
            var search = encodeURIComponent($('#search').val());
            var endpoint = `http://api.tvmaze.com/search/shows?q=${search}`;
            $.ajax({
                method: 'GET',
                url: endpoint
            }).done(function(response) {
                var drop = '';
                for(var i = 0; i <= 9; i++) {
                    drop += `<div onclick='goToShow(${response[i].show.id})'>
                        <li> <a href='./showInfo.html'>${response[i].show.name}</a> </li>
                    </div>`;
                }
                $('.drop').append(drop);
                $('.drop').css('display', 'block');
                /*
                var top10 = response.slice(0, 10);

                $.each(top10, function (index) { 
                    var showName = top10[index].show.name;
                    var drop = `<div onclick='goToShow(${top10[index].show.id})'>
                        <li> <a href='./showInfo.html'>${showName}</a> </li>
                    </div>`;
                    $('.drop').append(drop);
                    $('.drop').css('display', 'block');
                });
                */

            }).fail(function(response) {
                console.log(response);
            })
        }
    })
}