import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    column: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
    addCard: PropTypes.func,
    id: PropTypes.string,
    changeSearchString: PropTypes.func,
    searchString: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  state = {
    value: this.props.searchString,
  }

  SwitchChangeString() {
    const address = document.location;
    const path = address.pathname;
    const pathCut = path.slice(8); 
    this.props.changeSearchString(pathCut);
  }

  render(){
    const {cards} = this.props;
    console.log('cards to: ', cards);
    return (
      <Container>
        {this.SwitchChangeString()}      
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
      </Container>
    );
  }
}
export default SearchResults;