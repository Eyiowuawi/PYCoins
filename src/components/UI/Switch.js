import Switch from "react-switch";
import { useState } from "react";

const Toggle = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label className="toggle">
      <Switch
        onChange={handleChange}
        checked={checked}
        offColor="#E4E8F1"
        onColor="#48D189"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </label>
  );
};

export default Toggle;
