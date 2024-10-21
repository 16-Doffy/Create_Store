import axios from 'axios';

const userApi = {
  register: async (registrationData) => {
    try {
      const response = await axios.post('https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/laptop', registrationData);
      return response.data;
    } catch (error) {
      // Xử lý lỗi nếu cần
      throw new Error(error.response?.data?.message || "Đăng ký thất bại");
    }
  },
  

login: async (registrationData) => {
  try {
    const response = await axios.post('https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/laptop', registrationData);
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần
    throw new Error(error.response?.data?.message || "Đăng ký thất bại");
  }
}
};

export default userApi;