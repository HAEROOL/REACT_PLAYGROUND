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
    <div className="container mx-auto border-2 border-gray-300 p-4 w-1/2">
      할일은 {todos.length}개!
      <ul className="h-64 overflow-y-auto">
        {todos.map((todo) => (
          <li className="" key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <input
        className="border-2 border-black-600 h-10 w-3/4"
        type="text"
        ref={todoInput}
      />
      <button
        className="w-1/4 border-2 border-blue h-10 hover:bg-blue-300 hover:text-white"
        onClick={addTodo}
      >
        add
      </button>
    </div>
  );
}
