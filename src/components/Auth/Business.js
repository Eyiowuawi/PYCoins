import Button from "../UI/Button";
import Input from "../UI/Input";
import AuthFooter from "./AuthFooter";


import upload from "../../assets/upload.svg";
const title = "Already have an account?";
const linkTitle = "Login";
const link="/login"

const Business = ({ businessForm, handleSubmit }) => {
  const formArr = [];
  for (let key in businessForm) {
    formArr.push({
      id: key,
      config: businessForm[key],
    });
  }

  const form = formArr.map(({ key, config }) => (
    <Input
      value={config.value}
      type={config.type}
      elementType={config.elementType}
      placeholder={config.placeholder}
      key={config.key}
      options={config.options}
    />
  ));
  return (
    <>
      <h3 className="title title-black">Business Information</h3>

      <form className="mt-small">
        {form}
        <input id="upload" type="file" className="form_upload-input" />
        <label htmlFor="upload" className="form_upload-label">
          <span>Upload Business Incorporation Document</span>
          <img src={upload} alt="Upload Document" />
        </label>
        <Button onclick={handleSubmit}>Continue</Button>
      </form>
      <AuthFooter title={title} linkTitle={linkTitle} link={link}  />
    </>
  );
};

export default Business;
