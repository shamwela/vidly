import React from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
  const { movies, onSort, onLike, onDelete } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort('title')}>Title</th>
          <th onClick={() => onSort('genre.name')}>Genre</th>
          <th onClick={() => onSort('numberInStock')}>Stock</th>
          <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          const { _id, title, genre, numberInStock, dailyRentalRate } = movie;
          return (
            <tr key={_id}>
              <td key={title}>{title}</td>
              <td key={genre.name}>{genre.name}</td>
              <td key={numberInStock}>{numberInStock}</td>
              <td key={dailyRentalRate}>{dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(_id)}
                >
                  Delete this row
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;
