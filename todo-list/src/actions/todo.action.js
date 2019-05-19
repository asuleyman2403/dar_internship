export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const MAKE_DONE = 'MAKE_DONE';
export const addTodo = todo => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todo
    });
};

export const editTodo = index => dispatch => {
    dispatch({
        type: EDIT_TODO,
        payload: index
    });
};

export const deleteTodo = index => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: index
    });
};

export const saveTodo = (index, value) => dispatch => {
    dispatch({
        type: SAVE_TODO,
        payload: {
            index: index,
            text: value
        }
    });
};

export const makeDone = index => dispatch => {
    dispatch({
        type: MAKE_DONE,
        payload: index
    });
};
