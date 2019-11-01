/**
 *
 * Textarea
 *
 */
// @flow
import type { Node } from 'react';
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
    id={id}
    className={className}
    name={name}
    title={title}
    placeholder={placeholder}
    defaultValue={value}
    resize={resize}
    data-locator={elementLocator || `textarea-input-${name}-${id}`}
    {...others}
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

export default styled(Textarea)`
  ${styles};
`;
export { Textarea as TextareaVanilla };
