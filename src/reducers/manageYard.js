export default function manageYard(state = [], action) {
  switch (action.type) {
    case "ALL_YARDS":
      return action.yards;

    default:
      return state;
  }
}
