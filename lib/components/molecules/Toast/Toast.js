// @flow
/**
 *
 * Toast
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './Toast.style';
import type { Props } from './types';
import { ButtonVanilla as Button } from '../../atoms/Button';

const Toast = ({
  children,
  autoDismissTimeout,
  className,
  isVisible,
  variation,
  placement,
  autoDismiss,
}: Props): Node => {
  /*
   * showToast: state to manage the visibility of Toast
   * default is true
   */
  const [showToast, setshowToast] = useState(isVisible);

  useEffect(() => {
    // ... Use hooks
    /*
     * This function is dismissing the Toaster after some time interval if autodismiss is true
     */
    if (showToast && autoDismissTimeout > 0) {
      const timer = setTimeout(() => {
        console.log('Timer Called--->', autoDismissTimeout);
        setshowToast(false);
      }, autoDismissTimeout);
      () => clearTimeout(timer);
    }
  });

  /*
   * This function closes the Toast when close button inside the Toast gets clicked
   */
  const close = () => {
    setshowToast(false);
  };

  return (
    <>
      {showToast && (
        <div className={`${className} ${variation}`} variation={variation} placement={placement}>
          <Button className="toast-close" onClick={() => close()}>
            <img src="/images/close.svg" width="12px" alt="close button" />
          </Button>
          <div className="toast-text">{children}</div>
          {autoDismissTimeout ? <span className={`toast-loader ${variation}`} /> : null}
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  isVisible: true,
  autoDismissTimeout: 0,
  placement: 'top-right',
  variation: 'default',
  className: 'toast',
};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
