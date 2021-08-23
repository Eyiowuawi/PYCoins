import { useState } from "react";
import useBusinessForm from "../../hooks/businessform";
import usePersonalForm from "../../hooks/personalform";
import PersonalForm from "../../components/Auth/Personal";
import VerifyMsg from "./Verify";
import Indicator from "../../components/UI/Indicator";
import Business from "../../components/Auth/Business";
import AuthFooter from "./../../components/Auth/AuthFooter";
import withRegistrationType from "../../hoc/registerType";
import useBusinessPage from "../../hooks/businessPage";

const title = "Already have an account?";
const linkTitle = "Login";
const link = "/auth/login";

const BusinessForm = () => {
  const [
    businessForm,
    setBusinessForm,
    businessFormValid,
    setBusinessFormVallid,
  ] = useBusinessForm();
  const [
    personalForm,
    setPersonalForm,
    personalFormValid,
    setPersonalFormValid,
  ] = usePersonalForm();
  const [show_1, setShow_1, show_2, setShow_2, page, setPage] =
    useBusinessPage();

  console.log(businessForm);

  const handleChangeForm = (evt) => {
    evt.preventDefault();
    setShow_1(true);
    setPage("Personal");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setShow_2(true);
    setPage("Success");
  };

  return (
    <div className="business">
      <Indicator show_1={show_1} show_2={show_2} />
      <div className="auth_form">
        <div className="auth_form-container">
          {page === "" && (
            <Business
              businessForm={businessForm}
              handleSubmit={handleChangeForm}
              businessFormUpdate={setBusinessForm}
              businessFormValid={businessFormValid}
              setBusinessFormVallid={setBusinessFormVallid}
            >
              <AuthFooter title={title} linkTitle={linkTitle} link={link} />
            </Business>
          )}
          {show_1 && page === "Personal" && (
            <PersonalForm
              personalform={personalForm}
              formSubmit={handleFormSubmit}
              personalFormUpdate={setPersonalForm}
              formValid={personalFormValid}
              formValidFunc={setPersonalFormValid}
            />
          )}
          {show_2 && <VerifyMsg />}
        </div>
      </div>
    </div>
  );
};

// export default withRegistrationType(BusinessForm);
export default BusinessForm;
