import axios from 'axios';
const URL = `http://localhost:3003/api/todos`

export const changeDescription = (event) => ({
    type: 'CHANGE_FORM_DESCRIPTION',
    payload: event.target.value
});

export const loadTasks = () => ({
    type: 'LOAD_TASKS',
    payload: axios.get(`${URL}?sort=-createdAt`)
})

export const createTask = (description) => {
    return (dispatch) => {
        axios.post(URL, { description })
            .then((res) => dispatch({ type: 'CREATE_TASK' }))
            .then((res) => dispatch(loadTasks()))
    }
}

export const deleteTask = (taskId) => {
    return (dispatch) => {
        axios.delete(`${URL}/${taskId}`)
            .then((res) => dispatch({ type: 'DELETE_TASK' }))
            .then((res) => dispatch(loadTasks()))
    }
}