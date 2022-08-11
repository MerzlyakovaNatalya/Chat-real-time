//import logo from './logo.svg';
import "./App.css";
import { Router } from "./router/Router";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;
//background: ${(props) => props.theme.colors.primary};
function App() {
  return (
    <>
      <AppWrapper>
        <Router />
      </AppWrapper>
    </>
  );
}

export default App;
