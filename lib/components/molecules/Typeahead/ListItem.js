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
}: ListItemProps) => {
  const isSelectedItem = index === activeResult;

  return (
    <li className={classNames({ active: isSelectedItem })}>
      <Button
        fullWidth
        transparent
        onClick={() => handleClick(item)}
        role="option"
        aria-selected={isSelectedItem}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </Button>
    </li>
  );
};

export default ListItem;
