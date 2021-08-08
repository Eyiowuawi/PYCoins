import { useState } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Primary from "../UI/Label";
import Button from "../UI/Button";
import Created from "./Created";
import formGenerator from "../../utils/formgenerator";
const PaymentForm = ({ paymentForm, closeForm }) => {
  const [success, setSuccess] = useState(false);
  // const formArr = [];
  // for (let key in paymentForm) {
  //   formArr.push({
  //     id: key,
  //     config: paymentForm[key],
  //   });
  // }

  // const form = formArr.map(({ id, config }) => (
  //   <Input
  //     key={id}
  //     value={config.value}
  //     type={config.type}
  //     elementType={config.elementType}
  //     placeholder={config.placeholder}
  //     options={config.options}
  //   />
  // ));
  const form = formGenerator(paymentForm);

  return (
    <Modal close={closeForm}>
      {!success && (
        <>
          <h3 className="title title-black">Payment Page</h3>
          <form className="mt-small">
            {form}
            <div className="payment_amount mb-small">
              <Primary
                id={"fixed"}
                title="Fixed Amout"
                name={"amount"}
                type="radio"
              />
              <Primary
                id={"custom"}
                title="Custom Amout Amout"
                name={"amount"}
                type="radio"
              />
            </div>
            <Input
              value={""}
              type={"number"}
              elementType={"input"}
              placeholder={"Enter Amount"}
            />
            <Button bg={"button_primary"} onclick={() => setSuccess(true)}>
              Create Page
            </Button>
          </form>
        </>
      )}
      {success && <Created />}
    </Modal>
  );
};

export default PaymentForm;
