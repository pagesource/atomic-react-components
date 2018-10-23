const inputRadio = {
  name: 'test_1',
  id: 'test_1',
  value: 'yes',
  label: 'Default InputRadio',
};

const defaultCheckedInputRadio = {
  name: 'test_1',
  id: 'test_2',
  value: 'defaultChecked',
  checked: true,
  label: 'default checked',
};

const disabledInputRadio = {
  name: 'test_1',
  id: 'test_3',
  value: 'disabled',
  label: 'disabled',
  disabled: true,
};

const inputRadioWithLabelBeforeInput = {
  name: 'test_1',
  id: 'test_4',
  value: true,
  label: 'InputRadio with label before input',
  showLabelBeforeInput: true,

};

export {
  inputRadio,
  defaultCheckedInputRadio,
  disabledInputRadio,
  inputRadioWithLabelBeforeInput,
};
