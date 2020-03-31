/**
 *
 * Textarea
 *
 */
// @flow
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import styles from './Textarea.style';

type Props = {
  id: string,
  className?: string,
  elementLocator?: string,
  title?: string,
  name: string,
  placeholder?: string,
  value?: string,
  resize?: string,
};

const Textarea = ({
  id,
  className,
  elementLocator,
  title,
  name,
  placeholder,
  value,
  resize,
  ...others
}: Props): Node => (
  <textarea
    {...others}
    id={id}
    className={className}
    name={name}
    title={title}
    placeholder={placeholder}
    defaultValue={value}
    resize={resize}
    data-locator={elementLocator || `textarea-input-${name}-${id}`}
  />
);

Textarea.defaultProps = {
  className: '',
  elementLocator: '',
  title: '',
  placeholder: '',
  value: '',
  resize: 'none',
};

const StyledTextArea: ComponentType<Props> = styled(Textarea)`
  ${styles};
`;

export default StyledTextArea;
export { Textarea as TextareaVanilla };
