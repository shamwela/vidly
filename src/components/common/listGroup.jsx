import React from 'react';

const ListGroup = (props) => {
  const { items, currentGenre, onItemSelect } = props;

  return (
    <ul className="list-group">
      <li className="list-group-item" onClick={() => onItemSelect('all')}>
        All Genres
      </li>
      {items.map((genre) => {
        return (
          <li
            className="list-group-item"
            key={genre._id}
            onClick={() => onItemSelect(genre.name)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
