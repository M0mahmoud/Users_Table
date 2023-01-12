import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userAction } from "../../store/usersSlice";

import Pagination from "../Pagination";
import TableRows from "./TableRows";

import { BiSort } from "react-icons/bi";

const Table = ({ data }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  // Get the current page of data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      <div className="table-responsive-lg">
        <table className="text-light table border-primary">
          <thead className="text-primary">
            <tr>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(userAction.sort())}
                scope="col"
              >
                ID <BiSort />
              </th>
              <th scope="col" aria-sort="descending">
                Name
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">B.Day</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <TableRows currentData={currentData} />
        </table>
      </div>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Table;
