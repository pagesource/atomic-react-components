import { action } from '@storybook/addon-actions';

const defaultAnchor = {
  className: 'example',
  to: 'https://nextjs.org/',
  handleLinkClick: action('clicked'),
};

const secondaryAnchor = {
  className: 'example',
  to: 'https://nextjs.org/',
  handleLinkClick: action('clicked'),
  secondary: true,
};

export { secondaryAnchor, defaultAnchor };
