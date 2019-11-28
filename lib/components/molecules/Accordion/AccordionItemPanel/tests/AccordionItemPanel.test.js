import { shallow } from 'enzyme';

import AccordionItemPanel from '../index';

describe('<AccordionItemPanel />', () => {
  let AccordionItemPanelComponent = '';
  beforeEach(() => {
    AccordionItemPanelComponent = shallow(<AccordionItemPanel>Test</AccordionItemPanel>);
  });

  test('should render correctly', () => {
    expect(AccordionItemPanelComponent).toMatchSnapshot();
  });
});
