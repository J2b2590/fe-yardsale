export default function singleItem(state = [], action) {
  switch (action.type) {
    case "CAPTURED":
      return action.item;
      
    default:
      return state;
  }
}
