import styled from "styled-components";
import "./App.css";
import MainContainer from "./components/layout/MainContainer";
import SideBar from "./components/layout/SideBar";
import SplitScreen from "./components/layout/SplitScreen";

const AppContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
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
