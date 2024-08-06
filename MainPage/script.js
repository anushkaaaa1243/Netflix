const api='api_key=1a646cbacdd157c5fbbbc4488693a68f'
const base_url='https://api.themoviedb.org/3'
const banner_url='https://image.tmdb.org/t/p/original/'
const img_url='https://image.tmdb.org/t/p/w200'

const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`
};


function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str;

}

fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results); 

        const randomIndex = Math.floor(Math.random() * data.results.length);
        const setMovie = data.results[randomIndex];

        let banner = document.querySelector("#banner");
        let bannerTitle = document.querySelector("#banner__title");
        let bannerDesc = document.querySelector("#banner__description");

        banner.style.backgroundImage = `url(${banner_url + setMovie.backdrop_path})`;

        
        bannerTitle.innerHTML = setMovie.name;
        bannerDesc.innerHTML = truncate(setMovie.overview, 150); // Using truncate function

    })
    // .catch((error) => {
    //     console.error('Error fetching Netflix originals:', error);
    // });



    fetch(requests.fetchNetflixOriginals)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        const headrow = document.querySelector("#headrow");
        if (!headrow) {
            throw new Error('#headrow element not found in the document');
        }

        const row = document.createElement("div");
        row.className = "row netflixrow";

        const title = document.createElement("h2");
        title.className = "row__title";
        title.textContent = "Netflix Original";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            // Check if poster_path is available and construct the full image URL
            if (movie.poster_path) {
                poster.src = img_url + movie.poster_path;
                poster.alt = movie.title || movie.name;
            } else {
                // Handle case where poster_path is missing or invalid
                console.warn(`No poster_path available for movie: ${movie.title || movie.name}`);
            }
            row_posters.appendChild(poster);
        });

        row.appendChild(row_posters);
        headrow.appendChild(row);
    })
  

    fetch(requests.fetchActionMovies)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        const headrow = document.querySelector("#headrow");
        if (!headrow) {
            throw new Error('#headrow element not found in the document');
        }

        const row = document.createElement("div");
        row.className = "row netflixrow";

        const title = document.createElement("h2");
        title.className = "row__title";
        title.textContent = "Action Movie";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge"
            if (movie.poster_path) {
                poster.src = img_url + movie.poster_path;
                poster.alt = movie.title || movie.name;
            } else {
        
                console.warn(`No poster_path available for movie: ${movie.title || movie.name}`);
            }
            row_posters.appendChild(poster);
        });

        row.appendChild(row_posters);
        headrow.appendChild(row);
    })
     
//comedy movie



fetch(requests.fetchComedyMovies)
.then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
})
.then((data) => {
    const headrow = document.querySelector("#headrow");
    if (!headrow) {
        throw new Error('#headrow element not found in the document');
    }

    const row = document.createElement("div");
    row.className = "row netflixrow";

    const title = document.createElement("h2");
    title.className = "row__title";
    title.textContent = "Comedy Movie";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        // Check if poster_path is available and construct the full image URL
        if (movie.poster_path) {
            poster.src = img_url + movie.poster_path;
            poster.alt = movie.title || movie.name;
        } else {
            // Handle case where poster_path is missing or invalid
            console.warn(`No poster_path available for movie: ${movie.title || movie.name}`);
        }
        row_posters.appendChild(poster);
    });

    row.appendChild(row_posters);
    headrow.appendChild(row);
})


fetch(requests.fetchHorrorMovies)
.then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
})
.then((data) => {
    const headrow = document.querySelector("#headrow");
    if (!headrow) {
        throw new Error('#headrow element not found in the document');
    }

    const row = document.createElement("div");
    row.className = "row netflixrow";

    const title = document.createElement("h2");
    title.className = "row__title";
    title.textContent = "Horror Movie";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        // Check if poster_path is available and construct the full image URL
        if (movie.poster_path) {
            poster.src = img_url + movie.poster_path;
            poster.alt = movie.title || movie.name;
        } else {
            // Handle case where poster_path is missing or invalid
            console.warn(`No poster_path available for movie: ${movie.title || movie.name}`);
        }
        row_posters.appendChild(poster);
    });

    row.appendChild(row_posters);
    headrow.appendChild(row);
})

fetch(requests.fetchRomanceMovies)
.then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
})
.then((data) => {
    const headrow = document.querySelector("#headrow");
    if (!headrow) {
        throw new Error('#headrow element not found in the document');
    }

    const row = document.createElement("div");
    row.className = "row netflixrow";

    const title = document.createElement("h2");
    title.className = "row__title";
    title.textContent = "Romance Movie";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        // Check if poster_path is available and construct the full image URL
        if (movie.poster_path) {
            poster.src = img_url + movie.poster_path;
            poster.alt = movie.title || movie.name;
        } else {
            // Handle case where poster_path is missing or invalid
            console.warn(`No poster_path available for movie: ${movie.title || movie.name}`);
        }
        row_posters.appendChild(poster);
    });

    row.appendChild(row_posters);
    headrow.appendChild(row);
})


fetch(requests.fetchDocumentaries)
.then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
})
.then((data) => {
    const headrow = document.querySelector("#headrow");
    if (!headrow) {
        throw new Error('#headrow element not found in the document');
    }

    const row = document.createElement("div");
    row.className = "row netflixrow";

    const title = document.createElement("h2");
    title.className = "row__title";
    title.textContent = "Docomentries Movie";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        // Check if poster_path is available and construct the full image URL
        if (movie.poster_path) {
            poster.src = img_url + movie.poster_path;
            poster.alt = movie.title || movie.name;
        } else {
            // Handle case where poster_path is missing or invalid
            console.warn(`No poster_path available for movie: ${movie.title || movie.name}`);
        }
        row_posters.appendChild(poster);
    });

    row.appendChild(row_posters);
    headrow.appendChild(row);
})

