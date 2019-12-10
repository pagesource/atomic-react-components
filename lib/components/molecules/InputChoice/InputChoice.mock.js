const checkbox = {
  type: 'checkbox',
  name: 'test_1',
  id: 'checkbox_test_1',
  value: 'yes',
  label: 'Default Checkbox',
};

const defaultCheckedCheckbox = {
  type: 'checkbox',
  name: 'test_2',
  id: 'checkbox_test_2',
  value: 'defaultChecked',
  checked: true,
  label: 'default checked',
};

const disabledCheckbox = {
  type: 'checkbox',
  name: 'test_3',
  id: 'checkbox_test_3',
  value: 'disabled',
  label: 'disabled',
  disabled: true,
};

const checkboxWithLabelBeforeInput = {
  type: 'checkbox',
  name: 'test_4',
  id: 'checkbox_test_4',
  value: true,
  label: 'Checkbox with label before input',
  showLabelBeforeInput: true,
};

const checkboxHeader = {
  type: 'checkbox',
  name: 'test_5',
  id: 'checkbox_test_5',
  value: 'yes',
  label: '',
};

const inputRadio = {
  type: 'radio',
  name: 'test_1',
  id: 'radio_test_1',
  value: 'yes',
  label: 'Default InputRadio',
};

const defaultCheckedInputRadio = {
  type: 'radio',
  name: 'test_1',
  id: 'radio_test_2',
  value: 'defaultChecked',
  checked: true,
  label: 'default checked',
};

const disabledInputRadio = {
  type: 'radio',
  name: 'test_1',
  id: 'radio_test_3',
  value: 'disabled',
  label: 'disabled',
  disabled: true,
};

const inputRadioWithLabelBeforeInput = {
  type: 'radio',
  name: 'test_1',
  id: 'radio_test_4',
  value: true,
  label: 'InputRadio with label before input',
  showLabelBeforeInput: true,
};

export {
  checkbox,
  defaultCheckedCheckbox,
  disabledCheckbox,
  checkboxWithLabelBeforeInput,
  inputRadio,
  defaultCheckedInputRadio,
  disabledInputRadio,
  inputRadioWithLabelBeforeInput,
  checkboxHeader,
};
