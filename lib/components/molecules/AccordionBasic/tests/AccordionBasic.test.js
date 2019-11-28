import { shallow } from 'enzyme';
import {
  accordionType1,
  accordionType2,
  accordionType3,
} from '../AccordionBasic.mock';
import { unorderedList } from '../../List/List.mock';
import List from '../../List';
import AccordionBasic from '../AccordionBasic';

describe('<AccordionBasic />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<List ListType='ul' className='example' >
		    	<AccordionBasic className={`${accordionType1.className}`} title={`${accordionType1.title}`} value={`${accordionType1.value}`} isOpen={`${accordionType1.isOpen}`}/>
		    	<AccordionBasic className={`${accordionType2.className}`} title={`${accordionType2.title}`} value={`${accordionType2.value}`} isOpen={`${accordionType2.isOpen}`}/>
		    	<AccordionBasic className={`${accordionType3.className}`} title={`${accordionType3.title}`} value={`${accordionType3.value}`} isOpen={`${accordionType3.isOpen}`}/>
			</List>
		);
	});

  test('should render a <ul />', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  test('should render a <details />', () => {
    expect(wrapper.find('details').length).toEqual(1);
  });

  test('should render a <summary />', () => {
    expect(wrapper.find('summary').length).toEqual(1);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
