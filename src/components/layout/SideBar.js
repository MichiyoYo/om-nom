import React from "react";
import styled from "styled-components";
import { device } from "../../utils/devices";

const SideBarWrap = styled.div`
  min-height: 100vh;
  background-color: #041b3a59;
`;

const SideBar = () => {
  return <SideBarWrap>this is the left side</SideBarWrap>;
};

export default SideBar;
