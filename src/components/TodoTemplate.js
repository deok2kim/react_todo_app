import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 521px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼 위치를 위해 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙 위치 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
