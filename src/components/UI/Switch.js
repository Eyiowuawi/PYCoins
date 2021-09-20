import Switch from "react-switch";
import { useState } from "react";

const Toggle = ({ checked, toggleWallet, slug, disabled }) => {
  return (
    <label className="toggle">
      <Switch
        onChange={() => toggleWallet(slug)}
        checked={checked}
        offColor="#E4E8F1"
        onColor="#48D189"
        checkedIcon={false}
        uncheckedIcon={false}
        disabled={disabled}
      />
    </label>
  );
};

export default Toggle;
