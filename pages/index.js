import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Container from "../components/Container";
import Centralizer from "../components/Centralizer";
import TodoItem from "../components/TodoItem/TodoItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  box-shadow: 0 10px 10px 0 #ccc;
`;

export default function Index({ todos }) {
  return (
    <Container>
      <Centralizer>
        <List>
          {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </List>
      </Centralizer>
    </Container>
  );
}

Index.propTypes = {
  todos: PropTypes.array,
};

Index.getInitialProps = async function () {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const todos = await response.json();
  return {
    todos,
  };
};
