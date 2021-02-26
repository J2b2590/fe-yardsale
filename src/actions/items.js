export const allItems = (items) => {
  return {
    type: "ALL_ITEMS",
    items,
  };
};

export const captured = (item) => {
  return {
    type: "CAPTURED",
    item,
  };
};
