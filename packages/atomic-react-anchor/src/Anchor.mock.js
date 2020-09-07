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

const customLocatorOnAnchor = {
  className: 'example',
  to: 'https://nextjs.org/',
  handleLinkClick: action('clicked'),
  secondary: true,
  elementLocator: 'example-custom-link',
};

const openInNewTabAnchor = {
  className: 'example',
  to: 'https://nextjs.org/',
  handleLinkClick: action('clicked'),
  target: '_blank',
};

export { secondaryAnchor, defaultAnchor, customLocatorOnAnchor, openInNewTabAnchor };
