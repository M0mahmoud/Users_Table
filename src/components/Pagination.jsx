import React from "react";

const Pagination = ({
  rowsPerPage,
  totalRows,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul className="pagination ">
          {currentPage > 1 && (
            <li className="page-item ">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="page-link bg-dark border-primary"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
          )}
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => handleClick(number)}
              className="page-item"
            >
              <button
                className={`page-link bg-dark border-primary ${
                  number == currentPage ? "text-danger" : ""
                } `}
              >
                {number}
              </button>
            </li>
          ))}
          {currentPage < pageNumbers.length && (
            <li className="page-item">
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="page-link bg-dark border-primary"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
