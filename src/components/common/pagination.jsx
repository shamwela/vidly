import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = itemsCount / pageSize;
  return (
    <nav>
      <ul className="pagination">
        {[...Array(pagesCount)].map((element, index) => (
          <li className="page-item">
            <a className="page-link">{index + 1}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
