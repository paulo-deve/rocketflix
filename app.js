const movieContainer = document.querySelector('.movie-info')
const moviePoster = document.querySelector('.movie-poster');
const movieTitle = document.querySelector('.movie-title');
const movieDescription = document.querySelector('.movie-description');
const getRandomMovieButton = document.querySelector('.find-movie');

const API_KEY = 'c38cd0dba7c2c7efe7cdddfe4b6f1318'

getRandomMovieButton.addEventListener('click', async () => {
  const randomId = randomNumber()
  const movie = await getMovie(randomId)
  renderMovie(movie)
})

function randomNumber() {
  return Math.floor(Math.random() * 500);
}

async function getMovie(id) {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  const movieData = await movie.json()
  return movieData
}

function renderMovie(movie) {
  movieContainer.style.display = 'flex'

  moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  movieTitle.textContent = movie.title
  movieDescription.textContent = movie.overview
}