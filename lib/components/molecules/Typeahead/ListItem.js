// @flow
/**
 *
 * ListItem
 *
 */
import classNames from 'classnames';

import type { ListItemProps } from './types';
import Button from '../../atoms/Button';

const ListItem = ({
  children,
  index,
  activeResult,
  handleClick,
  item,
  onMouseEnter,
  onMouseDown,
}: ListItemProps) => {
  const isSelectedItem = index === activeResult;

  return (
    <li
      className={classNames({ active: isSelectedItem })}
      role="option"
      id={isSelectedItem && 'selectedOption'}
      aria-selected={isSelectedItem}
    >
      <Button
        fullWidth
        transparent
        onClick={() => handleClick(item)}
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDown}
      >
        {children}
      </Button>
    </li>
  );
};

export default ListItem;
