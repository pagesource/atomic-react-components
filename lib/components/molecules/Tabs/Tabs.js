// @flow
/**
 *
 * Tabs
 *
 */
import { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import styles from './Tabs.style';
import type { Props, State } from './types';
import Tab from './Tab';
import TabPanel from './TabPanel';
import List from '../List';
import { ARROW_RIGHT, ARROW_LEFT } from './constants';

class Tabs extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: this.setDefaultActiveTab() };
  }

  setDefaultActiveTab() {
    const { initialSelectedIndex } = this.props;
    return initialSelectedIndex || 0;
  }

  updateTabChange = (index: number) => {
    const { onTabChange } = this.props;
    this.setState({
      selectedIndex: index,
    });
    if (onTabChange) {
      onTabChange(index);
    }
  };

  tabClick = (e: SyntheticEvent<>, index: number) => {
    e.preventDefault();
    const { selectedIndex } = this.state;

    if (selectedIndex === index) {
      return;
    }

    this.updateTabChange(index);
  };

  tabKeyDown = (e: SyntheticKeyboardEvent<>) => {
    if (e.key === ARROW_LEFT || e.key === ARROW_RIGHT) {
      e.preventDefault();
    } else {
      return;
    }

    const { selectedIndex } = this.state;
    const { tabsContent } = this.props;

    let targetIndex;

    if (e.key === ARROW_LEFT && selectedIndex > 0) {
      targetIndex = selectedIndex - 1;
    } else if (e.key === ARROW_RIGHT && selectedIndex < tabsContent.length - 1) {
      targetIndex = selectedIndex + 1;
    } else {
      return;
    }

    this.updateTabChange(targetIndex);
  };

  render() {
    const {
      className,
      tabsContent,
      tabsId,
      isVerticalView,
      tabWrapClassName,
      panelWrapClassName,
      onTabChange,
      initialSelectedIndex,
      inheritedStyles,
      ...others
    } = this.props;
    const { selectedIndex } = this.state;
    const listOptions = {
      noDefaultView: true,
      inline: !isVerticalView,
      noMargin: true,
    };
    return (
      <div id={tabsId} className={classNames({ row: isVerticalView }, className)} {...others}>
        <div className={classNames('tabs-wrap', tabWrapClassName)}>
          <List role="tablist" {...listOptions}>
            {tabsContent &&
              tabsContent.map((item, index) => (
                <Tab
                  className={item.tabClassName || ''}
                  index={index}
                  isSelected={index === selectedIndex}
                  onClick={this.tabClick}
                  onKeyDown={this.tabKeyDown}
                  tabId={`tab-list-item-${index}`}
                  key={`tab-${index.toString()}`}
                >
                  {item.tabTitle}
                </Tab>
              ))}
          </List>
        </div>
        <div className={classNames('panels-wrap', panelWrapClassName)}>
          {tabsContent &&
            tabsContent.map((item, index) => (
              <TabPanel
                className={item.panelClassName || ''}
                isSelected={index === selectedIndex}
                tabId={`tab-list-item-${index}`}
                index={index}
                key={`tab-panel-${index.toString()}`}
              >
                {item.panelContent}
              </TabPanel>
            ))}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  className: '',
  tabsId: '',
  inheritedStyles: '',
  initialSelectedIndex: 0,
  isVerticalView: false,
  tabWrapClassName: '',
  panelWrapClassName: '',
};

export default styled(Tabs)`
  ${styles};
`;

export { Tabs as TabsVanilla };
