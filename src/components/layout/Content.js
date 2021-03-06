import React, { useContext } from "react";
import styled from "styled-components";
import loadingSVG from "../../loading.svg";
import { AppContext } from "../../App";
import RegularList from "../RegularList";
import SmallRecipeListItem from "../recipes/SmallRecipeListItem";
import LargeRecipeListItem from "../recipes/LargeRecipeListItem";
import SearchField from "../SearchField";

const ContentWrap = styled.main`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  max-height: 800px;
  padding: 40px;
`;

function Content(props) {
  const { data, loading, error } = useContext(AppContext);

  if (error) return <h2>{error}</h2>;
  return (
    <ContentWrap>
      <div>
        <h1>Om Nom Recipe Finder</h1>
        <SearchField />
      </div>
      <RecipeContainer>
        {loading ? (
          <img src={loadingSVG} alt="loading gif" />
        ) : (
          <RegularList
            items={data}
            resourceName="recipe"
            listItemComponent={SmallRecipeListItem}
          />
        )}
      </RecipeContainer>
    </ContentWrap>
  );
}

export default Content;
