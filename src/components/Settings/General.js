import Avatar from "../../assets/avatar.svg";
import Input from "../UI/Input";
import Button from "./../UI/Button";

const General = () => {
  return (
    <div className="general">
      <h3 className="title title-black">Personal Information </h3>
      <div className="mt-small mb-small">
        <p className="title title-grey">Photo</p>
        <input type="file" accepts="image/*" id="photo" hidden />
        <div className="general_pic">
          <img src={Avatar} alt="avatar" />
          <label htmlFor="photo" className="general_upload">
            Change
          </label>
        </div>
      </div>
      <form className="mt-small general_form">
        <div className="general_form-group">
          <label className="title title-grey">Full Name</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="John Doe"
          />
        </div>
        <div className="general_form-group">
          <label className="title title-grey">Phone Number</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="+2348123456789"
          />
        </div>
        <div className="general_form-group">
          <label className="title title-grey">Email Address</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <Button bg={"button_primary"}>Save Changes</Button>
      </form>
      <h3 className="title title-black mt-small">Business Information</h3>
      <form className="mt-small general_form">
        <div className="general_form-group">
          <label>Business Name</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="Grazac Tech."
          />
        </div>
        <div className="general_form-group">
          <label>Business Phone No.</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="Grazac Tech."
          />
        </div>
        <div className="general_form-group">
          <label>Business Email</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="grazactechng@gmail.com"
          />
        </div>
        <div className="general_form-group">
          <label>Business Address</label>
          <Input
            value=""
            type="text"
            elementType="input"
            placeholder="No 45, Abeokuta, Ogun"
          />
        </div>
        <Button bg={"button_primary"}>Save Changes</Button>
      </form>
    </div>
  );
};

export default General;
