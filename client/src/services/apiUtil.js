import axios from "axios"

const baseURL = 'http://localhost:8080';

export function getAPI(endpoint) {
    const url = baseURL + endpoint;
    return axios.get(url);
}

export function postAPI(endpoint, payload) {
    const url = baseURL + endpoint;
    return axios.post(url, payload);
}

export function putAPI(endpoint, payload) {
    const url = baseURL + endpoint;
    return axios.put(url, payload);
}

export function deleteAPI(endpoint) {
    const url = baseURL + endpoint;
    return axios.delete(url);
}