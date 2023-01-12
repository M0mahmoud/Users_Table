import React from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/usersSlice";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";

const TableRows = ({ currentData }) => {
  const dispatch = useDispatch();

  const deleteJandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(userAction.deleteUser(id));
        Swal.fire({
          icon: "success",
          title: "User has been deleted",
          showConfirmButton: false,
          timer: 1000,
          width: "400px",
        });
      }
    });
  };

  return (
    <tbody>
      {currentData.map((user) => (
        <tr key={user.id}>
          <th scope="row">{user.id}</th>
          <td>{`${user.first_name}`}</td>
          <td>{user.email}</td>
          <td>{user.phone_number}</td>
          <td>{user.date_of_birth}</td>
          <td>
            <div className="btn-group" role="group" aria-label="actions">
              <button
                type="button"
                className="btn btn-outline-success me-2"
                onClick={() => console.log(user.id + " Edit")}
              >
                <AiTwotoneEdit />
              </button>
              <button
                type="button"
                className="btn btn-outline-danger "
                onClick={() => deleteJandler(user.id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;
