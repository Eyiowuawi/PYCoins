import Button from "../UI/Button";
import Input from "../UI/Input";

import upload from "../../assets/upload.svg";
import formGenerator from "../../utils/formgenerator";

const Business = ({ businessForm, handleSubmit, children }) => {
  const form = formGenerator(businessForm);
  return (
    <>
      <h3 className="title title-black ta">Business Information</h3>
      <form className="mt-small">
        {form}
        <input id="upload" type="file" className="form_upload-input" />
        <label htmlFor="upload" className="form_upload-label">
          <span>Upload Business Incorporation Document</span>
          <img src={upload} alt="Upload Document" />
        </label>
        <Button bg={"button_primary"} onclick={handleSubmit}>
          Continue
        </Button>
      </form>
      {children && children}
    </>
  );
};

export default Business;