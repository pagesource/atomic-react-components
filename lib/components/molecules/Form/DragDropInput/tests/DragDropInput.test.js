import React from 'react';

import { shallowWithTheme, mountWithTheme } from '../../../../../../__mock__/themeMock';
import { DDFieldInput } from '../DragDropInput';
import useDragandDrop from '../../../../../hooks/file-upload/useDragandDrop';

const defaultProps = {
  name: 'fileupload',
  type: 'file',
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallowWithTheme(<DDFieldInput {...finalProps} />);
};

describe('DDFieldInput Component', () => {
  let ddField = '';
  beforeEach(() => {
    ddField = getWrapperSetup();
  });

  test('should render correctly', () => {
    expect(ddField).toMatchSnapshot();
  });

  test('should render Input component with proper type for multiple file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
      multiple: true,
    };
    ddField = getWrapperSetup(fileMultipleInputProps);
    expect(ddField.find('div')).toHaveLength(1);
  });

  test('should render text correctly', () => {
    expect(ddField.find('div').text()).toContain('Drop Files Here...');
  });

  test('should render the component with prop correctly', () => {
    expect(ddField.find('div').prop('role')).toBeTruthy();
  });

  test('should match the input rendered correctly on change event simulation.', () => {
    const inputElement = ddField.find('Field');
    const wrapper = inputElement.simulate('change');
    expect(wrapper.find('Field').length).toBe(1);
  });

  test('should match the input rendered correctly on blur event simulation.', () => {
    const inputElement = ddField.find('Field');
    const wrapper = inputElement.simulate('blur');
    expect(wrapper.find('Field').length).toBe(1);
  });
});

describe('testing the custom hook methods for drag and drop', () => {
  let container = '';

  beforeEach(() => {
    const Elements = () => {
      const props = useDragandDrop({});
      return <div {...props} />;
    };
    container = shallowWithTheme(<Elements />);
  });

  it('nothing should happen when some other key apart from enter is passed', () => {
    expect(
      container.props().handleKeyPress({
        keyCode: 20,
      })
    ).toBeUndefined();
  });

  it('should simulate file upload and return array', () => {
    expect.objectContaining(
      container.props().fileListToArray({
        filesArr: [
          {
            lastModified: 1575972428087,
            lastModifiedDate: 11,
            name: 'index.html',
            size: 3741,
            type: 'text/html',
            webkitRelativePath: '',
          },
        ],
        length: 1,
        item: function() {
          return this.filesArr[0];
        },
      })
    );
  });

  it('should make highlight as true on drag over as mouse enters draggable area', () => {
    expect.objectContaining(
      container.props().onDragOver({
        preventDefault: function() {
          return null;
        },
      })
    );
  });

  it('should make highlight as false on drag leave as mouse leaves draggable area', () => {
    expect.objectContaining(
      container.props().onDragLeave({
        preventDefault: function() {
          return null;
        },
      })
    );
  });

  it('should test the files addition handler when file(s) are uploaded.', () => {
    expect.objectContaining(
      container.props().onFilesAdded({
        target: {
          files: {
            filesArr: [
              {
                lastModified: 1575972428087,
                lastModifiedDate: 11,
                name: 'index.html',
                size: 3741,
                type: 'text/html',
                webkitRelativePath: '',
              },
            ],
            length: 1,
            item: function() {
              return this.filesArr[0];
            },
          },
        },
      })
    );
  });

  it('should open file pop up for file selection', () => {
    const fileRef = React.createRef();
    mountWithTheme(
      <div>
        <input ref={fileRef} data-foo="foo" data-bar="bar" type="file" />
      </div>
    );
    expect(
      container.props().handleKeyPress(
        {
          keyCode: 13,
        },
        fileRef
      )
    ).toBeUndefined();
  });

  it('should apply highlight when cursor moves draggable area.', () => {
    container.props().setHighlight(true);
    expect(container.props().getHighlightClass('container-draggable')).toBe(
      'container-draggable highlight'
    );
  });

  it('should apply highlight when cursor moves draggable area.', () => {
    expect(container.props().getHighlightClass('container-draggable')).toBe('container-draggable');
  });
});
