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
  marginBtnCls: 'margin: 0 1rem 0 0',
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
  marginBtnCls: 'margin: 1rem 0 1rem 0',
  contentWRTCTAButtons: 'displayColumn',
};

export { stickyCookieDisclaimer, stickyCookieTypeSec };
