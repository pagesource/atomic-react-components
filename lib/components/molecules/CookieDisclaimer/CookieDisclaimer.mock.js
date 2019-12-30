import { action } from '@storybook/addon-actions';

const stickyCookieDisclaimer = {
  acceptBtnText: 'Accept & Continue',
  rejectBtnText: 'Decline',
  onClick: action('clicked'),
  cookieDetails: {
    cookieName: 'USER_CONSENT',
    expiryDays: 365,
  },
};

export default stickyCookieDisclaimer;
