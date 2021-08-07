import { Copy, View } from "./../../icons/index";
import ActionLabel from "./../UI/ActionLabel";
import Input from "./../UI/Input";
import Button from "./../UI/Button";

const Webhooks = () => {
  return (
    <div className="general">
      <div>
        <h3 className="title title-black">API Configuration - Live Mode </h3>
        <form className="general_form">
          <div className="general_form-group ">
            <label className="title title-grey">Live Secret key</label>
            <ActionLabel text="******************************">
              <View />
            </ActionLabel>
          </div>
          <div className="general_form-group">
            <label className="title title-grey">Live Public Key</label>
            <ActionLabel text="sD93r4H6ti519kM+u87I6On00S3k4r6pGsWnBCf">
              <Copy fill="#909198" />
            </ActionLabel>
          </div>
          <div className="general_form-group">
            <label className="title title-grey">Live Callback URL</label>
            <Input
              value=""
              type="text"
              elementType="input"
              placeholder="Live Webooks URL"
            />
          </div>
          <div className="general_form-group">
            <label className="title title-grey">Live Webhooks URL</label>
            <Input
              value=""
              type="text"
              elementType="input"
              placeholder="Live Webooks URL"
            />
          </div>
          <Button bg={"button_primary"}>Save Changes</Button>
        </form>
      </div>
      <div className="mt-small">
        <h3 className="title title-black">API Configuration - Test Mode </h3>
        <form className="general_form">
          <div className="general_form-group ">
            <label className="title title-grey">Test Secret key</label>
            <ActionLabel text="******************************">
              <View />
            </ActionLabel>
          </div>
          <div className="general_form-group">
            <label className="title title-grey">Test Public Key</label>
            <ActionLabel text="sD93r4H6ti519kM+u87I6On00S3k4r6pGsWnBCf">
              <Copy fill="#909198" />
            </ActionLabel>
          </div>
          <div className="general_form-group">
            <label className="title title-grey">Test Callback URL</label>
            <Input
              value=""
              type="text"
              elementType="input"
              placeholder="Test Webooks URL"
            />
          </div>
          <div className="general_form-group">
            <label className="title title-grey">Test Webhooks URL</label>
            <Input
              value=""
              type="text"
              elementType="input"
              placeholder="Test Webooks URL"
            />
          </div>
          <Button bg={"button_primary"}>Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default Webhooks;
