import api from "./api";

export async function getProfile() {
    return api.get('/api/profiles/');
}

export async function postRegister(params) {
    return api.post('/api/auth/register/', params);
}

export async function authLogin(params) {
    return api.post('/api/auth/login/', params);
}

export async function authLogout() {
    return api.post('/api/auth/logout/');
}

export async function tokenRefresh(params) {
    return api.post('api/auth/token/refresh/', params);
}
