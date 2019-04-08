const defaultVisiblePopover = {
  className: 'example',
  popOverHeader: `This is a popover header text`,
  trigger: <button>Click to Open</button>,
  isVisible: true,
};

const hiddenPopover = {
  className: 'example',
  popOverHeader: `This is a popover header text`,
  trigger: <button>Click to Open</button>,
  isVisible: false,
};

const ListPopover = {
  className: 'example',
  popOverHeader: `This is a popover header text`,
  trigger: <button>Click to Open</button>,
};

const noCloseBtnPopover = {
  className: 'example',
  popOverHeader: `This is a popover header text`,
  trigger: <button>Click to Open</button>,
  isVisible: false,
  hidePopoverCloseBtn: true,
};

export { defaultVisiblePopover, hiddenPopover, ListPopover, noCloseBtnPopover };
