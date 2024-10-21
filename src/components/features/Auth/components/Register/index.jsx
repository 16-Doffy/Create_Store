import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { register } from "../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import userApi from "api/userApi";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const registrationData = {
        name: values.name,
        email: values.email,
        password: values.password,
        retypePassword:values.retypePassword
      };

      // Call the register API
      const user = await userApi.register(registrationData);
      console.log("Registration successful:", user); // Log the user data

      // Dispatch the registration action
      const action = register(user); // Use the returned user data
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // Close the dialog if provided
      if (props.closeDialog) {
        props.closeDialog();
      }

      enqueueSnackbar("Đăng ký thành công!", { variant: "success" });
    } catch (error) {
      console.error("Đăng ký thất bại:", error);

      // Handle error (similar to your previous implementation)
      if (error.response) {
        enqueueSnackbar(
          error.response.data?.message || "Đăng ký thất bại",
          { variant: "error" }
        );
      } else {
        enqueueSnackbar("Lỗi kết nối hoặc yêu cầu không hợp lệ.", { variant: "error" });
      }
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
