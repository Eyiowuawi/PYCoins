import Input from "../components/UI/Input";

const formGenerator = (formType) => {
  const formArr = [];
  for (let key in formType) {
    formArr.push({
      id: key,
      config: formType[key],
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
      options={config.options}
      label={config.label}
    />
  ));
  return form;
};

export default formGenerator;
