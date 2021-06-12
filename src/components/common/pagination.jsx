import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pageNumbers = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a className="page-link">{pageNumber}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
