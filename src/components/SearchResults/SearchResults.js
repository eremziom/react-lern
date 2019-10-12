import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    column: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
    addCard: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render(){
    const {cards} = this.props;
    console.log('cards to: ', cards);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />         
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default SearchResults;