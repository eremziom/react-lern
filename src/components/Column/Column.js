import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
      }

    static propTypes = {
        cards: PropTypes.array,
        column: PropTypes.array,
    }

    render(){
        return (
    <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
    </section>
        )
    }

}


export default Column;