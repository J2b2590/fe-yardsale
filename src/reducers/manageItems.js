export default function manageItems(state = [], action) {
  switch (action.type) {
    case "ALL_ITEMS":
      return action.items;

    case "CAPTURED":
      return action.item;

    default:
      return state;
  }
}
