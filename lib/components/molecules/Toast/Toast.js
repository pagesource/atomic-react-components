/**
 *
 * Toast
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Toast.style';
import { ButtonVanilla as Button } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
// eslint-disable-line
import { ReactComponent as IconClose } from '../../../static/images/close.svg';

const Toast = ({ children, autoDismissTimeout, className, isVisible }) => {
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
            <Icon width="12px" height="12px" title="close icon" fill="#fff">
              <IconClose />
            </Icon>
          </Button>
          <div className="toast-text">{children}</div>
          {!!autoDismissTimeout && <span className="toast-loader" />}
        </div>
      )}
    </>
  );
};

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  autoDismissTimeout: PropTypes.number,
};

Toast.defaultProps = {
  autoDismissTimeout: 0,
};

const StyledToast = styled(Toast)`
  ${styles};
`;

export default StyledToast;

export { Toast as ToastVanilla };
