import React from "react";
import styled from "styled-components";

const SideBarWrap = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`;

const SideBar = () => {
  return <SideBarWrap>this is the left side</SideBarWrap>;
};

export default SideBar;
