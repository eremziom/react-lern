import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumns, createAction_addCard} from '../../../redux/cardsReducer';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);