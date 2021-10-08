export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text
      };
      // this gives each todo item its own id, so the delete button below targets only that object that matches the id
      return { todos: state.todos.concat(action.payload.text) };

    case 'DELETE_TODO': 
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
    default:
      return state;
  }
}
