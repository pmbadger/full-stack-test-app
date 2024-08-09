import axios from "axios";

export async function getProducts() {
    return axios.get('/api/products/');
}

export async function getProduct(id) {
    return axios.get(`/api/products/${id}`);
}

export async function selectProduct(params) {
    return axios.post('/api/products/select', params);
}

export async function deselectProduct(params) {
    return axios.post('/api/products/deselect', params);
}