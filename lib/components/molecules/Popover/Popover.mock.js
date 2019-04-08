import List from '../List';

const defaultVisiblePopover = {
  className: `example`,
  popOverHeader: `This is a popover header text`,
  popOverBody: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  isVisible: true,
};

const hiddenPopover = {
  className: `example`,
  popOverHeader: `This is a popover header text`,
  popOverBody: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  isVisible: false,
};

const ListPopover = {
  className: `example`,
  popOverHeader: `This is a popover header text`,
  popOverBody: (
    <div>
      <p>This text is from a paragraph element</p>
      <List ListType="ol">
        <li>This is ordered list item, content of tab 1.</li>
        <li>This is ordered list item, content of tab 1.</li>
      </List>
      <p>This is another random text</p>
    </div>
  ),
};

const noCloseBtnPopover = {
  className: `example`,
  popOverHeader: `This is a popover header text`,
  popOverBody: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  isVisible: false,
  hidePopoverCloseBtn: true,
};

export { defaultVisiblePopover, hiddenPopover, ListPopover, noCloseBtnPopover };
