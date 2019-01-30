import { action } from '@storybook/addon-actions';

const defaultConfig = {
  className: 'example',
  isOpen: true,
  preferPlace: 'right',
  place: 'row',
  onOuterAction: action('clicked'),
  body: [<h2 key="a">Popover Title</h2>, <div key="b">Popover contents</div>],
};

export default defaultConfig;
