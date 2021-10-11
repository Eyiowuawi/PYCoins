import Switch from "react-switch";

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
        // offHandleColor="#ff0000"
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
