import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../../redux/searchStringRedux';
import {getCardsForSearch} from '../../../redux/cardsReducer';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  cards: getCardsForSearch(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => 
    dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);