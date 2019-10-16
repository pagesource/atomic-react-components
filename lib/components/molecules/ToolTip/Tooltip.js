import React, { PureComponent } from 'react';

import type { Props, State } from './types';
import Image from '../../atoms/Image';
import TooltipContainer from './TooltipContainer';

class Tooltip extends PureComponent<Props, State> {
  state = {
    isOpen: false,
    style: {},
  };

  toolTipElement = React.createRef();

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler = () => {
    const element = this.toolTipElement.current;
    const pos = element && element.getBoundingClientRect();
    this.calculatePosition(pos);
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  calculatePosition = pos => {
    const padding = 10;
    const { body } = document;
    const positionBody = body.getBoundingClientRect();
    const newleft = pos.left + padding;
    const topPos = pos.top - positionBody.top - padding;
    const style = {
      position: 'absolute',
      top: topPos.toFixed(2),
      left: newleft.toFixed(2),
    };

    this.setState({ style });
  };

  onClickOutsideHandler = (event: SyntheticEvent<any>) => {
    const { isOpen } = this.state;
    const element = this.toolTipElement.current;
    if (isOpen && element && !element.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { isOpen, style } = this.state;
    const { title, domElement, image, tootTipContent } = this.props;
    return (
      <div ref={this.toolTipElement}>
        {domElement}
        <Image {...image} onClick={this.onClickHandler} />
        {isOpen && (
          <TooltipContainer styles={style}>
            {title && <div>{typeof title === 'string' ? title : 'Tooltip Header'}</div>}
            <div>{tootTipContent}</div>
          </TooltipContainer>
        )}
      </div>
    );
  }
}

Tooltip.defaultProps = {
  tootTipContent: 'content',
  domElement: 'Dom Element',
  title: 'Tooltip Example',
  image: 'image',
};

export default Tooltip;
