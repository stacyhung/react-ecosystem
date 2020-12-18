export const CREATE_TODO = 'CREATE_TODO';
// action creator - when users enter new todo item and clicks create todo
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const REMOVE_TODO = 'REMOVE_TODO';
// action creator for removing item
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});