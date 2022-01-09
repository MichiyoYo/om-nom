import React from "react";

function SmallRecipeListItem({ recipe }) {
  const { image, title } = recipe;
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
}

export default SmallRecipeListItem;
