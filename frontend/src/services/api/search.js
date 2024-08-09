import axios from "axios";

export async function searchProducts(params) {
    return axios.get('/api/products/search');
}