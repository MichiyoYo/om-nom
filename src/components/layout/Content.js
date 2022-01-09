import React, { useContext } from "react";
import styled from "styled-components";
import loadingSVG from "../../loading.svg";
import { AppContext } from "../../App";

const ContentWrap = styled.main`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Content(props) {
  const { data, loading } = useContext(AppContext);

  return (
    <ContentWrap>
      {loading ? (
        <img src={loadingSVG} width="80" height="80" alt="loading gif" />
      ) : (
        <p>this is the content</p>
      )}
    </ContentWrap>
  );
}

export default Content;
