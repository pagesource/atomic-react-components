// @flow
/**
 *
 * ListItem
 *
 */
import classNames from 'classnames';

import type { ListItemProps } from './types';

// eslint-disable-next-line react/prop-types
const ListItem = ({
  children,
  index,
  activeSuggestion,
  name,
  handleClick,
  item,
}: ListItemProps) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <li
    className={classNames({ active: index === activeSuggestion })}
    key={`typeahead-${name}-${index.toString()}`}
    onClick={() => handleClick(item)}
    onKeyDown={() => {}}
  >
    {children}
  </li>
);

export default ListItem;
