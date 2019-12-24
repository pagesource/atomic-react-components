import { action } from '@storybook/addon-actions';

const stickyCookieDisclaimer = {
  showDisclaimer: true,
  acceptBtn: {
    text: 'Accept & Continue',
  },
  rejectBtn: {
    rbText: 'Decline',
  },
  contentWRTButtons: 'displayRow',
  marginBtnCls: 'margin: 0 1rem 0 0',
  onClick: action('clicked'),
  cookieDetails: {
    cookieKey: 'USER_CONSENT',
    expiryDays: 30,
  },
};

const stickyCookieTypeSec = {
  showDisclaimer: true,
  acceptBtn: {
    text: 'Accept & Continue',
  },
  rejectBtn: {
    rbText: 'Decline',
  },
  marginBtnCls: 'margin: 0 1rem 0 0',
  contentWRTButtons: 'displayColumn',
  cookieDetails: {
    cookieKey: 'USER_CONSENT',
    expiryDays: 30,
  },
};

export { stickyCookieDisclaimer, stickyCookieTypeSec };
