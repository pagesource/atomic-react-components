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
  contentWRTCTAButtons: 'displayRow',
  onClick: action('clicked'),
};

const stickyCookieTypeSec = {
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
  contentWRTCTAButtons: 'displayColumn',
};

export { stickyCookieDisclaimer, stickyCookieTypeSec };
