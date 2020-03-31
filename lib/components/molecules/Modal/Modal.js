// @flow
import React from 'react';
import ReactModal from 'react-modal';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import { noop } from '../../../core/utils/noop';
import styles from './Modal.style';

type Props = {
  // Boolean describing if the modal should be shown or not.
  isOpen: boolean,
  // Function that will be run after the modal has opened.
  onAfterOpen?: Function,
  // Function that will be run when the modal is requested to be closed on user action.
  onRequestClose?: Function,
  // Number indicating the milliseconds to wait before closing the modal.
  closeTimeoutMS?: number,
  // Object indicating styles to be used for the modal.It has two keys, `overlay` and `content`.
  style?: Object,
  // String indicating how the content container should be announced to screenreaders
  contentLabel?: string,
  // String className to be applied to the portal.
  portalClassName?: string,
  // String className to be applied to the overlay
  overlayClassName?: string,
  // String className to be applied to the modal content.
  className?: string,
  // String className to be applied to the document.body (must be a constant string).
  bodyOpenClassName?: string,
  // String className to be applied to the document.html (must be a constant string).
  htmlOpenClassName?: string,
  // Boolean indicating if the appElement should be hidden
  ariaHideApp?: boolean,
  // Boolean indicating if the modal should be focused after render
  shouldFocusAfterRender?: boolean,
  // Boolean indicating if the overlay should close the modal
  shouldCloseOnOverlayClick?: boolean,
  // Boolean indicating if pressing the esc key should close the modal
  shouldCloseOnEsc?: boolean,
  // Boolean indicating if the modal should restore focus to the element that
  shouldReturnFocusAfterClose?: boolean,
  // String indicating the role of the modal.
  role?: string,
  // Function that will be called to get the parent element that the modal will be attached to
  parentSelector?: Function,
  // Additional aria attributes (optional).eg{{ labelledby: "heading"}}
  aria?: Object,
  // Overlay ref callback.
  overlayRef?: Function,
  // Content ref callback.
  contentRef?: Function,
};

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
}: Props): Node => (
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
};

const StyledModal: ComponentType<Props> = styled(Modal)`
  ${styles};
`;

export default StyledModal;

export { Modal as ModalVanilla };
