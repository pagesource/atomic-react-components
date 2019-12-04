import { css } from 'styled-components';

export default css`
  ${props => (!props.isVerticalView ? `.panels-wrap{${props.theme.border.CTA_TAB_PANEL};}` : '')};
  ${props =>
    props.isVerticalView ? `.panels-wrap{ ${props.theme.border.CTA_TAB_PANEL_VERTICAL};}` : ''};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
