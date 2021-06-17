import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like' },
    { key: 'delete' },
  ];

  render() {
    const { movies, sortColumn, onSort, onLike, onDelete } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={columns} />
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
  }
}

export default MoviesTable;
