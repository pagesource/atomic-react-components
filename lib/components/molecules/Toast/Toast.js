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
import defaultToast from './Toast.mock';
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
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setshowToast(false);
      }, autoDismissTimeout);
      return () => clearTimeout(timer);
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
        <div
          className={`${className} ${variation}`}
          variation={variation}
          placement={placement}
          autoDismissTimeout={autoDismissTimeout}
          autoDismiss={autoDismiss}
        >
          <Button className="toast-close" onClick={() => close()}>
            <img src="/images/close.svg" width="12px" alt="close button" />
          </Button>
          <div className="toast-text">{children}</div>
          <span
            className={
              'toast-loader ' + (`${autoDismiss}` ? 'toast-dismiss' : '') + ` ${variation}`
            }
            autoDismiss={autoDismiss}
          ></span>
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  isVisible: true,
  autoDismissTimeout: 3000,
  autoDismiss: true,
  placement: 'top-left',
  variation: 'default',
  className: 'toast',
};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
