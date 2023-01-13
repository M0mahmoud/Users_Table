import React, { useState } from "react";
import Modal from "../components/UI/Model";

import { useDispatch } from "react-redux";
import { userAction } from "../store/usersSlice";

const AddUser = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    bDay: "",
    gender: "",
  });

  const newUser = {
    first_name: userData.name,
    email: userData.email,
    gender: userData.gender,
    phone_number: userData.phone,
    date_of_birth: userData.bDay,
    id: Number(Math.ceil(Math.random() * 900)),
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userAction.addUser(newUser));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Added",
      showConfirmButton: false,
      timer: 1200,
      width: "250px",
    });

    // Clear Form
    setUserData({ name: "", email: "", phone: "", bDay: "", gender: "" });
  };

  return (
    <>
      <Modal onClose={toggleForm}>
        <div className="p-3">
          <h4 className=" mb-3 py-2 text-light bg-primary text-center rounded-3  ">
            Users Details
          </h4>
          <form className="row g-3 text-primary" onSubmit={submitHandler}>
            <div className="col-6">
              <label htmlFor="inputName" className="form-label">
                User Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="inputName"
                placeholder=""
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
                value={userData.name}
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                value={userData.email}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputPhone" className="form-label">
                Phone
              </label>
              <input
                required
                type="tel"
                className="form-control"
                id="inputPhone"
                onChange={(e) => {
                  setUserData({ ...userData, phone: e.target.value });
                }}
                value={userData.phone}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputday" className="form-label">
                Brith Day
              </label>
              <input
                required
                type="date"
                className="form-control"
                id="inputday"
                placeholder="12-1-2023"
                onChange={(e) => {
                  setUserData({ ...userData, bDay: e.target.value });
                }}
                value={userData.bDay}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Gender
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(e) => {
                  setUserData({ ...userData, gender: e.target.value });
                }}
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary text-center me-2"
              >
                Add User
              </button>
              <button
                type="button"
                className="btn btn-danger text-center"
                onClick={toggleForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddUser;
