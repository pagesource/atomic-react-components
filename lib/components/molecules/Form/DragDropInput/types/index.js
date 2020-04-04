// @flow

export type DragDropInputProps = {
  id: string,
  register: Function,
  setValue: Function,
  className?: string,
  name: string,
  label: Node,
  labelProps?: Object,
  fieldProps?: Object,
  localeText: {
    btnTextPrimary: string,
    btnTextSecondary: string,
    dragHelperText?: string,
  },
  onChange?: Function,
  onBlur?: Function,
};
