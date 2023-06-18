'use strict';
const api_key = 'c8a254596ddcb52c68b7d5ed82d49efa';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

// fetch data from a server using the 'url' and passes
// the result in JSON data to a 'callback' function,
// along with an optional parameter if has 'optionalParam'.

const fetchDataFromServer = function (url, callback, optionalParam) {

    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { api_key, imageBaseUrl, fetchDataFromServer };
