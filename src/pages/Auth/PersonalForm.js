import { useState } from "react";
import PersonalInfo from "../../components/Auth/Personal";
import VerifyMsg from "./Verify";
import usePersonalForm from "../../hooks/personalform";
import withRegistrationType from "../../hoc/registerType";
import PersonalIndicator from "./../../components/UI/PersonalIndicator";
import { useRegisterUser } from "../../query/useRegisterUser";
import { useMutation } from "react-query";
import { registerUser } from "./../../services/auth/index";
import { toast } from "react-toastify";

const PersonalForm = ({ history }) => {
  const [personalForm, setPersonalForm, formValid, setFormValid] =
    usePersonalForm();
  const [indicate, setIndicate] = useState(false);
  const { mutate, isLoading, data, isSuccess } = useMutation((data) =>
    registerUser(data)
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData();
    // for (let key in personalForm) {
    //   data.append(`${key}`, personalForm[key].value);
    // }
    data.append("firstName", personalForm["firstName"].value);
    data.append("lastName", personalForm["lastName"].value);
    data.append("phoneNumber", personalForm["phoneNumber"].value);
    data.append("email", personalForm["email"].value);
    data.append("password", personalForm["password"].value);
    data.append(`userType`, "individual");
    mutate(data);
    // setIndicate(true);
  };
  return (
    <div className="personal">
      <PersonalIndicator indicate={indicate} />
      <div className="auth_form">
        <div className="auth_form-container">
          {indicate ? (
            <VerifyMsg />
          ) : (
            <PersonalInfo
              personalform={personalForm}
              personalFormUpdate={setPersonalForm}
              formSubmit={handleSubmit}
              formValid={formValid}
              formValidFunc={setFormValid}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// export default withRegistrationType(PersonalForm);
export default PersonalForm;
