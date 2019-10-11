import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
//import { Draggable } from 'react-beautiful-dnd';



class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    id: PropTypes.string,
    index: PropTypes.number,
  };
  render(){
    const { title /*id, index*/ } = this.props;
    return (
      <div>
        {/*<Draggable draggableId={id} index={index}>
          {(provided) => (*/}
        <section className={styles.component}
          /*{...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}*/>
          <h3 className={styles.title}>{title}</h3>
        </section>
        {/*})}
        </Draggable>*/}
      </div>
    );
  }
}


export default Card;