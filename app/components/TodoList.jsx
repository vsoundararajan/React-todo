/**
 * Created by soundararajanvenkatasubramanian on 11/26/16.
 */
var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function(){

        var {todos, showCompleted, searchText} =  this.props;
        if(todos.length === 0){
            return(
                <p>
                  Nothing to show
                </p>
            );
        }
        var renderTodos=  () => {
            var todosFromAPI = TodoAPI.filterTodos(todos, showCompleted, searchText);
            console.group("TODOS at todosFromAPI");
            console.log(todosFromAPI);
            console.groupEnd("TODOS at todosFromAPI");
            return todosFromAPI.map( (todo) => {
                console.log(todo);
                return (<Todo key={todo.id} {...todo}  />);
            });
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);

