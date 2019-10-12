import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {
  getSearchString,
  createAction_changeSearchString,
} from '../../../redux/searchResultsReducer';
import {getCardsForSearch} from '../../../redux/cardsReducer';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  cards: getCardsForSearch(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => 
    dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);