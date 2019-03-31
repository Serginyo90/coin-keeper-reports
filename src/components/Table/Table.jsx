import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Body from './Body';
// import Footer from './Footer';
import FilterPanel from './FilterPanel';
import Graph from './Graph';
import styles from './Table.module.css';

const Table = ({ accounts }) => {
  const TABLE_TAB = 'Table';
  const GRAPH_TAB = 'Graph';
  const [activeTab, setTab] = useState(TABLE_TAB);
  return (
    <div className={styles.wrapper}>
      <FilterPanel />
      <div className={styles.table}>
        <div className={styles.tabs}>
          <div
            className={cn(styles.tab, {[styles.active_tab]: activeTab === TABLE_TAB})}
            onClick={() => setTab(TABLE_TAB)}
          >
            {TABLE_TAB}
          </div>
          <div
            className={cn(styles.tab, {[styles.active_tab]: activeTab === GRAPH_TAB})}
            onClick={() => setTab(GRAPH_TAB)}
          >
            {GRAPH_TAB}
          </div>
        </div>
        {activeTab === TABLE_TAB ? (
          <Body accounts={accounts} />
        ) : (
          <Graph />
        )}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

Table.propTypes = {
  data: PropTypes.object,
}

export default Table