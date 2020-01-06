import { mount } from 'enzyme';

import { TableVanilla } from '../index';

describe('Table', () => {
  let wrapper;
  let table;
  let thead;
  let headers;
  let tbody;
  let rows;
  const data = [
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, id: '1' },
    { name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9, id: '2' },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6, id: '3' },
    { name: 'Frozen yoghurt', calories: 159, fat: 6, carbs: 24, protein: 4, id: '5' },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9, id: '6' },
    { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, id: '7' },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3, id: '8' },
    { name: 'Jelly Bean', calories: 375, fat: 0, carbs: 94, protein: 0, id: '9' },
    { name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7, id: '10' },
    { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, id: '11' },
    { name: 'Marshmallow', calories: 318, fat: 0, carbs: 81, protein: 2, id: '12' },
    { name: 'Nougat', calories: 360, fat: 19, carbs: 9, protein: 37, id: '13' },
    { name: 'Oreo', calories: 437, fat: 18, carbs: 63, protein: 4, id: '14' },
  ];
  beforeEach(() => {
    wrapper = mount(
      <TableVanilla data={data}>
        <TableVanilla.Head dataMappingKey="name" key="name">
          Dessert (100g serving)
        </TableVanilla.Head>
        <TableVanilla.Head dataMappingKey="calories" key="calories">
          Calories
        </TableVanilla.Head>
        <TableVanilla.Head dataMappingKey="fat" key="fat">
          Fat (g)
        </TableVanilla.Head>
        <TableVanilla.Head dataMappingKey="carbs" key="carbs">
          Carbs (g)
        </TableVanilla.Head>
        <TableVanilla.Head dataMappingKey="protein" key="protein">
          Protein (g)
        </TableVanilla.Head>
      </TableVanilla>
    );
    table = wrapper.find('table');
    thead = table.find('thead');
    tbody = table.find('tbody');
    headers = thead.find('th');
    rows = tbody.find('tr');
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have table component', () => {
    expect(table.length).toEqual(1);
  });
  it('should have thead component', () => {
    expect(thead.length).toEqual(1);
  });
  it('should have tbody component', () => {
    expect(tbody.length).toEqual(1);
  });
  it('should have th is equal to number of columns', () => {
    expect(headers.length).toEqual(5);
  });
  it('should have tr is equal to number of data rows', () => {
    expect(rows).toHaveLength(data.length);
  });
  it('should loop through each row and check the content', () => {
    rows.forEach((tr, rowIndex) => {
      const cells = tr.find('td');
      expect(cells).toHaveLength(5);
      expect(cells.at(0).props().children).toEqual(data[rowIndex].name);
      expect(cells.at(1).props().children).toEqual(data[rowIndex].calories);
      expect(cells.at(2).props().children).toEqual(data[rowIndex].fat);
      expect(cells.at(3).props().children).toEqual(data[rowIndex].carbs);
      expect(cells.at(4).props().children).toEqual(data[rowIndex].protein);
    });
  });
});
