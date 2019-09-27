import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = argument => (

    <section className={styles.component}>
        <h3 className={styles.title}>{argument.title}</h3>
    </section>
);

Card.propTypes = {
    cards: PropTypes.array,
}


export default Card;