import axios from 'axios';

export function getUserPosts(userId){
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
}

export function deletePost(id){
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "DELETE" });
}

// export function updatePost(id){
//     return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: id
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     });
// }


