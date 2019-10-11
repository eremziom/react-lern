import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
//import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {
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
    const {/*id*/ cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div>
          {/*<Droppable droppableId={id}>
            {provided => (*/}
          <div className={styles.cards}
            //{...provided.droppableProps}
            /*ref={provided.innerRef}*/>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />         
            ))}
            {/*{provided.placeholder}*/}
          </div>
          {/*})}
          </Droppable>*/}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}
export default Column;