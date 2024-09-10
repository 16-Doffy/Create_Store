import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/description";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/description/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/description`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/description/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/description/${id}`;
    return axiosClient.delete(url);
  },
};
export default categoryApi;
