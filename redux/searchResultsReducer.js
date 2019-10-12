export const getSearchString = ({searchString}) => searchString;

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHAN = createActionName('CHAN');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHAN });

// reducer
export default function changeReducer(state = [], action = {}) {
  switch (action.type) {
    case CHAN:
      console.log('działa?');
      return action.payload;
    default:
      return state;
  }
}

