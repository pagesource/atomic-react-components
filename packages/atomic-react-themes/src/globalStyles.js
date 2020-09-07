import modernCSSReset from './modernCSSReset';
import theme from './themes/base';

export default `

${modernCSSReset};

body {
  ${theme.typography.FONT_DEFAULT};
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

input[type=text]::-ms-clear {
  display: none;
}

@media (max-width: 767px){
  input,
  textarea{
    ${theme.typography.FONT_FIELD};
  }
}

/**
 *  Global Visibility Classes
 */
.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}

.sr-only {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  top: auto;
  width: auto;
  height: 20px;
  overflow: hidden;
  &.no-focusable{
    width:1px;
    visibility:hidden;
    &:focus{
      outline:none;
      border:none;
    }
  }
}
`;
