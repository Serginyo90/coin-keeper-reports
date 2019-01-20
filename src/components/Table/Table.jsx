import React from 'react';
import PropTypes from 'prop-types';

// import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import FilterPanel from './FilterPanel';
import styles from './Table.module.css';

const Table = ({ accounts }) => (
  <div className={styles.wrapper}>
    <FilterPanel />
    <div className={styles.table}>
      {/* <Header /> */}
      <Body accounts={accounts} />
      <Footer />
    </div>
  </div>
)

Table.propTypes = {
  data: PropTypes.object,
}

export default Table