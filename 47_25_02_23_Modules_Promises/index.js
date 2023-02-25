$(document).ready(function () {
    const dogUrl = 'https://dog.ceo/api/breeds/image/random';
    const catUrl = 'https://api.randomuser.me/';
    const body = $('body');

    var promiseA = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', dogUrl);
        request.onload = () => {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject('File not found');
            }
        }

        request.send();
    });

    promiseA.then(result => {
        console.log(result);
        const jsonResponse = JSON.parse(result);
        return jsonResponse;
    }).then(result => {
        console.log('Result A');
        console.log(result);
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

    // Promise.resolve(promiseA).then(result=> {
    //     console.log(result);
    // });

    var catPromise = fetch(catUrl).then(response => {
        return response.json();
    })

    const request = new Request(dogUrl, {
        method: 'GET'
    });

    fetch(request).then(response => {
        console.log(response);
        return response.json();
    }).then(response => {
        body.append(`<img src='${response.message}'/>`);
    }).catch(error=> {
        console.log(error);
    })

    // Promise.all([catPromise, dogPromise]).then(response => {
    //     $('.header').append($('<h1>Cats and dogs</h1>'));
    //     let catResponse = response[0];
    //     let dogResponse = response[1];
    //     body.append(`<img src='${catResponse.url}'/>`);
    //     body.append(`<img src='${dogResponse.message}'/>`);
    // }).catch(error=> {
    //     console.log(error);
    // });

})