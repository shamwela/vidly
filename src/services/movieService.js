import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndpoint = apiUrl + '/movies'

export function getMovies() {
  return http.get(apiEndpoint)
}

export function getMovie(id) {
  return http.get(apiEndpoint + '/' + id)
}

export async function saveMovie(movie) {
  delete movie._id
  console.log('movie', movie)
  const { data: newMovie } = await http.post(apiEndpoint, movie)
  return newMovie
}

export function deleteMovie(id) {
  return http.delete(apiEndpoint + '/' + id)
}
