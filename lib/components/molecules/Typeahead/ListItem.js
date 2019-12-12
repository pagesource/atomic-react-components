// @flow
/**
 *
 * ListItem
 *
 */
import classNames from 'classnames';

import type { ListItemProps } from './types';
import Button from '../../atoms/Button';

const ListItem = ({ children, index, activeResult, handleClick, item }: ListItemProps) => {
  const isSelectedItem = index === activeResult;

  return (
    <li>
      <Button
        transparent
        className={classNames({ active: isSelectedItem })}
        onClick={() => handleClick(item)}
        role="option"
        aria-selected={isSelectedItem}
      >
        {children}
      </Button>
    </li>
  );
};

export default ListItem;
