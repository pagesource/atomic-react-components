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

const openInNewTabAnchor = {
  className: 'example',
  to: 'https://nextjs.org/',
  handleLinkClick: action('clicked'),
  target: '_blank',
};

export { secondaryAnchor, defaultAnchor, openInNewTabAnchor };
