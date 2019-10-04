import { action } from '@storybook/addon-actions';
import Label from '../../atoms/Label';
import { ButtonVanilla } from '../../atoms/Button';

const defaultConfig = {
  tootTipContent: 'Tool Tip Message to show on label with image Icon',
  showImage: true,
  domElement: <Label>Text message with Image Icon</Label>,
};

const noImageConfig = {
  tootTipContent: 'Tool Tip Message to show without image Icon...',
  domElement: <Label>Text message without image Icon</Label>,
};

const buttonSubmit = {
  tootTipContent: 'Click to Submit',
  domElement: <ButtonVanilla {...{ onClick: action('clicked') }}>Submit</ButtonVanilla>,
};

const buttonSubmitDisabled = {
  tootTipContent: "You don't have permission to sumbit.",
  domElement: (
    <ButtonVanilla {...{ disabled: true, onClick: action('clickedDisable') }}>
      Submit(Disabled)
    </ButtonVanilla>
  ),
};

export { defaultConfig, noImageConfig, buttonSubmit, buttonSubmitDisabled };
