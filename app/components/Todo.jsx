/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');

var Todo = React.createClass({
    getInitialState: function(){
        return(
            {todo: this.props.text, id: this.props.id}
        )
    },
    render: function(){
        return(
            <div>
                <h3>{this.state.id}. {this.state.todo}-</h3>
            </div>
        )
    }
});

module.exports = Todo;

