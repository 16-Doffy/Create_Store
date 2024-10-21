import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  Snackbar,
} from "@mui/material";
import * as yup from "yup";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please input a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Please enter at least 6 characters"),
});

function LoginForm({ onSubmit }) {
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
    onSubmit(data);
    setMessage("Login successful!");
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      sx={{ mt: 2 }}
    >
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
        Sign Up
      </Typography>
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
        Login
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
