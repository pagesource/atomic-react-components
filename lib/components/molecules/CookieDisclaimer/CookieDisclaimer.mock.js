import { action } from '@storybook/addon-actions';

const stickyCookieDisclaimer = {
  acceptBtn: {
    type: {
      primary: true,
    },
    text: 'Accept & Continue',
  },
  rejectBtn: {
    rbType: {
      tertiary: true,
    },
    rbText: 'Decline',
  },
  onClick: action('clicked'),
};

export { stickyCookieDisclaimer };
