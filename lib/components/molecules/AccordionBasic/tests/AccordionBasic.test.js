import { shallow } from 'enzyme';

import AccordionBasic from '../index';

describe('<AccordionBasic />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AccordionBasic />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <details /> tag', () => {
    expect(wrapper.find('details').length).toEqual(1);
  });

  it('should render a <summary /> tag', () => {
    expect(wrapper.find('summary').length).toEqual(1);
  });


  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
