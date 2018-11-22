import { action } from '@storybook/addon-actions';

const defaultConfig = {
  linkList: [
    {
      className: 'breadcrumb-link',
      to: 'https://nextjs.org/',
      handleLinkClick: action('clicked'),
      children: 'Link 1',
    },
    {
      className: 'breadcrumb-link',
      to: 'https://nextjs.org/',
      handleLinkClick: action('clicked'),
      children: 'Link 2',
    },
    {
      className: 'breadcrumb-link',
      to: 'https://nextjs.org/',
      handleLinkClick: action('clicked'),
      children: 'Link 3',
    },
  ],
};

export default defaultConfig;
