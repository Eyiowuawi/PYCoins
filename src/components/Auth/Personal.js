import Input from "../UI/Input";
import Button from "../UI/Button";
import AuthFooter from "./AuthFooter";

const title = "Already have an account?";
const linkTitle = "Login";
const link = "/login";
const PersonalInfo = ({ personalform, formSubmit }) => {
  let formArr = [];

  for (let key in personalform) {
    formArr.push({
      id: key,
      config: personalform[key],
    });
  }

  const form = formArr.map(({ id, config }) => (
    <Input
      key={id}
      value={config.value}
      type={config.type}
      elementType={config.elementType}
      placeholder={config.placeholder}
      info={config.info}
      svg={config.image}
    />
  ));

  return (
    <>
      <h3 className="title title-black">Personal Information</h3>
      <p className="ta mt-small title title-grey">
        Password it's at least 8 characters including a number, special
        character and an uppercase letter.
      </p>
      <form onSubmit={formSubmit} className="form mt-small">
        {form}
        <Button type="submit">Create Account</Button>
      </form>
      <AuthFooter title={title} linkTitle={linkTitle} link={link} />
    </>
  );
};

export default PersonalInfo;
