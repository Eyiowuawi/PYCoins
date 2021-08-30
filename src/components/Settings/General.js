import Avatar from "../../assets/avatar.svg";
import Input from "../UI/Input";
import Button from "./../UI/Button";
import useGeneralForm from "./../../hooks/generalform";
import SettingsForm from "./Form";
import { changeHandler, handleBlur } from "../../utils/changehandler";
import settingsFormGenerator from "./../../utils/settingsFormGenerator";
import { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  changeUserImage,
  userProfile,
  updateUserProfile,
  updateBusinessprofile,
} from "./../../services/user";
import WithSmallLoader from "./../../hoc/withLoadingIndicator";
import { AppContext } from "./../../context/index";

const General = ({ profileimg }) => {
  const [
    personalForm,
    setPersonalForm,
    businessForm,
    setBusinessForm,
    personalFormValid,
    setPersonalFormValid,
    businessFormValid,
    setBusinessFormValid,
  ] = useGeneralForm();

  const personal = settingsFormGenerator(
    personalForm,
    setPersonalForm,
    setPersonalFormValid
  );

  const business = settingsFormGenerator(
    businessForm,
    setBusinessForm,
    setBusinessFormValid
  );

  const { saveUser, user } = useContext(AppContext);

  const { mutate, isLoading, data } = useMutation(
    (img) => changeUserImage(img),
    {
      mutationKey: "change image",
      onSuccess: (data) => saveUser(data.data),
    }
  );

  const {
    mutate: updateUserMutation,
    data: updateUserData,
    isLoading: updateUserLoading,
  } = useMutation((data) => updateUserProfile(data), {
    onSuccess: (data) => saveUser(data.data),
  });

  const {
    mutate: upateBusinessMutation,
    data: updateBusinessData,
    isLoading: updateBusinessLoading,
  } = useMutation((data) => updateBusinessprofile(data), {
    onSuccess: (data) => saveUser(data.data),
  });

  const handleChange = (evt) => {
    const param = new FormData();
    const value = evt.target.files[0];

    param.append("profileImage", value);
    mutate(param);
  };

  const handleUpdateUser = (evt) => {
    evt.preventDefault();
    let data = {};
    for (let key in personalForm) data[key] = personalForm[key].value;
    updateUserMutation(data);
  };

  const handleUpdateBusiness = (evt) => {
    evt.preventDefault();
    let data = {};
    for (let key in businessForm) data[key] = businessForm[key].value;
    updateUserMutation(data);
  };
  return (
    <div className="general">
      <h3 className="title title-black">Personal Information </h3>
      <form className="mt-small mb-small">
        <p className="title title-grey">Photo</p>
        <input
          accep=".jpg, .jpeg, .png"
          type="file"
          accepts="image/*"
          id="photo"
          hidden
          onChange={handleChange}
        />
        <WithSmallLoader isLoading={isLoading}>
          <div className="general_pic">
            <img src={profileimg ? profileimg : Avatar} alt="avatar" />
            <label htmlFor="photo" className="general_upload">
              Change
            </label>
          </div>
        </WithSmallLoader>
      </form>
      <form className="mt-small settingsform" onSubmit={handleUpdateUser}>
        {personal}
        <Button
          disabled={personalFormValid}
          isLoading={updateUserLoading}
          type="submit"
          bg={"button_primary"}
        >
          Save Changes
        </Button>
      </form>
      {user.userType === "business " && (
        <>
          <h3 className="title title-black mt-small">Business Information</h3>
          <form
            className="mt-small settingsform"
            onSubmit={handleUpdateBusiness}
          >
            {business}
            <Button
              disabled={businessFormValid}
              type="submit"
              bg={"button_primary"}
              isLoading={updateBusinessLoading}
            >
              Save Changes
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default General;
