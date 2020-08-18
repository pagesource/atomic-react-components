import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from '../../../core/utils/noop';
import styles from './Modal.style';

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  closeTimeoutMS,
  style,
  contentLabel,
  portalClassName,
  overlayClassName,
  className,
  bodyOpenClassName,
  htmlOpenClassName,
  ariaHideApp,
  shouldFocusAfterRender,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  shouldReturnFocusAfterClose,
  role,
  parentSelector,
  aria,
  overlayRef,
  contentRef,
  ...others
}) => (
  <ReactModal
    {...others}
    isOpen={isOpen}
    onAfterOpen={onAfterOpen}
    onRequestClose={onRequestClose}
    closeTimeoutMS={closeTimeoutMS}
    style={style}
    contentLabel={contentLabel}
    portalClassName={portalClassName}
    overlayClassName={overlayClassName}
    className={className}
    bodyOpenClassName={bodyOpenClassName}
    htmlOpenClassName={htmlOpenClassName}
    ariaHideApp={ariaHideApp}
    shouldFocusAfterRender={shouldFocusAfterRender}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    shouldCloseOnEsc={shouldCloseOnEsc}
    shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
    role={role}
    parentSelector={parentSelector}
    aria={aria}
    overlayRef={overlayRef}
    contentRef={contentRef}
  />
);

Modal.propTypes = {
  // Boolean describing if the modal should be shown or not.
  isOpen: PropTypes.bool,
  // Function that will be run after the modal has opened.
  onAfterOpen: PropTypes.func,
  // Function that will be run when the modal is requested to be closed on user action.
  onRequestClose: PropTypes.func,
  // Number indicating the milliseconds to wait before closing the modal.
  closeTimeoutMS: PropTypes.number,
  // Object indicating styles to be used for the modal.It has two keys, `overlay` and `content`.
  style: PropTypes.objectOf(PropTypes.object),
  // String indicating how the content container should be announced to screen readers
  contentLabel: PropTypes.string,
  // String className to be applied to the portal.
  portalClassName: PropTypes.string,
  // String className to be applied to the overlay
  overlayClassName: PropTypes.string,
  // String className to be applied to the modal content.
  className: PropTypes.string,
  // String className to be applied to the document.body (must be a constant string).
  bodyOpenClassName: PropTypes.string,
  // String className to be applied to the document.html (must be a constant string).
  htmlOpenClassName: PropTypes.string,
  // Boolean indicating if the appElement should be hidden
  ariaHideApp: PropTypes.bool,
  // Boolean indicating if the modal should be focused after render
  shouldFocusAfterRender: PropTypes.bool,
  // Boolean indicating if the overlay should close the modal
  shouldCloseOnOverlayClick: PropTypes.bool,
  // Boolean indicating if pressing the esc key should close the modal
  shouldCloseOnEsc: PropTypes.bool,
  // Boolean indicating if the modal should restore focus to the element that
  shouldReturnFocusAfterClose: PropTypes.bool,
  // String indicating the role of the modal.
  role: PropTypes.string,
  // Function that will be called to get the parent element that the modal will be attached to
  parentSelector: PropTypes.func,
  // Additional aria attributes (optional).eg{{ labelledBy: "heading"}}
  aria: PropTypes.objectOf(PropTypes.object),
  // Overlay ref callback.
  overlayRef: PropTypes.func,
  // Content ref callback.
  contentRef: PropTypes.func,
};

Modal.defaultProps = {
  onAfterOpen: noop,
  onRequestClose: noop,
  closeTimeoutMS: 0,
  style: {},
  contentLabel: '',
  portalClassName: '',
  overlayClassName: '',
  className: '',
  bodyOpenClassName: 'modalWrapper',
  htmlOpenClassName: '',
  ariaHideApp: false,
  shouldFocusAfterRender: true,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  shouldReturnFocusAfterClose: true,
  role: 'dialog',
  parentSelector: () => document && document.body,
  aria: {},
  overlayRef: null,
  contentRef: null,
  isOpen: false,
};

const StyledModal = styled(Modal)`
  ${styles};
`;

export default StyledModal;

export { Modal as ModalVanilla };
