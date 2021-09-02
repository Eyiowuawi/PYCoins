import { getInitials } from "./../utils/getInitials";
const appReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_REGISTER":
      return {
        ...state,
        register: true,
      };
    case "SAVE_USER":
      const firstname = action.payload.user.firstName;
      const lastname = action.payload.user.lastName;
      const initial = getInitials(firstname, lastname);

      return {
        ...state,
        profile: action.payload,
        initials: `${initial.first}${initial.last}`,
        fullname: `${firstname} ${lastname}`,
      };
    default:
      return state;
  }
};

export default appReducer;
