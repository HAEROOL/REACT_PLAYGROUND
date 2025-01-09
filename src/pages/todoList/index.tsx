import { useRef, useState } from "react";

interface Todo {
  id: number;
  content: string;
}

export default function TodoList() {
  const todoInput = useRef<HTMLInputElement>(null);
  const [curid, setId] = useState<number>(3);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    const id = curid;
    if (!todoInput.current || todoInput.current.value === "") {
      alert("입력값 없음!");
      return;
    }
    const content = todoInput.current.value;
    setId(curid + 1);
    setTodos([...todos, { id, content }]);
    todoInput.current.value = "";
  };
  const deleteTodo = <T,>(id: T) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      할일은 {todos.length}개!
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <input type="text" ref={todoInput} />
      <button onClick={addTodo}>add</button>
    </div>
  );
}
