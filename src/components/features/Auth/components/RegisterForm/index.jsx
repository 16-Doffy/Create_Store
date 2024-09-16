import React from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Avatar, Typography, Button } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  retypePassword: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required("Retype Password is required"),
});

function RegisterForm({ onSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
    reset();
  };

  return (
    <div>
      <Avatar>
        <LockOutlined />
      </Avatar>
      <Typography variant="h5">Create an account</Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Full Name"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ''}
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ''}
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ''}
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="retypePassword"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="password"
              label="Retype Password"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ''}
              margin="normal"
              fullWidth
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
