/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
    render: function(){
        var {dispatch, showCompleted, searchText} = this.props;
        return(
            <div>
                <div className="container__header"
                     style={{borderBottom: "1px solid #eeeeee", padding: "1rem"}}>
                    <input type="search" placeholder="Enter nsearch terms" ref="searchText" value={searchText} onChange={
                        () => {
                            var searchText = this.refs.searchText.value;
                            dispatch(actions.setSearchText(searchText));
                        }
                    } />
                </div>
                <div>
                    <label style={{cursor: "pointer", fontSize: "1rem"}}>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={
                            () => {
                                dispatch(actions.toggleShowCompleted());
                            }
                        }/>&nbsp; Show Completed too
                    </label>
                </div>
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch)

