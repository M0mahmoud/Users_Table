import React from "react";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";

const Header = ({ toggleForm }) => {
  const { data, error } = useSelector((state) => state.users);

  const exportHandler = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "My_Sheet");
    XLSX.writeFile(wb, "My_Excel.xlsx");
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <h4 className="mb-2 p-2 text-light bg-primary text-center rounded-3">
          Dashboard
        </h4>
        <div>
          <button
            className="btn btn-primary p-2 me-2 fw-bold"
            onClick={toggleForm}
            disabled={error}
          >
            Add User
          </button>
          <button
            className="btn btn-primary p-2 me-2 fw-bold"
            onClick={exportHandler}
            disabled={error}
          >
            Export Data
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
