import  axios  from 'axios';

export function getTasks(){
    return axios.get('http://localhost:8000/todo/');
}

export function createTask(task){
    return axios.post('http://localhost:8000/todo/', {
        task: task
    });
}

export function updateTask(id, task, done){
    return axios.put(`http://localhost:8000/todo/${id}/`, {
        task: task,
        done: done
    });
}

export function deleteTask(id){
    return axios.delete(`http://localhost:8000/todo/${id}/`,{
        method: 'DELETE',
        body: {},
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}
