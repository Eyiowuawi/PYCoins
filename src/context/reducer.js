import { getInitials } from "./../utils/getInitials";
const appReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_REGISTER":
      return {
        ...state,
        register: true,
      };
    case "SAVE_USER":
      const initial = getInitials(
        action.payload.firstName,
        action.payload.lastName
      );
      return {
        ...state,
        user: action.payload,
        initials: `${initial.first}${initial.last}`,
      };
    default:
      return state;
  }
};

export default appReducer;
