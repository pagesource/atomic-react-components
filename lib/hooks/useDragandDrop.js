import { useState } from 'react';
import classNames from 'classnames';

import useOpenFileDialog from './useOpenFileDialog';

const useDragandDrop = () => {
  const [highlight, setHighlight] = useState(false);
  const { openFileDialog } = useOpenFileDialog();

  const fileListToArray = list => {
    const array = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  };

  const onDragOver = evt => {
    evt.preventDefault();
    setHighlight(true);
  };

  const onDragLeave = e => {
    e.preventDefault();
    setHighlight(false);
  };

  const onDrop = event => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    const array = fileListToArray(files);
    return array;
  };

  const onFilesAdded = evt => {
    const { files } = evt.target;
    const array = fileListToArray(files);
    return array;
  };

  const handleKeyPress = (evt, fileInput) => {
    if (evt.keyCode === 13) {
      openFileDialog(fileInput);
    }
  };

  const getHighlightClass = className => {
    const styleCls = classNames(className, {
      highlight,
    });
    return styleCls;
  };

  return {
    highlight,
    onDragOver,
    onDragLeave,
    onDrop,
    handleKeyPress,
    onFilesAdded,
    fileListToArray,
    getHighlightClass,
    setHighlight,
  };
};

export default useDragandDrop;
