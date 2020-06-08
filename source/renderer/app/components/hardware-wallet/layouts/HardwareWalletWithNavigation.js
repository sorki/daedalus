// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { observer } from 'mobx-react';
import HardwareWalletNavigation from '../navigation/HardwareWalletNavigation';
import styles from './HardwareWalletWithNavigation.scss';

type Props = {
  children?: Node,
  activeItem: string,
  hasNotification?: boolean,
  isActiveScreen: Function,
  onWalletNavItemClick: Function,
};

@observer
export default class HardwareWalletWithNavigation extends Component<Props> {
  render() {
    const {
      children,
      activeItem,
      hasNotification,
      isActiveScreen,
      onWalletNavItemClick,
    } = this.props;

    return (
      <div className={styles.component}>
        <div className={styles.navigation}>
          <HardwareWalletNavigation
            isActiveNavItem={isActiveScreen}
            onNavItemClick={onWalletNavItemClick}
            activeItem={activeItem}
            hasNotification={hasNotification}
          />
        </div>
        <div className={styles.page}>{children}</div>
      </div>
    );
  }
}