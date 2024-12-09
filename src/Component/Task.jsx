import React from "react";
import { Route, Routes } from "react-router-dom";
import SendOTP from "../Pages/SendOTP";
import Verify from "../Pages/Verify";
import Form from "../Pages/Form";

function Task() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SendOTP />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default Task;
