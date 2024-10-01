import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Avatar, Typography, Button, InputAdornment, IconButton } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Visibility, VisibilityOff } from "@mui/icons-material";
RegisterForm.propTypes = {
  onsubmit: PropTypes.func,
};
const schema = yup.object().shape({
  fullName: yup.string()
    .required("Full Name is required")
    .test('two-words', 'Please enter at least two words', (value) => {
      return value && value.trim().split(' ').length >= 2;
    }),
  email: yup.string().email("Please input a valid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6, 'Please enter at least 6 characters'),
  retypePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Retype Password is required"),
});


function RegisterForm({ onSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });



const [showPassword,setShowpassword] = useState(false);
const toggleShowpassword =() =>{
  setShowpassword((prev) => !prev);
};

const [showRPW,setRpw] = useState(false);
const toggleRPW =() =>{
  setRpw((prev) => !prev);
};


  const handleFormSubmit = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
    reset();
  };

  return (
    <div sx={{ padding: 4 }}>
      <Avatar
        sx={{
          margin: "0 auto",
          color: "white",
          backgroundColor: "rgb(0, 123, 255)",
        }}
      >
        <HowToRegIcon />
      </Avatar>
      <Typography
        sx={{ margin: "16px 0 24px 0", textAlign: "center" }}
        variant="h5"
      >
       
        Create an account
      </Typography>
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
              helperText={fieldState.error ? fieldState.error.message : ""}
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
              helperText={fieldState.error ? fieldState.error.message : ""}
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
              type={showPassword ? "text" : "password"}  // Kiểm soát type dựa vào trạng thái showPassword
              label="Password"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              margin="normal"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowpassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
       
        <Controller
          name="retypePassword"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type={showRPW ? "text" : "password"} 
              label="Retype Password"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              margin="normal"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleRPW}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button
          sx={{
            marginTop: 4,
            textAlign: "center",
            width: "50%", // Thay đổi width trong sx bằng cách viết chuẩn
            margin: "0 auto", // Để canh giữa nút
            display: "flex",
          }}
          type="submit"
          variant="contained"
          color="primary"
        >
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
