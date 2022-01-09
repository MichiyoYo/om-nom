import React from "react";

function RegularList({
  items,
  resourceName,
  listItemComponent: ListItemComponent,
}) {
  return (
    <>
      {items.map((item, i) => (
        <ListItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export default RegularList;
