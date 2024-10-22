import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";
import { login } from "../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import userApi from "api/userApi";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const registrationData = {
        email: values.email,
        password: values.password,
      };
  
      console.log("Registration Data:", registrationData); // Kiểm tra dữ liệu đăng nhập
  
      const user = await userApi.login(registrationData);
      console.log("Login successful:", user); // Kiểm tra phản hồi từ API
  
      const action = login(user);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
  
      if (props.closeDialog) {
        props.closeDialog();
      }
  
      enqueueSnackbar("Login successful", { variant: "success", autoHideDuration: 2000 });

    } catch (error) {
      console.error("Login Fail", error);
  
      if (error.response) {
        enqueueSnackbar(
          error.response.data?.message || "Login failed",
          { variant: "error" }
        );
      } else {
        enqueueSnackbar("Lỗi kết nối hoặc yêu cầu không hợp lệ.", { variant: "error" });
      }
    }
  };
  

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
