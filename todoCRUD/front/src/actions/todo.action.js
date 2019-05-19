import {getTasks as get, createTask as create, updateTask as update, deleteTask as destroy} from "../services/task";
export const GET_TASKS = 'GET_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';


export const getTasks = () => dispatch => {
    get()
        .then( response => {
            dispatch({
                type: GET_TASKS,
                payload: response.data
            });
        })
};

export const createTask = task => dispatch => {
    create(task)
        .then( response => {
            get()
                .then( response => {
                    dispatch({
                        type: CREATE_TASK,
                        payload: response.data
                    });
                })
        })
};

export const updateTask = (id, task, done) => dispatch => {
    update(id, task, done)
        .then(response => {
            get()
                .then(response => {
                    dispatch({
                        type: UPDATE_TASK,
                        payload: response.data
                    });
                })
        })
};

export const deleteTask = id => dispatch =>{
    destroy(id)
        .then( response => {
            get()
                .then(response => {
                    dispatch({
                        type: DELETE_TASK,
                        payload: response.data
                    })
                })
        })
};
