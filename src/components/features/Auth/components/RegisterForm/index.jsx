import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Box, Typography, Avatar, Snackbar } from "@mui/material";
import * as yup from "yup";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Full Name is required")
    .test("two-words", "Please enter at least two words", (value) => {
      return value && value.trim().split(" ").length >= 2;
    }),
  email: yup
    .string()
    .email("Please input a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Please enter at least 6 characters"),
  retypePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Retype Password is required"),
});

function RegisterForm({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    // Call the onSubmit prop with the form data
    onSubmit(data);
    setMessage("Registration successful!"); // Set success message
    setOpen(true); // Open Snackbar
  };

  const handleCloseSnackbar = () => {
    setOpen(false); // Close Snackbar
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 2 }}>
      <Avatar
        style={{
          margin: "0 auto",
          color: "white",
          backgroundColor: "rgb(0, 123, 255)",
        }}
      >
        <HowToRegIcon />
      </Avatar>
      <Typography
        style={{ margin: "16px 0 24px 0", textAlign: "center" }}
        variant="h5"
      >
        Create an account
      </Typography>

      <TextField
        required
        fullWidth
        margin="normal"
        label="Họ và tên"
        name="name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
        placeholder="Nhập họ và tên"
      />

      <TextField
        required
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        name="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
        placeholder="Nhập email"
      />

      <TextField
        required
        fullWidth
        margin="normal"
        label="Mật khẩu"
        type="password"
        name="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ""}
        placeholder="Nhập mật khẩu"
      />

<TextField
  required
  fullWidth
  margin="normal"
  label="Nhập lại mật khẩu"
  type="password"  // Đổi từ "retypePassword" sang "password"
  {...register("retypePassword")}
  error={!!errors.retypePassword}
  helperText={errors.retypePassword ? errors.retypePassword.message : ""}
  placeholder="Nhập lại mật khẩu"
/>


      <Button
        style={{
          marginTop: 16,
          textAlign: "center",
          width: "50%",
          margin: "0 auto",
          display: "flex",
        }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Register
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
      />
    </Box>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
