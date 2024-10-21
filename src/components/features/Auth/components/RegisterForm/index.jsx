import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Typography, Avatar } from '@mui/material';
import * as yup from 'yup';
import HowToRegIcon from '@mui/icons-material/HowToReg';





const schema = yup.object().shape({
  fullName: yup
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
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
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
        value={values.name}
        onChange={handleChange}
        placeholder="Nhập họ và tên"
      />

      <TextField
        required
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Nhập email"
      />

      <TextField
        required
        fullWidth
        margin="normal"
        label="Mật khẩu"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Nhập mật khẩu"
      />

      <TextField
        required
        fullWidth
        margin="normal"
        label="Nhập lại mật khẩu"
        type="password"
        name="retypePassword"
        value={values.retypePassword}
        onChange={handleChange}
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
    </Box>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;