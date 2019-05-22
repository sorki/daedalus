// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SVGInline from 'react-svg-inline';
import classNames from 'classnames';

import clockIcon from '../../../assets/images/clock.inline.svg';

import styles from './StakePool.scss';

import type { StakePoolProps } from '../../../api/staking/types';

@observer
export default class StakePool extends Component<StakePoolProps> {
  render() {
    const {
      rank,
      id /* name, description, url, controlledStake, profitMargin */,
      performance,
      retiring,
    } = this.props;

    const getStyleWithColor = (style: string) =>
      classNames([styles[style], styles[`performance-${performance}`]]);

    return (
      <div className={getStyleWithColor('component')}>
        <div className={styles.id}>{id}</div>
        <div className={getStyleWithColor('rank')}>{rank}</div>
        {retiring && (
          <div className={styles.clock}>
            <SVGInline svg={clockIcon} className={styles.clockIcon} />
          </div>
        )}
      </div>
    );
  }
}
