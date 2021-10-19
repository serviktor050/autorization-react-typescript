import React from "react";
import { ITodo } from "../../intefaces";

type TodoListProps = {
  todos: ITodo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  if (todos.length === 0) {
    return <p className="center">Список задач пуст</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <span>{todo.title}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
