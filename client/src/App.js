import React from "react";
import Display from "./components/Display";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Page/Login";

function App() {
  return (
    <Routes>
      {/* <Switch>      </Switch> */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Display />} />
    </Routes>
    // <Display />
  );
}

export default App;
