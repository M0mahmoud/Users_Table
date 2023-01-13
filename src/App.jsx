import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Header from "./components/Header";

function App() {
  console.log("App Running");
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="bg-dark w-100 mh-100 ">
      <div className="container-xl">
        <Header toggleForm={toggleForm} />
        <Home />
        {showForm && <AddUser toggleForm={toggleForm} />}
      </div>
    </div>
  );
}

export default App;
