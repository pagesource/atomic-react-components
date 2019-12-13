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
}: Props): Node => {
  /*
   * showToast: state to manage the visibility of Toast
   * default is true
   */
  const [showToast, setShowToast] = useState(isVisible);

  useEffect(() => {
    // ... Use hooks
    /*
     * This function is dismissing the Toaster after some time interval if autodismiss is true
     */
    if (showToast && autoDismissTimeout > 0) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, autoDismissTimeout);
    }
  });

  /*
   * This function closes the Toast when close button inside the Toast gets clicked
   */
  const close = () => {
    setShowToast(false);
  };

  return (
    <>
      {showToast && (
        <div className={`${className} ${variation}`}>
          <Button className="toast-close" onClick={() => close()}>
            <img src="/images/close.svg" width="12px" alt="close button" />
          </Button>
          <div className="toast-text">{children}</div>
          {autoDismissTimeout && <span className={`toast-loader ${variation}`} />}
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  autoDismissTimeout: 0,
  placement: 'top-right',
  variation: 'info',
  className: 'toast',
};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
