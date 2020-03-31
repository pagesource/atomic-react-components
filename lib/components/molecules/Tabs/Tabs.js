// @flow
/**
 *
 * Tabs
 *
 */
import React, { useState } from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import styles from './Tabs.style';
import type { Props } from './types';
import Tab from './Tab';
import TabPanel from './TabPanel';
import List from '../List';
import { ARROW_RIGHT, ARROW_LEFT } from './constants';

const Tabs = ({
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
}: Props): Node => {
  const setDefaultActiveTab = () => {
    return initialSelectedIndex || 0;
  };

  const [selectedIndex, setSelectedTabIndex] = useState(setDefaultActiveTab());

  const updateTabChange = (index: number) => {
    setSelectedTabIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const tabClick = (e: SyntheticEvent<>, index: number) => {
    e.preventDefault();

    if (selectedIndex === index) {
      return;
    }

    updateTabChange(index);
  };

  const tabKeyDown = (e: SyntheticKeyboardEvent<>) => {
    if (e.key === ARROW_LEFT || e.key === ARROW_RIGHT) {
      e.preventDefault();
    } else {
      return;
    }

    let targetIndex;

    if (e.key === ARROW_LEFT && selectedIndex > 0) {
      targetIndex = selectedIndex - 1;
    } else if (e.key === ARROW_RIGHT && selectedIndex < tabsContent.length - 1) {
      targetIndex = selectedIndex + 1;
    } else {
      return;
    }

    updateTabChange(targetIndex);
  };

  const listOptions = {
    noDefaultView: true,
    inline: !isVerticalView,
    noMargin: true,
  };
  return (
    <div {...others} id={tabsId} className={classNames({ row: isVerticalView }, className)}>
      <div className={classNames('tabs-wrap', tabWrapClassName)}>
        <List role="tablist" {...listOptions}>
          {tabsContent &&
            tabsContent.map((item, index) => (
              <Tab
                className={item.tabClassName || ''}
                index={index}
                isSelected={index === selectedIndex}
                onClick={tabClick}
                onKeyDown={tabKeyDown}
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
};

const StyledTabs: ComponentType<Props> = styled(Tabs)`
  ${styles};
`;

export default StyledTabs;

export { Tabs as TabsVanilla };
