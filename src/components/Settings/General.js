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
  updatePassword,
} from "./../../services/user";
import WithSmallLoader from "./../../hoc/withLoadingIndicator";
import { AppContext } from "./../../context/index";
import { logout, saveToLocalStorage } from "./../../services/auth";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const General = ({ profileimg, history }) => {
  const { saveUser, profile } = useContext(AppContext);
  const [
    personalForm,
    setPersonalForm,
    businessForm,
    setBusinessForm,
    personalFormValid,
    setPersonalFormValid,
    businessFormValid,
    setBusinessFormValid,
    changePasswordForm,
    setChangePasswordForm,
    changePasswordValid,
    setChangePasswordValid,
  ] = useGeneralForm(profile);

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

  const changePassword = settingsFormGenerator(
    changePasswordForm,
    setChangePasswordForm,
    setChangePasswordValid
  );

  const [image, setImage] = useState(null);
  const { mutate, isLoading, data } = useMutation(
    (img) => changeUserImage(img),
    {
      mutationKey: "change image",
      onSuccess: (data) => saveUser(data.data),
      onSettled: () => setImage(null),
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

  const {
    mutate: updatePasswordMutation,
    data: updatePasswordData,
    isLoading: updatePasswordLooading,
  } = useMutation((data) => updatePassword(data), {
    mutationKey: "change-password",
    onSuccess: (data) => saveToLocalStorage(data.token),
  });

  const handleChange = (evt) => {
    const param = new FormData();
    const value = evt.target.files[0];
    setImage(value);
    param.append("profileImage", value);
    mutate(param);
  };

  const handleUpdateUser = (evt) => {
    evt.preventDefault();
    let data = {};
    for (let key in personalForm) {
      if (personalForm[key].initialValue !== personalForm[key].value) {
        data[key] = personalForm[key].value;
      }
    }
    if (Object.values(data).length < 1)
      toast.info("Change any field to update your profile");
    else updateUserMutation(data);
  };

  const handleUpdateBusiness = (evt) => {
    evt.preventDefault();
    let data = {};
    for (let key in businessForm) {
      if (businessForm[key].initialValue !== businessForm[key].value) {
        data[key] = businessForm[key].value;
      }
    }
    if (Object.values(data).length < 1)
      toast.info("Change any field to update your profile");
    else updateUserMutation(data);
  };

  const handleUpdatePassword = (evt) => {
    evt.preventDefault();
    const data = {};
    data["currentPassword"] = changePasswordForm["currentPassword"].value;
    data["newPassword"] = changePasswordForm["password"].value;
    updatePasswordMutation(data);
  };

  return (
    <div className="general">
      <h3 className="title title-black">Personal Information </h3>
      <form className="mt-small mb-small">
        <p className="title title-grey">Photo</p>
        <input
          accept=".jpg, .jpeg, .png"
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
        <p className="title title-grey mt-small">{image?.name}</p>
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
      <>
        <h3 className="title title-black mt-small">Change Password</h3>
        <form className="mt-small settingsform" onSubmit={handleUpdatePassword}>
          {changePassword}
          <Button
            disabled={changePasswordValid}
            isLoading={updatePasswordLooading}
            type="submit"
            bg={"button_primary"}
          >
            Save Changes
          </Button>
        </form>
      </>
      {profile.user?.userType === "business" && (
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

export default withRouter(General);
