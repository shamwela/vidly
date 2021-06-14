import React, { Component } from 'react';
import Like from './common/like';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleDelete = (_id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== _id);
    this.setState({ movies });
  };

  handleLike = (clickedMovie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(clickedMovie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, pageSize, currentPage } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const { _id, title, genre, numberInStock, dailyRentalRate } =
                movie;
              return (
                <tr key={_id}>
                  <td key={title}>{title}</td>
                  <td key={genre.name}>{genre.name}</td>
                  <td key={numberInStock}>{numberInStock}</td>
                  <td key={dailyRentalRate}>{dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => this.handleDelete(_id)}
                    >
                      Delete this row
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount='10'
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
