/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function(){
        return(
            <div>
                <div className="container__header"
                     style={{borderBottom: "1px solid #eeeeee", padding: "1rem"}}>
                    <input type="search" placeholder="Enter nsearch terms" ref="searchText" onChange={this.handleSearch} />
                </div>
                <div>
                    <label style={{cursor: "pointer", fontSize: "1rem"}}>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>&nbsp; Show Completed too
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;

