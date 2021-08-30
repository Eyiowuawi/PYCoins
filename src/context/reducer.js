import { getInitials } from "./../utils/getInitials";
const appReducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "CHECK_REGISTER":
      return {
        ...state,
        register: true,
      };
    case "SAVE_USER":
      const initial = getInitials(
        action.payload.user.firstName,
        action.payload.user.lastName
      );
      return {
        ...state,
        user: action.payload,
        initials: `${initial.first}${initial.last}`,

        fullname: `${action.payload.user.firstName} ${action.payload.user.lastName}`,
      };
    default:
      return state;
  }
};

export default appReducer;
