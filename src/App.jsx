import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Header from "./components/Header";

function App() {
  console.log("App Running");
  const [cartIsShown, setCartIsShown] = useState(false);

  const showFormHandler = () => {
    setCartIsShown((prev) => !prev);
  };
  const hideFormHandler = () => {
    setCartIsShown((prev) => !prev);
  };

  return (
    <div className="bg-dark w-100 mh-100 ">
      <div className="container-xl">
        <Header showForm={showFormHandler} />
        <Home />
        {cartIsShown && <AddUser onClose={hideFormHandler} />}
      </div>
    </div>
  );
}

export default App;
