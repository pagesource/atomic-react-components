import { action } from '@storybook/addon-actions';
import Label from '../../atoms/Label';
import { ButtonVanilla } from '../../atoms/Button';

const defaultImage = {
  src: 'https://image.freepik.com/free-icon/information-circle_318-27255.jpg',
  width: '20px',
  height: '20px',
  alt: 'Dummy Image',
};
const defaultConfig = {
  tootTipContent: 'Tool Tip Message to show on label with image Icon',
  image: { ...defaultImage },
  domElement: <Label>Text message with Image Icon </Label>,
  title: 'Tooltip Example',
};

const buttonSubmit = {
  tootTipContent: 'Click to Submit',
  domElement: <ButtonVanilla {...{ onClick: action('clicked') }}>Submit</ButtonVanilla>,
  title: 'Tooltip Example',
  image: { ...defaultImage },
};

const buttonSubmitDisabled = {
  tootTipContent: "You don't have permission to sumbit.",
  title: 'Tooltip Example',
  image: { ...defaultImage },
  domElement: (
    <ButtonVanilla {...{ disabled: true, onClick: action('clickedDisable') }}>
      Submit(Disabled)
    </ButtonVanilla>
  ),
};

export { defaultConfig, buttonSubmit, buttonSubmitDisabled };
