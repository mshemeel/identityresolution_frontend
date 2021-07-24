import { connect } from "react-redux"; 
import SearchHistoryPanel from './../panels/search.history.panel';
import {getAllSearchHistory} from '../actions/search.history.actions';

const mapStateToProps = (state) => {
    return{
        fetchHistorySuccess : state.searchHistoryReducer.fetchHistorySuccess,
        history : state.searchHistoryReducer.history
    };
}

const mapDispatchToProps =(dispatch) => {
    return{ 
        getSearchHistory : () => {
            dispatch(getAllSearchHistory())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchHistoryPanel);