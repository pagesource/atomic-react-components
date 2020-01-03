import { css } from 'styled-components';

const styles = css`
  header {
    position: ${props => (props.heroImageWidth === '100%' ? 'relative' : 'static')};
    display: ${props => (props.heroImageWidth === '100%' ? 'block' : 'flex')};
    ${props => (props.renderExternalContent ? '' : props.theme.colors.TOGGLE_SWITCH)};
  }

  .image {
    flex-basis: ${props => (props.heroImageWidth ? props.heroImageWidth : '50%')};
  }

  .children {
    ${props => props.theme.colors.TEXT_DEFAULT};
    text-align: center;
    position: ${props => (props.heroImageWidth === '100%' ? 'absolute' : 'static')};
    ${props => (props.heroImageWidth === '100%' ? 'left:50%' : '')};
    ${props => (props.heroImageWidth === '100%' ? 'top:50%' : '')};
    padding: 10px;
    flex-basis: ${props => (props.childrenContainerWidth ? props.childrenContainerWidth : '50%')};
    transform: ${props => (props.heroImageWidth === '100%' ? 'translate(-50%, -50%)' : '')};
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
