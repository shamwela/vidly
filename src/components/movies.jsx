import React, { Component } from 'react';
import Like from './common/like';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };

  renderMovieCount = () => {
    const count = this.state.movies.length;

    if (count === 0) {
      return 'There are no movies in the database.';
    }

    if (count === 1) {
      return 'Showing 1 movie in the database.';
    }

    return `Showing ${count} movies in the database.`;
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

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies;
    return (
      <React.Fragment>
        <h1>{this.renderMovieCount()}</h1>
        {count !== 0 && (
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
              {this.state.movies.map((movie) => {
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
        )}
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
