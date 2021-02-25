export const allItems = (items) => {
  return {
    type: "ALL_ITEMS",
    items,
  };
};

export const caputured = (item) => {
  return {
    type: "CAPUTRED",
    item,
  };
};
