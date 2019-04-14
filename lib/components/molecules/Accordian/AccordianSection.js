import { PureComponent } from 'react';
import type { Props, State } from './types';

class AccordionSection extends PureComponent<Props, State> {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label, className },
    } = this;

    return (
      <div>
        <summary onClick={onClick} className={className}>
          {label}
        </summary>
        {isOpen ? <div className="accordianBody">{this.props.children}</div> : null}
      </div>
    );
  }
}

export default AccordionSection;
