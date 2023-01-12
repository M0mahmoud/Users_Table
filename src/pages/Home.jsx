import React, { useEffect } from "react";
import { getUsers } from "../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/table/Table";
import LoadingContent from "../components/LoadingContent";

const Home = ({}) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);
  console.log("data", data);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <LoadingContent loading={loading} error={error}>
        <Table data={data} />
      </LoadingContent>
    </>
  );
};

export default Home;
