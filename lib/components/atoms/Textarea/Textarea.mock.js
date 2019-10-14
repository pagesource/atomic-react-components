const defaultTextarea = {
  id: 'defaultTextarea',
  name: 'defaultTextarea',
  value: 'Default Text',
};

const textareaWithPlaceholder = {
  id: 'textareaWithPlaceholder',
  name: 'textareaWithPlaceholder',
  placeholder: 'Please enter text here',
};

const textareaWithCustomElementLocator = {
  id: 'textareaWithCustomElementLocator',
  name: 'textareaWithCustomElementLocator',
  placeholder: 'Please enter text here',
  elementLocator: 'my-custom-textarea',
};

const disabledTextarea = {
  id: 'disabledTextarea',
  name: 'disabledTextarea',
  disabled: true,
};

export {
  defaultTextarea,
  textareaWithPlaceholder,
  textareaWithCustomElementLocator,
  disabledTextarea,
};
