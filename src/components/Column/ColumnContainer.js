import {connect} from 'react-redux';
import Column from './Column';

export const getColumnsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getColumnsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);