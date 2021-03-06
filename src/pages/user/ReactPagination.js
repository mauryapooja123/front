import React, { useEffect, useState } from 'react';

import Pagination from 'react-js-pagination';

const ReactPagination = ({
  activePage,
  pageLimit,
  totalCount,
  handlePageChange,
}) => {
  //console.log(activePage, pageLimit, totalCount, 'sssssssssss');
  return (
    <Pagination
      className="text-left"
      itemClass="page-item"
      linkClass="page-link"
      prevPageText="Previous"
      nextPageText="Next"
      activePage={activePage}
      itemsCountPerPage={pageLimit}
      totalItemsCount={totalCount}
      onChange={handlePageChange}
    />
  );
};

export default ReactPagination;
