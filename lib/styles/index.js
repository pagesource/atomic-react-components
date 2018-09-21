import { injectGlobal } from 'styled-components';
import globalStyles from './globalStyles';
import typography from './typography';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${typography}
  ${globalStyles}
`;
