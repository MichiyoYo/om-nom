import React from "react";
import styled from "styled-components";
import { device } from "../../utils/devices";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
  display: flex;
  flex-direction: column;
  &.pane-left {
    @media screen and ${device.tablet} {
      display: none;
    }
  }
`;

function SplitScreen({ children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;
  return (
    <Container className="container">
      <Pane className="pane-left" weight={leftWeight}>
        {left}
      </Pane>
      <Pane className="pane-right" weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
}

export default SplitScreen;
