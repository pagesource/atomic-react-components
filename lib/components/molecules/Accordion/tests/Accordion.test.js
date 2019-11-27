import { shallow } from 'enzyme';

import Accordion from '../index';

describe('<Accordion />', () => {
	let Accordion = '';
	beforeEach(() => {
		Accordion = shallow(<Accordion>Test</Accordion>);
	});

	it('should render a <button />', () => {
		expect(Accordion.find('button').length).toEqual(1);
	});

	it('should render the accordion component', () => {
		expect(Accordion.containsMatchingElement(<Accordion />)).toEqual(true);
	});

	test('should render correctly', () => {
		expect(Accordion).toMatchSnapshot();
	});
});
