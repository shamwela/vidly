import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndpoint = apiUrl + '/movies'

export function getMovies() {
  return http.get(apiEndpoint)
}

export function getMovie(id) {
  return http.get(apiEndpoint + '/' + id)
}

export function saveMovie(movie) {
  // Update
  if (movie._id) {
    const body = { ...movie }
    delete body._id
    return http.put(apiEndpoint + '/' + movie._id, body)
  }

  // Create
  return http.post(apiEndpoint, movie)
}

export function deleteMovie(id) {
  return http.delete(apiEndpoint + '/' + id)
}
