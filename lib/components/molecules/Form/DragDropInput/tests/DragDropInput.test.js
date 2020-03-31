import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import Form from '../../Form';
import { DDFieldInputVanilla } from '../DragDropInput';
import useDragAndDrop from '../../../../../hooks/useDragNDrop';
import { ButtonVanilla } from '../../../../atoms/Button';
import Input from '../../../../atoms/Input';

const defaultProps = {
  name: 'fileupload',
  localeText: {
    btnTextPrimary: 'Choose File(s)',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop Files Here...',
  },
};

const defaultPropsTwo = {
  name: 'fileuploadTwo',
  localeText: {
    btnTextPrimary: 'Choose File(s)',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop Files Here...',
  },
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallowWithTheme(<DDFieldInputVanilla {...finalProps} />);
};

describe('DDFieldInput Component', () => {
  let ddField = '';
  beforeEach(() => {
    ddField = getWrapperSetup();
  });

  test('should render correctly', () => {
    ddField = shallowWithTheme(
      <Form>
        <div>
          <DDFieldInputVanilla {...defaultProps} />
          <DDFieldInputVanilla {...defaultPropsTwo} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(ddField).toMatchSnapshot();
  });

  test('should render Input component with proper type for multiple file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      multiple: true,
    };
    ddField = getWrapperSetup(fileMultipleInputProps);
    expect(ddField.find('Button')).toHaveLength(1);
  });

  test('should render the component with prop correctly', () => {
    expect(ddField.find('Button').prop('onClick')).toBeTruthy();
  });

  test.skip('should match the input rendered correctly on change event simulation.', () => {
    const inputElement = ddField.find('Input');
    const wrapper = inputElement.simulate('change');
    expect(wrapper.find('Input').length).toBe(1);
  });

  test('should match the input rendered correctly on blur event simulation.', () => {
    const inputElement = ddField.find(Input);
    const wrapper = inputElement.simulate('blur');
    expect(wrapper.find(Input).length).toBe(1);
  });
});

describe('testing the custom hook methods for drag and drop', () => {
  let container = '';

  beforeEach(() => {
    const Elements = () => {
      const props = useDragAndDrop({});
      return <div {...props} />;
    };
    container = shallowWithTheme(<Elements />);
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
        item: function () {
          return this.filesArr[0];
        },
      })
    );
  });

  it('should make highlight as true on drag over as mouse enters draggable area', () => {
    expect.objectContaining(
      container.props().onDragOver({
        preventDefault: function () {
          return null;
        },
      })
    );
  });

  it('should make highlight as false on drag leave as mouse leaves draggable area', () => {
    expect.objectContaining(
      container.props().onDragLeave({
        preventDefault: function () {
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
            item: function () {
              return this.filesArr[0];
            },
          },
        },
      })
    );
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
