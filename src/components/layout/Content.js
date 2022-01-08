import React from "react";
import styled from "styled-components";

const ContentWrap = styled.main`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Content(props) {
  return <ContentWrap>This is the content</ContentWrap>;
}

export default Content;
