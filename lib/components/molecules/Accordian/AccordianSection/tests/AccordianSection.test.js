import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';

import AccordianSection from '../index';

describe('<AccordianSection />', () => {
  let AccordianComponent;

  beforeEach(() => {
    AccordianComponent = mount(<AccordianSection />);
  });

  test('Accordian should collapse correctly', () => {
    expect(AccordianComponent.find('.accordian-panel').length).toEqual(0);
  });
});
