import styled from "styled-components";
import "./App.css";
import MainContainer from "./components/layout/MainContainer";
import SideBar from "./components/layout/SideBar";
import SplitScreen from "./components/layout/SplitScreen";

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: #fff;
`;

function App() {
  return (
    <AppContainer className="App">
      <SplitScreen leftWeight={1} rightWeight={4}>
        <SideBar />
        <MainContainer />
      </SplitScreen>
    </AppContainer>
  );
}

export default App;
