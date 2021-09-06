import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>바탕화면 회색</div>
      <TodoTemplate>여기는 흰색</TodoTemplate>
    </>
  );
}

export default App;
