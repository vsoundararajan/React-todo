/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var Todo = require('./Todo');

var TodoList = React.createClass({
    getInitialState: function() {
        //console.log(this.props.todos);
        return {
            todos: this.props.todos
        }
    },
    renderTodos: function () {
        return this.state.todos.map( (todo) => {
            //console.log(todo);
           return <Todo text={todo.text} key={todo.id} {...todo}/>
       });
    },
    render: function(){
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;

