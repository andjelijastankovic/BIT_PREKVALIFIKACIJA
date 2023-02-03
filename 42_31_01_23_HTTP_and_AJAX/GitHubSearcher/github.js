$(document).ready(function() {
    
    var user = '';
    $('form').submit(function(event){
        event.preventDefault();
        
        var searchValue = $('#search').val();
        

        gitSearch(searchValue);

    });
});



function gitSearch(username) {
    
    $.get(`https://api.github.com/search/users?q=${username}in:user`,
    function(data) {
        console.log(data);

        data.items.forEach(item => {
            user = `<img src='${item.avatar_url}'><br><p>${item.login}</p>`;
            $('.showUsers').append(user);
        });
    })

    /*
    $('form').submit(function(event){
        
            var searchValue = $('#search').val();
            var request = $.ajax({
                url: 'https://api.github.com/search/users?q='+searchValue,
                method: 'GET'
            });

            request.done(function(response){
                $.each(response,function(index, element) {
                    console.log(element);
                })
            });

            request.fail(function(response){
                console.log('Ooops, something went wrong');
            });
        
    })
    */
    /*
    $('#search').on('keyup', function(event){
        if(event.key == 'Enter') {
            event.preventDefault();
            var searchValue = $('#search').val();
            var request = $.ajax({
                url: 'https://api.github.com/search/users?q='+searchValue,
                method: 'GET'
            });

            request.done(function(response){
                $.each(response,function(index, element) {
                    console.log(element);
                })
            });

            request.fail(function(response){
                console.log('Ooops, something went wrong');
            });
            
        }
    });
    */
    


    
}


