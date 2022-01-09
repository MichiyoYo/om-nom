import React, { useContext } from "react";
import styled from "styled-components";
import loadingSVG from "../../loading.svg";
import { AppContext } from "../../App";
import RegularList from "../RegularList";
import SmallRecipeListItem from "../recipes/SmallRecipeListItem";
import LargeRecipeListItem from "../recipes/LargeRecipeListItem";

const ContentWrap = styled.main`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
`;

function Content(props) {
  const { data, loading, error } = useContext(AppContext);

  if (error) return <h2>{error}</h2>;
  return (
    <ContentWrap>
      {loading ? (
        <img src={loadingSVG} alt="loading gif" />
      ) : (
        <RegularList
          items={data}
          resourceName="recipe"
          listItemComponent={SmallRecipeListItem}
        />
      )}
    </ContentWrap>
  );
}

export default Content;
