import Input from "../UI/Input";
import Button from "../UI/Button";
import AuthFooter from "./AuthFooter";
import formGenerator from "./../../utils/formgenerator";

const title = "Already have an account?";
const linkTitle = "Login";
const link = "/auth/login";
const PersonalInfo = ({ personalform, formSubmit }) => {
  const form = formGenerator(personalform);

  return (
    <>
      <h3 className="title title-black ta">Personal Information</h3>
      <p className="ta mt-small title title-grey">
        Password it's at least 8 characters including a number, special
        character and an uppercase letter.
      </p>
      <form onSubmit={formSubmit} className="form mt-small">
        {form}
        <Button bg={"button_primary"} type="submit">
          Create Account
        </Button>
      </form>
      <AuthFooter title={title} linkTitle={linkTitle} link={link} />
    </>
  );
};

export default PersonalInfo;
