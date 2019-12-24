// @flow

export type cookieDisclaimerProps = {
  children: Node,
  showDisclaimer?: boolean,
  acceptBtn: {
    text?: string,
  },
  rejectBtn: {
    rbText?: string,
  },
  marginBtnCls: string,
  contentWRTButtons?: string,
  cookieDetails?: Object,
  onClick: Function,
};
