// @flow
/**
 *
 * Toast
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Toast.style';
import type { Props } from './types';
import { ButtonVanilla as Button } from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const Toast = ({ children, autoDismissTimeout, className, isVisible }: Props): Node => {
  /*
   * showToast: state to manage the visibility of Toast
   * default is true
   */
  const [showToast, setShowToast] = React.useState(isVisible);

  React.useEffect(() => {
    // ... Use hooks
    /*
     * This function is dismissing the Toaster after some time interval if autodismiss is true
     */
    if (showToast && autoDismissTimeout > 0) {
      setTimeout(() => {
        setShowToast(false);
      }, autoDismissTimeout);
    }
  });

  /*
   * This function closes the Toast when close button inside the Toast gets clicked
   */
  const close = () => {
    setShowToast(!showToast);
  };

  return (
    <>
      {showToast && (
        <div className={classnames('toast', className)}>
          <Button className="toast-close" onClick={close}>
            <Icon id="closewhite" width="12px" height="12px" title="close icon" color="#fff" />
          </Button>
          <div className="toast-text">{children}</div>
          {!!autoDismissTimeout && <span className="toast-loader" />}
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  autoDismissTimeout: 0,
  placement: 'top-right',
};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
