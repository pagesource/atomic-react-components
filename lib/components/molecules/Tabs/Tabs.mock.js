import List from '../List';

const tabsContent = [
  {
    tabTitle: 'First tab',
    panelContent: (
      <List ListType="ol">
        <li>This is ordered list item, content of tab 1.</li>
        <li>This is ordered list item, content of tab 1.</li>
      </List>
    ),
  },
  {
    tabTitle: 'Second tab',
    panelContent: (
      <List ListType="ul">
        <li>This is unordered list item, content of tab 2.</li>
        <li>This is unordered list item, content of tab 2.</li>
      </List>
    ),
  },
];

const defaultTabs = {
  className: 'example',
  tabsContent: [...tabsContent],
  tabsId: 'default-tab',
  initialSelectedIndex: 0,
};

const verticalTabs = {
  className: 'example',
  tabsContent: [...tabsContent],
  tabsId: 'vertical-tab',
  initialSelectedIndex: 0,
  isVerticalView: true,
  tabWrapClassName: 'col-xs-6 col-md-4 col-lg-3',
  panelWrapClassName: 'col-xs-6 col-md-8 col-lg-9',
};

export { defaultTabs, verticalTabs };
