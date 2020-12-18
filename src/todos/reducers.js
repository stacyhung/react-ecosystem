import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            // get text property from payload
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            // get text from payload
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        default:
            return state;
    }
}