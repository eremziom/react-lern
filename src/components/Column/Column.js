import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = argument => (

    <section className={styles.component}>
        <h3 className={styles.title}>{argument.title}</h3>
    </section>
);

Column.propTypes = {
    title: PropTypes.string,
}


export default Column;