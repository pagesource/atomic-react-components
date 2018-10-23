const checkbox = {
  name: 'test_1',
  id: 'test_1',
  value: 'yes',
  label: 'Default Checkbox',
};

const defaultCheckedCheckbox = {
  name: 'test_2',
  id: 'test_2',
  value: 'defaultChecked',
  checked: true,
  label: 'default checked',
};

const disabledCheckbox = {
  name: 'test_3',
  id: 'test_3',
  value: 'disabled',
  label: 'disabled',
  disabled: true,
};

const checkboxWithLabelBeforeInput = {
  name: 'test_4',
  id: 'test_4',
  value: true,
  label: 'Checkbox with label before input',
  showLabelBeforeInput: true,

};

export {
  checkbox,
  defaultCheckedCheckbox,
  disabledCheckbox,
  checkboxWithLabelBeforeInput,
};
