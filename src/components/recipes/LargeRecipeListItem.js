import React from "react";

function LargeRecipeListItem({ recipe }) {
  const { title, image, sourceUrl, summary } = recipe;
  return (
    <>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{summary}</p>
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        Make it!
      </a>
    </>
  );
}

export default LargeRecipeListItem;
