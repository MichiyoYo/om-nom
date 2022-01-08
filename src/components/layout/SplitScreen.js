import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
  display: flex;
  flex-direction: column;
`;

function SplitScreen({ children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;
  return (
    <Container className="container">
      <Pane className="pane" weight={leftWeight}>
        {left}
      </Pane>
      <Pane className="pane" weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
}

export default SplitScreen;
