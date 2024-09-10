import axiosClient from "./axiosClient";

const productApi = {
getAll(params) {
        const url ='/name';
        return axiosClient.get(url,{params});
},
get(id){
    const url =`/name/${id}`;
    return axiosClient.get(url);
},
add(data){
    const url =`/name`;
    return axiosClient.post(url,data);
},
update(data){
    const url =`/name/${data.id}`;
    return axiosClient.patch(url,data);
},
remove(id){
    const url =`/name/${id}`;
    return axiosClient.delete(url);
},
};
export default productApi;