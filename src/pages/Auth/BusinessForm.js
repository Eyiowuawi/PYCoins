import { useState, useEffect } from "react";
import useBusinessForm from "../../hooks/businessform";
import usePersonalForm from "../../hooks/personalform";
import PersonalForm from "../../components/Auth/Personal";
import VerifyMsg from "./Verify";
import Indicator from "../../components/UI/Indicator";
import Business from "../../components/Auth/Business";
import AuthFooter from "./../../components/Auth/AuthFooter";
import withRegistrationType from "../../hoc/registerType";
import useBusinessPage from "../../hooks/businessPage";
import { useMutation } from "react-query";
import { registerUser } from "./../../services/auth/index";

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
  const { mutate, isLoading, isSuccess, data } = useMutation((data) =>
    registerUser(data)
  );

  useEffect(() => {
    if (isSuccess && data && data.status === "success") {
      setShow_2(true);
      setPage("success");
    }
  }, [isSuccess]);

  const handleChangeForm = (evt) => {
    evt.preventDefault();
    setShow_1(true);
    setPage("Personal");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData();
    for (let key in businessForm) {
      data.append(`${key}`, businessForm[key].value);
    }
    for (let key in personalForm) {
      data.append(`${key}`, personalForm[key].value);
    }
    data.append(`userType`, "business");
    mutate(data);
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
              <AuthFooter
                title={"Already have an account?"}
                linkTitle={"Login"}
                link={"/auth/login"}
              />
            </Business>
          )}
          {show_1 && page === "Personal" && (
            <PersonalForm
              personalform={personalForm}
              formSubmit={handleFormSubmit}
              personalFormUpdate={setPersonalForm}
              formValid={personalFormValid}
              formValidFunc={setPersonalFormValid}
              isLoading={isLoading}
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
