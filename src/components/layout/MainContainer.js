import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const MainContainerWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MainContainer = () => {
  return (
    <MainContainerWrap>
      <Header />
      <Content />
      <Footer />
    </MainContainerWrap>
  );
};

export default MainContainer;
