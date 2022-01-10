import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.header`
  flex: 1;
  height: 80px;
  max-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #041b3a59;
`;

function Header(props) {
  return <HeaderWrap>This is the header</HeaderWrap>;
}

export default Header;
