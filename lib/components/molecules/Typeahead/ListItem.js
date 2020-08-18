/**
 *
 * ListItem
 *
 */
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';

const ListItem = ({
  children,
  index,
  activeResult,
  handleClick,
  item,
  onMouseEnter,
  onMouseDown,
}) => {
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

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  activeResult: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
};

export default ListItem;
