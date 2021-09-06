import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 38px;
  overflow-y: auto;
  background: gray;
`;

function TodoList() {
  return <TodoListBlock>투두리스트 테스트</TodoListBlock>;
}

export default TodoList;
