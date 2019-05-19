import axios from 'axios';

export function getUsers(){
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

export function getUserById( id ){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}