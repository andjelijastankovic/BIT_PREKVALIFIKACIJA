$(document).ready(function() {
    searchList();
})

$(document).click(function() {
    $('.drop').css('display', 'none');
    $('.drop').html('');
    $('#search').val('');
});

function searchList() {
    $('#search').keyup(function(event) {
        $('.drop').html('');
        $('.drop').css('display', 'none');
            //event.preventDefault();
            var search = encodeURIComponent($('#search').val());
            var endpoint = `http://api.tvmaze.com/search/shows?q=${search}`;
            $.ajax({
                method: 'GET',
                url: endpoint
            }).done(function(response) {
                var top10 = response.slice(0, 10);

                $.each(top10, function (index) { 
                    var drop = `
                        <li onclick='goToShow(${top10[index].show.id})'> <a href='./showInfo.html'>${top10[index].show.name}</a> </li>
                    `;
                    $('.drop').append(drop);
                    $('.drop').css('display', 'block');
                });
                

            }).fail(function(response) {
                console.log(response);
            })
    })
}

function goToShow(someId) {
    localStorage.setItem('showId', someId);
    window.location.assign('./showInfo.html');
}