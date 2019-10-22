import { ButtonVanilla } from '../../atoms/Button';
import { AnchorVanilla } from '../../atoms/Anchor';

const defaultConfig = {
  tootTipContent: 'Tool Tip Message to show on label',
  trigger: <ButtonVanilla className="trigger-tooltip">ToolTip</ButtonVanilla>,
  close: <ButtonVanilla className="tooltip__close">Close</ButtonVanilla>,
  inheritedToolTipStyles: {
    border: '1px solid black;',
    'border-radius': '5px;',
    background: '#ddd;',
  },
};
/* eslint no-script-url: 0 */
const anchorConfig = {
  tootTipContent: 'Anchor tool tip content',
  trigger: <AnchorVanilla {...{ href: 'javascript:void(0);' }}>ToolTip Link</AnchorVanilla>,
  close: <ButtonVanilla className="tooltip__close">Close</ButtonVanilla>,
  inheritedToolTipStyles: {
    border: '1px solid black;',
    'border-radius': '5px;',
    background: '#ddd;',
  },
};

export { defaultConfig, anchorConfig };
