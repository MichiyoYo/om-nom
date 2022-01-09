import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import MainContainer from "./components/layout/MainContainer";
import SideBar from "./components/layout/SideBar";
import SplitScreen from "./components/layout/SplitScreen";
import "./App.css";

const AppContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    #845ec2,
    #d65db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  );
  min-height: 100vh;
  color: #fff;
`;

const API_KEY = "bb766f9373854cab828beda2be954639";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey=${API_KEY}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => {
        console.error(`There was an error while fetching recipes: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider value={{ data, loading }}>
      <AppContainer className="App">
        <SplitScreen leftWeight={1} rightWeight={5}>
          <SideBar />
          <MainContainer />
        </SplitScreen>
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;
