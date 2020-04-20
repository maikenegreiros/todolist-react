import React from "react";
import styled from "styled-components";
import css from "./TodoItem.module.sass";

const ItemCompleted = styled.li`
  background-color: #5a905a;
`;

const ItemNotCompleted = styled.li`
  background-color: #cc8f8f;
`;

export default function TodoItem({ todo }) {
  return (
    <div onClick={() => alert(todo.title)}>
      {todo.completed ? (
        <ItemCompleted className={css.todoItem}>
          <h4>{todo.title}</h4>
        </ItemCompleted>
      ) : (
        <ItemNotCompleted className={css.todoItem}>
          <h4>{todo.title}</h4>
        </ItemNotCompleted>
      )}
    </div>
  );
}
