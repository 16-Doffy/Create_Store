import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { register } from "../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch(); // Khai báo useDispatch

  const handleSubmit = async (values) => {
    // Thêm async
    try {
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      console.log("new user", user);
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
