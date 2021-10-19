import React, { useState, useEffect } from "react";
import { TodoForm } from "../../Todos/TodoForm";
import { TodoList } from "../../Todos/TodoList";
import { ITodo } from "../../../intefaces";

export const Todos: React.FC = () => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const savedTodos = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as ITodo[];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandlerTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Todos</h1>
          <TodoForm onAdd={addHandlerTodo} />
          <TodoList todos={todos} />
        </>
      )}

      {!userTokenLocalStorage && (
        <>
          <h1>Main Page</h1>
          <p>Go through authorization!</p>
        </>
      )}
    </div>
  );
};
