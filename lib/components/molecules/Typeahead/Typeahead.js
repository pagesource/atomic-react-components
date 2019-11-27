// @flow
/**
 *
 * Typeahead
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components';

import styles from './Typeahead.style';
import type { Props } from './types';
import { InputVanilla as Input } from '../../atoms/Input';
import { ListVanilla as List } from '../List/List';
import { unorderedList } from '../List/List.mock';

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => {
  return <li>{children}</li>;
};

const Typeahead = ({
  id,
  name,
  type,
  checked,
  disabled,
  children,
  onChange,
  handleChange,
  ...otherProps
}: Props): Node => {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <Input
        id={id}
        name={name}
        type={type}
        defaultChecked={checked}
        disabled={disabled}
        {...otherProps}
        onChange={e => {
          const { value } = e.currentTarget;
          setInputText(value);
          if (value.length >= 3) handleChange(e);
        }}
        value={inputText}
      />
      <List {...unorderedList}>
        <ListItem key={1}>This is list item</ListItem>
        <ListItem key={2}>This is list item</ListItem>
        <ListItem key={3}>This is list item</ListItem>
      </List>
    </div>
  );
};

Typeahead.defaultProps = {};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
