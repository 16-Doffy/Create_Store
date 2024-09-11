import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { errors } = form.formState; // Sử dụng formState để lấy lỗi
  const hasError = !!errors[name]; // Kiểm tra lỗi cho trường cụ thể

  return (
    <Controller
      name={name}
      control={form.control}
      defaultValue=""  // Đảm bảo cung cấp giá trị mặc định
      render={({ field }) => (
        <TextField
          {...field}  
          label={label}
          disabled={disable}
          fullWidth
          error={hasError}  // Hiển thị lỗi nếu có
          helperText={hasError ? errors[name]?.message : ''}  // Hiển thị thông báo lỗi nếu có
        />
      )}
    />
  );
}

export default InputField;
