import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

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
      <TodoTemplate>
        <TodoHead></TodoHead>
      </TodoTemplate>
    </>
  );
}

export default App;
