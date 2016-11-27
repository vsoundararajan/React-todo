/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function(){
        var {todos} =  this.props;
        var renderTodos=  () => {
            return todos.map( (todo) => {
                //console.log(todo);
                return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>);
            });
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;

