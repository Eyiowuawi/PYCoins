import Switch from "react-switch";
import { useState } from "react";

const Toggle = ({
  checked = false,
  toggle,
  param,
  disabled,
  height,
  width,
}) => {
  return (
    <label className="toggle">
      <Switch
        onChange={() => toggle(param)}
        checked={checked}
        offColor="#E4E8F1"
        onColor="#48D189"
        checkedIcon={false}
        uncheckedIcon={false}
        disabled={disabled}
        height={height}
        width={width}
      />
    </label>
  );
};

export default Toggle;
