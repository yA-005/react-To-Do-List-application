

import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above!</p>;
  }
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;