import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    return axiosClient.get('/categories', { params });
  },

  get(id) {
    return axiosClient.get(`/categories/${id}`);
  },

  add(data) {
    return axiosClient.post('/categories', data);
  },

  update(data) {
    return axiosClient.patch(`/categories/${data.id}`, data);
  },

  remove(id) {
    return axiosClient.delete(`/categories/${id}`);
  },
};

export default categoryApi;
