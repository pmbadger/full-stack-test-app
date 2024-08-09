import axios from "axios";

export async function getProfile() {
    return axios.get('/api/profile/');
}

export async function postRegister() {
    return axios.post('/api/register/');
}

export async function authLogin() {
    return axios.post('/api/login/');
}

export async function authLogout() {
    return axios.post('/api/logut/');
}