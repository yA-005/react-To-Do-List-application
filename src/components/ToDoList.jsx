

import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
export default ToDoList;