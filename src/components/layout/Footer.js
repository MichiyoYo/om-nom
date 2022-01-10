import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  flex: 1;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #041b3a59;
`;

function Footer(props) {
  return <FooterWrap>this is the footer</FooterWrap>;
}

export default Footer;
