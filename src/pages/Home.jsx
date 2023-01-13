import React, { useCallback, useEffect } from "react";
import { getUsers } from "../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import Table from "../components/table/Table";
import LoadingContent from "../components/LoadingContent";

const Home = () => {
  console.log("home");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  const getUsersCallback = useCallback(() => dispatch(getUsers()), []);

  useEffect(() => {
    getUsersCallback();
  }, [getUsersCallback]);

  return (
    <>
      <LoadingContent loading={loading} error={error}>
        {data && <Table data={data} />}
      </LoadingContent>
    </>
  );
};

export default Home;
