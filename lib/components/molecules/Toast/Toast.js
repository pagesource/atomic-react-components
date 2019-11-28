// @flow
/**
 *
 * Toast
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import styles from './Toast.style';
import type { Props } from './types';

const Toast = ({ children, autoDismissTimeout, className, isVisible }: Props): Node => {
  /*
   * showToast: state to manage the visibility of Toast
   * default is true
   */
  const [showToast, setshowToast] = useState(isVisible);
  //  console.log('test--->',);
  useEffect(() => {
    // ... Use hooks
    /*
     * This function is seeting the Toaster to load after some time interval
     */
    const timer = setTimeout(() => {
      setshowToast(false);
    }, autoDismissTimeout);
    return () => clearTimeout(timer);
  }, []);

  /*
   * This function closes the Toast when close button inside the Toast gets clicked
   */
  const close = () => {
    setshowToast(false);
  };

  return (
    <>
      {showToast && (
        <div className={className} showToast={showToast} autoDismissTimeout={autoDismissTimeout}>
          <button className="toast_close" onClick={() => close()}>
            &times;
          </button>
          <div className="toast_text">{children}</div>
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  isVisible: true,
  autoClose: false,
  className: '',
  autoDismissTimeout: 80000,
};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
