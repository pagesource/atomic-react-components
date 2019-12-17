// @flow

export type cookieDisclaimerProps = {
  children: Node,
  acceptBtn: {
    type: Object,
    text?: string,
  },
  rejectBtn: {
    rbType: Object,
    rbText?: string,
  },
  contentWRTCTAButtons?: string,
  onClick: Function,
};
