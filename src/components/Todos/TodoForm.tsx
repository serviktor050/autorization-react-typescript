import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите заголовок задачи"
        onKeyPress={onKeyPressHandler}
      />
      <label htmlFor="title" className="active">
        Новая задача
      </label>
    </div>
  );
};
