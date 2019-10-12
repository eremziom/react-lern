
// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
// action name creator
const reducerName = 'searchStringBar';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });

// reducer
export default function searchReducer(state = [], action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return state;
  }
}
