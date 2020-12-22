const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8e4c4583dfc0a3d77572c7f86ee01437&page=1"
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8e4c4583dfc0a3d77572c7f86ee01437&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const btn = document.getElementById('btn')

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview, release_date, adult} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="modal">
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
                <div class="sub-info">
                    <div class="release-date">
                        <h4>Release Date:</h4>
                        ${release_date}
                    </div>
                    ${adult ? '<h5 class="adult">R</h5>' : '<h5 class="child">G</h5>'}
                </div>
            </div>
        `

        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    }else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)

        search.value = ''
    }else {
        window.location.reload()
    }
})

btn.addEventListener('click', () => {
    getMovies(API_URL)
    btn.blur()
})