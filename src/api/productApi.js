import axiosClient from './axiosClient';

const productApi = {
    getAll(params) {
        const url = ''; // URL trống vì baseURL đã chứa endpoint chính
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/${id}`; // Endpoint cho sản phẩm cụ thể
        return axiosClient.get(url);
    },
    add(data) {
        const url = ''; // URL trống vì baseURL đã chứa endpoint chính
        return axiosClient.post(url, data);
    },
    update(id, data) {
        const url = `/${id}`; // Endpoint cho sản phẩm cụ thể
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/${id}`; // Endpoint cho sản phẩm cụ thể
        return axiosClient.delete(url);
    },
};

export default productApi;
