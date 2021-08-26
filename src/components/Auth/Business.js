import Button from "../UI/Button";
import Input from "../UI/Input";

import upload from "../../assets/upload.svg";
import formGenerator from "../../utils/formgenerator";

const Business = ({
  businessForm,
  handleSubmit,
  children,
  businessFormUpdate,
  businessFormValid,
  setBusinessFormVallid,
}) => {
  const form = formGenerator(
    businessForm,
    businessFormUpdate,
    setBusinessFormVallid
  );
  return (
    <>
      <h3 className="title title-black ta">Business Information</h3>
      <form className="mt-small" onSubmit={handleSubmit}>
        {form}

        <Button
          disabled={businessFormValid}
          bg={"button_primary"}
          type={"submit"}
        >
          Continue
        </Button>
      </form>
      {children && children}
    </>
  );
};

export default Business;
