import React, { useState, useEffect } from "react";
import { TodoForm } from "../../Todos/TodoForm";
import { TodoList } from "../../Todos/TodoList";
import { ITodo } from "../../../intefaces";

declare var confirm: (question: string) => boolean;

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

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Вы уверены, что хотите удалить элемент?");
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Todos</h1>
          <TodoForm onAdd={addHandlerTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler}
          />
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
