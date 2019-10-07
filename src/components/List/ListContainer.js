import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createAction_addColumn} from '../../../redux/columnsReducer';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,  // <-- This object is Payload!!
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);