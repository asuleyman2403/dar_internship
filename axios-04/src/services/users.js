import axios from 'axios';

export function getUsers(){
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

export function getUserById( id ){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export function getPosts(){
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export function createPost(id){
    return axios.post(`https://jsonplaceholder.typicode.com/users/${id}`, {

    });
}
